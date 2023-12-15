import mongoose from "mongoose";

//creating user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please Provide A User Name"],
        unique: true,
    },
    email:{
        type: String,
        required: [true, "Please Provide A Valid Email"],
        unique: true,
    },
    userType: {
       type: String,
       required: [true, "Please Provide Type Of User"] 
    },
    password:{
        type: String,
        required: [true, "Please Provide A Passoword"],
    },
    
    isVerified:{
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },

    //creating tokens to be used 
    forgetPasswordToken: String,
    forgetPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
});

//creates a mongoose model 'User' , if model exists it uses that existing model
//otherwise creates a new model based on the defined 'userSchema'
const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;