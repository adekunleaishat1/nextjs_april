
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import cookie from "js-cookie";



// const protectedRoutes = ['/',]  // Add more as needed

// export function middleware(request: NextRequest) {
//     const token = request.cookies.get('token')?.value

//     const { pathname } = request.nextUrl

  
//     const isProtected = protectedRoutes.some((route) =>
//         pathname.startsWith(route)
//     )

//     if (isProtected) {
       
//         if (!token) {
//             const loginUrl = new URL('/login', request.url)
//             return NextResponse.redirect(loginUrl)
//         }
//     }

//     // Allow request to proceed
//     return NextResponse.next()
// }
 export const middleware = (request:NextRequest) =>{
    const token = cookie.get("token")
       console.log(token);
       
    if (request.nextUrl.pathname ===  "/") {
        if (!token) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }

    return NextResponse.next()
        
}

export const config = {
    matcher: ['/',], 
}