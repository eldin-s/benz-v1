import React, { useEffect, useRef, useState } from "react";
import { GoGear } from "react-icons/go";
import { LuFuel } from "react-icons/lu";
import { PiEngine, PiEngineBold } from "react-icons/pi";
import { SlSpeedometer } from "react-icons/sl";
import { TbManualGearbox, TbRoad } from "react-icons/tb";
import ServiceForm from "./service-form";

const TerminModal = ({ car, open, onClose, children }) => {
  const modalRef = useRef(null);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const handleBackdropClick = (e) => {
    if (modalRef.current && e.target === modalRef.current) {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="relative bg-bgColor rounded-xl shadow-lg max-w-lg w-full mx-4 animate-fadeIn overflow-x-hidden h-fit"
        style={{ minWidth: 650, minHeight: 400, maxHeight: "90vh" }}
      >
        <button
          onClick={onClose}
          className="absolute z-50 top-1 right-3 hover:text-primary text-3xl font-bold focus:outline-none"
          aria-label="Close"
        >
          ×
        </button>
        <div className="h-full relative">
          <div
            className="h-72 w-full relative"
            style={{
              backgroundImage: `url(${
                car?.car_images[0] || "/placeholder-image.png"
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full h-full z-10 bg-black/50" />
          </div>
          <div className="relative z-20 pt-6">
            <h4 className="text-xl font-bold my-1 uppercase text-center text-white drop-shadow">
              {car?.model}
            </h4>
            <p className="text-sm text-center text-primary drop-shadow">
              {car?.chassis_number}
            </p>
          </div>
        </div>

        {/* TABS */}
        <div className="w-full flex flex-col mt-4">
          <div className="flex justify-center mb-4 rounded-xl bg-bgShade w-fit p-1 mx-auto">
            <button
              className={`px-4 py-2 font-semibold transition-colors uppercase ${
                activeTab === "about"
                  ? "bg-bgColor text-white rounded-lg"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("about")}
            >
              O vozilu
            </button>
            <button
              className={`px-4 py-2 font-semibold transition-colors uppercase ${
                activeTab === "book"
                  ? "bg-bgColor text-white rounded-lg"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("book")}
            >
              Zakaži servis
            </button>
          </div>
          <div className="flex-1">
            {activeTab === "about" && (
              <div className="">
                <div className="grid grid-cols-3 gap-3 mt-8 pb-8 mx-4">
                  <div className="flex items-center gap-3">
                    <PiEngine className="text-primary sm:text-4xl text-xl" />
                    <p className="text-center">
                      {car?.engine_size}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <SlSpeedometer className="text-primary sm:text-2xl" />
                    <p className="text-center italic">
                      {car?.power}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <GoGear className="text-primary sm:text-3xl" />
                    <p className="text-center">
                      {car?.transmission}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <TbRoad />
                    <p>{car?.mileage} km</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <TbManualGearbox />
                    <p>{car?.transmission}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <LuFuel />
                    <p>{car?.fuel_type}</p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "book" && (
              <div>
                <ServiceForm car={car} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminModal;
