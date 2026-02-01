const Button = ({ label }) => {
  return (
    <button className="bg-accent text-black px-10 py-3 text-xs tracking-wide uppercase hover:opacity-90 transition">
      {label}
    </button>
  );
};

export default Button;
