import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextFetchEvent, ev: NextRequest) {
    //Adicionar veridicações

    return NextResponse.redirect('http://localhost:3000/')
}