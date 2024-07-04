import Link from "next/link";
import NavigationBar from "./components/navbar"
import Scrollarea from "./components/scrollArea";
import DrawerClass from "./components/drawer";

export default function Home() {
  
  return (
    
    <main className="min-h-screen px-2 xl:px-32">
      <div className="flex flex-row justify-between p-3">
        <div className="p-2">
          PLANTIAM
        </div>
        <div className="invisible md:visible basis-1/2 px-5 pt-2">
          <ul className="flex flex-row justify-between">
            <li><Link href="/">SHOP</Link></li>
            <li><Link href="/">ORDER</Link></li>
            <li><Link href="/">SELL</Link></li>
            <li><Link href="/">BLOG</Link></li>
            <li><DrawerClass/></li>
          </ul>
        </div>
      </div>
      <hr/>
      <div className="invisible md:visible md:p-2">
        <NavigationBar/>
      </div>
      <hr className="invisible md:visible"/>
      <div className="mt-2">
        <Scrollarea/>
      </div>
    </main>
  );
}
