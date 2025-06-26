"use client";

import { useSearch } from "./useSearch";
import { useRouter } from "next/navigation";

const ListingCard = () => {
  const { data, loading } = useSearch();

  const router = useRouter();
  const handleCardClick = (id) => {
    router.push(`/cars/${id}`);
  };

  if (loading) {
    return <p className="h-screen">Učitavanje...</p>;
  }

  if (!data.length) {
    return <p>Nema rezultata.</p>;
  }

  return (
    <div className="">
      {data.map((car) => (
        <div
          key={car.id}
          onClick={() => handleCardClick(car.id)}
          className="cursor-pointer"
        >
          <Card car={car} />
        </div>
      ))}
    </div>
  );
};

export default ListingCard;

const Card = ({ car }) => {
  return (
    <div className="mt-10">
      <div className="bg-bgShade w-full rounded-2xl relative flex overflow-hidden border border-transparent hover:border hover:border-primary">
        <div
          className="bg-cover bg-center bg-no-repeat md:h-[350px] h-auto w-full"
          style={{
            backgroundImage: `url('${car.car_images[0]}')`,
          }}
        ></div>

        <div className="py-3 px-6 w-full flex flex-col">
          <h3 className="pb-3 text-lg">
            {car.model}
          </h3>

          <div className="flex flex-1 flex-col items-start justify-between gap-2 pt-2">
            <div>
              <div className="grid grid-cols-2 gap-3">
                <p className="text-gray-400 font-light">{car.production_year} god. </p>
                {car.car_state === "Novo" && (
                  <div className="bg-primary px-2 rounded-md  tracking-wider text-white">
                    NOVO
                  </div>
                )}
                <p className="text-gray-400 font-light">{car.power}</p>

                <p className="text-gray-400 font-light">{car.engine_size}<sup>cm</sup> </p>
                <p className="text-gray-400 font-light">{car.power} ks</p>
              </div>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="bg-primary px-2 rounded-md  tracking-wider text-white">
                GARANCIJA
              </div>
              <div>
                <p>Cena</p>
                <span className=" text-primary text-2xl">
                  {!car.price ? "Upit" : car.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
