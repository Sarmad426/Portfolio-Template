"use client";

const Mail = ({ email }: { email: string }) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div>
      <a href={`mailto:${email}`} onClick={handleEmailClick}>
        {email}
      </a>
    </div>
  );
};

export default Mail;
