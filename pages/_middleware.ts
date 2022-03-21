import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  req.nextUrl.pathname = "/strange";
  return NextResponse.rewrite(req.nextUrl);
}
