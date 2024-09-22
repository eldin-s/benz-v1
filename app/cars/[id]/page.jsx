"use client";

import { getSignleCar } from "@/app/dashboard/actions";
import ImageSlider from "@/components/ui/image-slider";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SingleCar = () => {
  const [car, setCar] = useState();
  const { id } = useParams();

  useEffect(() => {
    getCar();
  }, []);

  const getCar = async () => {
    try {
      const data = await getSignleCar(id);
      setCar(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="mt-20 max-w-[80rem] mx-auto px-9 mb-20">
      {car && car.car_images ? (
        <ImageSlider images={car.car_images} alt="Mercedes" />
      ) : (
        <p>Loading...</p>
      )}

      <div className="text-center">
        <h2>{car?.model}</h2>
      </div>
      <div className="grid grid-cols-5 gap-8">
        <div>
          <p className="underline">Linija:</p>
          <h4 className="font-bold text-xl">{car?.line}</h4>
        </div>

        <div>
          <p className="underline">Motor:</p>
          <h4 className="font-bold text-xl">{car?.engine_size}</h4>
        </div>

        <div>
          <p className="underline">Linija:</p>
          <h4 className="font-bold text-xl">{car?.line}</h4>
        </div>

        <div>
          <p className="underline">Pogon:</p>
          <h4 className="font-bold text-xl">{car?.drivetrain}</h4>
        </div>

        <div>
          <p className="underline">Snaga:</p>
          <h4 className="font-bold text-xl">{car?.power} ks</h4>
        </div>

        <div>
          <p className="underline">Obrtni moment:</p>
          <h4 className="font-bold text-xl">{car?.torque} nm</h4>
        </div>

        <div>
          <p className="underline">Boja:</p>
          <h4 className="font-bold text-xl">{car?.color}</h4>
        </div>

        <div>
          <p className="underline">Gorivo:</p>
          <h4 className="font-bold text-xl">{car?.fuel_type}</h4>
        </div>

        <div>
          <p className="underline">Stanje:</p>
          <h4 className="font-bold text-xl">{car?.car_state}</h4>
        </div>

        <div>
          <p className="underline">Tip:</p>
          <h4 className="font-bold text-xl">{car?.car_type}</h4>
        </div>

        <div>
          <p className="underline">Godina:</p>
          <h4 className="font-bold text-xl">{car?.production_year}</h4>
        </div>
      </div>
    </section>
  );
};

export default SingleCar;
