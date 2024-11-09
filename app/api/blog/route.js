import { ConnectDB } from "@/lib/config/models/db";
import mongoose from "mongoose";

const LoadDB = async () => {
  await ConnectDB();
}

LoadDB();

export async function GET(request) {

}

export async function POST(request) {
  
  const formData = await request.formData();
  const timestamp = Date.now();

}