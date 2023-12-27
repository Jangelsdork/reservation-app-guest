import { PrismaClient } from "@prisma/client";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

type Booking = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  marketing_consent: boolean;
  date: string;
  bookingTime: string;
  endTime: string;
  numberOfGuests: string;
  prefer_outdoors: boolean;
};

// eslint-disable-next-line import/prefer-default-export
export async function POST(req: NextRequest): Promise<NextResponse<unknown>> {
  const prisma = new PrismaClient();

  try {
    // get the req.body
    const form: Booking = await req.json();
    console.log(form)


    // start a transaction
    await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // insert into guest table
      const newGuest = await tx.guest.create({
        data: {
          first_name: form.firstName,
          last_name: form.lastName,
          email: form.email,
          phone: form.phone,
          marketing_consent: false,
        },
      });

      // insert into booking table
      await tx.booking.create({
        data: {
          booking_date: form.date,
          start_time: form.bookingTime,
          end_time: form.endTime,
          party_size: form.numberOfGuests,
          guest: {
            connect: { id: newGuest.id },
          },
          venue: {
            connect: { id: 2 },
          },
        },
      });
    });
    return NextResponse.json({ message: "success" });
  } catch (error) {
    return NextResponse.json({ message: error });
  } finally {
    await prisma.$disconnect();
  }
}
