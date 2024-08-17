"use client"
import React from "react";
import BannerImg from "../../assets/banner.png";
import Grains from "../../assets/grains.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { slideUp } from "../Hero/Hero";

const bgGrains = {
  backgroundImage: `url(${Grains.src})`,
  backgroundPosition: "center",
}
const Banner = () => {
  return <div>
    <section className="bg-black text-white pb-20 mb-20">
      <div className="container">
        <div style={bgGrains} className="bg-gray-950 rounded-3xl py-14 px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 translate-y-36">
          {/*banner image*/}
          <motion.div initial={{ opacity: 0.5 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="flex items-end justify-center">
            <Image src={BannerImg} alt='banner' className="w-[300px] lg:w-[400px] rounded animate-rocket2" />
          </motion.div>
          {/* banner status */}
          <div className="flex flex-col justify-center ">
            <div className="text-left space-y-7 lg:max-w-[400px]">
              <motion.h1 variants={slideUp(0.3)} whileInView="animate" initial="initial" className="text-3xl lg:text-4xl font-bold">I am a frontend Developer</motion.h1>
              <motion.p variants={slideUp(0.5)} whileInView="animate" initial="initial" className="text-white/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab libero dolor sit perspiciatis. Perferendis culpa voluptates autem quia harum molestiae?</motion.p>
              <div className="flex items-center gap-4">
                <motion.button variants={slideUp(0.5)} whileInView="animate" initial="initial" className="btn text-xs py-3 md:text-base">Know More</motion.button>
                <motion.button variants={slideUp(0.5)} whileInView="animate" initial="initial" className="border border-white/50 rounded-lg px-4 text-xs md:text-base flex items-center gap-2 py-3"><FiDownload />Download Resume</motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>;
};

export default Banner;
