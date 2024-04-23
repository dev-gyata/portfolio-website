import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import kachaImg from "@/public/kacha.webp";
import doctrImg from "@/public/doctr.png";
import regularImg from "@/public/regular-academy.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Sofware Developer - Intern",
    location: "Dawurobo Inc, Accra",
    description:
      "I worked as in intern here. I worked on Dawurobo X platform using flutter and Dart as my main stack.",
    icon: React.createElement(CgWorkAlt),
    date: "October, 2021 - Janury, 2022",
    link: "https://www.dawurobo.com/",
  },
  {
    title: "Sofware Engineer",
    location: "Bismuth Technologies, Kumasi",
    description:
      "I worked as a Sofware Engineer for about 6 months in this job. My stack here was mainly Next Js and React.",
    icon: React.createElement(CgWorkAlt),
    date: "June, 2022 - December, 2022",
    link: "https://bismuthinc.com/",
  },
  {
    title: "Sofware Engineer",
    location: "Accede Ghana, Accra",
    description:
      "I'm now a mobile engineer working for Accede Ghana. My stack for most projects I have worked on includes Flutter, Dart, and Firebase.",
    icon: React.createElement(CgWorkAlt),
    date: "December, 2022 - present",
    link: "https://accede.dev/",
  },
] as const;

export const projectsData = [
  {
    title: "Kacha Agent",
    description:
      "I was part of the team that developed the Kacha digital platform, the very first private payment instrument issuer licensed by the National Bank of Ethiopia. For this project specifically worked on the agent mobile application, where I used the Flutter framework.",
    tags: ["Dart", "Flutter"],
    imageUrl: kachaImg,
    url: "https://kacha.et",
  },
  {
    title: "Doctr",
    description:
    "This was what i developed as my capstone project for my final undergraduate studies. This project was a simple system that gave users diseases and their potential cures based on the symptoms given to them. It included a mobile application where the user can enter his or her symptoms, an AI model that is used for prediction, and a backend system that was used for communication between the mobile application and the AI model.",
    tags: ["Dart", "Flutter", "Python", "Flask", "Scikit Learn"],
    imageUrl: doctrImg,
    url: "https://github.com/gyatashoa/doctr",
  },
  {
    title: "Regular Academy",
    description:
    "I was part of the team that developed this digital platform, that was supposed to provide users of the platform with fully-fledged courses in the form of video contents. On This project, i worked on the mobile platform, which was for both android and iOS, and also the setup for the backend.",
    tags: ["Dart", "Flutter", "Firebase", "Aws Amplify"],
    imageUrl: regularImg,
    url: "https://apps.apple.com/gh/app/regular-academy/id6449842619",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "SQL",
  "Python",
  "Fast Api",
  "Flask",
  "Dart",
  "Flutter",
  "AWS",
  "Firebase",
  "Java",
] as const;

export const myInfo = {
  linkedIn: "https://www.linkedin.com/in/felix-asamoah-yeboah-742594170/",
  github: "https://github.com/gyatashoa",
  email: "felixasamoah539@gmail.com",
} as const;
