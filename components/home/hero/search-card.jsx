"use client";

import { useState } from "react";
import mercedes from "@/app/assets//Mercedes-Logo.png";
import { FaAngleDown } from "react-icons/fa6";

import gside from "@/app/assets/cars/g-side.png";
import gleside from "@/app/assets/cars/gle-side.png";
import sside from "@/app/assets/cars/s-side.png";
import Image from "next/image";
import DropdownSearches from "@/components/ui/dropdown-searches";
import { useSearchParams, useRouter } from "next/navigation";
import Button from "@/components/ui/button";

const SearchCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams] = useSearchParams();

  const router = useRouter();

  // Filters
  const [model, setModel] = useState("");
  const [carState, setCarState] = useState("Sve");
  const [odGodine, setOdGodine] = useState("");
  const [doGodine, setDoGodine] = useState("");
  const [vrstaGoriva, setVrstaGoriva] = useState("");
  const [odCene, setOdCene] = useState("");
  const [doCene, setDoCene] = useState("");
  const [karoserija, setKaroserija] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    params.set("stanje", carState);
    if (odGodine) {
      params.set("odGodine", odGodine);
    } else {
      params.delete("odGodine");
    }

    if (doGodine) {
      params.set("doGodine", doGodine);
    } else {
      params.delete("doGodine");
    }
    if (vrstaGoriva) {
      params.set("vrstaGoriva", vrstaGoriva);
    } else {
      params.delete("vrstaGoriva");
    }

    if (odCene) {
      params.set("odCene", odCene);
    } else;
    {
      params.delete("odCene");
    }
    if (doCene) {
      params.set("doCene", doCene);
    } else {
      params.delete("doCene");
    }
    if (karoserija) {
      params.set("karoserija", karoserija);
    } else {
      params.delete("karoserija");
    }

    router.replace(`/search?${params.toString()}`);
  };

  return (
    <div className="bg-gray-300 rounded-2xl">
      {/* CARD HEADER */}
      <div className="grid grid-cols-3 justify-items-center  text-xl">
        <div
          className={`${
            carState === "Sve" ? "text-primary" : "text-black"
          } font-light px-10 py-4 cursor-pointer w-full text-center
          `}
          onClick={() => setCarState("Sve")}
        >
          Sve
        </div>
        <div
          className={`${
            carState === "Novo" ? "text-primary" : "text-black"
          } font-light px-10 py-4 border-x w-full text-center border-gray-500 cursor-pointer`}
          onClick={() => setCarState("Novo")}
        >
          Novo
        </div>
        <div
          className={`${
            carState === "Polovno" ? "text-primary" : "text-black"
          } font-light px-10 py-4 cursor-pointer w-full text-center`}
          onClick={() => setCarState("Polovno")}
        >
          Polovno
        </div>
      </div>

      {/* CARD BODY */}
      <div className="py-8 px-4 rounded-2xl mb-2 bg-white text-black relative cursor-pointer">
        <div
          className="flex items-center border rounded-2xl border-primary"
          onClick={toggleDropdown}
        >
          <div className="w-20 h-auto border-r border-gray-300">
            <Image
              src={mercedes}
              alt="Merceds"
              className="px-5 py-2"
              width={110}
              height={"auto"}
            />
          </div>

          <p className="cursor-pointer px-4 text-xl font-medium text-primary">
            {model}
          </p>

          <div className="text-primary text-xl absolute right-6">
            <FaAngleDown />
          </div>
        </div>

        {isOpen && (
          <div className="absolute left-0 right-0 z-20 mx-4 mt-2  bg-white border border-primary rounded-lg shadow-lg">
            <ul>
              <li
                className="px-4 py-2 cursor-pointer hover:font-bold"
                onClick={() => {
                  setIsOpen(false);
                  setModel("GLE");
                }}
              >
                GLE
              </li>
              <li
                className="px-4 py-2 cursor-pointer hover:font-bold"
                onClick={() => {
                  setIsOpen(false);
                  setModel("G-SQUARED");
                }}
              >
                G-SQUARED
              </li>
              <li
                className="px-4 py-2 cursor-pointer hover:font-bold"
                onClick={() => {
                  setIsOpen(false);
                  setModel("S-Class 550");
                }}
              >
                S-Class 550
              </li>
            </ul>
          </div>
        )}

        <DropdownSearches
          setOdGodine={setOdGodine}
          setDoGodine={setDoGodine}
          setVrstaGoriva={setVrstaGoriva}
          setOdCene={setOdCene}
          setDoCene={setDoCene}
          setKaroserija={setKaroserija}
        />

        <Button onClick={handleSearch}> Pretraži</Button>

        <div className="flex items-center border rounded-2xl ">
          <div className="w-30 h-full border-r bg-primary px-2 py-4 rounded-s-xl text-white font-semibold text-sm">
            BRZA <br /> PRETRAGA
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="cursor-pointer px-4 text-xl font-medium text-primary w-32">
              <Image
                src={sside}
                alt="Merceds"
                className=" py-2"
                width={90}
                height={"auto"}
              />
            </div>
            <div className="cursor-pointer px-4 text-xl font-medium text-primary w-32">
              <Image
                src={gside}
                alt="Merceds"
                className=" py-2"
                width={90}
                height={"auto"}
              />
            </div>
            <div className="cursor-pointer px-4 text-xl font-medium text-primary w-32">
              <Image
                src={gleside}
                alt="Merceds"
                className=" py-2"
                width={90}
                height={"auto"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
