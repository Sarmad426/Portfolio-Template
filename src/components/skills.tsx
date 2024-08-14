import { skills } from "@/data/profile-data";

export const Skills = () => {
  return (
    <div className="my-4" id="skills">
      <h2 className="text-4xl font-semibold font-[system-ui]">Skills</h2>
      <ul className="flex items-start flex-wrap gap-x-4">
        {skills.map((skill) => {
          return (
            <li
              key={skill.name}
              className="shadow-md dark:shadow-darkSecondaryColor px-2 md:px-3 lg:px-5 py-4 text-base flex my-4 rounded-md gap-x-3"
            >
              <span>{skill.logo}</span>
              <p>{skill.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
