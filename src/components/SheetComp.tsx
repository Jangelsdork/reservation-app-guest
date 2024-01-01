import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";

  import { RxHamburgerMenu } from "react-icons/rx";
  import Avvvatars from 'avvvatars-react'
import { BsCalendar, BsPeople, BsShop } from "react-icons/bs";



const SheetComp = () => (
    <Sheet>
            <SheetTrigger><RxHamburgerMenu /></SheetTrigger>
            <SheetContent side={"left"} className="w-[80vw] sm:w-[540px]">
            <div id='user_block' className='p-4 flex flex-row items-center border-b border-neutral-500'>
              <div id='avatar'> <Avvvatars value="JM" /> </div> {/*to do: get avatar url, load avatar (or, change avvvatars value) */}
              <div className='flex flex-col pl-4'>
                <h1 className='text-whitete xt-xl font-bold '>Jack Mangelsdorf</h1> {/*to do: get user name*/}
                <h2 className='text-xs '>Super User</h2> {/*to do: get role*/}
              </div>
            </div>
            <div id='menu' className=' flex flex-col h-[50vh] gap-8 pt-10'>
              <div className='flex flex-row  items-center gap-4 pl-8'><BsCalendar /> Bookings</div>
              <div className='flex flex-row  items-center gap-4 pl-8'><BsShop />Manage venue</div>
              <div className='flex flex-row  items-center gap-4 pl-8'><BsPeople /> Manage People</div>
            </div>
            </SheetContent>
          </Sheet>
  )

export default SheetComp