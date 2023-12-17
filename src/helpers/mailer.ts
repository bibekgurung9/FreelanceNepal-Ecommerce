import nodemailer from "nodemailer"
import User from "@/models/userModels"
import bcryptjs from "bcryptjs"

export const sendEmail = async ( {email, emailType, userId} : any) => {

    try{
        //creating a hashed token
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);

        //verify email to use services
        if(emailType === "VERIFY"){
            await User.findByIdAndUpdate(userId, 
                {verifyToken: hashedToken,
                verifyTokenExpiry: Date.now() + 360000})
        } 
        //reset password 
        else if(emailType === "RESET"){
            await User.findByIdAndUpdate(userId, 
                {forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiry: Date.now() + 360000})
        }

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "3e9c7fad224ccb",
              pass: "ac94321bea7655"
            }
          });

          //mail options and its contents depending on the email type 
          const mailOptions = {
            from: 'bibek.gurung@thamescollege.edu.np',
            to: email, 
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your Password",
            html: `<p>This is the test email to check email functionality to verify account and update verification status or reset funciton in the database of the user;
                    <br>Click 
                    <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">Here</a> to ${emailType === "VERIFY" ? "Verify your email" : "Reset your Password"}
                    or copy paste the link below in your browser. <br>
                    ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
                    </p>`
          }
    }
    catch(error:any){
        throw new Error(error.message);
    }
}