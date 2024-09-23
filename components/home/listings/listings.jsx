"use client";

import { get5Cars } from "@/app/dashboard/actions";
import CarCard from "@/components/ui/car-card";
import Link from "next/link";
import { useEffect, useState } from "react";

const Listings = () => {
  const [cars, setCars] = useState([]);

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
    <div className="mt-20 max-w-[80rem] mx-auto px-9">
      <div className="grid-display gap-2 gap-y-9 text-sm">
        <div className="item1">
          <Link href={`cars/${cars[0]?.id}`}>
            <CarCard
              key={0}
              listing={cars[0]}
              className={"h-[200px] md:h-[350px] lg:h-[450px]"}
            />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          {cars.slice(1).map((car, index) => (
            <Link href={`cars/${car.id}`} key={car.id}>
              <CarCard
                key={index + 1}
                listing={car}
                className="h-[200px] md:h-[161px]"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listings;
