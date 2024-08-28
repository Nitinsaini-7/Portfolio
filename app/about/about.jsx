"use client"
import React from "react";
import Introduction from "./intro";
import Education from "./education";
import Services from "./services";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";




const About = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div data-aos="fade-down" className="flex items-center my-10 lg:mx-96">
        <div class="border-t border-2 border-orange-400 flex-grow"></div>
        <h1 class="px-3 text-black font-medium text-4xl">About Me</h1>
        <div class="border-t border-2 border-orange-400 flex-grow"></div>
      </div>

      <Introduction />
      <Education />
      <Services />
    </div>
  );
};

export default About;
