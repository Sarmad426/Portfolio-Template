"use client";
import Image from "next/image";
import {
  skills,
  personalData,
  bio,
  education,
  projects,
  contact,
  protfolioLinks,
} from "./data";
import { BiArrowFromLeft } from "react-icons/bi";
import Modal from "./modal";
const Protfolio = () => {
  const openModal = (id: number) => {
    const modal = document.getElementById(`${id}`);
    if (modal) {
      //@ts-ignore
      modal.showModal();
    }
  };
  return (
    <div className="h-screen w-screen text-black">
      {/* Home */}
      <div className="lg:flex lg:flex-row lg:items-start md:items-center md:justify-center md:flex md:flex-col sm:flex sm:flex-col sm:justify-center sm:items-center justify-center items-center space-x-12 m-8 mt-12">
        {/* Personal Details */}
        <div className="lg:w-2/5 md:w-[80%] sm:w-3/4 w-full">
          <div>
            {personalData.map((data) => {
              return (
                <div key={data.name}>
                  <Image
                    src={data.image}
                    alt={`${data.name}, "Image"`}
                    className="object-cover rounded-full lg:w-4/5 md:w-3/4 flex-shrink-0 w-screen"
                  />
                  <h3 className="md:text-4xl text-2xl font-medium">
                    {data.name}
                  </h3>
                  <p>
                    Age: <span className="font-medium">{data.age}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:w-2/5 md:w-3/5 sm:w-4/5 w-full">
          {/* Bio */}
          <div>
            {bio.map((data) => {
              return (
                <div key={data.role}>
                  <h1 className="text-6xl font-medium text-orange-500">
                    {data.role}
                  </h1>
                  <p className="text-gray-700 text-lg my-8">{data.bio}</p>
                </div>
              );
            })}
          </div>
          <div className="my-4" id="skills">
            <h2 className="text-4xl font-semibold font-[system-ui]">Skills</h2>
            <ul className="flex items-start flex-wrap gap-x-4">
              {/* Skills */}
              {skills.map((skill) => {
                return (
                  <li
                    key={skill.name}
                    className="shadow-md px-2 md:px-3 lg:px-5 py-4 text-base flex my-4 rounded-md gap-x-3"
                  >
                    <span>{skill.logo}</span>
                    <p>{skill.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="my-4 flex flex-col lg:flex-row items-center justify-between space-x-8 mx-2 lg:mx-12 w-full">
        {/* Education */}
        <div className="mb-6 lg:mb-0" id="education">
          <h2 className="text-4xl font-semibold font-[system-ui]">Education</h2>
          <div className="flex my-4">
            <span className="w-6 h-6 shrink-0">{education.logo}</span>
            <p className="mx-2 text-base text-gray-700">
              {education.bachelors}
            </p>
          </div>
        </div>
        {/* Projects */}
        <div className="mb-6 lg:mb-0" id="projects">
          <h2 className="text-4xl font-semibold font-[system-ui]">Projects</h2>
          <div className="flex items-center justify-start space-x-5 flex-wrap">
            {projects.map((project, id) => {
              return (
                <div
                  key={project.url}
                  className="lg:flex lg:flex-col shadow-md rounded-md my-4 cursor-pointer min-w-[17rem] max-w-[17.2rem]"
                >
                  <div
                    onClick={() => openModal(id)}
                    className="flex item-center gap-x-5 px-4 py-3"
                  >
                    <h3 className="text-lg font-semibold">{project.name}</h3>
                    <BiArrowFromLeft className="w-6 h-7 shrink-0" />
                  </div>
                  <Modal projectData={project} id={id} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-evenly my-8 flex-wrap">
        <div className="my-4" id="contact">
          <h2 className="text-4xl font-semibold font-[system-ui]">Contact</h2>
          <div className="flex items-start flex-wrap gap-x-4 my-6">
            <span>{contact.logo}</span>
            <p className="text-blue-400 underline cursor-pointer">
              {contact.email}
            </p>
          </div>
        </div>
        <div className="my-4" id="links">
          <h2 className="text-4xl font-semibold font-[system-ui]">Links</h2>
          <ul className="flex items-start flex-wrap gap-x-4">
            {protfolioLinks.map((link) => {
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  className="shadow-md px-5 py-4 text-base flex my-4 rounded-md gap-x-3"
                >
                  <span>{link.logo}</span>
                  <p>{link.name}</p>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Protfolio;
