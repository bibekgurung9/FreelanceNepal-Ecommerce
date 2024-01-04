"use client";
import Link from "next/link";                
import axios from "axios";                   
import react from "react";                  
import { toast } from "react-hot-toast";    
import { useRouter } from "next/navigation"; 

export default function ProfilePage(){
    
    const router = useRouter();

    const [data,setData] = react.useState("nothing");

    const logout = async () => {
        try{
            await axios.get('api/users/logout')
            toast.success("Logout Successful!")
            router.push("/login")
        } catch(error:any){
            console.log(error.message)
            toast.error(error.message)
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get('api/users/me')
        console.log(res.data);
        setData(res.data.data._id)
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-4xl pb-3 mt-6">Profile Page</h1>
            <p className="text-center text-3xl pb-3">CLIENT SIDE PROFILE PAGE BASED ON USER TYPE</p>
            <h2 className="rounded pd-3 bg-red-500 m-4">
                {data === 'nothing' ? "Nothing Here!" : <Link href={`/profile/${data}`}>Your Profile Id:</Link>}
            </h2>
            <hr />

            <button
                onClick={logout}
                className="bg-blue-500 m-4">Logout</button>

            <button
                onClick={getUserDetails}
                className="bg-green-900 m-4">Get User Details</button>           
        </div>
    )
}