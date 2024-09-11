import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import ButtonOutline from "../ui/button-outline";
import kupiBenzaLogo from "@/app/assets/kupibenza-logo.png";
import { createClient } from "@/lib/supabase/server";
import { logout } from "@/app/auth/actions";
import LogoutButton from "./logout-button";
import Link from "next/link";

const Navigation = async () => {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();

  return (
    <header className="flex items-center justify-between px-8 pt-8">
      <div className="w-32">
        <Image src={kupiBenzaLogo} alt="Kupi Benza" width={160} height={100} />
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          <FaRegUser className="text-primary" />
          {data.user ? (
            data.user.email
          ) : (
            <Link href="/auth/login">Uloguj se</Link>
          )}
        </div>
        <Link href="/dashboard">
          <ButtonOutline>+ DODAJ OGLAS</ButtonOutline>
        </Link>

        {data.user && <LogoutButton />}
      </div>
    </header>
  );
};

export default Navigation;
