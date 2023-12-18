import { NextRequest, NextResponse } from "next/server";

//middleware function represents the incoming requests
export function middleware(request: NextRequest){

    const path = request.nextUrl.pathname;

    //retrieves the path from the request url, check public path 
    const isPublicPath = path ==="/login" || path ==="/signup" || path ==="/home"

    //retrieves the 'token' from the request coookies
    const token = request.cookies.get("token")?.value || ""

    //if the path is a public path and there is a token, redirects to root URL 
    if(isPublicPath && token){
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }
    
    //if the path is not a public path and there is no token, redirects to login page 
    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }
}

//add here, so it is tracked, if not added here can be accessed without token
export const config = {
    matcher: [
        '/',
        '/profile',
        '/login',
        '/signup',
        '/home',
    ]
}