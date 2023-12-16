"use client"; //to use client components like useState

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import NavBar from "@/components/NavBar/NavBar";


export default function LoginPage(){
    const router = useRouter();
    //user data to be accumalted
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });
    
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = React.useState(false);

    //login method
    const onLogin = async () => {
        try{
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login Successful", response);
            //push user to login page after signup
            toast.success("Login Successful")
            router.push("/profile");
        } catch(error: any){
            console.log("Login Failed!");
            toast.error(error.message);
        } finally{
            setLoading(false);
        }
    }

        //use effect in this page
        useEffect(() => {
            if(user.email.length > 0 && user.password.length > 0){
                setButtonDisabled(false);
            } else{
                setButtonDisabled(true);
            }
        })

    return(
        <>
        <NavBar />
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-5xl mb-2">{loading ? "Processing" : "Login Page"}</h1>
            <label htmlFor="email">Email</label>
            <input 
                className="p-3 mt-1 border border-gray-400 rounded-lg mb-4 focusLoutline-none focus:border-gray-800"
                type="email"
                id="email"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="Enter Your Email"
                />
            <br />
            <label htmlFor="password">Password</label>
            <input 
                className="p-3 mt-1 border border-gray-400 rounded-lg mb-4 focusLoutline-none focus:border-gray-800"
                type="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="Enter Your Password"
                />
            <br />
            <button
                className="p-3 border border-gray-400 rounded-lg mb-4 focusLoutline-none focus:border-gray-800" 
                onClick={onLogin}>{buttonDisabled ? "Cannot Login" : "Login"}</button>
            <br />
            <Link href="/signup">Go to Signup Page</Link>
        </div>
        </>
    )
}