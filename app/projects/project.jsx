"use client";
import { Button } from "@/components/ui/button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";

const Project = () => {
  const projectData = [
    { 
      category : "Web Development",
      image: "/ai-intellimocker.png",
      name: "AI IntelliMocker",
      description: "It is a AI-based mock interview platforms use artificial intelligence (AI) to help job seekers prepare for interviews by simulating realistic interview experiences.",
      skills: ["Next.js","React","Javascript","Tailwind CSS","CSS","Node.js","Gemini AI"],
      gitHubLink: "https://github.com/Nitinsaini-7/AI-IntelliMocker",
      liveLink: "https://ai-intellimocker.vercel.app/",
    },

    {
      image: "/gyan-ki-kaksha.png",
      category : "Web Development",
      name: "Gyan Ki Kaksha",
      description: "It is a web application which have set of interactive services that provide educational content and resources with pre-recorded lessons.",
      skills: ["React", "Javascript", "CSS","Tailwind CSS", "Node.js"],
      gitHubLink: "https://github.com/Nitinsaini-7/Gyan-Ki-Kaksha",
      liveLink: "https://gyan-ki-kaksha.netlify.app/",
    },

    {
      category : "Web Development",
      image: "/clock.png",
      name: "Clock App",
      description: "Check the current time anywhere with this Clock, make sure you wake up on time with Alarms, or keep track of passing time with Stopwatch and Timers.",
      skills: ["HTML", "CSS", "Javascript"],
      gitHubLink: "https://github.com/Nitinsaini-7/Clock-App",
      liveLink: "https://nitinsaini-7.github.io/Clock-App/",
    },

    {
      category : "Web Development",
      image: "/weather.png",
      name: "Weather Application",
      description: "This app provide users with up-to-date information about current weather conditions, such as temperature, humidity, wind speed, and cloud cover.",
      skills: ["HTML", "CSS", "Javascript"],
      gitHubLink: "https://github.com/Nitinsaini-7/Weather-Application",
      liveLink: "https://nitinsaini-7.github.io/Weather-Application/",
    },
  ];

  const [items, setItems] = useState(projectData)
  const menuItems = [...new Set(projectData.map((val) => val.category))]
  const filterItems = (cat) => {
    const newItems = projectData.filter((newVal) => newVal.category === cat)
    setItems(newItems)
  }

  return (
    <div>
      <div data-aos="fade-down" className="flex items-center my-10 lg:mx-96">
        <div class="border-t border-2 border-orange-400 flex-grow"></div>
        <h1 class="px-3 text-black font-medium text-4xl">Projects</h1>
        <div class="border-t border-2 border-orange-400 flex-grow"></div>
      </div>

     <div className="flex items-center justify-center mb-10">
     <div className="  rounded-full bg-orange-400">
      <div className="flex gap-2 items-center justify-center p-2">
        {
          menuItems.map(val => (
            <Button className="bg-black text-white hover:bg-white hover:text-black duration-300 rounded-full" onClick ={()=>filterItems(val)}>
              {val}
            </Button>
          ))
        }

        <Button className="bg-black text-white hover:bg-white hover:text-black duration-300 rounded-full" onClick={()=>setItems(projectData)}>All</Button>
      </div>
      </div>
     </div>

      <div className="flex flex-wrap justify-center gap-10">
        {items.map((item, index) => (
          <div data-aos="fade-up" className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl rounded-md h-fit w-96 mx-2 lg:w-90 cursor-pointer">
            <img
              alt={`Project ${index+1}`}
              src={item.image}
              className=" w-full object-cover"
            />
            <div className="bg-white w-full p-4">
              <p key={index} className="text-black text-2xl font-semibold">
              <span className=" px-1 py-0.5 bg-orange-400 mr-1"></span>
                {item.name}
              </p>

              <p className="text-gray-700 text-justify mt-2 text-md">
                {item.description}
              </p>

              <div className="flex flex-wrap justify-starts items-center border-b-2 h-20 text-xs text-white font-medium">
                {item.skills.map((skill, index) => (
                  <div className="py-3">
                    <span
                      key={index}
                      className="m-1 px-2 py-1 rounded-2xl text-slate-500 bg-slate-100 border border-slate-500"
                    >
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center mt-2">
                <div className=" flex items-center w-full justify-between gap-5">
                  <Link href={item.gitHubLink} className="w-full">
                    <Button className="w-full hover:bg-white hover:text-black hover:border-black hover:border">
                      GitHub
                      <FontAwesomeIcon icon={faGithub} className="ml-2" />
                    </Button>
                  </Link> 

                  <Link href={item.liveLink} className="w-full">
                    <Button className="w-full bg-orange-400 hover:bg-white hover:text-orange-400 hover:border hover:border-orange-400">
                      Live Preview
                      <FontAwesomeIcon icon={faEye} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
