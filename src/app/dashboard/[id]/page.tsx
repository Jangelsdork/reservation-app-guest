import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";



const Page = async ({ params }: { params: { id: string } }) => {

    const currentPage = parseInt(params.id)

    async function GET() {
        const prisma = new PrismaClient();
        try {
          const bookings = await prisma.booking.findMany({
            where: {
              id: currentPage 
            },
            include: {
              guest: true,
            },
          });
          return NextResponse.json({ bookings });
        } catch (error) {
          return NextResponse.json({ error });
        }
      }
    
      async function getData( ): Promise<[]> {
        const response = await GET();
        const returnedData = await response.json();
        console.log(returnedData)
        return returnedData
      }
    
      const data = await getData()

    
  return (
    <div>
    <div>Booking: {params.id}</div>
    <div>Name: {data.bookings[0].guest.first_name}{" "}{data.bookings[0].guest.last_name}</div>
    </div>

  )
}

export default Page

