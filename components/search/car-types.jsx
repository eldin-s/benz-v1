import cabrio from "@/app/assets/car-types/cabrio-car.png";
import hatchback from "@/app/assets/car-types/hatchback.png";
import coupe from "@/app/assets/car-types/coupe-car.png";
import minivan from "@/app/assets/car-types/minivan-car.png";
import sedan from "@/app/assets/car-types/sedan-car.png";
import suv from "@/app/assets/car-types/car-suv.png";
import Image from "next/image";
import clsx from "clsx";

const CarTypes = ({ setKaroserija, karoserija }) => {
  return (
    <div className="border rounded-2xl border-gray-400 p-4 h-fit text-center">
      <p>Karoserija</p>

      <div className="grid grid-cols-2 gap-x-4">
        <div
          onClick={() => setKaroserija("Sedan")}
          className={clsx(
            karoserija === "Sedan" && "shadow bg-slate-200/70",
            "cursor-pointer"
          )}
        >
          <Image alt="Sedan" src={sedan} width={50} height={30} />
        </div>
        <div
          onClick={() => setKaroserija("Hatchback")}
          className={clsx(
            karoserija === "Hatchback" && "shadow bg-slate-200/70",
            "cursor-pointer"
          )}
        >
          <Image alt="Hatchback" src={hatchback} width={50} height={30} />
        </div>

        <div
          onClick={() => setKaroserija("Coupe")}
          className={clsx(
            karoserija === "Coupe" && "shadow bg-slate-200/70",
            "cursor-pointer"
          )}
        >
          <Image alt="Coupe" src={coupe} width={50} height={30} />
        </div>
        <div
          onClick={() => setKaroserija("Minivan")}
          className={clsx(
            karoserija === "Minivan" && "shadow bg-slate-200/70",
            "cursor-pointer"
          )}
        >
          <Image alt="Minivan" src={minivan} width={50} height={30} />
        </div>
        <div
          onClick={() => setKaroserija("Cabrio")}
          className={clsx(
            karoserija === "Cabrio" && "shadow bg-slate-200/70",
            "cursor-pointer"
          )}
        >
          <Image alt="Cabrio" src={cabrio} width={50} height={30} />
        </div>
        <div
          onClick={() => setKaroserija("Suv")}
          className={clsx(
            karoserija === "Suv" && "shadow bg-slate-200/70",
            "cursor-pointer"
          )}
        >
          <Image alt="Suv" src={suv} width={50} height={30} />
        </div>
      </div>
    </div>
  );
};

export default CarTypes;
