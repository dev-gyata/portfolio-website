"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links, myInfo } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { IoMenu } from "react-icons/io5";
import { useActiveSectionContext } from "@/context/active-section-context";
import Image from "next/image";
import felixMemoji from "@/public/felix-memoji.png"
import { IoIosCloseCircleOutline, IoLogoTwitter } from "react-icons/io";
import { IoLogoGithub,IoLogoLinkedin } from "react-icons/io5";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const [mobileNav,setMobileNavStatus] = useState(false)

  // return 
  return (
    <header className="z-[999] relative">
        <motion.div
          className="fixed bottom-5 sm:bottom-auto sm:mx-auto left-1/2 h-[3.5rem] w-[90%] border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] rounded-2xl sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        >
          <div className="flex sm:hidden px-3 h-full items-center justify-between ">
            <IoMenu size={30}
            onClick={()=>setMobileNavStatus((e)=>!e)} 
            className="cursor-pointer"/>
            <Image 
            src={felixMemoji}
            className="h-7 w-7 object-cover rounded-full"
            alt="felix-potrait"/>
          </div>
        </motion.div>
        

      <motion.div 
      initial={{ y:100, opacity: 0 }}
      animate={{  y:0, opacity: 1 }}
      className={`${mobileNav?'h-full sm:h-0':''} fixed dark:bg-gray-950 bg-white top-0 w-full z-[9999]`}>
        <nav className={`${mobileNav?'h-12':'hidden'} sm:flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0`}>
          <ul className="flex w-[22rem] flex-col sm:flex-row items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <motion.li
                className="h-3/4 flex items-center justify-center relative"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                    {
                      "text-gray-950 dark:text-gray-200":
                        activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                    setMobileNavStatus(false)
                  }}
                >
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
          {mobileNav&&(<div
          className="sm:hidden mt-5 flex w-full gap-x-5 justify-center"
          >
            <Link href={myInfo.github} target="_blank">
              <IoLogoGithub 
              size={32} />
            </Link>
            <Link href={myInfo.linkedIn} target="_blank">
              <IoLogoLinkedin 
              size={32} />
            </Link>
            <Link href={myInfo.twitter} target="_blank">
              <IoLogoTwitter 
              size={32}/>
            </Link>
          </div>)}
          {mobileNav&&(<div
          className="sm:hidden flex w-full mt-5 justify-center"
          >
            <IoIosCloseCircleOutline 
              size={40}
              onClick={()=>setMobileNavStatus(false)}
              className="cursor-pointer" 
            />
          </div>)}
        </nav>
      </motion.div>
    </header>
  );
}
