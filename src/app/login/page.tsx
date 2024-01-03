"use client"; //to use client components like useState
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import SimpleNav from "@/components/SimpleNav";


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

            const userType = response.data.userType;
            //push user to profile page after login
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
        <SimpleNav />
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-1">{loading ? "Processing" : "Login Page"}</h1>
            <label htmlFor="email" className="text-xl font-bold">Email</label>
            <input 
                className="p-3 mt-1 border border-gray-400 rounded-lg mb-4 focusLoutline-none focus:border-gray-800"
                type="email"
                id="email"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="Enter Your Email"
                />
            <br />
            <label htmlFor="password" className="text-xl font-bold">Password</label>
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
                className="p-3 border border-gray-400 rounded-lg mb-4 focusLoutline-none focus:border-gray-800 hover:bg-slate-300 " 
                onClick={onLogin}>{buttonDisabled ? "Cannot Login" : "Login"}</button>
            <br />
            <Link href="/userTypeSelection" className="text-xl font-bold">Go to <span className="underline hover:text-red-500">Signup Page</span></Link>
        </div>
        </>
    )
}