import { useState } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import logo from "/public/logo.avif";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 px-4 justify-between items-center navbar border-b-[1px] border-cyan-900">
      <div className="flex gap-0 items-center">
      <img src={logo} className="w-20 h-full" alt="Logo" />
      <h1 className="text-white font-semibold text-2xl">Muhammad Mairaj</h1>
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1s">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins text-white font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } hover:text-cyan-400  duration-300`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          src={toggle ? close : menu}
          alt="MenuIcon"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins text-white font-normal cursor-pointer text-[16px] mb-4 hover:text-cyan-400 hover:border-b-[1px] border-cyan-400 duration-300 w-full text-center`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;