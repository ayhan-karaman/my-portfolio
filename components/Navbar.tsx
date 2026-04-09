"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, MenuSquare, X } from "lucide-react";

import Image from "next/image";
import DarkImage from '@/public/logo-dark.png'
import LightImage from '@/public/logo-light.png'
import { useTheme } from "next-themes";
import { ModeToggle } from "./ModeToggle";
import { MdDeveloperBoard } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {theme} = useTheme()
 



  return (
    <nav className="bg-mylightcolor text-amber-50 border md:rounded-lg border-[#456882] dark:bg-mydarkcolor shadow-md mx-auto max-w-7xl mt-16 relative">
      <div className="animation-box hidden dark:block rounded-lg"></div>
      <div className="flex justify-between h-16 items-center px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="md:flex items-center gap-3 px-2 py-2">
          
             <button className="hidden md:block text-2xl" onClick={() => setOpen(!open)}>
              {/* <Image width={28} height={28} src={theme === "dark" ?  DarkImage : LightImage} alt="" /> */}
              <MdDeveloperBoard />
            </button> 
          
          <div className=" dark:text-gray-200  font-bold text-xl px-4 py-3">
            Ayhan Karaman
          </div>
        </div>

        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className=" dark:text-gray-200 hover:text-blue-500">
            Anasayfa
          </Link>
          <Link href="/#" className=" dark:text-gray-200 hover:text-blue-500">
            Hakkımda
          </Link>
          <Link href="/#" className=" dark:text-gray-200 hover:text-blue-500">
            Projeler
          </Link>
          <Link href="/#" className=" dark:text-gray-200 hover:text-blue-500">
            İletişim
          </Link>
          {/* Theme Button */}
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <ModeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="ml-2 text-gray-700 dark:text-gray-200 focus:outline-none"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-2 rounded-b-lg    bg-white dark:bg-[#142d4a] px-4 pb-4 space-y-2">
          <Link href="/" className="block text-gray-700 dark:text-gray-200 hover:text-blue-500">
            Anasayfa
          </Link>
          <Link href="/about" className="block text-gray-700 dark:text-gray-200 hover:text-blue-500">
            Hakkımda
          </Link>
          <Link href="/projects" className="block text-gray-700 dark:text-gray-200 hover:text-blue-500">
            Projeler
          </Link>
          <Link href="/contact" className="block text-gray-700 dark:text-gray-200 hover:text-blue-500">
            İletişim
          </Link>
        </div>
      )}
    </nav>
  );
}


export default Navbar;