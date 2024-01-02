"use client"; //to use client components like useState
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SimpleNav from "@/components/SimpleNav";

export default function UserTypeSelection(){
    const router = useRouter();
    const [user, setUser] = React.useState({
        userType: "",
    });
    
    const [loading, setLoading] = React.useState(false);

    //signup method logic and push to signup page
    const onSignup = async () => {
        try{
            if (!user.userType) {
                // If user type is not selected, show an error message
                toast.error("Please select a user type before proceeding.");
                return;
            }
            setLoading(true);
            const queryType = `userType=${encodeURIComponent((user.userType))}`;
            router.push(`/signup?${queryType}`);
        } catch(error: any){
            console.log("Signup Failed!");
            toast.error(error.message);
        } finally{
            setLoading(false);
        }
    }
    return(
    <>
    <SimpleNav />
    <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">{loading ? "Processing" : "Join Us As A Freelancer or Client"}</h1>            
            <div className="flex flex-col text-center">
                <div className="border rounded p-3 mt-5 mb-7">
                    <label className="text-md text-gray-500"><span className="text-red-500 font-bold">Note:</span> You can only work use services as selected. <br />You need to create a separate account if you want to switch roles.</label><br />
                </div>

            <label htmlFor="" className="text-xl font-bold">How will you use our platform?</label><br />
            
            <div className="flex-col">
                <label htmlFor="freelancer" className="text-xl">            
                    <input 
                        type="radio"
                        value="freelancer" //set unique value
                        checked={user.userType === 'freelancer'} //check userType freelancer
                        onChange={(e) => setUser({...user, userType: 'freelancer'})}
                        className="p-3 border m-1 border-gray-400 rounded-lg mb-4 focusLoutline-none focus:border-gray-800"
                        ></input>Freelancer</label>
                <br />
                <label htmlFor="client" className="text-xl">            
                    <input 
                        type="radio"
                        value="client"
                        checked={user.userType === 'client'}
                        onChange={(e) => setUser({...user, userType:'client'})}
                        className="p-3 border m-1 border-gray-400 rounded-lg mb-4 focusLoutline-none focus:border-gray-800"
                        ></input>Client</label>
                <br />
            </div>
            </div>
            <button 
                className="p-3 border font-bold border-gray-400 rounded-lg mb-4 focusLoutline-none focus:border-gray-800 hover:bg-slate-300"
                onClick={onSignup}>Continue to SignUp</button>
            <br />
    </div>
    </>
    )
}