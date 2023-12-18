import { PrismaClient } from "@prisma/client"
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

type Booking = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  marketing_consent: boolean; 
  booking_date: string;
  start_time: string; 
  end_time: string;
  party_size: number; 
  prefer_outdoors: boolean
}




// eslint-disable-next-line import/prefer-default-export
export  async function POST(req: Request, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'method not allowed'});
  }

  const prisma = new PrismaClient()

  

  try {

    // get the req.body 
  const form:Booking = await req.json();

    // start a transaction 
    await prisma.$transaction(async (tx:Prisma.TransactionClient) => {
      // insert into guest table
      const newGuest = await tx.guest.create({
        data: {
          first_name: form.first_name,
          last_name: form.last_name,
          email: form.email,
          phone: form.phone,
          marketing_consent: false,
        }
      })

      // insert into booking table
      await tx.booking.create({
        data: {
          booking_date: form.booking_date,
          start_time: form.start_time,
          end_time: form.end_time,
          party_size: form.party_size,
          guest: {
            connect: { id: newGuest.id },
          },
          venue: {
            connect: { id : 2 }
          } 
        }
      });
    });
    return NextResponse.json({ message: 'success' })
  }
  catch (error) {
    return NextResponse.json({message: error, POST})
  }finally {
    await prisma.$disconnect()
  }

}