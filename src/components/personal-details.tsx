import { bio, personalData } from "@/data/profile-data";
import Image from "next/image";

export const PersonalDetails = () => {
  return (
    <div>
      {personalData.map((data) => {
        return (
          <div key={data.name}>
            <div className="border-t border-t-teal-400 border-b-indigo-400 border-b rounded-[100%] flex items-center justify-center">
              <Image
                src={data.image}
                alt={`${data.name}, "Image"`}
                className="aspect-square object-center rounded-[100%] lg:w-4/5 md:w-2/4 flex-shrink-0 w-screen my-6"
              />
            </div>
            <h3 className="md:text-4xl text-2xl font-medium">{data.name}</h3>
            <p>
              <span className="font-medium">{data.age}</span>
            </p>
            <p>
              <span className="font-medium text-sm text-gray-600 dark:text-darkSecondaryColor">
                {data.about}
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export const Bio = () => {
  return (
    <div>
      {bio.map((data) => {
        return (
          <div key={data.role}>
            <h1 className="text-6xl font-medium text-orange-500 my-6">
              {data.role}
            </h1>
            <p className="text-gray-700 dark:text-darkSecondaryColor text-lg my-8">
              {data.bio}
            </p>
          </div>
        );
      })}
    </div>
  );
};
