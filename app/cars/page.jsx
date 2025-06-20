"use client";

import React, { useEffect, useState } from "react";
import { getAllCars } from "../dashboard/actions";
import { useRouter } from "next/navigation";
import CarCard from "@/components/ui/car-card";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const router = useRouter();

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

  return (
    <section className="mt-20 max-w-[80rem] mx-auto px-9 mb-8">
      <h1 className="">Oglasi:</h1>

      <div className=" grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mb-10">
        {cars?.slice(1).map((car, index) => (
          <div
            key={car.id}
            onClick={() => router.push(`cars/${car.id}`)}
            style={{ cursor: "pointer" }}
          >
            <CarCard key={index + 1} listing={car} className="h-[220px]" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cars;
