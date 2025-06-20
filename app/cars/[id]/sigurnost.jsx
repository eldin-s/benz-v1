const Sigurnost = ({safety}) => {
  return (
    <div className="bg-bgShade p-6 mt-8 rounded-2xl">
      <h4 className="text-xl py-4 px-2 mb-4 tracking-wider border-b border-primary ">
        Sigurnost:
      </h4>
      <div className="grid md:grid-cols-3 gap-x-16 gap-y-2">
        {safety && safety.length > 0 && safety.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Sigurnost;
