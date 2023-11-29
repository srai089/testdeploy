import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { User } from "@/lib/model/user";

export async function GET (){
    await mongoose.connect(process.env.DBCONNECT);
    const resp = await User.find();
   return NextResponse.json({result:resp, success:true})
}