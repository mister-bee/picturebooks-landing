// app/layout.tsx

import "./globals.css";
import { ReactNode } from "react";
import Image from "next/image";

export const metadata = {
  title: "PictureBooks.ai - Ignite a Love for Reading",
  description:
    "Personalized stories that captivate young minds and foster a lifelong passion for reading.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div>
          {/* <header>
            <Image
              src="/images/logo.png"
              alt="PictureBooks.ai Logo"
              width={100} // Adjust as needed
              height={50} // Adjust as needed
            />
          </header> */}
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
