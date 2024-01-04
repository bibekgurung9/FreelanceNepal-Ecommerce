import { NextResponse, NextRequest } from "next/server";
import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect()

export async function POST(request: NextRequest){
    try{
        const reqBody = await request.json();
        const {email, password} = reqBody;
        console.log(reqBody);

        //check if the user exists in the database
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({error: "User Does Not Exist!"}, {status: 400});
        }

        //check if the password is correct if the user exists
        const validPassword = await bcryptjs.compare(password, user.password)

        if(!validPassword){
            return NextResponse.json({error: "Password Is Not Valid"}, {status: 400});
        }

        //create a token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
            userType: user.userType,
        }
        //create a token with the token data
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn : "1d"})

        const response = NextResponse.json({
            message: "Login Successful", 
            success: true,
            userType: user.userType,
        })
        response.cookies.set("token", token, {
            httpOnly: true,
        })
        return response;

    } catch(error:any){
        return NextResponse.json({error: error.message}, {status: 500});
    }
}