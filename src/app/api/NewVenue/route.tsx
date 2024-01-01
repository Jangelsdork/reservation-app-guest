import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server";

type Venue = {
  venue_name: string;
  address_street: string;
  address_city: string;
  address_postcode: string;
  address_country: string; 
  venue_booking_notes: string;
}




// eslint-disable-next-line import/prefer-default-export
export async function POST(req: NextRequest) {
 

  const prisma = new PrismaClient()

  

  try {

    // get the req.body 
  const form:Venue = await req.json();

    // start a transaction 
      // insert into guest table
      const newVenue = await prisma.venue.create({
        data: {
            venue_name: form.venue_name,
            address_street: form.address_street,
            address_city: form.address_city,
            address_postcode: form.address_postcode,
            address_country: form.address_country,
            venue_booking_notes: form.venue_booking_notes

        }
      })
    return NextResponse.json({ message: 'success', newVenue})
  }
  catch (error) {
    return NextResponse.json({message: 'error adding venue'})
  }finally {
    await prisma.$disconnect()
  }


}