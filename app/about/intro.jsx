"use client";
import { Button } from "@/components/ui/button";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";

const Introduction = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="grid grid-cols-1 md:mx-11 place-items-center ">
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 md:mr-40 md:mx-0 mx-5"
      >
        <h3 data-aos="fade-down" className="text-2xl font-medium mb-4">
          <span className=" px-1 py-1 bg-orange-400 mr-1"></span>
          About
        </h3>

        <div className="text-justify">
          <p className="text-gray-700">
            Hello, my name is Nitin Saini and I am UX/UI designer and Web
            developer
          </p>
          <br />
          <p className="text-gray-700">
            Passionate and creative Web Developer with a passion for creating
            responsive and user-friendly websites. Proficient in UI/UX and I
            have good knowledge and experience in C++ and python. Also have good
            experience with internships.
          </p>
        </div>
        <br />

        <Link href="">
          <Button className="w-32 bg-orange-400 hover:bg-white hover:text-orange-400 hover:border hover:border-orange-400 hover:shadow-lg shadow-blue-500 duration-500 hover:duration-500 ease-in-out">
            Resume <FontAwesomeIcon icon={faDownload} className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Introduction;
