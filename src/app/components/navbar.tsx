import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"

export default function NavigationBar(){
    const list=[{
        name:"Features",
        li:["New Arrivals","Gifts"],
      },{
        name:"Plant Types",
        li:["Trees","Fruits","Herbs","Vegitables","Vines"],
      },{
        name:"Plant Styles",
        li:["Garden Vibes","Flower and Fruit Colors"],
      },{
        name:"Planting Conditions",
        li:["Soil Type","Water need","Sun Exposure"],
      },{
        name:"Seasonal Interest",
        li:["Spring","Summer","Fall","Winter"],
      }];
    return(
        <div className="flex flex-row justify-between">
        
                { 
                list.map((obj)=>(
                    <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="w-full text-xl">{obj.name}</NavigationMenuTrigger>
                        <NavigationMenuContent className="min-w-80 p-5 rounded-sm">
                           <div className="flex flex-col gap-2">
                            {
                            obj.li.map((item)=>(
                                <NavigationMenuLink className="text-center border-2 hover:border-midnight rounded-xl p-2">{item}</NavigationMenuLink>
                            ))
                            }
                           </div>
                        </NavigationMenuContent>
                
                </NavigationMenuItem>
                </NavigationMenuList>
        </NavigationMenu>
                ))
                
            }
        </div>

    )
}