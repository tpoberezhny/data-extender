import React, { useState } from "react";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [burger, setBurger] = useState(true);

  const handleBurger = () => {
    setBurger(!burger);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-4xl font-bold text-[#00df9a]">
        Data Extender
      </h1>
      <ul className="hidden md:flex">
        <li className="p-5 text-xl">Home</li>
        <li className="p-5 text-xl">Company</li>
        <li className="p-5 text-xl">Resources</li>
        <li className="p-5 text-xl">About</li>
        <li className="p-5 text-xl">Contact</li>
      </ul>
      <div onClick={handleBurger} className="block md:hidden">
        {!burger ? (
          <AiOutlineClose size={25} />
        ) : (
          <AiOutlineAlignRight size={25} />
        )}
      </div>
      <div
        className={
          !burger
            ? "fixed left-0 top-0 border-r h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10"
            : "fixed left-[-100%] ease-in-out duration-500"
        }
      >
        <h1 className="w-full text-4xl font-bold text-[#00df9a] m-4">
          Data Extender
        </h1>
        <ul className="pt-6 uppercase">
          <li className="p-5 text-xl border-b border-gray-700">Home</li>
          <li className="p-5 text-xl border-b border-gray-700">Company</li>
          <li className="p-5 text-xl border-b border-gray-700">Resources</li>
          <li className="p-5 text-xl border-b border-gray-700">About</li>
          <li className="p-5 text-xl border-b border-gray-700">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
