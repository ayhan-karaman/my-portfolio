import React from "react";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FaGithub, FaGithubSquare } from "react-icons/fa";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-2 dark:border-none  gap-x-1 text-white dark:bg-[#143d4e] bg-white flex flex-col  mt-5 rounded-lg relative ">
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
         <div className="absolute bottom-[-3px] left-0 w-full h-[3px] overflow-hidden">
          <div className="w-1/5 h-full animate-neon-left rounded-full bg-cyan-400"></div>
        </div>
        <div className="absolute w-[96%] opacity-[0.5] bg-gray-400 min-h-[1px] "></div>
      </div>
      <div className="w-full p-6 text-3xl flex justify-center items-center gap-x-4 ">
        <Link
          href="https://www.github.com/ayhan-karaman"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-500  dark:text-gray-400 dark:hover:text-gray-600"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ayhan-karaman"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700  dark:text-blue-500 dark:hover:text-blue-700"
        >
          <FaLinkedinIn />
        </Link>
      </div>

      <div className="relative w-full flex justify-center items-center max-h-[1px]">
        <div className="absolute bottom-[-3px] left-0 w-full h-[3px] overflow-hidden">
          <div className="w-1/5 h-full animate-neon-right rounded-full bg-cyan-400"></div>
        </div>
        <div className="absolute w-[96%] opacity-[0.5] bg-gray-400 min-h-[1px] "></div>
      </div>


       <div className="w-full p-6 dark:text-cyan-400 text-[#02136] text-xs max-h-[5px] flex justify-center items-center gap-x-4 ">
         <p className="text-sm">
          © {new Date().getFullYear()} Ayhan KARAMAN Portfolio
        </p>
      </div>
    </footer>
  );
};

export default Footer;
