"use client"; //to use client components like useState

import Link from "next/link";
import React from "react";

export default function SignupPage(){
    //user data to be accumalted
    const [user, setUser] = React.useState({
        name: "",
        email: "",
        password: "",
    });
    
    //login method
    const onSignup = async () => {

    }


    return(
        <>
        <div>
            <h1>Signup Page</h1>
            <label htmlFor="name">Name</label>
            <input 
                type="text"
                id="name"
                value={user.name}
                onChange={(e) => setUser({...user, name: e.target.value})}
                placeholder="Enter Your Name"
                />
            <br />
            <label htmlFor="email">Email</label>
            <input 
                type="email"
                id="email"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="Enter Your Email"
                />
            <br />
            <label htmlFor="password">Password</label>
            <input 
                type="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="Enter Your Password"
                />
            <br />
            <button onClick={onSignup}>Signup</button>
            <br />
            <Link href="/login">Go to Login Page</Link>
        </div>
        </>
    )
}