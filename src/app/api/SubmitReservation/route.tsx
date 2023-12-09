import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";

type Booking = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  marketing_consent: boolean; 
  booking_date: string;
  start_time: string; 
  end_time: String;
  party_size: number; 
}



const prisma = new PrismaClient()

// eslint-disable-next-line import/prefer-default-export
export  async function POST(req: Request) {
  const data = await req.json();
  console.log(data)

  return new Response("success")
  // const posts = await prisma.promoter.findMany()
  // return NextResponse.json(posts)
}