import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image"

export default function DrawerClass(){
    const items:{name:String, url:string, price:number}[]=[{
        name:"Rose",
        url:"Rose.JPG",
        price:200,
    },{
        name:"Rose",
        url:"Rose.JPG",
        price:300,
    },{
        name:"Rose",
        url:"Rose.JPG",
        price:400,
    },{
        name:"Rose",
        url:"Rose.JPG",
        price:100,
    },{
        name:"Rose",
        url:"Rose.JPG",
        price:300,
    },{
        name:"Rose",
        url:"Rose.JPG",
        price:400,
    },{
        name:"Rose",
        url:"Rose.JPG",
        price:100,
    }];
    let totalAmount:number=0;
    for(let i:number=0;i<items.length;i++){
        totalAmount+=items[i].price;
    }
    return(
        <div>
            <Drawer>
                <DrawerTrigger><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
                </DrawerTrigger>
                <DrawerContent className="min-h-80">
                    <DrawerHeader >
                        <DrawerTitle className="text-center text-xl">This is your Cart Page</DrawerTitle>
                        <DrawerDescription className="text-center">Welcome! I know you are going to Buy</DrawerDescription>
                    </DrawerHeader>
                    { (items.length===0)?
                        <div className="text-center text-2xl p-5">
                          Your Cart is Empty!! Try to Add some items
                        </div>
                        :
                        <div>
                            <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {items.map((obj) => (
            <figure className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <Image
                    src={"/"+obj.url}
                    className="aspect-[3/4] h-fit w-fit object-cover"
                    width={200}
                    height={300} alt={""}                />
              </div>
              <figcaption className="flex flex-row justify-between p-2 text-xl text-center">
                <div className="flex flex-col gap-1">
                <div>{obj.name}</div>
                <div>{obj.price}</div>
                </div>
                <div>
                    <button className="border-2 border-red rounded-xl text-center hover:bg-red hover:text-white px-2 py-1">Remove</button>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
                    <DrawerFooter className="px-5 flex flex-row justify-between">
                        <DrawerClose>
                            <button className="hover:scale-105 font-bold border-2 border-red rounded-xl text-center bg-red text-white hover:duration-200 py-1 px-2">Close</button>
                        </DrawerClose>
                        <div className="hover:scale-x-105 font-bold border-4 border-midnight rounded-xl text-center hover:bg-midnight hover:text-white hover:duration-200 py-1 px-2">
                           Total Amount={totalAmount}
                        </div>
                        <button className="hover:scale-105 font-bold border-2 border-green rounded-xl text-center bg-green text-white hover:duration-200 py-1 px-2">Check Out</button>  
                    </DrawerFooter>
                    </div>
                    }
                </DrawerContent>
            </Drawer>

        </div>
    )
}