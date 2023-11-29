import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { User } from "@/lib/model/user";

export async function GET (){
 await mongoose.connect(process.env.DBCONNECT);
   
    const resp = await User.find();
   return NextResponse.json({result:resp, success:true})
};

export async function POST(req, content){
    const userData= await req.json();
    try {
        const user= new User(
            userData
        );
    const resp= await user.save();
    return NextResponse.json({result:resp, success:true})
    } catch (error) {
        console.log(error)
    }

}