import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      <body className="font-[ubuntu] bg-[#121212] text-[#ededed]">
        {children}
      </body>
    </html>
  );
}
