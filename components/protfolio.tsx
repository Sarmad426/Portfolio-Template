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
      <div className="flex items-start space-x-12 m-8 mt-12">
        {/* Personal Details */}
        <div className="lg:w-2/5 md:w-[80%] w-3/4">
          <div>
            {personalData.map((data) => {
              return (
                <div key={data.name}>
                  <Image
                    src={data.image}
                    alt={`${data.name}, "Image"`}
                    className="object-cover rounded-full lg:w-4/5"
                  />
                  <h3 className="text-4xl font-medium">{data.name}</h3>
                  <p>
                    Age: <span className="font-medium">{data.age}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-2/5">
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
          <div className="my-4">
            <h2 className="text-4xl font-semibold font-[system-ui]">Skills</h2>
            <ul className="flex items-start flex-wrap gap-x-4">
              {/* Skills */}
              {skills.map((skill) => {
                return (
                  <li
                    key={skill.name}
                    className="shadow-md px-5 py-4 text-base flex my-4 rounded-md gap-x-3"
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
      <div className="my-4 lg:flex items-center justify-evenly space-x-8 mx-12">
        {/* Education */}
        <div>
          <h2 className="text-4xl font-semibold font-[system-ui]">Education</h2>
          <div className="flex my-4">
            <span className="w-6 h-6 shrink-0">{education.logo}</span>
            <p className="mx-2 text-base text-gray-700">
              {education.bachelors}
            </p>
          </div>
        </div>
        {/* Projects */}
        <div>
          <h2 className="text-4xl font-semibold font-[system-ui]">Projects</h2>
          <div className="flex items-start space-x-8 my-6">
            {projects.map((project, id) => {
              return (
                <div
                  key={project.url}
                  className="shadow-md px-4 py-3 rounded-md my-4 cursor-pointer"
                >
                  <div
                    onClick={() => openModal(id)}
                    className="flex item-center gap-x-5"
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
      <div className="flex items-center justify-evenly my-8">
        <div className="my-4">
          <h2 className="text-4xl font-semibold font-[system-ui]">Contact</h2>
          <div className="flex items-start flex-wrap gap-x-4 my-6">
            <span>{contact.logo}</span>
            <p className="text-blue-400 underline cursor-pointer">
              {contact.email}
            </p>
          </div>
        </div>
        <div className="my-4">
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
