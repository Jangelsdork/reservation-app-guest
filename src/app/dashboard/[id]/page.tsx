import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

interface Booking {
  bookings: [
    {
  id: number;
  booking_date: string;
  start_time: string;
  end_time: string;
  party_size: string;
  guestId: number;
  venueId: number;
  guest: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    marketing_consent: boolean;
  };
}
]
}



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
    
      async function getData( ): Promise<Booking> {
        const response = await GET();
        const returnedData = await response.json();
        return returnedData
      }
    
      const data: Booking = await getData()
      console.log(data)

    
  return (
    <div>
    <div>Booking: {params.id}</div>
    <div>Name: {data.bookings[0].guest.first_name}{" "}{data.bookings[0].guest.last_name}</div>
    </div>

  )
}

export default Page

