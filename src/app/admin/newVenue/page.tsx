/* eslint-disable import/extensions */

"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    venue_name: z.string().min(1).max(200),
    address_street: z.string().min(1).max(100),
    address_city: z.string().min(1).max(50),
    address_postcode: z.string().min(1).max(20),
    address_country: z.string().min(1).max(50),
    venue_booking_notes: z.string().min(0).max(500)
})


export default function VenueForm(){

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            venue_name: "",
            address_street: "",
            address_city: "",
            address_postcode: "",
            address_country: ""
        }
    })

    const postForm = async (values: z.infer<typeof formSchema>) => {
        try{
          const res: Response = await fetch ("/api/NewVenue",
          {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json"
            },
          })
          const data = await res.json();
    
          if(data){
            console.log(data)
          }
        } catch (error){
          console.log(error)
        }
      }

    // submit handler

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(JSON.stringify(values))
        await postForm(values)
    }

 
    
    // form field 
    return (
        <div className="flex m-10">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField 
                control={form.control}
                name="venue_name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Venue Name</FormLabel>
                        <FormControl>
                            <Input placeholder="McDoogles" {...field} />
                        </FormControl>
                        <FormDescription>The name of your venue, as you would like it to appear to customers</FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField 
                control={form.control}
                name="address_street"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Street address</FormLabel>
                        <FormControl>
                            <Input placeholder="123 Wallaby Way" {...field} />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField 
                control={form.control}
                name="address_city"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                            <Input placeholder="Sydney" {...field} />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField 
                control={form.control}
                name="address_postcode"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Postcode</FormLabel>
                        <FormControl>
                            <Input placeholder="2000" {...field} />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField 
                control={form.control}
                name="address_country"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                            <Input placeholder="Australia" {...field} />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField 
                control={form.control}
                name="venue_booking_notes"
                render={({ field }) => (

    // needs to be changed to a text area    

                    <FormItem>
                        <FormLabel>Venue booking notes</FormLabel>
                        <FormControl>
                            <Input placeholder="..." {...field} />
                        </FormControl>
                        <FormDescription>Any notes regarding bookings that will be displayed to customers when booking... E.g: Groups over 10 please call</FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
        </div>
    )
}