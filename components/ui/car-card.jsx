const CarCard = ({ listing, className }) => {
  const {
    car_images = [],
    model = "",
    power = "",
    car_state = "",
    production_year = "",
    price = "",
  } = listing || {};

  return (
    <div className="">
      <div className="bg-bgShade w-full rounded-2xl relative ">
        <div
          className={`bg-cover bg-center bg-no-repeat rounded-t-2xl ${
            className ? className : "h-[450px]"
          } w-full`}
          style={{
            backgroundImage: `url('${car_images[0]}')`,
          }}
        ></div>

        <div className="p-3 flex items-center justify-between">
          <div className="pb-3">{model}</div>
          <div className="bg-primary text-white px-3 py-1 rounded-md">
            <span className=" text-white">
              {price !== "" ? "Upit" : price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
