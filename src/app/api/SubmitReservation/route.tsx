import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";



const prisma = new PrismaClient()

export  async function GET(request) {
  const posts = await prisma.promoter.findMany()
  return NextResponse.json(posts)
}