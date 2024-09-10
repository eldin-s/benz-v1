import CarCard from "@/components/ui/car-card";

const Listings = () => {
  return (
    <div className="mt-20 max-w-[80rem] mx-auto px-9">
      <div className="grid-display gap-4">
        <div className="">
          <CarCard />
        </div>

        <div className="grid md:grid-cols-2 gap-4 gap-y-9 text-sm">
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
      </div>
    </div>
  );
};

export default Listings;
