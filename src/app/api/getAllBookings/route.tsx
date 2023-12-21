import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest): Promise<NextResponse<unknown>> {
const prisma = new PrismaClient();
try {
const bookings = await prisma.booking.findMany()
return NextResponse.json({ bookings })
} catch (error) {
    return NextResponse.json({ error })
}


}