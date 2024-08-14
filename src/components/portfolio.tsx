"use client";

import { Bio, PersonalDetails } from "./personal-details";
import { Skills } from "./skills";
import { Education } from "./education";
import { Projects } from "./projects";
import { ContactInfo } from "./contact-info";

const Portfolio = () => {
  return (
    <div className="h-screen w-screen text-black dark:text-white">
      <div className="lg:flex lg:flex-row lg:items-start md:items-center md:justify-center md:flex md:flex-col sm:flex sm:flex-col sm:justify-center sm:items-center justify-center items-center space-x-12 m-8 mt-12 gap-y-12">
        <div className="lg:w-2/5 md:w-[80%] sm:w-3/4 w-full">
          <PersonalDetails />
        </div>
        <div className="lg:w-2/5 md:w-3/5 sm:w-4/5 w-full">
          <Bio />
          <Skills />
        </div>
      </div>
      <div className="my-4 flex flex-col lg:flex-row items-center justify-between space-x-8 mx-2 lg:mx-12 w-full">
        <Education />
        <Projects />
      </div>
      <ContactInfo />
    </div>
  );
};

export default Portfolio;
