"use client";

import { getSignleCar } from "@/app/dashboard/actions";
import ImageSlider from "@/components/ui/image-slider";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { TbRoad, TbManualGearbox } from "react-icons/tb";
import { LuFuel } from "react-icons/lu";
import { PiEngineBold } from "react-icons/pi";
import ButtonOutline from "@/components/ui/button-outline";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import Sigurnost from "./sigurnost";
import Oprema from "./oprema";
import BigButton from "@/components/search/big-button";
import TerminModal from "@/components/ui/termin-modal";

const SingleCar = () => {
  const [car, setCar] = useState();
  const { id } = useParams();
  const [modalOpen, setModalOpen] = useState(false);

  console.log(car);

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
      <div className="flex justify-between flex-col md:flex-row gap-6">
        {car && car?.car_images ? (
          <ImageSlider images={car?.car_images} alt="Mercedes" />
        ) : (
          <p>Učitavanje...</p>
        )}

        <div className="bg-bgShade rounded-2xl p-4 flex flex-col justify-between gap-6">
          <div className="text-center border-b-2 border-primary">
            <h3>{car?.model}</h3>
            <h2>{car?.price ? `${car?.price} €` : "Upit"}</h2>
          </div>

          <div className="border-b-2 border-primary grid grid-cols-2 gap-3 mt-8 pb-8">
            <div className="flex items-center gap-2">
              <TbRoad />
              <p>{car?.mileage} km</p>
            </div>
            <div className="flex items-center gap-2">
              <TbManualGearbox />
              <p>{car?.transmission}</p>
            </div>
            <div className="flex items-center gap-2">
              <LuFuel />
              <p>{car?.fuel_type}</p>
            </div>
            <div className="flex items-center gap-2">
              <PiEngineBold className="text-xl" />
              <p>
                {car?.power}{" "}
                {car?.fuelType === "Električni" ? "kW" : "ks"}
              </p>
            </div>
          </div>

          <div className="w-full flex items-center flex-col pt-8 gap-4">
            <p className="text-center text-sm text-gray-400 font-bebas">
              Ukoliko vam je potrebna <br /> pomoc kontaktirajte nas
            </p>
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <ButtonOutline>
                <IoCall className="text-primary" />
                Pozovite
              </ButtonOutline>

              <ButtonOutline>
                <MdOutlineEmail className="text-primary" />
                Email
              </ButtonOutline>
              <ButtonOutline>
                <span className="text-primary">P</span>
              </ButtonOutline>
            </div>
          </div>

          <ButtonOutline onClick={() => setModalOpen(true)} className="text-center">Zakaži servis</ButtonOutline>
        </div>
      </div>

      <TerminModal
        car={car}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      <div className="bg-bgShade p-6 mt-8 rounded-2xl">
        <h4 className="text-xl py-4 px-2 mb-4 tracking-wider border-b border-primary ">
          Opšte informacije:
        </h4>
        <div className="grid sm:grid-cols-2 gap-16">
          <div>
            <div className="flex justify-between gap-2 border-b border-gray-400 py-1">
              <span>Stanje:</span>
              <span className="">{car?.car_state}</span>
            </div>

            <div className="flex justify-between gap-2 border-b border-gray-400 py-1">
              <span>Model:</span>
              <span className="">{car?.model}</span>
            </div>

            <div className="flex justify-between gap-2 border-b border-gray-400 py-1">
              <span>Menjac:</span>
              <span className="">{car?.transmission}</span>
            </div>

            <div className="flex justify-between gap-2 border-b border-gray-400 py-1">
              <span>Godiste:</span>
              <span className="">{car?.production_year}</span>
            </div>

            <div className="flex justify-between gap-2 border-b border-gray-400 py-1">
              <span>Kilometraza:</span>
              <span className="">{car?.mileage} km</span>
            </div>

            <div className="flex justify-between gap-2 border-b border-gray-400 py-1">
              <span>Karoserija:</span>
              <span className="">{car?.car_type}</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between gap-2 border-b border-gray-400 py-1">
              <span>Kubikaza:</span>
              <span className="">{car?.engine_size}</span>
            </div>

            <div className="flex justify-between gap-2 border-b border-gray-400 py-1">
              <span>Snaga:</span>
              <span className="">
                {car?.power}{" "}
                {car?.fuelType === "Električni" ? "kW" : "ks"}
              </span>
            </div>

            <div className="flex justify-between gap-2 border-b border-gray-400 py-1">
              <span>Boja:</span>
              <span className="">{car?.color}</span>
            </div>

            <div className="flex justify-between gap-2 border-b border-gray-400 py-1">
              <span>Pogon:</span>
              <span className="">{car?.drivetrain}</span>
            </div>

            <div className="flex justify-between gap-2 border-b border-gray-400 py-1">
              <span>Gorivo:</span>
              <span className="">{car?.fuel_type}</span>
            </div>
          </div>
        </div>
      </div>

      <Sigurnost safety={car?.car_safety} />
      <Oprema features={car?.car_features} />
    </section>
  );
};

export default SingleCar;
