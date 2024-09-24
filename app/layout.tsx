// app/layout.tsx

import "./globals.css";
import { ReactNode } from "react";
import Image from "next/image";

export const metadata = {
  title: "PictureBooks.ai - Ignite a Love for Reading",
  description:
    "Personalized stories that captivate young minds and foster a lifelong passion for reading.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div>
          {/* Uncomment and adjust as needed
          <header>
            <Image
              src="/images/logo.png"
              alt="PictureBooks.ai Logo"
              width={100}
              height={50}
            />
          </header>
          */}
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
