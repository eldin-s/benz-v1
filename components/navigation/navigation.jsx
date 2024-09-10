import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import ButtonOutline from "../ui/button-outline";
import kupiBenzaLogo from "@/app/assets/kupibenza-logo.png";

const Navigation = () => {
  return (
    <header className="flex items-center justify-between px-8 pt-8">
      <div className="w-32">
        <Image src={kupiBenzaLogo} alt="Kupi Benza" width={160} height={100} />
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          <FaRegUser className="text-primary" />
          Uloguj se
        </div>
        <ButtonOutline>+ DODAJ OGLAS</ButtonOutline>
      </div>
    </header>
  );
};

export default Navigation;
