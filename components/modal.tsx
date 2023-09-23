"use client";

import React from "react";
import { projectObj } from "./data";
import { IoMdClose } from "react-icons/io";
interface Project {
  projectData: projectObj;
  id: number;
}

const Modal: React.FC<Project> = ({ projectData, id }) => {
  const { name, url, description, pages, features } = projectData;
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
      className="border-0 outline-0 rounded-md lg:w-2/5 md:w-2/3 sm:w-5/6 w-full"
    >
      <div className="px-6 py-8 relative">
        <button className="absolute right-3 top-0 outline-none shadow-md hover:shadow-sm rounded-full p-2 transition-colors duration-500">
          <IoMdClose
            className="w-6 h-6 shrink-0 text-end"
            onClick={closeModal}
          />
        </button>
        <h1 className="my-3 text-2xl font-semibold">{name}</h1>
        <p className="my-4 text-base text-gray-600">{description}</p>
        <div className="flex items-center justify-between space-x-4">
          <ul className="my-3">
            <h2 className="text-xl font-medium">Pages</h2>
            {pages.map((page) => {
              return (
                <li
                  key={page}
                  className="text-xs font-light text-gray-600 list-decimal font-[sans-serif]"
                >
                  {page}
                </li>
              );
            })}
          </ul>
          <ul className="my-3">
            <h2 className="text-xl font-medium">Features</h2>
            {features.map((feature) => {
              return (
                <li
                  key={feature}
                  className="text-sm font-light text-gray-700 font-[calibri]"
                >
                  {feature}
                </li>
              );
            })}
          </ul>
        </div>
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
