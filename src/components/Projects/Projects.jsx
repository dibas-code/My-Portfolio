"use client"
import React from "react";
import project1 from "../../assets/projects/p1.jpeg";
import project2 from "../../assets/projects/p2.jpg";
import project3 from "../../assets/projects/p3.jpg";
import Image from "next/image";
import { motion } from "framer-motion"
import { slideUp } from "../Hero/Hero";
const ProjectsData = [
  {
    id: 1,
    title: "Project1",
    link: "https://tourandtravel-dibascode.vercel.app/",
    desc: "Tour and Travel website showcasing popular destinations for long trips, with blogs, ratings. Scroll animations are added for better user experience.Blogs on Popular Tourist places and countries",
    img: project1,
    delay: 0.4,
    link2: "https://github.com/dibas-code/Travel-App"
  },
  {
    id: 2,
    title: "Project2",
    link: "https://lalitpurshop-dibasneupane.vercel.app/",
    desc: "Ecommerce site fully responsive and Animated UI using React js and Tailwind CSS. React Silk is used as Banner images Slider. React Aos for slide animations.",
    img: project2,
    delay: 0.6,
    link2: "https://github.com/dibas-code/Ecommerce-UI"
  },
  {
    id: 3,
    title: "Project3",
    link: "https://passwordmanager-dibasneupane.vercel.app/",
    desc: "A responsive password handler app, similar to a to-do app, with input fields for site, username, and password. Users can save, edit, and delete entries, managing their login data for websites.",
    img: project3,
    delay: 0.8,
    link2: "https://github.com/dibas-code/Advanced-Todo"
  }
]
const Projects = () => {
  return <section className="bg-black text-white">
    <div className="container py-20 xl:py-36">
      <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="relative md:mt-10 mt-10">
        <p className="text-3xl lg:text-4xl mb-20 tracking-widest font-bold text-center uppercase relative z-20">Projects</p>
        <p className="text-5xl lg:text-8xl text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 uppercase font-extrabold">Projects</p>
      </motion.div>
      {/* project cards */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ProjectsData.map((project) => {
          return (
            <div key={project.id} className="bg-black hover:red-shadow border-2 border-primary/80 p-4 rounded-xl hover:scale-110 duration-300 group space-y-5 m-auto">
              <Image src={project.img} alt={Projects.title} className="w-full" />
              <div className="space-y-2 p-4">
                <h1>{project.title}</h1>
                <p className="text-sm line-clamp-2">{project.desc}</p>
              </div>
              {/* hidden button */}
              <div className="hidden group-hover:flex justify-around items-center duration-300">
                <button className="border-2 border-white rounded-lg flex justify-center text-center p-2 lg:px-3 lg:py-3"><a className="" href={project.link}>View Project</a></button>
                <button className="btn"><a className="" href={project.link2}>View code</a></button>
              </div>
            </div>
          )
        })}
      </motion.div>
    </div>
  </section>;
};

export default Projects;
