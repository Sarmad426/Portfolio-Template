import Navbar from "../../components/navbar";
import "./globals.css";

export const metadata = {
  title: "Sarmad Protoflio",
  description:
    "Full Stack Next Js Developer. Interested in Blockchain and Generative AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-[ubuntu]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
