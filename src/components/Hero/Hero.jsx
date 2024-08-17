"use client";
import React from "react";
import HeroImg from "../../assets/reactLogo.png";
import Circle from "../../assets/red.png";
import Wall from "../../assets/wall.jpg";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";
import back from "../../assets/back.png";

export const slideUp = (delay) => {
  return {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

const Hero = () => {
  return (
    <section className="text-white bg-black">
      <div className="bg-gradient-to-b from-blue/50 to-black">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
          <div className="flex flex-col justify-center md:text-left py-14 md:py-0">
            <div className="text-center md:text-left space-y-6">
              <motion.p
                variants={slideUp(0.3)}
                animate="animate"
                initial="initial"
                className="text-4xl"
              >
                Hello, I&apos;m
              </motion.p>
              <motion.p
                variants={slideUp(0.5)}
                animate="animate"
                initial="initial"
                style={{
                  backgroundImage: `url(${back.src})`,
                }}
                className="animation"
              >
                Dibas Neupane
              </motion.p>
              <motion.button
                variants={slideUp(0.9)}
                animate="animate"
                initial="initial"
                className="btn"
              >
                Know More
              </motion.button>
              {/* status section */}
              <motion.div
                variants={slideUp(1.1)}
                animate="animate"
                initial="initial"
                className="flex justify-around bg-gradient-to-b from-primary/50 to-black border-2 border-primary/80 rounded-xl hover:red-shadow hover:scale-105 duration-300 md:max-w-[400px] !mt-[44px] p-4"
              >
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-bold">
                    <CountUp
                      end={100}
                      start={0}
                      suffix="+"
                      delay={1.4}
                      enableScrollSpy
                    />{" "}
                  </p>
                  <p className="text-sm">Experience</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-bold">
                    <CountUp
                      end={100}
                      start={0}
                      suffix="+"
                      delay={1.4}
                      enableScrollSpy
                    />{" "}
                  </p>
                  <p className="text-sm">Experience</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-bold">
                    <CountUp
                      end={100}
                      start={0}
                      suffix="+"
                      delay={1.4}
                      enableScrollSpy
                    />{" "}
                  </p>
                  <p className="text-sm">Experience</p>
                </div>
              </motion.div>
            </div>
          </div>
          {/* image section */}
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center md:justify-end items-center relative"
          >
            <div className="bg-black rounded-3xl overflow-hidden h-[500px] flex items-end relative group hover:red-shadow hover:scale-105 duration-700">
              <Image
                src={Circle}
                alt="circle"
                className="absolute top-4 -left-0 -z-0 animate-spin-superslow group-hover:animate-pulse duration-300"
              />
              <Image
                src={HeroImg}
                alt="HeroImg"
                className="w-[400px] relative z-10  animate-spin-reverse group-hover:scale-90 duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
