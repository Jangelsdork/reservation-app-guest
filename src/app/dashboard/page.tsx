// "use client";

import React from "react";
import { useState } from "react";
import { columns } from "./columns";
import { DataTable } from "./dataTable";
import SheetComp from "@/components/SheetComp"

const hostname = process.env.NEXT_PUBLIC_REF_URL


console.log(hostname+"api/getUpcomingBookings")

async function getData(): Promise<[]> {
  const response = await fetch(`${hostname}api/getUpcomingBookings`,
    {
      cache: "no-store",
    }
  );
  const returnedData = await response.json();

  console.log(returnedData);
  return returnedData.bookings.map((x) => ({
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
