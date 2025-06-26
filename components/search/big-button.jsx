import { BiSearchAlt } from "react-icons/bi";

const BigButton = ({ onClick }) => {
  return (
    <button
      className="lg:py-8 py-4 px-4 rounded-3xl mb-2 mt-2 md:mt-0 bg-white  text-primary flex flex-col items-center md:flex-1 md:max-w-32 w-full"
      onClick={onClick}
    >
      <BiSearchAlt className="lg:text-7xl text-2xl h-full" />
      <p className=" justify-self-end">Pretraži</p>
    </button>
  );
};

export default BigButton;
