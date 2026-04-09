"use client"

import ProfileImg from "../public/profile-pic.png"
import Image from "next/image";


const HeroSection = () => {
  return (
    <section className="my-5 dark:bg-mydarkcolor bg-mylightcolor text-amber-50 relative rounded-lg ">
      <div className="animation-box dark:block hidden rounded-lg"></div> 
       
      <div className="flex flex-col-reverse  md:flex-row gap-n-4 md:flew-row md:justify-between items-stretch md:items-center ">
        {/* LEFT */}
        <div className="py-6 px-6 text-center md:text-left" >
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 leading-tight">
            Merhaba, Ben Ayhan <br /> Karaman
          </h1>

          <p className="dark:text-cyan-400 text-[#02136] mt-4 text-xl">Full Stack Developer</p>

          <div className="bg-[#1e293b] dark:bg-[#143d4e] text-gray-300 rounded-lg px-4 py-3 mt-6 font-mono text-sm">
            {`const greeting = "Merhaba, ben Ayhan Karaman"`};
          </div>

          <p className=" dark:text-gray-300 mt-6 leading-relaxed">
            Modern teknolojilere kullanarak kullanıcı dostu ve yenilikçi çözümler
            sunan tutkulu bir full stack geliştiriciyim.
            <br />
            Uzmanlık alanlarım: TypeScript, Next.js, Prisma, React.js
            <br />
            Ayrıca: REST API, performans optimizasyonu ve teknolojiler hakkında
            güncel kalmak.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg shadow-lg transition">
              npm run projects
            </button>

            <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition">
              {">_ Contact Me"}
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="xl:w-[50%] w-full text-center md:text-right flex justify-center items-center py-6 px-7">
         
            <Image src={ProfileImg}
              alt="profile"
              className="w-64 h-64 object-cover  rounded-2xl shadow-2xl"
            />
        
        </div>
      </div>
      
    </section>
  );
}
export default HeroSection;