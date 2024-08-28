"use client";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const skillsData = [
    {
      id: 1,
      image: "./cpp.png",
    },
    {
      id: 2,
      image: "./python.png",
    },
    {
      id: 3,
      image: "./html.png",
    },
    {
      id: 4,
      image: "./css.png",
    },
    {
      id: 5,
      image: "./js.png",
    },
    {
      id: 6,
      image: "./reactjs.png",
    },
    {
      id: 11,
      image: "./redux.png",
    },
    {
      id: 7,
      image: "./nextjs.png",
    },
    {
      id: 8,
      image: "./bootstrap.png",
    },
    {
      id: 9,
      image: "./tailwind.png",
    },
    {
      id: 10,
      image: "./expressjs.png",
    },
    {
      id: 11,
      image: "./nodejs.png",
    },
    {
      id: 12,
      image: "./mongodb.png",
    },
    {
      id: 13,
      image: "./mysql.png",
    },
    {
      id: 14,
      image: "./github.png",
    },
    {
      id: 15,
      image: "./git.png",
    },
    {
      id: 16,
      image: "./vs.png",
    },
  ];

  return (
    <div>
      <div data-aos="fade-down" className="flex items-center my-10 lg:mx-96">
        <div class="border-t border-2 border-orange-500 flex-grow "></div>
        <h1 class="px-3 text-black font-medium text-4xl">Skills</h1>
        <div class="border-t border-2 border-orange-500 flex-grow "></div>
      </div>

      <div className="flex flex-wrap justify-center lg:gap-24 gap-12">
        {skillsData.map((item) => (
          <div className="transform transition duration-300 hover:scale-110">
            <div
              data-aos="fade-up"
              className="w-24 h-24 bg-white flex items-center justify-center rounded-full cursor-pointer skill-box"
            >
              <img src={item.image} alt="" className="w-14" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
