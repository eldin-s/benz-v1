"use client";

import { useCallback, useEffect, useState } from "react";
import { getListingsForUser } from "./actions";
import CarCard from "@/components/ui/car-card";
import Link from "next/link";

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

  if (listings.length === 0)
    return (
      <h3 className="w-full text-center text-2xl">
        Nemate nijedan oglas. Kliknite na Dodaj Oglas da bi ste dodali novi
      </h3>
    );

  return (
    <div className="grid grid-cols-3 gap-6">
      {listings?.map((listing) => (
        <Link href={`cars/${listing.id}`} key={listing.id}>
          <CarCard listing={listing} />
        </Link>
      ))}
    </div>
  );
};

export default DashboardLayout;
