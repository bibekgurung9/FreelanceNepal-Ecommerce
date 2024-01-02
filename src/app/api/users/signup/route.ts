import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import  { sendEmail }  from "@/helpers/mailer";
import { send } from "process";

connect();

//handling the post request
export async function POST(request: NextRequest){

    try{
        const reqBody = await request.json();
        const {username, email, userType, password} = reqBody;
        console.log(reqBody);

        //check if the user already exists in the database
        const user = await User.findOne({email});

        if(user){
            return NextResponse.json({error: "User Already Exists"}, {status : 400});
        }

        //hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        //if new user 
        const newUser = new User({
            username,
            email,
            userType,
            password: hashedPassword,
        });

        const savedUser = await newUser.save()
        console.log(savedUser)

        //send a verification email to the email submitted by user
        await sendEmail({email, emailType: 'VERIFY', userId : savedUser._id});

       // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id});
        return NextResponse.json({
            message: "Account Created Successfully!",
            success: true,
            savedUser,
        })

    } catch(error: any){
        return NextResponse.json({error: error.message}, {status:500});
    }
}