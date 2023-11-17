import Navbar from "../components/navbar";
import "./globals.css";

export const metadata = {
  title: "Sarmad Protoflio",
  description: "Sarmad Rafique Protfolio. JAM Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="jpg" href="logo.jpg" />
      </head>
      <body className="font-[ubuntu]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
/*
Remote url of the icon
 https://i.ibb.co/pnxjDBH/logo.jpg
*/
