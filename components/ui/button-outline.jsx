const ButtonOutline = ({ children }) => {
  return (
    <button className="px-4 py-2 rounded-xl font-bold tracking-wider border border-primary flex gap-3 items-center">
      {children}
    </button>
  );
};

export default ButtonOutline;
