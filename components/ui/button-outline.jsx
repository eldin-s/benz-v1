const ButtonOutline = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl tracking-wider border border-primary flex gap-3 items-center font-oswald justify-center ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonOutline;
