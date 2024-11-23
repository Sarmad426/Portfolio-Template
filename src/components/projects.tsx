import { projects } from "@/data/profile-data";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import Modal from "./modal";

export const Projects = () => {
  const openModal = (id: number) => {
    const modal = document.getElementById(`${id}`);
    if (modal) {
      //@ts-ignore
      modal.showModal();
    }
  };
  return (
    <div className="mb-6 lg:mb-0" id="projects w-full h-full">
      <h2 className="text-4xl font-semibold font-[system-ui]">Projects</h2>
      <div className="flex items-center flex-grow-0 justify-center md:justify-start gap-x-5 flex-wrap w-full">
        {projects.map((project, id) => {
          return (
            <div
              key={project.url}
              className="lg:flex lg:flex-col shadow-md dark:shadow-darkSecondaryColor rounded-md my-4 cursor-pointer min-w-[17rem] max-w-[17.2rem] hover:shadow-sm transition-all duration-500"
            >
              <div
                onClick={() => openModal(id)}
                className="flex items-center justify-between gap-x-5 px-4 py-3 flex-wrap"
              >
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <BiChevronRight className="w-6 h-7 shrink-0" />
              </div>
              <Modal projectData={project} id={id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
