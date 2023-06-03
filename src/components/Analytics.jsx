import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/lottie-cube.json";

function Analytics() {
  return (
    <div className="w-full bg-white md:py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 text-center">
        <Lottie
          animationData={animationData}
          className="md:w-[300px] md:h-[450px] w-[250px] h-[200px] mx-auto -my-5"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] md:text-xl font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-10">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            eligendi sequi est aut aperiam vero quas autem modi, placeat culpa
            explicabo eveniet natus dolorem officia facilis accusamus pariatur
            labore cupiditate.
          </p>
          <button className="bg-black w-[200px] rounded-lg font-medium my-10 mx-auto md:py-4 py-3 text-[#00df9a]">
            Get started
          </button>
        </div>
        <Lottie
          animationData={animationData}
          className="md:w-[300px] md:h-[450px] w-[250px] h-[200px] mx-auto -my-5"
        />
      </div>
    </div>
  );
}

export default Analytics;
