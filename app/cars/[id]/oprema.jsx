const Oprema = ({features}) => {
  return (
    <div className="bg-bgShade p-6 mt-8 rounded-2xl">
      <h4 className="text-xl py-4 px-2 mb-4 tracking-wider border-b border-primary ">
        Oprema:
      </h4>
      <div className="grid md:grid-cols-3 gap-x-16 gap-y-2">
        {features && features.length > 0 ? (
          features.map((feature, index) => (
            <p key={index}>{feature}</p>
          ))
        ) : (
          <p className="text-gray-500">Nema dodatne opreme</p>
        )}
      </div>
    </div>
  );
};

export default Oprema;
