import { motion, useAnimate } from "framer-motion";
import React,{useState} from "react";


const Hero = () => {
  
  return (
    <div className="text-white bg-[#0D0D0D] h-screen" style={{backgroundImage:`linear-gradient(#02294F, rgba(9, 14, 16, 0.0)`,backgroundSize:'100% 20%',backgroundRepeat:'no-repeat'}}>
      <div className="max-w-7xl mx-auto py-8">
        <div className="flex flex-col items-center justify-center px-8 py-24 gap-y-4">
         
          <h1 className="text-textHead text-5xl md:text-6xl font-semibold text-center w-4/5">
          Your Destination for<span className="text-[#38bdf8]"> Books </span>That   {" "}
            Entertain, and Inspire
          </h1>
          <p className="text-center text-textPara text-xm text-gray-300 w-4/5 md:w-1/2">
            Powerful management platform designed to streamline your business
            operations,
          </p>
          <div className="flex  md:w-auto w-full my-4">
          <div className="flex justify-center items-center">
  
</div>

          </div>
         
        </div>

     
      </div>
    </div>
  );
};

export default Hero;
