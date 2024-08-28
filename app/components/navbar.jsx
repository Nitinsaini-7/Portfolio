"use client"
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleArrowDown, faCircleArrowUp, faCircleChevronDown, faCircleChevronUp, faCross, faDownload, faXmark} from "@fortawesome/free-solid-svg-icons";
 
export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-6 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
      <Typography className="text-white hover:text-orange-400 font-medium">
        <Link href="/" className="flex items-center relative lg:after:bg-orange-400 after:absolute after:h-0.5 after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          HOME
        </Link>
      </Typography>

      <Typography className="text-white hover:text-orange-400 font-medium">
      <Link href="/about" className="flex items-center relative lg:after:bg-orange-400 after:absolute after:h-0.5 after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          ABOUT US
        </Link>
      </Typography>

      <Typography className="text-white hover:text-orange-400 font-medium">
        <Link href="skills" className="flex items-center relative lg:after:bg-orange-400 after:absolute after:h-0.5 after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          SKILLS
        </Link>
      </Typography>

      <Typography className="text-white hover:text-orange-400 font-medium">
       <Link href="projects" className="flex items-center relative lg:after:bg-orange-400 after:absolute after:h-0.5 after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          PROJECTS
        </Link>
      </Typography>

      <Typography className="text-white hover:text-orange-400 font-medium">
       <Link href="contact" className="flex items-center relative lg:after:bg-orange-400 after:absolute after:h-0.5 after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          CONTACT
        </Link>
      </Typography>
    </ul>
  );
 
  return (
    <div className=" flex justify-center items-center">
      <Navbar className="fixed border-none backdrop-blur-sm backdrop-filter bg-opacity-30 top-0 z-10 shadow-none h-max p-4 lg:px-8 lg:py-4 bg-gray-600">
        <div className="flex items-center justify-between">
          <Typography
            className="cursor-pointer py-1 font-bold text-2xl text-white"
          >
            Portfilio
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto flex justify-center h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent text-white active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <FontAwesomeIcon icon={faCircleChevronUp} className="text-2xl"/>
              ) : (
               <FontAwesomeIcon icon={faCircleChevronDown} className="text-2xl"/> 
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>
      
    </div>
  )}