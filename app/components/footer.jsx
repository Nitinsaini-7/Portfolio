import React from "react";
import Link from "next/link";
import { faDiscord, faGithub, faInstagram, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-6 mx-auto">
        

        <hr className="my-6 border-gray-300 md:my-6 dark:border-gray-700" />

        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-300">© Copyright 2024. All Rights Reserved.</p>

            <div className="flex -mx-2">
                <Link href="https://github.com/Nitinsaini-7" className="mx-2 bg-orange-400 w-8 h-8 ease-in duration-300 group hover:ease-in hover:duration-300 hover:bg-black rounded-full flex items-center justify-center transition-colors text-white">
                    <FontAwesomeIcon icon={faGithub} className="text-white text-xl"/>
                </Link>
                
                <Link href="https://www.linkedin.com/in/nitin-saini-64b454237" className="mx-2 bg-orange-400 w-8 h-8 ease-in duration-300 group hover:ease-in hover:duration-300 hover:bg-[#0077B5] rounded-full flex items-center justify-center transition-colors text-white">
                    <FontAwesomeIcon icon={faLinkedinIn} className="text-white text-xl"/>
                </Link>

                <Link href="https://x.com/nitin_saini_07?t=oW2w1RHoNbahzyg9flYFbA&s=09" className="mx-2 bg-orange-400 w-8 h-8 ease-in duration-300 group hover:ease-in hover:duration-300 hover:bg-black rounded-full flex items-center justify-center transition-colors text-white">
                    <FontAwesomeIcon icon={faXTwitter} className="text-white text-xl"/>
                </Link>

                <Link href="https://discordapp.com/users/nitin_saini" className="mx-2 bg-orange-400 w-8 h-8 ease-in duration-300 group hover:ease-in hover:duration-300 hover:bg-[#5865F2] rounded-full flex items-center justify-center transition-colors text-white">
                    <FontAwesomeIcon icon={faDiscord} className="text-white text-xl"/>
                </Link>
                
                <Link href="https://www.instagram.com/nitin.saini.07?igsh=MTBwMnc3dnNtODkwOA==" className="mx-2 bg-orange-400 w-8 h-8 ease-in duration-300 group hover:ease-in hover:duration-300 hover:bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-yellow-400 via-red-500 to-purple-500 rounded-full flex items-center justify-center transition-colors text-white">
                    <FontAwesomeIcon icon={faInstagram} className="text-white group-hover:text-white text-xl"/>
                </Link>

            </div>
        </div>
    </div>
</footer>
  );
};

export default Footer;
