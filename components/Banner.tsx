import React from "react";
import Image from "next/image";
import ProfileImg from "../public/img/profileImg.jpg";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10 ">
      {/* {IMAGE} */}
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          src={ProfileImg}
          alt="Profile Image"
          className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
        />
      </div>
      {/* DESCRIPTION */}
      <div className="w-3/4 flex-col items-center md:items-start gap-2">
        <h1 className="text-5xl font-bold text-white">Nicolás Rodriguez Grundy</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">Developer</h3>
        <p className="text-base tracking-wide text-center md:text-left ">Desarrollador enfocado en crear soluciones eficientes y seguras 
        </p>
      </div>
    </div>
  );
};

export default Banner;

