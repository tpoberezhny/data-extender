import React from "react";

function Newsletter() {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-3xl sm:text-2xl text-xl font-bold md:py-4 py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-lg text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-lg font-medium my-10 mx-auto md:py-3 py-3 md:ml-4 text-black">
              Notify Me
            </button>
          </div>
          <p>We care about the protection of your data. Read our <span className="text-[#00df9a] underline cursor-pointer">Privacy Policy</span>.</p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
