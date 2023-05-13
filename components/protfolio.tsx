import { FC } from "react";
import Image from "next/image";
import {
  personalData,
  contact,
  education,
  protfolioLinks,
  skills,
} from "./data";

const Protfolio: FC = () => {
  return (
    <div className="mx-5 my-5 lg:grid lg:grid-cols-2 lg:gap-12">
      <section className="text-center m-auto mt-[3rem]">
        <Image
          src={personalData.image}
          width={300}
          height={250}
          alt="Sarmad Image"
          className="rounded-[100rem] h-[22rem] w-[26rem] md:m-auto"
        />
        <h2 className="font-bold text-2xl text-orange-500 tracking-wider my-3">
          Sarmad Rafique
        </h2>
      </section>
      <section className="w-full mt-[3rem]">
        <div>
          <span className="text-base font-medium underline">Father Name:</span>
          <p className="font-semibold ml-12 my-1">{personalData.fatherName}</p>
          <span className="text-base font-medium underline">Age:</span>
          <p className="font-semibold ml-12 my-1">{personalData.age}</p>
          <span className="text-base font-semibold underline">About Me:</span>
          <p className="my-2">{personalData.description}</p>
        </div>
      </section>
      <section className="mt-5 mb-2">
        <div>
          <h2 className="font-bold text-3xl tracking-wide text-center text-orange-500">
            Education
          </h2>
          <div className="my-3 text-xl font-semibold underline">Matric:</div>
          <span>{education.matric}</span>
          <div className="my-3 text-xl font-semibold underline">
            Intermediate:
          </div>
          <span>{education.intermediate}</span>
          <div className="my-3 text-xl font-semibold underline">Others:</div>
          <span>{education.bachelors}</span>
        </div>
      </section>
      <section className="mt-5 mb-2">
        <div>
          <h2 className="font-bold text-3xl tracking-wide text-center text-orange-500">
            Skills
          </h2>
          <ul className="grid grid-cols-2 gap-12 my-3">
            {skills.map((skill, index) => {
              return (
                <li key={index} className="mx-6 font-semibold">
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="mt-5 mb-2">
        <div>
          <h2 className="font-bold text-3xl tracking-wide text-center text-orange-500">
            Links
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <a
              href={protfolioLinks.github}
              className="text-blue-500 font-semibold underline"
              target="_blank"
            >
              Github
            </a>
            <a
              href={protfolioLinks.facebook}
              className="text-blue-500 font-semibold underline"
              target="_blank"
            >
              Facebook
            </a>
            <a
              href={protfolioLinks.twitter}
              className="text-blue-500 font-semibold underline"
              target="_blank"
            >
              Twitter
            </a>
            <a
              href={protfolioLinks.linkedin}
              className="text-blue-500 font-semibold underline"
              target="_blank"
            >
              Linkedin
            </a>
            <a
              href={protfolioLinks.ecommerceApp}
              className="text-blue-500 font-semibold underline"
              target="_blank"
            >
              Ecommerece App built with react
            </a>
          </div>
        </div>
      </section>
      <section className="mt-5 mb-2">
        <div>
          <h2 className="font-bold text-3xl tracking-wide text-center text-orange-500">
            Contact
          </h2>
          <span className="text-base font-medium underline">Phone:</span>
          <p className="font-semibold ml-12 my-1 tracking-wider">{contact.phone}</p>
          <span className="text-base font-medium underline">Email:</span>
          <p className="font-semibold ml-12 my-2 text-blue-500 underline cursor-pointer">{contact.email}</p>
        </div>
      </section>
    </div>
  );
};

export default Protfolio;
