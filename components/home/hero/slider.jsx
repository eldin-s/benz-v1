"use client";

import amg from "@/app/assets/AMG-Logo.png";
import glb from "@/app/assets/cars/GLB_35.png";
import gls from "@/app/assets/cars/gls.png";
import { PiEngine } from "react-icons/pi";
import { SlSpeedometer } from "react-icons/sl";
import { GoGear } from "react-icons/go";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ButtonOutline from "../../ui/button-outline";
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    src: glb,
    name: "GLB",
    description:
      "Oduševljava do sedam ljudi: Novi Mercedes-AMG GLB 35 4MATIC otvara vam svet SUV-ova performansi. I u isto vreme, nudi mnogo prostora i fleksibilnosti za vaše ideje.",
    engine: "AMG 2,0-litarski četvorocilindrični motor sa turbopunjačem",
    power: "225kw/302ks",
    transmission: "AMG SPEEDSHIFT DCT 8G",
  },
  {
    src: gls,
    name: "GLS",
    description:
      "Pritisnite start da oživite V8 motor od 603 konjske snage i pustite ga da buči kroz 4 podešene izduvne cevi. Inteligentni pogon na sva četiri točka, samostabilizujuće vešanje i crvene kočione čeljusti.",
    engine: "AMG V8",
    power: "450kw/603ks",
    transmission: "AMG SPEEDSHIFT DCT 8G",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIdex] = useState(0);

  const prevSlide = () => {
    setCurrentIdex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  const nextSlide = () => {
    setCurrentIdex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="mt-8 xl:mt-0">
      <Image src={amg} alt="" className="w-28" width={100} height={"auto"} />

      <h2>
        Mercedes Benz{" "}
        <span className="font-bold">{images[currentIndex].name}</span>
      </h2>

      <p className="text-sm text-wrap italic text-center">
        {images[currentIndex].description}
      </p>

      <div className="flex items-center gap-8 justify-center my-6 w-full">
        <div className="flex items-center gap-3">
          <PiEngine className="text-primary text-4xl" />
          <p className="text-center text-[8px]">
            {images[currentIndex].engine}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <SlSpeedometer className="text-primary text-2xl" />
          <p className="text-center text-sm font-semibold italic">
            {images[currentIndex].power}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <GoGear className="text-primary text-4xl" />
          <p className="text-center text-[8px]">
            {images[currentIndex].transmission}
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          width={700}
          height={"auto"}
          className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer max-w-96"
        />
      </div>

      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <button onClick={prevSlide}>
            <IoIosArrowBack />
          </button>
          <p className="font-bold text-sm">GLE</p>

          <Image
            src={images[currentIndex].src}
            alt={`Slider Image ${currentIndex + 1}`}
            width={100}
            height={"auto"}
            className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer w-16"
          />
          <button onClick={nextSlide}>
            <IoIosArrowForward />
          </button>
        </div>

        {/* <p className="border-b border-primary text-sm">Konfiguris svoj GLB!</p> */}

        <ButtonOutline>ZATRAZITE PONUDU</ButtonOutline>
      </div>
    </div>
  );
};

export default Slider;
