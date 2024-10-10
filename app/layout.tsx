import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'prismjs/themes/prism.css';
import Navbar from "./components/web-components/NavBar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryan | UI Experiments",
  description:
    "Discover my latest UI experiments and innovative design solutions. Explore my portfolio to see creativity in action.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script async defer src="https://buttons.github.io/buttons.js" />
      <body className={inter.className}>
        <div>
          <Navbar />
          <div className="h-[calc(100vh-4rem)]">{children}</div>
        </div>
      </body>
    </html>
  );
}
