import gwagon from "@/app/assets/cars/g-wagon.png";
import highquality from "@/app/assets/icons/high-quality.png";
import ButtonOutline from "@/components/ui/button-outline";
import Image from "next/image";

const DisplayCard2 = () => {
  return (
    <div className="p-4 bg-bgShade rounded-2xl w-full shape-2">
      <div className="flex items-start justify-between gap-6 relative">
        <div className="relative w-full min-h-full">
          <Image
            src={highquality}
            alt="percent"
            className="w-24 absolute -z-1 left-24 md:left-10 xl:left-32 top-6"
          />
          <Image src={gwagon} alt="" className="w-72 absolute top-20 -left-2" />
        </div>

        <div className="w-full flex flex-col relative">
          <h3>Garancija</h3>
          <p>Garancija na sva nova vozila od 2 do 5 godina.</p>

          <div className="self-end mb-4 mt-4">
            <ButtonOutline> Saznajte vise </ButtonOutline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard2;
