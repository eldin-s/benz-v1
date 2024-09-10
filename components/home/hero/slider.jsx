import amg from "@/app/assets/AMG-Logo.png";
import glb from "@/app/assets/cars/GLB_35.png";
import { PiEngine } from "react-icons/pi";
import { SlSpeedometer } from "react-icons/sl";
import { GoGear } from "react-icons/go";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ButtonOutline from "../../ui/button-outline";
import Image from "next/image";

const Slider = () => {
  return (
    <div className="mt-8 xl:mt-0">
      <Image src={amg} alt="" className="w-28" width={100} height={"auto"} />

      <h2>
        Mercedes Benz <span className="font-bold">GLB 35 AMG</span>
      </h2>

      <p className="text-sm text-wrap italic text-center">
        Oduševljava do sedam ljudi: Novi Mercedes-AMG GLB 35 4MATIC otvara vam
        svet SUV-ova performansi. I u isto vreme, nudi mnogo prostora i
        fleksibilnosti za vaše ideje.
      </p>

      <div className="flex items-center gap-8 justify-center my-6 w-full">
        <div className="flex items-center gap-3">
          <PiEngine className="text-primary text-4xl" />
          <p className="text-center text-[8px]">
            AMG 2,0-litarski četvorocilindrični motor sa turbopunjačem
          </p>
        </div>

        <div className="flex items-center gap-3">
          <SlSpeedometer className="text-primary text-2xl" />
          <p className="text-center text-sm font-semibold italic">
            225kw/302ks
          </p>
        </div>

        <div className="flex items-center gap-3">
          <GoGear className="text-primary text-4xl" />
          <p className="text-center text-[8px]">AMG SPEEDSHIFT DCT 8G</p>
        </div>
      </div>

      <div className="flex justify-center">
        <Image src={glb} alt="" width={700} height={"auto"} />
      </div>

      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <IoIosArrowBack />
          <p className="font-bold text-sm">GLE</p>
          <Image
            src={glb}
            alt=""
            className="w-16"
            width={100}
            height={"auto"}
          />
          <IoIosArrowForward />
        </div>

        <p className="border-b border-primary text-sm">Konfiguris svoj GLB!</p>

        <ButtonOutline>ZATRAZITE PONUDU</ButtonOutline>
      </div>
    </div>
  );
};

export default Slider;
