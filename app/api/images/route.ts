import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const directory = path.join(process.cwd(), "public", "images", "pb-demos");
  const fileNames = fs.readdirSync(directory);
  const images = fileNames
    .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))
    .map((file) => ({
      src: `/images/pb-demos/${file}`,
      alt: file.replace(/\.[^/.]+$/, "").replace(/-/g, " "),
    }));

  return NextResponse.json(images);
}
