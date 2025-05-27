import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import ButtonOutline from "../ui/button-outline";
import kupiBenzaLogo from "@/app/assets/kupibenza-logo.png";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "./logout-button";
import Link from "next/link";
import MobileNavigation from "./mobile-navigaion";

const Navigation = async () => {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();

  return (
    <>
      <header className="hidden md:flex items-center justify-between px-8 pt-8">
        <div className="w-32">
          <Link href={"/"}>
            <Image
              src={kupiBenzaLogo}
              alt="Kupi Benza"
              width={160}
              height={100}
            />
          </Link>
        </div>

        <div className="flex items-center gap-6">
          {data.user ? (
            <Link href={"/dashboard"}>
              <span className="flex items-center gap-4">
                <FaRegUser className="text-primary" />
                {data.user.email}
              </span>
            </Link>
          ) : (
            <Link href="/auth/login">
              <span className="flex items-center gap-4">
                <FaRegUser className="text-primary" />
                Uloguj se
              </span>
            </Link>
          )}
          <Link href="/dashboard/add-listing">
            <ButtonOutline>+ DODAJ OGLAS</ButtonOutline>
          </Link>

          {data.user && <LogoutButton />}
        </div>
      </header>
      <MobileNavigation />
    </>
  );
};

export default Navigation;
