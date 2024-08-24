import "./globals.css";

import { Navbar } from "@/components/navbar";

export const metadata = {
  title: "Sarmad Rafique Portfolio",
  description: "Sarmad Rafique. JAM Stack Developer",
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
      <body className="dark:bg-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
