"use client";

import React from "react";
import { projectObj } from "./data";
import { IoMdClose } from "react-icons/io";
interface Project {
  projectData: projectObj;
  id: number;
}

const Modal: React.FC<Project> = ({ projectData, id }) => {
  const { name, url, description } = projectData;
  const closeModal = () => {
    const dialog = document.getElementById(`${id}`);
    if (dialog) {
      // @ts-ignore
      dialog.close();
    }
  };
  return (
    <dialog
      id={`${id}`}
      className="px-6 py-8 border-0 outline-0 rounded-md lg:w-1/3 md:w-2/3"
    >
      <div className="relative">
        <button className="absolute right-3 top-0 outline-none shadow-md hover:shadow-sm rounded-full px-3 py-2 transition-colors duration-500">
          <IoMdClose
            className="w-6 h-6 shrink-0 text-end"
            onClick={closeModal}
          />
        </button>
        <h1 className="my-3 text-2xl font-semibold">{name}</h1>
        <p className="my-4 text-base text-gray-600">{description}</p>
        <a
          href={url}
          className="text-blue-600 underline text-base"
          target="_blank"
        >
          Visit
        </a>
      </div>
    </dialog>
  );
};

export default Modal;
