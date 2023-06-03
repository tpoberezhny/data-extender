import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div id="contact">
        <h1 className="w-full text-4xl font-bold text-[#00df9a]">
          Data Extender
        </h1>
        <p className="py-4 text-sm">
          Maximize your data's potential with Data Extender. Unlock hidden
          insights, bridge data gaps, and make informed decisions. Drive growth
          and gain a competitive edge in the data-driven landscape.
        </p>
        <div className="flex justify-between md:w-[75%] mt-6">
          <FaFacebookSquare size={30} className="cursor-pointer" />
          <FaInstagramSquare size={30} className="cursor-pointer" />
          <FaTwitterSquare size={30} className="cursor-pointer" />
          <FaGithubSquare size={30} className="cursor-pointer" />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-14">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">Analytics</li>
            <li className="py-2 text-sm cursor-pointer">Marketing</li>
            <li className="py-2 text-sm cursor-pointer">Commerce</li>
            <li className="py-2 text-sm cursor-pointer">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">Pricing</li>
            <li className="py-2 text-sm cursor-pointer">Documentation</li>
            <li className="py-2 text-sm cursor-pointer">Guides</li>
            <li className="py-2 text-sm cursor-pointer">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">About</li>
            <li className="py-2 text-sm cursor-pointer">Blog</li>
            <li className="py-2 text-sm cursor-pointer">Jobs</li>
            <li className="py-2 text-sm cursor-pointer">Press</li>
            <li className="py-2 text-sm cursor-pointer">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">Claim</li>
            <li className="py-2 text-sm cursor-pointer">Policy</li>
            <li className="py-2 text-sm cursor-pointer">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
