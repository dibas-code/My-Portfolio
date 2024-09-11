"use client"
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'
import { motion } from "framer-motion"
const Footer = () => {
  return <footer className="bg-black text-white py-12">
    <div className="container">
      <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-gradient-to-r from-primary-/50 to-primary/20 text-white py-12 border-2 border-primary rounded-2xl px-4 hover:red-shadow flex flex-col lg:flex-row gap-8 justify-around items-center duration-300">
        <div className="space-y-3">
          <h2 className='text-3xl font-bold'>Dibas Neupane</h2>
          <p>Contact:- dibasneupane787@gmail.com</p>
          <p>copyright &copy; 2022 Dibas Neupane</p>
        </div>
        <div className='flex items-center gap-3 lg:gap-10'>
          <div>
            <a href="https://www.linkedin.com/in/dibas-neupane-5018432b5/"><FaLinkedin className='text-4xl' /></a>
          </div>
          <div>
            <a href="https://www.facebook.com/dibas.neupane.752"><FaFacebook className='text-4xl' /></a>
          </div>
          <div>
            <a href="https://www.instagram.com/dibas.neupane.752/"><FaInstagram className='text-4xl' /></a>
          </div>
        </div>
      </motion.div>

    </div>

  </footer>;
};

export default Footer;
