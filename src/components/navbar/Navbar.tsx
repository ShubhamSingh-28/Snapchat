import Image from "next/image"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { TbGridDots } from "react-icons/tb"
import { IoMdLogOut } from "react-icons/io"


function Navbar() {
  return (
    <div className=" flex md:justify-between justify-center items-center py-4 md:px-10 w-screen ">
      <div className=" flex items-center gap-3">
        <Image src="/Snapchat.png" width={50} height={50} alt="" className=" py-0" />
        <Input placeholder="Search" className=" rounded-full"/>
      </div>
      <div className=" lg:block hidden">
      <Button variant={"ghost"} className=" rounded-2xl">Stories</Button>
      <Button variant={"ghost"} className=" rounded-2xl">Spotlight</Button>
      <Button variant={"ghost"} className=" rounded-2xl">Chat</Button>
      <Button variant={"ghost"} className=" rounded-2xl">Lenses</Button>
      </div>
      <div className="hidden md:flex items-center gap-2">
      <Button size={"icon"} variant={"secondary"} className=" rounded-full bg-white text-black " >
        <TbGridDots size={"18px"}/>
      </Button>
      <Button className=" rounded-full" >SnapChat Ads</Button>
      <Button className=" rounded-full">DownLoad</Button>
      <Button size={"icon"} className="rounded-full">
      <IoMdLogOut size={"18px"}/>
      </Button>
      </div>
      </div>
  )
}

export default Navbar