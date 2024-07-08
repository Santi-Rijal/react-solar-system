import { Inter } from "next/font/google";
import "./globals.css";
import { PlanetContext } from "@/Context/PlanetContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Solar System",
  description: "Our solar system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PlanetContext>{children}</PlanetContext>
      </body>
    </html>
  );
}
