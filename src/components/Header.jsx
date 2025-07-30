import { Link } from "react-router-dom";
import { navLinks } from "../constants/navLinks";
import reactImg from "../assets/react.svg";
import { useEffect, useState } from "react";
import { ArrowBigDownIcon, Menu, X } from "lucide-react";

export function Header() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = menu ? "hidden" : "auto";
  }, [menu]);

  const renderedLinks = () => (
    <ul className="w-full sm:flex">
      {navLinks.map((link) => (
        <li key={link.name} className="w-full">
          <Link
            to={link.link}
            className="py-3 w-full border-b-1 flex justify-between items-center sm:border-b-0 sm:px-3"
            onClick={() => setMenu(false)}
          >
            {link.name}
            <ArrowBigDownIcon
              size={"1rem"}
              strokeWidth={"0.075rem"}
              className="text-[--color-accent] sm:hidden"
            />
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <header className="w-full h-12 flex justify-between items-center py-2 px-[5vw] border-b-1 border-bg z-40">
        <div className="flex items-center gap-1">
          <img src={reactImg} alt="React e-commerce fake store" />
          <h1>
            {
              navLinks.find((link) => link.link === window.location.pathname)
                ?.name
            }
          </h1>
        </div>

        <button onClick={() => setMenu(!menu)} className="sm:hidden">
          {menu ? (
            <X size={"1.5rem"} strokeWidth={"0.075rem"} />
          ) : (
            <Menu size={"1.5rem"} strokeWidth={"0.075rem"} />
          )}
        </button>

        <nav className="hidden sm:flex">{renderedLinks()}</nav>
      </header>

      {menu && (
        <div className="fixed inset-0 z-10 bg-black/50 flex items-center justify-center top-12 sm:hidden">
          <section className="px-[5vw] w-full absolute -top-12 mt-12 bg-bg py-5 z-20 rounded-b-md">
            <nav className="flex">{renderedLinks()}</nav>
          </section>
        </div>
      )}
    </>
  );
}
