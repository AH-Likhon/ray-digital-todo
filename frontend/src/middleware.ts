import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'

export default function middleware(req: NextRequest){
    // const verify = Cookies.get("loggedin");
    let verify:any = req.cookies.get("loggedin");
    let url = req.url;
    
    if (verify && url === "http://localhost:3000/") {
        return NextResponse.redirect(req.nextUrl);
    }

    if(!verify && url.includes('/todo')){
        // console.log(verify, url)
        // Cookies.set("loggedin", "true");
        return NextResponse.redirect(new URL('/', req.url));
        // return NextResponse.redirect("http://localhost:3000");
    }

}

export const config = {
    matcher: ['/todo', '/register'],
  }