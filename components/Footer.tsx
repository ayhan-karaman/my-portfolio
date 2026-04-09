import React from "react";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FaGithub} from "react-icons/fa";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import NoenDriwer from "./NoenDriwer";

const social = [
  { title: "Github", icon: FaGithub, href:"https://www.github.com/ayhan-karaman", className: "text-gray-900 hover:scale-125 transition-transform  duration-300  hover:text-gray-900/55" },
  { title: "Linkedin", icon: FaLinkedinIn, href:"https://www.linkedin.com/in/ayhan-karaman", className: "text-[#0A66C2] hover:scale-125 transition-transform  duration-300  hover:text-[#0A66C2]/55" }
]


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border border-t dark:border-none  text-white dark:bg-[#143d4e] bg-white   mt-16 rounded-lg relative ">
      {/* <div className="box rounded-lg"></div> */}

      <div className="mx-auto max-w-7xl py-4 px-4 lg-py-16">

        <div className="flex justify-center items-center pb-5">
          <p className="text-[#0e2136] dark:text-cyan-400 mt-4 items-center gap-x-4 flex text-xl">
            <span className="text-yellow-500">
              <MdOutlineRocketLaunch />
            </span>{" "}
            Hakımda & İletişim
          </p>
        </div>
      
          <NoenDriwer arrow="right" className="mx-4" />
  

        <div className="flex flex-col gap-8 justify-center md:justify-between md:flex-row-reverse py-4 px-8">

          <div className="text-xl flex justify-center items-center gap-x-4 ">
            
            {
               social.map((s, i) => (
                 <Link
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.className}
                 >
                  <s.icon />

                 </Link>
               ))
            }
          </div>

          <div className=" dark:text-cyan-400 text-[#0e2136] text-xs max-h-1.25 flex justify-center items-center gap-x-4 ">
            <p className="text-xs">
              {year} 
            </p>
            <span>&copy;</span>
             Ayhan KARAMAN Portfolio
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
