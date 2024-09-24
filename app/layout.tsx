// app/layout.tsx

import "./globals.css";
import { ReactNode } from "react";
// Remove the next line if Image is not being used
// import Image from "next/image";

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
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
