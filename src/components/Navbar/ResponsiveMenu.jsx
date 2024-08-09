import React from "react";
import { NavLinks } from "./Navbar";
import Link from "next/link";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div>
      <div className={`${showMenu ? "left-0" : "left-[-100%]"} fixed top-0 left-0 z-[999] bg-black text-white h-screen w-[75%] pt-16 pl-10 duration-300 md:hidden rounded-r-xl shadow-md`}>
        <div>
          <div>
            <ul>
              {NavLinks.map((link) => {
                return (
                  <li key={link.id} className="py-6">
                    <Link className="text-2xl font-medium text-white" href={link.link}>{link.title}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ResponsiveMenu;
