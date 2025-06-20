const Button = ({ children, type = "button", onClick }) => {
  return (
    <button
      type={type}
      className="bg-primary px-4 py-3 rounded-xl  tracking-wider my-4 text-white w-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
