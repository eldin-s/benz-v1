"use client";

import { FaRegUser, FaCog, FaSearch } from "react-icons/fa";
import { TbParkingCircleFilled } from "react-icons/tb";
import { GoHomeFill } from "react-icons/go";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 w-full bg-bgShade md:hidden z-50">
      <div className="flex justify-around py-2">
        <Link href="/">
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full text-2xl p-1 ${
              pathname === "/" ? "bg-white text-bgColor" : ""
            }`}
          >
            <GoHomeFill />
          </div>
        </Link>
        <Link href="/">
          <div
            className={`flex items-center justify-center text-2xl w-8 h-8 rounded-full p-1 ${
              pathname === "/parking" ? "bg-white text-bgColor" : ""
            }`}
          >
            <TbParkingCircleFilled />
          </div>
        </Link>
        <Link href="/search">
          <div
            className={`flex items-center justify-center text-xl w-8 h-8 rounded-full p-1 ${
              pathname === "/search" ? "bg-white text-bgColor" : ""
            }`}
          >
            <FaSearch />
          </div>
        </Link>
        <Link href="/dashboard">
          <div
            className={`flex items-center justify-center text-2xl w-8 h-8 rounded-full p-1 ${
              pathname === "/dashboard" ? "bg-white text-bgColor" : ""
            }`}
          >
            <FaCog />
          </div>
        </Link>
        <Link href="/">
          <div
            className={`flex items-center justify-center text-2xl w-8 h-8 rounded-full p-1 ${
              pathname === "/profile" ? "bg-white text-bgColor" : ""
            }`}
          >
            <FaRegUser />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavigation;
