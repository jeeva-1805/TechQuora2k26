import { Link } from "react-router-dom";

function Button({
  children,
  to = "#",
  variant = "primary",
  className = "",
}) {
  const baseStyle =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white hover:scale-105",
    secondary:
      "border border-white/20 bg-white/5 text-white hover:bg-white/10",
  };

  return (
    <Link
      to={to}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export default Button;