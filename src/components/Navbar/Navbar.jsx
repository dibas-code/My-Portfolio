"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMenu } from "react-icons/md"
import ResponsiveMenu from "./ResponsiveMenu";

export const NavLinks = [
  {
    id: 1,
    title: "Home",
    link: "/"
  },
  {
    id: 4,
    title: "About",
    link: "/about"
  },
  {
    id: 2,
    title: "Contact",
    link: "/contact"
  },
  {
    id: 4,
    title: "Projects",
    link: "/projects"
  },

];
const Navbar = () => {

  const pathname = usePathname();

  const [showMenu, setShowMenu] = React.useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
    console.log("clicked")
  }
  return <nav>
    <div className="container flex items-center justify-between py-5 relative z-[9999]">
      {/* logo */}
      <div>
        <Link href="/">
          <div className="flex justify-center items-center">
            <p className="h-[40px] w-[40px] flex justify-center items-center bg-primary text-white rounded-full text-3xl font-bold">D</p>
            <h1 className="text-3xl font-bold text-white">ibas</h1>
          </div>
        </Link>
      </div>
      {/* links */}
      <div className="hidden md:block">
        <ul className="flex gap-4 text-white">
          {NavLinks.map((link) => {
            const isActive = pathname === link.link;
            return (
              <li key={link.id}>
                <Link className={`${isActive ? "text-primary text-xl font-bold hover:text-white" : ""} inline-block tex-lg py-1 px-4 hover:red-shadow hover:bg-primary `} href={link.link}>{link.title}</Link>
              </li>
            )
          })}
          <button className="btn text-white">
            <a href="./resume.pdf">
              Get Resume</a>
          </button>
        </ul>
      </div>
      {/* Responsiveness */}

      <div className="md:hidden">
        <MdMenu className="text-4xl text-white" onClick={toggleMenu} />
      </div>
    </div>
    <ResponsiveMenu showMenu={showMenu} />
  </nav>;
};

export default Navbar;
