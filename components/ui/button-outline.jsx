const ButtonOutline = ({ children }) => {
  return (
    <button className="px-4 py-2 rounded-xl  tracking-wider border border-primary flex gap-3 items-center font-oswald">
      {children}
    </button>
  );
};

export default ButtonOutline;
