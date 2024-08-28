"use client"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();

     

    try {
      const response = await emailjs.sendForm(
        'service_u15f99k',
        'template_8thojjm',
        e.target,
        'iOaSNbFJMGspGZt2X'
      );

      toast("Send successfully")
      console.log('SUCCESS!', response.status, response.text);

      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
      setMobile('');
    } catch (error) {
      console.error('FAILED...', error);
      toast("Failed, something went wrong")
    }
  };

  return (
    <div>


      <div className="flex items-center my-10 lg:mx-96">
        <div class="border-t border-2 border-orange-400 flex-grow"></div>
        <h1 class="px-3 text-black font-medium text-4xl">Contact Us</h1>
        <div class="border-t border-2 border-orange-400 flex-grow"></div>
      </div>

      <section class="bg-white dark:bg-gray-900 mx-5 m-1 md:mx-20 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
        <div class="container px-6 mx-auto py-10">
          <div class="grid grid-cols-1 gap-12  lg:grid-cols-2">
            <div className="">
              <div className="text-center">

                <h1 class="mt-2 uppercase text-2xl font-semibold text-orange-400">
                Let's Get Started
                </h1>

                <p class="mt-3 text-gray-500 dark:text-gray-400">
                Contact us to start your next project!
                </p>
              </div>

              <div class="grid grid-cols-1 gap-10 md:grid-cols-1 place-items-center mt-2 md:mt-20">
                <div className="grid grid-cols-1 place-items-center">
                  <span class="inline-block cursor-pointer p-3 text-orange-400 rounded-full bg-orange-200 dark:bg-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>

                  <h2 class="mt-2 text-base font-medium text-gray-800">
                    Email
                  </h2>
                  {/* <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Our friendly team is here to help.
                  </p> */}
                  <Link href="mailto: nitin00sainii@gmail.com">
                  <p class="mt-2 cursor-pointer text-sm text-orange-400 ">
                    nitin00sainii@gmail.com
                  </p>
                  </Link>
                </div>

                <div className="grid grid-cols-1 place-items-center">
                  <span class="inline-block cursor-pointer p-3 text-orange-400 rounded-full bg-orange-200 dark:bg-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </span>

                  <h2 class="mt-2 text-base font-medium text-gray-800 dark:text-white">
                    Phone
                  </h2>
                  {/* <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Mon-Fri from 8am to 5pm.
                  </p> */}
                  <Link href="tel: 7452863255">
                  <p class="mt-2 cursor-pointer text-sm text-orange-400">
                    +(91) 7452863255
                  </p>
                  </Link>
                </div>
              </div>
            </div>

            <div class="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
              <form onSubmit={handleSubmit}>
               
                <div class="mt-2">
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    required
                    class="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="-mx-2 md:items-center md:flex">
                  <div class="flex-1 px-2 mt-4">
                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} 
                      required
                      class="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div class="flex-1 px-2 mt-4 ">
                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      placeholder="Mobile No."
                      name="mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)} 
                      required
                      class="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>


                <div class="w-full mt-4">
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    placeholder="Message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} 
                    required
                    class="block w-full h-32 px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-40 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  ></textarea>
                </div>

                <button type="submit" class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Send message
                  <FontAwesomeIcon className="ml-2" icon={faPaperPlane}/>
                </button>

              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
