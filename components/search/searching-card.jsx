"use client";

import { useState } from "react";
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

const SearchingCard = ({searchParams, listingNames}) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const router = useRouter();
  const pathname = usePathname();

  // Filters - use searchParams directly
  const carStateQuery = searchParams?.stanje;
  const modelQuery = searchParams?.model;
  const odGodineQuery = searchParams?.odGodine;
  const doGodineQuery = searchParams?.doGodine;
  const vrstaGorivaQuery = searchParams?.vrstaGoriva;
  const odCeneQuery = searchParams?.odCene;
  const doCeneQuery = searchParams?.doCene;
  const karoserijaQuery = searchParams?.karoserija;

  const [carState, setCarState] = useState(carStateQuery || "Sve");
  const [model, setModel] = useState(modelQuery || "Sve");
  const [odGodine, setOdGodine] = useState(odGodineQuery || "");
  const [doGodine, setDoGodine] = useState(doGodineQuery || "");
  const [vrstaGoriva, setVrstaGoriva] = useState(vrstaGorivaQuery || "");
  const [odCene, setOdCene] = useState(odCeneQuery || "");
  const [doCene, setDoCene] = useState(doCeneQuery || "");
  const [karoserija, setKaroserija] = useState(karoserijaQuery || "");

  console.log("od cards", listingNames)
  console.log("DO cards", doCene)

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

    if (model && model !== "Sve") {
      params.set("model", model);
    }

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
      <div className="sm:flex w-full gap-4 justify-between mb-4 flex-wrap">
        <div className="py-8 px-4 rounded-3xl mb-2 bg-white text-black flex justify-between gap-4 flex-1 flex-wrap">
          {/* CARD BODY */}
          <div className="flex-1 space-y-10">
            <div className="grid lg:grid-cols-2 gap-4">
              <div
                className="flex items-center border rounded-2xl border-primary relative pr-10 max-w-full"
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
                        onClick={() => setModel("Sve")}
                      >
                        Sve
                      </li>
                      {listingNames?.map((listing) => (
                        <li
                          key={listing.id}
                          className="px-4 py-2 cursor-pointer hover:font-bold"
                          onClick={() => {
                            setIsOpen(false);
                            setModel(listing.model);
                          }}
                        >
                          {listing.model}
                        </li>  
                      ))}
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

            <div className="grid lg:grid-cols-2 gap-4 mb">
              <div className="flex max-w-full">
                <select
                  name="odCene"
                  id=""
                  className="border rounded-s-2xl border-gray-400 px-2 py-4 mt-4 w-full"
                  onChange={(e) => setOdCene(e.target.value)}
                >
                  <option value="">0</option>
                  {getPriceOptions()}
                </select>

                <select
                  name="doCene"
                  id=""
                  className="border rounded-e-2xl border-gray-400 px-2 py-4 mt-4 w-full"
                  onChange={(e) => setDoCene(e.target.value)}
                >
                  {getPriceOptions()}
                  <option value="">50000+</option>
                </select>
              </div>

              <div className="max-w-full">
                <select
                  name="vrstaGoriva"
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

              <div className="flex items-center justify-between w-full flex-wrap">
                <div className="cursor-pointer px-4 text-xl font-medium text-primary w-32"
                  onClick={() => setModel("S 350")}
                >
                  <Image
                    src={sside}
                    alt="Merceds"
                    className="py-2"
                    width={90}
                    height={"auto"}
                  />
                </div>
                <div className="cursor-pointer px-4 text-xl font-medium text-primary w-32"
                  onClick={() => setModel("G 500")}
                >
                  <Image
                    src={gside}
                    alt="Merceds"
                    className="py-2"
                    width={90}
                    height={"auto"}
                  />
                </div>
                <div className="cursor-pointer px-4 text-xl font-medium text-primary w-32"
                  onClick={() => setModel("GLE 400")}
                >
                  <Image
                    src={gleside}
                    alt="Merceds"
                    className="py-2"
                    width={90}
                    height={"auto"}
                  />
                </div>
                <div className="cursor-pointer px-4 text-xl font-medium text-primary w-32"
                  onClick={() => setModel("GLS 400")}
                >
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
