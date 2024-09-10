const Button = ({ children }) => {
  return (
    <button className="bg-primary px-4 py-3 rounded-xl font-bold tracking-wider my-4 text-white w-full">
      {children}
    </button>
  );
};

export default Button;
