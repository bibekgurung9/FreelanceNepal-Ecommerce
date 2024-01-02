"use client"; 
import SimpleNav from "@/components/SimpleNav";
import axios from "axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function SignupPage(){
    const router = useRouter();
    //extract the user type from the query
    const query = useSearchParams();
    const userSelected = query.get('userType');
    
    //user data to be accumalted
    const [user, setUser] = React.useState({
        username: "",
        email: "",
        userType: userSelected,
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
            router.push("/signup");
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
        <SimpleNav />
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-1">{loading ? "Processing" : "SignUp Page"}</h1>
            <label htmlFor="name" className="text-xl font-bold">Name</label>
            <input 
                className="p-3 m-1 border border-gray-400 rounded-lg mb-4 focusLoutline-none focus:border-gray-800"
                type="text"
                id="username"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="Enter Your Name"
                />
            <br />
            <label htmlFor="email" className="text-xl font-bold">Email</label>
            <input 
                className="p-3 border m-1 border-gray-400 rounded-lg mb-4 focusLoutline-none focus:border-gray-800"
                type="email"
                id="email"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="Enter Your Email"
                />
            <br />            
            <label htmlFor="password" className="text-xl font-bold">Password</label>
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