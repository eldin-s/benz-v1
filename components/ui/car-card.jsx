import oglas from "@/app/assets/cars/oglas.png";
import Image from "next/image";

const CarCard = () => {
  return (
    <div className="">
      <div className="bg-bgShade w-full rounded-2xl relative ">
        <Image
          src={oglas}
          alt=""
          className="w-full rounded-t-2xl"
          width={400}
          height={"auto"}
        />
        <div className="p-3">
          <div className="pb-3">Mercedes Benz G500 AMG</div>
          <hr />

          <div className="flex items-start justify-between gap-2 pt-2">
            <div className="flex items-center gap-2">
              <p>2022. god</p>
              <button className="bg-primary px-2 rounded-md font-semibold tracking-wider text-white">
                NOVO
              </button>
              <p>416ks</p>
            </div>

            <div className="pt-2">
              <p>Cena</p>
              <span className="font-bold text-primary">UPIT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
