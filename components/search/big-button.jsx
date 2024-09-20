import { BiSearchAlt } from "react-icons/bi";

const BigButton = ({ onClick }) => {
  return (
    <button
      className="py-8 px-4 rounded-3xl mb-2 bg-white  text-primary flex flex-col items-center"
      onClick={onClick}
    >
      <BiSearchAlt className="text-7xl h-full" />
      <p className="font-semibold justify-self-end">Pretraži</p>
    </button>
  );
};

export default BigButton;
