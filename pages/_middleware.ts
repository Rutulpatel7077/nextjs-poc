import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  try {
    const url = req.nextUrl.clone();
    // Get hostname (e.g. vercel.com, test.vercel.app, etc.)
    const hostname = req.headers.get("host");
    // If localhost, assign the host value manually
    // If prod, get the custom domain/subdomain value by removing the root URL
    // (in the case of "test.vercel.app", "vercel.app" is the root URL)
    const currentHost = hostname?.replace(":3000", "");
  
    url.pathname = `/_sites/${currentHost}${url.pathname}`;
    return NextResponse.rewrite(url);
  } catch (err) {
    console.error(err);
    return NextResponse.rewrite('/rutul-404');
  }
}
