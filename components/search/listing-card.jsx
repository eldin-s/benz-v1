"use client";

import Link from "next/link";
import { useSearch } from "./useSearch";

const ListingCard = () => {
  const { data, loading } = useSearch();

  if (loading) {
    return <p className="h-screen">Učitavanje...</p>;
  }

  if (!data.length) {
    return <p>Nema rezultata.</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-1 gap-x-4">
      {data.map((car) => (
        <Link href={`cars/${car.id}`} key={car.id}>
          <Card car={car} />
        </Link>
      ))}
    </div>
  );
};

export default ListingCard;

const Card = ({ car }) => {
  return (
    <div className="mt-10">
      <div className="bg-bgShade w-full rounded-2xl relative flex md:flex-row flex-col overflow-hidden border border-transparent hover:border hover:border-primary">
        <div
          className="bg-cover bg-center bg-no-repeat md:h-[350px] h-[230px] w-full"
          style={{
            backgroundImage: `url('${car.car_images[0]}')`,
          }}
        ></div>

        <div className="py-3 px-6 w-full">
          <h3 className="pb-3 flex justify-between text-lg">
            {car.model}
            <div className="pt-2 md:hidden ">
              <span className="font-bold text-primary text-base">
                {!car.price ? "UPIT" : car.price}
              </span>
            </div>
          </h3>
          <hr className="hidden md:block" />

          <div className="md:flex hidden items-start justify-between gap-2 pt-2">
            <div>
              <div className="flex items-center gap-2">
                <p>{car.production_year}</p>
                {car.car_state === "Novo" && (
                  <div className="bg-primary px-2 rounded-md font-semibold tracking-wider text-white">
                    NOVO
                  </div>
                )}
                <p>{car.power}</p>
              </div>

              <div className="flex items-center gap-2 mt-6">
                <div className="bg-primary px-2 rounded-md font-semibold tracking-wider text-white">
                  Garancija
                </div>
                {/* )} */}
                <p>{car.fuel_type}</p>
              </div>
            </div>

            <div className="pt-2 absolute bottom-4 right-4">
              <p>Cena</p>
              <span className="font-bold text-primary text-2xl">
                {!car.price ? "UPIT" : car.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
