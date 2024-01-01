import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";

const dayjs = require('dayjs')

const today = dayjs().format("YYYY-MM-DD").toString()



// eslint-disable-next-line import/prefer-default-export
export async function GET() {
const prisma = new PrismaClient();
try {
const bookings = await prisma.booking.findMany({
    where: {
        booking_date: {
            gte: today
        }
    },
    include: {
        guest: true,
    }

}
)
return NextResponse.json({ bookings })
} catch (error) {
    return NextResponse.json({ error })
}


}