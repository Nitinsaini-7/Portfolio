import React from "react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      image: "/aktu-logo.png",
      name: "Dr. A.P.J. Abdul Kalam Technical University",
      education: "Bachelor of Technology in Computer Science & Engineering",
      year: "2020-2024",
    },
    {
      id: 2,
      image: "/upmsp-logo.png",
      name: "Board of High School and Intermediate Education Uttar Pradesh",
      education: "Intermediate (12th)",
      year: "2019",
    },
    {
      id: 3,
      image: "/upmsp-logo.png",
      name: "Board of High School and Intermediate Education Uttar Pradesh",
      education: "High School (10th)",
      year: "2017",
    },
  ];

  return (
    <div className="my-10">
      <div data-aos="fade-down">
        <h3 className="text-2xl font-medium my-5 md:ml-11 ml-5">
          <span className="px-1 py-1 bg-orange-400 mr-1"></span>
          Education
        </h3>
      </div>
      <div class="flex flex-wrap justify-center gap-10">
        {educationData.map((item) => (
          <div data-aos="fade-up" class="w-96 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-5 rounded-md mx-2 cursor-pointer group hover:bg-orange-400 duration-500 hover:duration-500 ease-in-out">
            <img
              src={item.image}
              alt=""
              className="rounded-t-[0.625rem] rounded-b-none w-10"
            />
            <div>
              <h3 class="font-medium text-xl text-black group-hover:text-white">
                {item.name}
              </h3>
              <p class="mt-1 text-gray-700 group-hover:text-white">{item.education}</p>
              <p class="mt-1 text-orange-400 group-hover:text-white">{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
