import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";


// eslint-disable-next-line import/prefer-default-export
export async function GET() {
const prisma = new PrismaClient();
try {
const bookings = await prisma.booking.findMany({
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