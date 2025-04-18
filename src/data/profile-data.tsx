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
  SiBootstrap,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiDrizzle,
  SiFastapi,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import sarmadImage from "../../public/profile-photo.png";
import { JSX } from "react";
// import { calculateAge } from "@/utils/utils";

type skillObj = {
  logo: JSX.Element;
  name: string;
};

export type projectObj = {
  name: string;
  description: string;
  url: string;
  pages: string[];
  features: string[];
};

type profileLinks = {
  name: string;
  url: string;
  logo: JSX.Element;
};

const birthYear = 2004;
const birthMonth = 6;
const birthDate = 4;
// const age = calculateAge(birthYear, birthMonth, birthDate);

export const personalData = [
  {
    name: "Muhammad Sarmad",
    // age,
    image: sarmadImage,
    about: "Full Stack Engineer. Cloud and Generative AI Enthusiast.",
  },
];
export const bio = [
  {
    role: "Full Stack Engineer",
    bio: "Hi I am Sarmad, a Full Stack Web and Generative AI Engineer passionate about building SEO-friendly, AI-powered microservices architecture applications. My primary tech stack includes the MERN stack, Next.js, and FastAPI. I use Docker to create production-ready, cloud-native applications. I specialize in integrating Generative AI to develop chatbots, custom GPT models, automate tasks with GPT-powered actions, fine-tune LLMs, and more.",
  },
];
export const skills: skillObj[] = [
  {
    logo: <SiFigma />,
    name: "Figma UI/UX",
  },
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
    logo: <SiBootstrap />,
    name: "Bootstrap",
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
    logo: <SiExpress />,
    name: "Express Js",
  },
  {
    logo: <SiNodedotjs />,
    name: "Node Js",
  },
  {
    logo: <SiNextdotjs />,
    name: "Next Js",
  },
  {
    logo: <SiPrisma />,
    name: "Prisma ORM",
  },
  {
    logo: <SiDrizzle />,
    name: "Drizzle ORM",
  },
  {
    logo: <SiMysql />,
    name: "MYSQL",
  },
  {
    logo: <SiPostgresql />,
    name: "PostgreSQL",
  },
  {
    logo: <SiMongodb />,
    name: "MongoDB",
  },
  {
    logo: <SiGit />,
    name: "Git",
  },
  {
    logo: <SiPython />,
    name: "Python",
  },
  {
    logo: <SiFastapi />,
    name: "FastAPI",
  },
  {
    logo: <SiDocker />,
    name: "Docker",
  },
];
export const contact = {
  email: "sarmadrafique040@gmail.com",
  logo: <BiMailSend />,
};
export const portfolioLinks: profileLinks[] = [
  {
    name: "Github",
    logo: <SiGithub />,
    url: "https://github.com/sarmad426",
  },
  {
    name: "LinkedIn",
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
    description: "Mini Amazon Ecommerce App built on top of React and Sass.",
    url: "https://progressivesite.netlify.app/",
    pages: [
      "Home Page",
      "About Page",
      "Products Page",
      "Product Preview Page",
      "Login and Sign-up Forms page",
      "Cart and Wishlist Page",
      "Payments Form Page",
      "Shipping Page",
      "Help Page",
    ],
    features: [
      "Login and Sign-up",
      "Add to Cart",
      "Add to Wishlist",
      "Track Order",
      "Proceed to checkout",
      "Full form validation",
    ],
  },
  {
    name: "Ecommerce Hackathon",
    description:
      "Hackthon UI for hackathon. Built with Next js, Typescript, Tailwind CSS.",
    url: "https://hackathon-1-xi.vercel.app/",
    pages: [
      "Home Page",
      "Product Category Pages",
      "Product Preview Page",
      "Cart Page",
      "Checkout Page",
    ],
    features: [
      "Fully Responsive UI across all devices",
      "Product Quantity control",
      "Full Form Validation",
      "Proceed to checkout",
    ],
  },
  {
    name: "Car Show Case UI",
    description:
      "Car Show case ui. Built With Next js, Typescript, Tailwind CSS.",
    url: "https://car-show-case-web.vercel.app/",
    pages: ["Single Page App"],
    features: [
      "Fully Responsive UI across all devices",
      "Fully Functional Authentication Modals",
      "Search Bar with suggestions",
      "Car Preview Modals",
      "Car Preview Image Gallery",
    ],
  },
  {
    name: "Todo List App",
    description:
      "Simple Todo List app. Built With Next js, Typescript, Tailwind CSS and neon (Serverless Postgresql).",
    url: "https://next-server-actions-todo-app-jade.vercel.app/",
    pages: ["Form page to create new todos", "Page to view todos"],
    features: [
      "Add a Todo",
      "Mark todo as completed",
      "Delete a todo",
      "Responsive UI",
      "Beautiful Toast Notifications",
      "Separate Pending and Completed Todos Section",
    ],
  },
  {
    name: "Full Stack Hackathon",
    description: "Full Stack E-commerce App built with Next.js and Sanity.io",
    url: "https://next-sanity-ecommerce-gold.vercel.app",
    pages: [
      "Home Page",
      "Products Page",
      "Individual category pages",
      "Product Details Page",
      "Authentication pages",
    ],
    features: [
      "Fully Responsive across all devices",
      "Fully Authenticated",
      "Search and Filtering",
      "Cart Functionalities",
      "Order Summary",
      "Related Products Section",
    ],
  },
  {
    name: "Image Search App",
    description: "React Image Search app with live Unsplash api.",
    url: "https://progressive-image-search-app.netlify.app/",
    pages: ["Single Page Application"],
    features: ["Image Search App", "Live Unsplash API", "Live Images"],
  },
];
