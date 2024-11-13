"use client";

import { useCallback, useEffect, useState } from "react";
import { getListingsForUser } from "./actions";
import CarCard from "@/components/ui/car-card";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ userId }) => {
  const [listings, setListings] = useState([]);

  const getListings = useCallback(async () => {
    try {
      const data = await getListingsForUser(userId);
      setListings(data);
    } catch (error) {
      throw new Error("Error");
    }
  }, [userId]);

  useEffect(() => {
    getListings();
  }, [getListings]);

  const router = useRouter();
  const handleCardClick = (id) => {
    router.push(`/cars/${id}`);
  };

  if (listings.length === 0)
    return (
      <h3 className="w-full text-center text-2xl">
        Nemate nijedan oglas. Kliknite na Dodaj Oglas da bi ste dodali novi
      </h3>
    );

  return (
    <div className="grid grid-cols-3 gap-6">
      {listings?.map((listing) => (
        <div
          key={listing.id}
          onClick={() => handleCardClick(listing.id)}
          className="cursor-pointer"
        >
          <CarCard listing={listing} className={"h-[350px]"} />
        </div>
      ))}
    </div>
  );
};

export default DashboardLayout;
