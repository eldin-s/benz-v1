import SearchCard from "./search-card";
import Slider from "./slider";

const Hero = () => {
  return (
    <div className="xl:grid grid-cols-2 gap-20 mt-20 max-w-[80rem] mx-auto relative p-8">
      <SearchCard />
      <Slider />

      <div className="shape-path w-[700px] h-[700px] absolute -z-10 left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></div>
    </div>
  );
};

export default Hero;
