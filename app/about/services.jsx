import { faCameraRetro, faCode, faCrop, faMobile, faMobileAlt, faMobileAndroid, faMobilePhone, faSwatchbook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Services = () => {
 return (
        <div className='mt-10'>
          <h3 data-aos="fade-down" className="text-2xl font-medium my-4 md:ml-11 ml-5">
          <span className=" px-1 py-1 bg-orange-400 mr-1"></span>
          My specialties
        </h3>
          <div class="flex flex-wrap justify-center gap-10">
              <div data-aos="fade-up" class="w-96 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] text-justify p-4 rounded-md mx-2 hover:bg-sky-200 group cursor-pointer transition duration-500 hover:duration-500 ease-in-out">
                <div className='w-12 h-12 bg-sky-100 flex items-center justify-center rounded-full group-hover:bg-white'>
                <FontAwesomeIcon icon={faCode} className='text-sky-500 text-xl'/>
                </div>
                <div>
                  <h3 class="font-medium text-xl text-sky-500">
                     Web Development
                  </h3>
                    <p class="mt-1 text-gray-700 group-hover:text-white group-hover:duration-500 duration-500">Passionate web developer with a knack for creating dynamic,
                     user-friendly websites using modern technologies and best practices.
                    </p>
                </div>
              </div>

              <div data-aos="fade-up" class="w-96 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] text-justify p-4 rounded-md mx-2 group hover:bg-green-200 cursor-pointer transition duration-500 hover:duration-500 ease-in-out">
                <div className='w-12 h-12 flex items-center justify-center bg-green-100 group-hover:bg-white rounded-full'>
                    <FontAwesomeIcon icon={faMobileAlt} className='text-green-500 text-xl'/>
                </div>
                <div>
                  <h3 class="font-medium text-xl text-green-500">
                     App Development
                  </h3>
                  <p class="mt-1 text-gray-700 group-hover:text-white group-hover:duration-500 duration-500">
                  Dedicated to creating intuitive and visually appealing app designs, focusing on enhancing user
                   experience and delivering engaging digital interfaces.
                  </p>
                </div>
              </div>

              <div data-aos="fade-up" class="w-96 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] text-justify p-4 rounded-md mx-2 hover:bg-indigo-200 group cursor-pointer transition duration-500 hover:duration-500 ease-in-outr">
                <div className='w-12 h-12 flex items-center justify-center bg-indigo-200 rounded-full group-hover:bg-white'>
                <FontAwesomeIcon icon={faSwatchbook} className='text-indigo-500 text-xl'/>
                </div>
                <div>
                  <h3 class="font-medium text-xl text-indigo-500">
                     UI/UX Designes
                  </h3>
                  <p class="mt-1 text-gray-700 group-hover:text-white group-hover:duration-500 duration-500">
                    As UI/UX designer dedicated to creating intuitive and engaging user experiences through innovative
                     design solutions and meticulous attention to detail.
                  </p>
                </div>
              </div>
          </div>
        </div>
  )
}

export default Services