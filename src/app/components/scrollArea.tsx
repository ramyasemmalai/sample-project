import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from "next/image"


export default function Scrollarea() {
    const num=[1,2,3,4,5,6];
    return (
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {num.map((id) => (
            <figure key={id} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <Image
                          src="/Rose.JPG"
                          className="aspect-[3/4] h-fit w-fit object-cover"
                          width={300}
                          height={400} alt={""}                />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                Rose
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    )
  }