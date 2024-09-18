import cabrio from "@/app/assets/car-types/cabrio-car.png";
import hatchback from "@/app/assets/car-types/hatchback.png";
import coupe from "@/app/assets/car-types/coupe-car.png";
import minivan from "@/app/assets/car-types/minivan-car.png";
import sedan from "@/app/assets/car-types/sedan-car.png";
import suv from "@/app/assets/car-types/car-suv.png";
import Image from "next/image";

const CarTypes = () => {
  return (
    <div className="border rounded-2xl border-gray-400 p-4 h-fit text-center">
      <p>Karoserija</p>

      <div className="grid grid-cols-2 gap-x-4">
        <Image src={sedan} width={50} height={30} />
        <Image src={hatchback} width={50} height={30} />
        <Image src={coupe} width={50} height={30} />
        <Image src={minivan} width={50} height={30} />
        <Image src={cabrio} width={50} height={30} />
        <Image src={suv} width={50} height={30} />
      </div>
    </div>
  );
};

export default CarTypes;
