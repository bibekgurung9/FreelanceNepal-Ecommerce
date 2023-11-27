"use client"; //to use client components like useState

import Link from "next/link";
import React from "react";

export default function LoginPage(){
    //user data to be accumalted
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });
    
    //login method
    const onLogin = async () => {

    }


    return(
        <>
        <div>
            <h1>Login Page</h1>
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
            <button onClick={onLogin}>Login</button>
            <br />
            <Link href="/signup">Go to Signup Page</Link>
        </div>
        </>
    )
}