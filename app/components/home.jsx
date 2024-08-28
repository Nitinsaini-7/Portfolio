"use client";
import { Button } from "@/components/ui/button";
import { faContactCard, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div class="relative h-screen w-full">
      <img
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Background Image"
        class="object-cover object-center w-full h-full"
      />
      <img
        src=""
        alt="Background Image"
        class="absolute inset-0 w-full h-full object-cover filter blur-sm"
      />
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <div data-aos="fade-down" className="blob">
          <img src="/pic.png" alt="" />
        </div>

        <div data-aos="fade-up" className="grid grid-cols-1 place-items-center">
          <p class="text-4xl text-white font-semibold mt-2">Hello,</p>
          <p class="lg:text-4xl text-4xl text-white my-2 font-semibold">
            My Name is <span className="text-orange-400">Nitin Saini</span>
          </p>
          <p className="text-orange-400 text-4xl font-semibold">
            <TypeAnimation
              sequence={["I'am a Developer", 1000, "I'am a Coder", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            ></TypeAnimation>
          </p>

          <div className="flex gap-5 md:mt-2 mt-6">
            <Link href="https://github.com/Nitinsaini-7">
              <div className="bg-white duration-300 hover:duration-300 cursor-pointer hover:shadow-[0px_0px_10px_0px_#FFFFFF] flex items-center justify-center w-10 h-10 rounded-full">
                <img src="github.png" alt="" className="w-5" />
              </div>
            </Link>

            <Link href="https://www.linkedin.com/in/nitin-saini-64b454237">
              <div className="bg-white duration-300 hover:duration-300 cursor-pointer hover:shadow-[0px_0px_10px_0px_#FFFFFF] flex items-center justify-center w-10 h-10 rounded-full">
                <img src="linkedin.png" alt="" className="w-5" />
              </div>
            </Link>

            <Link href="https://x.com/nitin_saini_07?t=oW2w1RHoNbahzyg9flYFbA&s=09">
              <div className="bg-white duration-300 hover:duration-300 cursor-pointer hover:shadow-[0px_0px_10px_0px_#FFFFFF] flex items-center justify-center w-10 h-10 rounded-full">
                <img src="x.png" alt="" className="w-5" />
              </div>
            </Link>

            <Link href="https://discordapp.com/users/nitin_saini">
              <div className="bg-white duration-300 hover:duration-300 cursor-pointer hover:shadow-[0px_0px_10px_0px_#FFFFFF] flex items-center justify-center w-10 h-10 rounded-full">
                <img src="discord.png" alt="" className="w-5" />
              </div>
            </Link>

            <Link href="https://www.instagram.com/nitin.saini.07?igsh=MTBwMnc3dnNtODkwOA==">
              <div className="bg-white duration-300 hover:duration-300 cursor-pointer hover:shadow-[0px_0px_10px_0px_#FFFFFF] flex items-center justify-center w-10 h-10 rounded-full">
                <img src="instagram.png" alt="" className="w-5" />
              </div>
            </Link>
          </div>

          <br />

          <div className="lg:gap-0 md:gap-0 gap-5 mt-2 grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 lg:w-96 w-full">
            <Link href="https://drive.google.com/file/d/1oqarfhlcuPzMN-gURLSaD057GOCKcnCU/view?usp=drivesdk" className="mx-5 lg:mx-auto">
              <Button className="w-full bg-orange-400 lg:px-12  hover:bg-transparent hover:text-orange-400 duration-300 hover:duration-300 hover:border-orange-400 hover:border">
                Resume <FontAwesomeIcon icon={faDownload} className="ml-2" />
              </Button>
            </Link>

            <Link href="/contact" className="mx-5 lg:mx-auto">
              <Button className="w-full px-12 bg-white  hover:bg-transparent hover:text-white duration-300 hover:duration-300 hover:border-white hover:border text-black">
                Contact{" "}
                <FontAwesomeIcon icon={faContactCard} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
