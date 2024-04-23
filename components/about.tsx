"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating from Kwame Nkrumah University of Science and Technology with a degree in{" "}
        <span className="font-medium">Computer Science,</span>I embarked on my journey in the tech industry. 
        I began with an internship at Dawurobo as a software developer, gaining essential hands-on experience in the field.
        Following that, I worked at Bismuth Technologies as a software engineer, where I expanded my skill set and contributed 
        to various projects. Now, I work with Accede Ghana, focusing primarily on mobile engineering using Flutter. I enjoy creating user-friendly and efficient applications.
      </p>

      <p>
        <span className="italic">Outside of work, </span>I&apos;m a passionate football fan and enjoy discussing the latest matches and players.
         Check out my portfolio to see some of the projects I&apos;ve worked on and feel free to reach out for any football chat!
      </p>
    </motion.section>
  );
}
