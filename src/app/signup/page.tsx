"use client"; //to use client components like useState
//cmt
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function SignupPage(){
    const router = useRouter();

    //user data to be accumalted
    const [user, setUser] = React.useState({
        username: "",
        email: "",
        userType: "",
        password: "",
    });
    
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = React.useState(false);

    //signup method logic
    const onSignup = async () => {
        try{
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup Success", response.data);
            //push user to login page after signup
            router.push("/login");
        } catch(error: any){
            console.log("Signup Failed!");
            toast.error(error.message);
        } finally{
            setLoading(false);
        }
    }

    //use effect in this page
    useEffect(() => {
        if(user.username.length > 0 && user.email.length > 0 && user.password.length > 0){
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    })
    return(
        <>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-4xl pb-3">{loading ? "Processing" : "SignUp Page"}</h1>
            <label htmlFor="name">Name</label>
            <input 
                className="p-3 m-1 border border-gray-400 rounded-lg mb-4 focusLoutline-none focus:border-gray-800"
                type="text"
                id="username"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="Enter Your Name"
                />
            <br />
            <label htmlFor="email">Email</label>
            <input 
                className="p-3 border m-1 border-gray-400 rounded-lg mb-4 focusLoutline-none focus:border-gray-800"
                type="email"
                id="email"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="Enter Your Email"
                />
            <br />
            <div className=" text-center flex-column">
                <div className="border rounded p-3 ">
                    <label className="text-sm text-gray-500"><span className="text-red-500">Warning:</span> You can only work use services as selected. <br />You need to create a separate account if you want to switch roles.</label><br />
                </div>

            <label htmlFor="">How will you use our platform?</label><br />
            
            <label htmlFor="freelancer">            
                <input 
                    type="radio"
                    value="freelancer" //set unique value
                    checked={user.userType === 'freelancer'} //check userType freelancer
                    onChange={(e) => setUser({...user, userType: 'freelancer'})}
                    className="p-3 border m-1 border-gray-400 rounded-lg mb-4 focusLoutline-none focus:border-gray-800"
                    ></input>Freelancer</label>
            <br />
            <label htmlFor="client">            
                <input 
                    type="radio"
                    value="client"
                    checked={user.userType === 'client'}
                    onChange={(e) => setUser({...user, userType:'client'})}
                    className="p-3 border m-1 border-gray-400 rounded-lg mb-4 focusLoutline-none focus:border-gray-800"
                    ></input>Client</label>
            <br />
            </div>
            
            <label htmlFor="password">Password</label>
            <input 
                className="p-3 m-1 border border-gray-400 rounded-lg mb-4 focusLoutline-none focus:border-gray-800"
                type="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="Enter Your Password"
                />
            <br />
            <button 
                className="p-3 border border-gray-400 rounded-lg mb-4 focusLoutline-none focus:border-gray-800"
                onClick={onSignup}>{buttonDisabled ? "Cannot SignUp" : "SignUp"}</button>
            <br />
            <Link href="/login">Go to Login Page</Link>
        </div>
        </>
    )
}