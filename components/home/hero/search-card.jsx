"use client";

import { useState } from "react";
import mercedes from "@/app/assets//Mercedes-Logo.png";
import { FaAngleDown } from "react-icons/fa6";

import gside from "@/app/assets/cars/g-side.png";
import gleside from "@/app/assets/cars/gle-side.png";
import sside from "@/app/assets/cars/s-side.png";
import Button from "../../ui/button";
import Image from "next/image";

const SearchCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [model, setModel] = useState("Model");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-300 rounded-2xl">
      {/* CARD HEADER */}
      <div className="grid grid-cols-3 justify-items-center  text-xl">
        <p className="text-primary font-light px-10 py-4">Sve</p>
        <p className="text-black font-light px-10 py-4 border-x w-full text-center border-gray-500">
          Novo
        </p>
        <p className="text-black font-light px-10 py-4">Polovno</p>
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

        <div className="flex items-center gap-x-4 flex-wrap">
          <div className="flex items-center border rounded-2xl border-gray-400 mt-4 h-14 relative">
            <p className="cursor-pointer px-4 font-medium">Od godine</p>

            <div className="pr-2">
              <FaAngleDown />
            </div>
          </div>

          <div className="flex items-center border rounded-2xl border-gray-400 mt-4 h-14 relative">
            <p className="cursor-pointer px-4 font-medium">Do godine</p>

            <div className="pr-2">
              <FaAngleDown />
            </div>
          </div>

          <div className="flex items-center border rounded-2xl border-gray-400 mt-4 h-14 relative">
            <p className="cursor-pointer px-4 font-medium">Vrsta goriva</p>

            <div className="pr-2">
              <FaAngleDown />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center border rounded-2xl border-gray-400 mt-4 h-14 relative">
            <p className="cursor-pointer px-4 font-medium">Od godine</p>

            <div className="pr-2">
              <FaAngleDown />
            </div>
          </div>

          <div className="flex items-center border rounded-2xl border-gray-400 mt-4 h-14 relative">
            <p className="cursor-pointer px-4 font-medium">Do godine</p>

            <div className="pr-2">
              <FaAngleDown />
            </div>
          </div>

          <div className="flex items-center border rounded-2xl border-gray-400 mt-4 h-14 relative">
            <p className="cursor-pointer px-4 font-medium">Karoserija</p>

            <div className="pr-2">
              <FaAngleDown />
            </div>
          </div>
        </div>

        <Button> Pretraži</Button>

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
