"use client";

import { useEffect, useState } from "react";
import mercedes from "@/app/assets//Mercedes-Logo.png";
import { FaAngleDown } from "react-icons/fa6";

import gside from "@/app/assets/cars/g-side.png";
import gleside from "@/app/assets/cars/gle-side.png";
import sside from "@/app/assets/cars/s-side.png";
import glsside from "@/app/assets/cars/gls1.png";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import CarTypes from "./car-types";
import BigButton from "./big-button";
import SearchTrack from "./search-track";

const SearchingCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const params = new URLSearchParams();

  const router = useRouter();
  const pathname = usePathname();

  // Filters
  const carStateQuery = params.get("stanje");
  const modelQuery = params.get("model");
  const odGodineQuery = params.get("odGodine");
  const doGodineQuery = params.get("doGodine");
  const vrstaGorivaQuery = params.get("vrstaGoriva");
  const odCeneQuery = params.get("odCene");
  const doCeneQuery = params.get("doCene");
  const karoserijaQuery = params.get("karoserija");

  const [carState, setCarState] = useState(carStateQuery || "Sve");
  const [model, setModel] = useState(modelQuery || "Model");
  const [odGodine, setOdGodine] = useState(odGodineQuery || "");
  const [doGodine, setDoGodine] = useState(doGodineQuery || "");
  const [vrstaGoriva, setVrstaGoriva] = useState(vrstaGorivaQuery || "");
  const [odCene, setOdCene] = useState(odCeneQuery || "");
  const [doCene, setDoCene] = useState(doCeneQuery || "");
  const [karoserija, setKaroserija] = useState(karoserijaQuery || "");

  console.log(karoserija);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getPriceOptions = () => {
    const priceOptions = [];

    // Add options from 2000 to 10000 with a step of 2000
    for (let price = 2000; price < 10000; price += 2000) {
      priceOptions.push(
        <option key={price} value={price} className="rounded-2xl">
          {price}
        </option>
      );
    }

    // Add options from 10000 to 50000 with a step of 5000
    for (let price = 10000; price <= 50000; price += 5000) {
      priceOptions.push(
        <option key={price} value={price} className="rounded-2xl">
          {price}
        </option>
      );
    }

    return priceOptions;
  };

  const handleSearch = () => {
    // Start with an empty URLSearchParams to avoid duplicates
    const params = new URLSearchParams();

    if (carState) {
      params.set("stanje", carState);
    }

    if (odGodine) {
      params.set("odGodine", odGodine);
    }

    if (doGodine) {
      params.set("doGodine", doGodine);
    }

    if (vrstaGoriva) {
      params.set("vrstaGoriva", vrstaGoriva);
    }

    if (odCene) {
      params.set("odCene", odCene);
    }

    if (doCene) {
      params.set("doCene", doCene);
    }

    if (karoserija) {
      params.set("karoserija", karoserija);
    }

    // Replace the URL with the new search parameters
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div>
      <div className="flex w-full gap-4 justify-between mb-4">
        <div className="py-8 px-4 rounded-3xl mb-2 bg-white text-black flex justify-between gap-4 flex-1">
          {/* CARD BODY */}
          <div className="flex-1 space-y-10">
            <div className="grid grid-cols-2 gap-4">
              <div
                className="flex items-center border rounded-2xl border-primary relative pr-10 w-full"
                onClick={toggleDropdown}
              >
                <div className="w-18 border-r border-gray-300">
                  <Image
                    src={mercedes}
                    alt="Merceds"
                    className="px-5 py-3"
                    width={30}
                    height={30}
                  />
                </div>

                <p className="cursor-pointer px-4 text-md font-medium text-primary">
                  {model}
                </p>

                <div className="text-primary text-xl absolute right-6">
                  <FaAngleDown />
                </div>

                {isOpen && (
                  <div className="absolute bottom-0 translate-y-full left-0 right-0 z-20 mt-2 bg-white border border-primary rounded-lg shadow-lg w-full">
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
              </div>

              <div className="flex w-full">
                <select
                  name="odGodine"
                  id=""
                  className="border rounded-s-2xl border-gray-400 px-2 py-4 w-full"
                  onChange={(e) => setOdGodine(e.target.value)}
                >
                  <option value="">Od godine</option>
                  {Array.from(
                    { length: currentYear - 1989 },
                    (_, i) => 1990 + i
                  ).map((year) => (
                    <option key={year} value={year} className="rounded-2xl">
                      {year}
                    </option>
                  ))}
                </select>
                <select
                  name="odGodine"
                  id=""
                  className="border rounded-e-2xl border-gray-400 px-2 py-4 w-full"
                  onChange={(e) => setDoGodine(e.target.value)}
                >
                  <option value="">Do godine</option>
                  {Array.from(
                    { length: currentYear - 1989 },
                    (_, i) => 1990 + i
                  ).map((year) => (
                    <option key={year} value={year} className="rounded-2xl">
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb">
              <div className="flex w-full">
                <select
                  name=""
                  id=""
                  className="border rounded-s-2xl border-gray-400 px-2 py-4 mt-4 w-full"
                  onChange={(e) => setOdCene(e.target.value)}
                >
                  {getPriceOptions()}
                </select>

                <select
                  name=""
                  id=""
                  className="border rounded-e-2xl border-gray-400 px-2 py-4 mt-4 w-full"
                  onChange={(e) => setDoCene(e.target.value)}
                >
                  {getPriceOptions()}
                  <option value="">50000+</option>
                </select>
              </div>

              <div className="w-full">
                <select
                  name=""
                  id=""
                  className="border rounded-2xl border-gray-400 px-2 py-4 mt-4 w-full"
                  onChange={(e) => setVrstaGoriva(e.target.value)}
                >
                  <option value="">Vrsta goriva</option>
                  <option value="Benzin">Benzin</option>
                  <option value="Dizel">Dizel</option>
                  <option value="Hibrid">Hibrid</option>
                  <option value="Električni">Električni</option>
                </select>
              </div>
            </div>

            <div className="flex items-center border rounded-2xl mt-8">
              <div className="w-30 h-full px-2 py-4 rounded-s-xl  font-semibold text-sm text-nowrap">
                BRZA PRETRAGA
              </div>

              <div className="flex items-center justify-between w-full">
                <div className="cursor-pointer px-4 text-xl font-medium text-primary w-32">
                  <Image
                    src={sside}
                    alt="Merceds"
                    className="py-2"
                    width={90}
                    height={"auto"}
                  />
                </div>
                <div className="cursor-pointer px-4 text-xl font-medium text-primary w-32">
                  <Image
                    src={gside}
                    alt="Merceds"
                    className="py-2"
                    width={90}
                    height={"auto"}
                  />
                </div>
                <div className="cursor-pointer px-4 text-xl font-medium text-primary w-32">
                  <Image
                    src={gleside}
                    alt="Merceds"
                    className="py-2"
                    width={90}
                    height={"auto"}
                  />
                </div>
                <div className="cursor-pointer px-4 text-xl font-medium text-primary w-32">
                  <Image
                    src={glsside}
                    alt="Merceds"
                    className=" py-2"
                    width={90}
                    height={"auto"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <CarTypes setKaroserija={setKaroserija} karoserija={karoserija} />

            <form>
              <div className="flex items-center gap-2">
                <input type="radio" name="financing" value="finansiranje" />
                <label htmlFor="Finansiranje">Finansiranje</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="financing" value="farancija" />
                <label htmlFor="Garancija">Garancija</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="financing" value="staro_za_novo" />
                <label htmlFor="staro_za_novo">Staro za novo</label>
              </div>
            </form>
          </div>
        </div>
        <BigButton onClick={handleSearch} />
      </div>
      <SearchTrack carState={carState} setCarState={setCarState} />
    </div>
  );
};

export default SearchingCard;
