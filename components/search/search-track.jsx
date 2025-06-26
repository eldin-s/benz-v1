"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const SearchTrack = ({ carState, setCarState }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Cena: Nize");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();
  const pathname = usePathname();

  const handleCarStateChange = (newCarState) => {
    // Get the current search params from the URL
    const params = new URLSearchParams(window.location.search);

    // Update the 'stanje' parameter (carState)
    if (newCarState === "Sve") {
      params.delete("stanje"); // Remove 'stanje' if 'Sve' is selected
    } else {
      params.set("stanje", newCarState);
    }

    // Replace the URL with the updated search parameters, preserving the rest
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleClick = (newState) => {
    setCarState(newState); // Update the local state
    handleCarStateChange(newState); // Update the URL and trigger re-fetch
  };

  return (
    <div className="flex items-center flex-col md:flex-row gap-6 ">
      <div className="bg-bgShade rounded-2xl grid grid-cols-3 justify-items-center w-full">
        <div
          className={`${
            carState === "Sve" && "border-b border-primary"
          }  px-10 py-4 cursor-pointer sm:w-10/12 w-9/12 text-center
        `}
          onClick={() => handleClick("Sve")}
        >
          Sve
        </div>
        <div
          className={`${
            carState === "Novo" && "border-b border-primary"
          }  px-6 py-4 sm:w-10/12 w-9/12 text-center cursor-pointer`}
          onClick={() => handleClick("Novo")}
        >
          Novo
        </div>
        <div
          className={`${
            carState === "Polovno" && "border-b border-primary"
          }  px-10 py-4 cursor-pointer sm:w-10/12 w-9/12text-center`}
          onClick={() => handleClick("Polovno")}
        >
          Polovno
        </div>
      </div>

      <div className="md:w-1/2 flex items-center justify-end gap-4 self-end">
        <p>Sortiraj po:</p>

        <div
          className="bg-bgShade flex gap-4 items-center rounded-2xl relative p-4 pr-8"
          onClick={toggleDropdown}
        >
          <p className="cursor-pointer px-4 ">{sortBy}</p>
          <div className="text-xl absolute right-2">
            <FaAngleDown />
          </div>

          {isOpen && (
            <div className="absolute left-0 right-0 top-14 z-20 mt-2 bg-bgShade rounded-xl shadow-lg border border-slate-800">
              <ul>
                <li
                  className="px-4 py-2 cursor-pointer hover:"
                  onClick={() => {
                    setIsOpen(false);
                    setSortBy("Cena: Nize");
                  }}
                >
                  Cena: Niže
                </li>
                <li
                  className="px-4 py-2 cursor-pointer hover:"
                  onClick={() => {
                    setIsOpen(false);
                    setSortBy("Cena: Vise");
                  }}
                >
                  Cena: Vise
                </li>
                <li
                  className="px-4 py-2 cursor-pointer hover:"
                  onClick={() => {
                    setIsOpen(false);
                    setSortBy("Datum: Nize");
                  }}
                >
                  Datum: Niže
                </li>
                <li
                  className="px-4 py-2 cursor-pointer hover:"
                  onClick={() => {
                    setIsOpen(false);
                    setSortBy("Datum: Vise");
                  }}
                >
                  Datum: Vise
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchTrack;
