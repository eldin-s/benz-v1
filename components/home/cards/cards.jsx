import DisplayCard1 from "./display-card-1";
import DisplayCard2 from "./display-card-2";

const Cards = () => {
  return (
    <div className="mt-20 max-w-[80rem] mx-auto px-9 grid md:grid-cols-2 gap-4">
      <DisplayCard1 />
      <DisplayCard2 />
    </div>
  );
};

export default Cards;
