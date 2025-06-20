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

        <div className="p-3">
          <div className="pb-3">{model}</div>
          <hr />

          <div className="flex items-start justify-between gap-2 pt-2">
            <div className="flex items-center gap-2">
              <p>{production_year}. god</p>
              {car_state === "Novo" && (
                <div className="bg-primary px-2 rounded-md  tracking-wider text-white">
                  NOVO
                </div>
              )}
              <p>{power}ks</p>
            </div>

            <div className="pt-2">
              <p>Cena</p>
              <span className=" text-primary">
                {price !== "" ? "UPIT" : price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
