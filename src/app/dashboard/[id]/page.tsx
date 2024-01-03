import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import SheetComp from "@/components/SheetComp";

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
      const thisBooking = data.bookings[0]
      

    
  return (
    <div className="p-10 min-h-[100vh] bg-neutral-800">
    <SheetComp />
    <div className="p-10  sm:grid sm:grid-cols-2 col-span-1 bg-neutral-800">
      <div>
    <h2 className="">Booking info</h2>
    <p>Date: {thisBooking.booking_date}</p>
    <p>Time: {thisBooking.start_time}</p>
    <p>Party size: {thisBooking.party_size}</p>
    <p>Party size: {thisBooking.party_size}</p>
    <p>Prefer outdoors?: No</p>
      </div>
      <div>
    <h2 className="pt-10 sm:pt-0">Guest info</h2>
    <p>Name: {thisBooking.guest.first_name}{" "}{thisBooking.guest.last_name}</p>
    <p>Email: {thisBooking.guest.email}</p>
    <p>Phone: {thisBooking.guest.phone}</p>
    <p>Marketing consent?: </p>
    </div>

    </div>
    </div>

  )
}

export default Page

