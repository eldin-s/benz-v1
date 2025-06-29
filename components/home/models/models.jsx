"use client";

import { get5Cars } from "@/app/dashboard/actions";
import CarCard from "@/components/ui/car-card";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Models = () => {
  const [cars, setCars] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    try {
      const data = await get5Cars();
      setCars(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-20 max-w-[80rem] mx-auto px-9 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mb-10">
      {cars.slice(1).map((car, index) => (
          <div
            key={car.id}
            onClick={() => router.push(`cars/${car.id}`)}
            style={{ cursor: "pointer" }}
          >
          <CarCard key={index + 1} listing={car} className="h-[220px]" />
        </div>
      ))}
    </div>
  );
};

export default Models;
