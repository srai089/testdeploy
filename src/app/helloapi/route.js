import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET (){
    await mongoose.connect(process.env.DBCONNECT)
   return NextResponse.json({msg:"hello mesg FROM hello api"})
}