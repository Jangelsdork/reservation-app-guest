/* eslint-disable import/prefer-default-export */

"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type BookingTable = {
    date: string;
    firstName: string;
    bookingTime: string;
    numberOfGuests: string;
    prefer_outdoors: boolean;
    id: number
  }

export const columns: ColumnDef<BookingTable>[] = [
  {
    accessorKey: "date",
     header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Booking Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
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
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const booking = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => window.open(process.env.NEXT_PUBLIC_REF_URL + "/dashboard/" + booking.id)}
            >
              View full booking details
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem>View customer</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
