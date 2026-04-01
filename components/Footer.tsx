import React from "react";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" gap-x-1 text-white dark:bg-[#143d4e] bg-white flex flex-col  mt-5 rounded-lg relative ">
      <div className="box rounded-lg"></div>
      <div className="w-full px-6 py-7 flex justify-center items-center">
        <p className="text-[#0e2136] dark:text-cyan-400 mt-4 items-center gap-x-4 flex text-xl">
          <span className="text-yellow-500">
            <MdOutlineRocketLaunch />
          </span>{" "}
          Hakımda & İletişim
        </p>
      </div>
      <div className="relative w-full flex justify-center items-center max-h-[1px]">
        <div className="absolute w-[96%] bg-gray-400 min-h-[1px] "></div>
      </div>
      <div className="w-full p-6 text-3xl flex justify-center items-center gap-x-4 ">
        <a
          href="/#"
          className="text-gray-700 hover:text-gray-400  dark:text-gray-200"
        >
          <FaGithubSquare />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
