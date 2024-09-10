import Image from "next/image";
import glb35 from "@/app/assets/cars/GLB_35.png";
import percent from "@/app/assets/icons/percentage.png";
import ButtonOutline from "@/components/ui/button-outline";

const DisplayCard1 = () => {
  return (
    <div className="p-4 bg-bgShade rounded-2xl w-full shape-1">
      <div className="flex items-start justify-between gap-6">
        <div className="relative w-full">
          <Image
            src={percent}
            alt=""
            className="w-20 absolute -z-1 left-16 md:left-10 xl:left-32 top-10"
          />
          <Image src={glb35} alt="" className="w-72 absolute top-20 -left-2" />
        </div>

        <div className="w-full flex flex-col">
          <h3>Finansiranje</h3>
          <p>Nudimo mogucnostu kupovine putem lizinga</p>
          <ul className="list-disc text-primary mb-2">
            <li>
              <p className="text-white">Finansiski</p>
            </li>
            <li>
              <p className="text-white">Operativni</p>
            </li>
          </ul>

          <div className="self-end mb-4 mt-4">
            <ButtonOutline> Saznajte vise </ButtonOutline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard1;
