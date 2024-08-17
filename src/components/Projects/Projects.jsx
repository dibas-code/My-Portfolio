"use client"
import React from "react";
import project1 from "../../assets/projects/p4.jpeg";
import project2 from "../../assets/projects/p2.jpg";
import project3 from "../../assets/projects/p3.jpg";
import Image from "next/image";
import { motion } from "framer-motion"
import { slideUp } from "../Hero/Hero";
const ProjectsData = [
  {
    id: 1,
    title: "Project1",
    link: "https://lalitpurshop.netlify.app/",
    desc: "Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows",
    img: project1,
    delay: 0.4,
  },
  {
    id: 2,
    title: "Project2",
    link: "#",
    desc: "Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows",
    img: project2,
    delay: 0.4,
  },
  {
    id: 3,
    title: "Project3",
    link: "#",
    desc: "Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows",
    img: project3,
    delay: 0.4,
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
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {ProjectsData.map((project) => {
          return (
            <div key={project.id} className="bg-black hover:red-shadow border-2 border-primary/80 p-4 rounded-xl hover:scale-110 duration-300 group space-y-5">
              <Image src={project.img} alt={Projects.title} className="w-full" />
              <div className="space-y-2 p-4">
                <h1>{project.title}</h1>
                <p className="text-sm line-clamp-2">{project.desc}</p>
              </div>
              {/* hidden button */}
              <div className="hidden group-hover:flex justify-around items-center duration-300">
                <button className="border-2 border-white px-4 py-2 rounded-lg"><a href={project.link}>View Project</a></button>
                <button className="btn">View code</button>
              </div>
            </div>
          )
        })}
      </motion.div>
    </div>
  </section>;
};

export default Projects;
