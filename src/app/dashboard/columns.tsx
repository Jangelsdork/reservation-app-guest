/* eslint-disable import/prefer-default-export */
"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }

type BookingTable = {
    date: string;
    firstName: string;
    bookingTime: string;
    numberOfGuests: string;
    prefer_outdoors: boolean;
  }

export const columns: ColumnDef<BookingTable>[] = [
  {
    accessorKey: "date",
    header: "Booking Date",
  },
  {
    accessorKey: "firstName",
    header: "Name",
  },
  {
    accessorKey: "bookingTime",
    header: "Booking Time",
  },
  {
    accessorKey: "numberOfGuests",
    header: "Guests",
  },
  {
    accessorKey: "prefer_outdoors",
    header: "Outdoors?",
  }
]
