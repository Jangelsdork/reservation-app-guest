/* eslint-disable import/prefer-default-export */
"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button";

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
     header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Booking Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
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
