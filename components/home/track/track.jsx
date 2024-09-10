import ButtonOutline from "@/components/ui/button-outline";
import amg from "@/app/assets/AMG-Logo.png";
import Image from "next/image";

const Track = () => {
  return (
    <div className="mt-20 max-w-[80rem] mx-auto px-9 ">
      <div className="bg-bgShade grid grid-cols-3 gap-4 place-items-center rounded-2xl py-6">
        <p className="text-2xl">Svi modeli</p>
        <ButtonOutline>
          <Image src={amg} alt="" className="w-32" />
        </ButtonOutline>
        <p className="text-xl tracking-widest">MAYBACH</p>
      </div>
    </div>
  );
};

export default Track;
