import mongoose from "mongoose";
import { dbConnect } from "@/lib/db";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import PortfolyoModel from "@/lib//config/models/PortfolyoModel";


dbConnect();

export async function POST(request) {
  try {
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get("image");
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);

    const imgUrl = `/${timestamp}_${image.name}`;

    const portfolyoData = {
      title: `${formData.get("title")}`,
      category: `${formData.get("category")}`,
      image: `${imgUrl}`,
    };

    await PortfolyoModel.create(portfolyoData);
    console.log("Blog Saved");

    return NextResponse.json({ success: true, msg: "Portolyo Added" });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json({ success: false, msg: "Failed to add portfolio" });
  }
}
