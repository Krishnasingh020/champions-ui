const Button = ({ label, className = "", style = {} }) => {
  const base = "px-10 py-3 text-xs tracking-wide uppercase hover:opacity-90 transition";
  const classes = className ? `${className} ${base}` : `bg-accent text-black ${base}`;

  return (
    <button className={classes} style={style}>
      {label}
    </button>
  );
};

export default Button;
