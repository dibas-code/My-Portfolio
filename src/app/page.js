import React from "react";
import Banner from "@/components/Banner/Banner";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";



const page = () => {
  return (
    <main className="pb-60">
      <Hero />
      <Banner />
      <Projects />
      <ContactForm />
    </main>
  )
};

export default page;
