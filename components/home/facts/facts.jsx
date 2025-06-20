import amg from "@/app/assets/AMG-Logo.png";
import Image from "next/image";

const Facts = () => {
  return (
    <div className="w-full md:flex items-center justify-between">
      <div className="text-xl bg-bgColor w-fit flex items-center gap-4">
        <div className=" p-2">
          <p className="border-r-2 border-primary p-9">
            DA LI STE <span className=" text-primary">ZNALI?</span>
          </p>
        </div>
        <Image
          src={amg}
          alt="AMG"
          className="w-40 h-full"
          width={100}
          height={"auto"}
        />
      </div>

      <div className="p-9 relative flex flex-col justify-center items-center gap-2">
        <p className="text-xl ">
          Da li ste znali da je <span className="text-primary">AMG</span>{" "}
          tjunirao i <span className="text-primary">dizel kombi?</span>
        </p>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 border border-primary rounded-full"></div>
          <div className="w-2 h-2 border border-primary rounded-full bg-primary"></div>
          <div className="w-2 h-2 border border-primary rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
