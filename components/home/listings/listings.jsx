"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CarCard from "@/components/ui/car-card";
import { getAllCars } from "@/app/dashboard/actions";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    try {
      const data = await getAllCars();
      setCars(data);
    } catch (err) {
      console.log(err);
    }
  };

  const router = useRouter();
  const handleCardClick = (id) => {
    router.push(`/cars/${id}`);
  };

  return (
    <section className="mt-8 max-w-[80rem] mx-auto px-9 mb-8">
      <h3 className="text-center uppercase font-oswald font-bold pb-10">Istaknuti oglasi</h3>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mb-10">
        {cars?.slice(1).map((car) => (
          <div
            key={car.id}
            onClick={() => handleCardClick(car.id)}
            className="cursor-pointer"
          >
            <CarCard listing={car} className="h-[220px]" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cars;
