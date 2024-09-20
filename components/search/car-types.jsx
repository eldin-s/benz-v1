import cabrio from "@/app/assets/car-types/cabrio-car.png";
import hatchback from "@/app/assets/car-types/hatchback.png";
import coupe from "@/app/assets/car-types/coupe-car.png";
import minivan from "@/app/assets/car-types/minivan-car.png";
import sedan from "@/app/assets/car-types/sedan-car.png";
import suv from "@/app/assets/car-types/car-suv.png";
import Image from "next/image";

const CarTypes = ({ setKaroserija, karoserija }) => {
  return (
    <div className="border rounded-2xl border-gray-400 p-4 h-fit text-center">
      <p>Karoserija</p>

      <div className="grid grid-cols-2 gap-x-4">
        <div
          onClick={() => setKaroserija("Sedan")}
          className={`${
            karoserija === "Sedan" && "shadow bg-slate-200/70"
          } cursor-pointer`}
        >
          <Image src={sedan} width={50} height={30} />
        </div>
        <div
          onClick={() => setKaroserija("Hatchback")}
          className={`${
            karoserija === "Hatchback" && "shadow bg-slate-200/70"
          } cursor-pointer`}
        >
          <Image src={hatchback} width={50} height={30} />
        </div>

        <div
          onClick={() => setKaroserija("Coupe")}
          className={`${
            karoserija === "Coupe" && "shadow bg-slate-200/70"
          } cursor-pointer`}
        >
          <Image src={coupe} width={50} height={30} />
        </div>
        <div
          onClick={() => setKaroserija("Minivan")}
          className={`${
            karoserija === "Minivan" && "shadow bg-slate-200/70"
          } cursor-pointer`}
        >
          <Image src={minivan} width={50} height={30} />
        </div>
        <div
          onClick={() => setKaroserija("Cabrio")}
          className={`${
            karoserija === "Cabrio" && "shadow bg-slate-200/70"
          } cursor-pointer`}
        >
          <Image src={cabrio} width={50} height={30} />
        </div>
        <div
          onClick={() => setKaroserija("Suv")}
          className={`${
            karoserija === "Suv" && "shadow bg-slate-200/70"
          } cursor-pointer`}
        >
          <Image src={suv} width={50} height={30} className />
        </div>
      </div>
    </div>
  );
};

export default CarTypes;
