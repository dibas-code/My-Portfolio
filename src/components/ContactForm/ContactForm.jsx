"use client"
import React from "react";
import emailjs from "@emailjs/browser";
import SendEmailPng from "../../assets/send-email.png"
import Image from "next/image";
import { motion } from "framer-motion"

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  })


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData, [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_trj6dwh', 'template_aiavdwr', e.target,
        'VNtsgL2CDME7-Z4Qv',
      )
      .then(
        (result) => {
          alert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
    setFormData({
      name: "",
      email: "",
      message: "",
    })
  };

  return (<section className="bg-black py-24 text-white">
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
      <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex justify-center items-center">
        <form onSubmit={handleSubmit} className="bg-primary/45 p-8 rounded-xl w-full max-w-lg">
          <h2 className="text-2xl mb-4">Get in Touch</h2>
          <div className="mb-4">
            <label className="block text-white/30">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-opacity-30 ring-primary bg-black text-white" />
          </div>
          <div className="mb-4">
            <label className="block text-white/30">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-opacity-30 ring-primary bg-black text-white" />
          </div>
          <div className="mb-4">
            <label className="block text-white/30">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-opacity-30 ring-primary bg-black text-white" />
          </div>
          <button type="submit" className="btn mt-4 px-8">Send Email</button>
        </form>
      </motion.div>
      {/* Image */}
      <div>
        <Image src={SendEmailPng} alt="Send Email" className="w-300px animate-rocket" />
      </div>
    </div>
  </section>)
}

export default ContactForm;
