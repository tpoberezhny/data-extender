import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import animationData from "../assets/lottie-animation.json";

function Home() {
  const [text] = useTypewriter({
    words: ["BTC.", "BTB.", "SASS.", "USDT."],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 120,
  });

  return (
    <div className="text-white">
      <div
        className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center"
        id="home"
      >
        <Lottie
          animationData={animationData}
          className="md:w-[800px] md:h-[400px] w-[350px] h-[250px] mx-auto"
        />
        <p className="text-[#00df9a] font-bold ">UNLOCK THE FULL POTENTIAL OF YOUR DATA</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold py-6">
          Grow with data.
        </h1>
        <div>
          <p className="md:text-4xl sm:text-3xl text-xl font-bold">
            Fast, flexible financing for{" "}
            <span className="text-[#00df9a] pl-2"> {text}</span> <Cursor />
          </p>
        </div>
        <Link to="plans" spy={true} smooth={true} duration={1000}>
          <button
            className="bg-[#00df9a] w-[200px] rounded-lg font-medium my-10 mx-auto md:py-4 py-3 text-black"
            id="plans"
          >
            Get started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
