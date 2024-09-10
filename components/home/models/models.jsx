import CarCard from "@/components/ui/car-card";

const Models = () => {
  return (
    <div className="mt-20 max-w-[80rem] mx-auto px-9 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mb-10">
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
    </div>
  );
};

export default Models;
