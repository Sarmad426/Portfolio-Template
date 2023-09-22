import {
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiPrisma,
  SiPython,
  SiMysql,
  SiGit,
  SiFigma,
  SiGithub,
  SiLinkedin,
  SiX,
} from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa";
import sarmadImage from "./Profile photo.jpg";

type skillObj = {
  logo: JSX.Element;
  name: string;
};

type projectObj = {
  name: string;
  description: string;
  url: string;
};

type profileLinks = {
  name: string;
  url: string;
  logo: JSX.Element;
};
export const personalData = [
  {
    name: "Muhammad Sarmad",
    age: 19,
    image: sarmadImage,
  },
];
export const bio = [
  {
    role: "Full Stack Web Developer",
    bio: "Hi, I'm Sarmad, a web developer working with cutting-edge technologies like Next.js, React, TypeScript, Tailwind CSS, Prisma, and Serverless MySQL databases. Interested in BlockChain and Generative AI.",
  },
];
export const skills: skillObj[] = [
  {
    logo: <SiHtml5 />,
    name: "HTML",
  },
  {
    logo: <SiCss3 />,
    name: "CSS",
  },
  {
    logo: <SiTailwindcss />,
    name: "Tailwind CSS",
  },
  {
    logo: <SiTypescript />,
    name: "Typescript",
  },
  {
    logo: <SiReact />,
    name: "React Js",
  },
  {
    logo: <SiNextdotjs />,
    name: "Next Js",
  },
  {
    logo: <SiPrisma />,
    name: "Prisma",
  },
  {
    logo: <SiMysql />,
    name: "MYSQL",
  },
  {
    logo: <SiGit />,
    name: "Git",
  },
  {
    logo: <SiFigma />,
    name: "Figma UI/UX",
  },
  {
    logo: <SiPython />,
    name: "Python",
  },
];
export const contact = {
  email: "sarmadrafique040@gmail.com",
};
export const protfolioLinks: profileLinks[] = [
  {
    name: "Gihub",
    logo: <SiGithub />,
    url: "https://github.com/sarmad426",
  },
  {
    name: "Linkedin",
    logo: <SiLinkedin />,
    url: "https://www.linkedin.com/in/sarmad-rafique-62518a22b",
  },
  {
    name: "X",
    logo: <SiX />,
    url: "https://twitter.com/SarmadRafique2",
  },
];
export const education = {
  bachelors: "Undergraduate Software Engineer",
  logo: <FaGraduationCap />,
};

export const projects: projectObj[] = [
  {
    name: "Ecommerce App",
    description:
      "Mini Amazon Ecommerce App built on top of React and Sass. Add to cart functionality. Products Preview Page. Proceed to checkout form.",
    url: "https://progressivesite.netlify.app/",
  },
  {
    name: "Ecommerce Hackathon",
    description:
      "Hackthon UI for hackathon. Built with Next js, Typescript, Tailwind CSS. Fully Responsive. Products Preview Page. Proceed to checkout form. About page.",
    url: "https://hackathon-1-xi.vercel.app/",
  },
  {
    name: "Car Show Case UI",
    description:
      "Car Show case ui. Built With Next js, Typescript, Tailwind CSS. Full Responsive UI. Popup Modals for Credentials and Item Preview.",
    url: "https://car-show-case-web.vercel.app/",
  },
  {
    name: "Counter App",
    description:
      "Simple Counter app. Built With Next js, Typescript, Tailwind CSS.",
    url: "https://nextjs-counter-app-one.vercel.app/",
  },
];
