"use client";

import { useSearch } from "./useSearch";
import { useEffect } from "react";

const ListingCard = () => {
  const { data, loading } = useSearch();

  console.log(data);

  if (loading) {
    return <p className="h-screen">Učitavanje...</p>;
  }

  if (!data.length) {
    return <p>Nema rezultata.</p>;
  }

  return (
    <>
      {data.map((car) => (
        <Card car={car} key={car.id} />
      ))}
    </>
  );
};

export default ListingCard;

const Card = ({ car }) => {
  return (
    <div className="">
      <div className="bg-bgShade w-full rounded-2xl relative flex overflow-hidden border border-transparent hover:border hover:border-primary">
        <div
          className="bg-cover bg-center bg-no-repeat h-[350px] w-full"
          style={{
            backgroundImage: `url('${car.car_images[0]}')`,
          }}
        ></div>

        <div className="py-3 px-6 w-full">
          <h3 className="pb-3">{car.model}</h3>
          <hr />

          <div className="flex items-start justify-between gap-2 pt-2">
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
