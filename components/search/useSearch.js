import { getCarsWithFilters } from "@/app/search/actions";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useSearch() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const searchParams = useSearchParams();

  const carState = searchParams.get("stanje");
  const model = searchParams.get("model");
  const yearMin = searchParams.get("odGodine");
  const yearMax = searchParams.get("doGodine");
  const priceMin = searchParams.get("odCene");
  const priceMax = searchParams.get("doCene");
  const fuelType = searchParams.get("vrstaGoriva");
  const carType = searchParams.get("karoserija");

  const priceRange = {
    min: priceMin || undefined,
    max: priceMax || undefined,
  };

  const yearRange = {
    min: yearMin || undefined,
    max: yearMax || undefined,
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const cars = await getCarsWithFilters({
          carState: carState === "Sve" ? undefined : carState,
          model: model || undefined,
          yearRange,
          priceRange,
          fuelType: fuelType || undefined,
          carType: carType || undefined,
        });
        setData(cars);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [carState, yearMin, yearMax, priceMin, priceMax, fuelType, carType]);

  return { data, loading };
}
