import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [burger, setBurger] = useState(false);

  const handleBurger = () => {
    setBurger(!burger);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-4xl font-bold text-[#00df9a]">
        Data Extender
      </h1>
      <ul className="hidden md:flex">
        <Link activeClass="active" to="home" spy={true} smooth={true}>
          <li className="p-5 text-xl">Home</li>
        </Link>
        <Link activeClass="active" to="about" spy={true} smooth={true}>
          <li className="p-5 text-xl">About</li>
        </Link>
        <Link activeClass="active" to="tarif" spy={false} smooth={true}>
          <li className="p-5 text-xl">Plans</li>
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true}>
          <li className="p-5 text-xl">Contact</li>
        </Link>
      </ul>
      <div onClick={handleBurger} className="block md:hidden">
        {burger ? (
          <AiOutlineClose size={25} />
        ) : (
          <AiOutlineAlignRight size={25} />
        )}
      </div>
      <div
        className={
          burger
            ? "fixed left-0 top-0 border-r h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10"
            : "fixed left-[-100%] ease-in-out duration-500"
        }
      >
        <h1 className="w-full text-4xl font-bold text-[#00df9a] m-4">
          Data Extender
        </h1>
        <ul className="pt-6 uppercase">
        <Link activeClass="active" to="home" spy={true} smooth={true}>
          <li className="p-5 text-xl border-b border-gray-700">Home</li>
        </Link>
        <Link activeClass="active" to="about" spy={true} smooth={true}>
          <li className="p-5 text-xl border-b border-gray-700">About</li>
        </Link>
        <Link activeClass="active" to="tarif" spy={false} smooth={true}>
          <li className="p-5 text-xl border-b border-gray-700">Plans</li>
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true}>
          <li className="p-5 text-xl border-b border-gray-700">Contact</li>
        </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
