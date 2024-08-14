import { contact, protfolioLinks } from "@/data/profile-data";
import Mail from "./mail";

export const ContactInfo = () => {
  return (
    <div className="flex items-center justify-evenly my-8 flex-wrap">
      <div className="my-4" id="contact">
        <h2 className="text-4xl font-semibold font-[system-ui]">Contact</h2>
        <div className="flex items-start flex-wrap gap-x-4 my-6">
          <span>{contact.logo}</span>
          <Mail email={contact.email} />
        </div>
      </div>
      <div className="my-4" id="links">
        <h2 className="text-4xl font-semibold font-[system-ui]">Links</h2>
        <div className="flex items-start flex-wrap gap-x-4">
          {protfolioLinks.map((link) => {
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                className="shadow-md dark:shadow-darkSecondaryColor px-5 py-4 text-base flex my-4 rounded-md gap-x-3"
              >
                <span>{link.logo}</span>
                <p>{link.name}</p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
