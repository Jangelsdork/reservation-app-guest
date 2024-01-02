// "use client";

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import SheetComp from "@/components/SheetComp";
import { columns } from "./columns";
import { DataTable } from "./dataTable";

export const revalidate = "no-store"

const dayjs = require("dayjs");

const today = dayjs().format("YYYY-MM-DD").toString();

// const hostname = process.env.NEXT_PUBLIC_REF_URL

// database call to return all future bookings 
async function GET() {
  const prisma = new PrismaClient();
  try {
    const bookings = await prisma.booking.findMany({
      where: {
        booking_date: {
          gte: today,
        },
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
  // fetch(`${hostname}api/getUpcomingBookings`,
  //   {
  //     cache: "no-store",
  //   }
  // );
  const returnedData = await response.json();

  interface CalledData {
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

  console.log(returnedData);
  return returnedData.bookings.map((x: CalledData) => ({
    date: x.booking_date,
    firstName: x.guest.first_name,
    bookingTime: x.start_time,
    numberOfGuests: x.party_size,
    prefer_outdoors: false,
  }));
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Index() {
  const data = await getData();
  return (
    <div className="absolute delay-300 w-100% flex min-h-screen bg-gray-200">
      {/* Main content */}
      <div className="flex flex-row min-w-[100vw] justify-center align-end bg-neutral-800">
        <div className="flex-1 p-8">
          <SheetComp />
          {/* Main content goes here */}
          <div className="">
            <div className="container mx-auto max-w-[100vw] py-10">
              <DataTable columns={columns} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
