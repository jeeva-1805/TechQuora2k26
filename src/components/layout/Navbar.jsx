import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "../common/Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Events",
      path: "/events",
    },
    {
      id: 4,
      name: "Registration",
      path: "/registration",
    },
    {
      id: 5,
      name: "Coordinator",
      path: "/coordinator",
    },
    {
      id: 6,
      name: "Contact Support",
      path: "/contact",
    },
    {
      id: 7,
      name: "FAQ",
      path: "/faq",
    },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="text-xl font-bold text-white sm:text-2xl"
        >
          TechQuora
          <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            2k26
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition duration-300 ${
                  isActive
                    ? "text-fuchsia-400"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Register Button */}
        <div className="hidden lg:block">
          <Button to="/registration">
            Register Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#050816] px-4 py-5 lg:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-fuchsia-500/10 text-fuchsia-400"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="mt-3">
              <Button
                to="/registration"
                className="w-full"
                onClick={closeMenu}
              >
                Register Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;