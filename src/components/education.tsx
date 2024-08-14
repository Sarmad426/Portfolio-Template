import { education } from "@/data/profile-data";
import React from "react";

export const Education = () => {
  return (
    <div className="mb-6 lg:mb-0" id="education">
      <h2 className="text-4xl font-semibold font-[system-ui]">Education</h2>
      <div className="flex my-4">
        <span className="w-6 h-6 shrink-0">{education.logo}</span>
        <p className="mx-2 text-base text-gray-700 dark:text-darkSecondaryColor">
          {education.bachelors}
        </p>
      </div>
    </div>
  );
};
