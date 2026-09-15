import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../data/navLinks";
import Button from "../common/Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        <Navlink
          to="/"
          className="text-xl font-bold sm:text-2xl"
          onClick={() => setIsOpen(false)}
        >
          TechQuora
          <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            2k26
          </span>
        </Navlink>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Navlink
              key={link.id}
              to={link.path}
              className={({ isActive }) =>
                `text-sm transition ${
                  isActive
                    ? "text-fuchsia-400"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              {link.name}
            </Navlink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/registration">
            Register Now
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#050816] px-4 py-5 lg:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Navlink
                key={link.id}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm transition ${
                    isActive
                      ? "bg-fuchsia-500/10 text-fuchsia-400"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {link.name}
              </Navlink>
            ))}

            <Button
              to="/registration"
              className="mt-3 w-full"
            >
              Register Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;