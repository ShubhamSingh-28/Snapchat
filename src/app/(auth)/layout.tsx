import Image from "next/image"
import React from "react"


function layout({children}:{children:React.ReactNode}) {
  return (
    <div className=" bg-gray-300 h-screen">
        <div className=" w-screen h-screen flex items-center  justify-center  ">
            <div className=" bg-white p-10 flex flex-col items-center text-center shadow-xl rounded-lg  gap-4">
                <Image  src={"/Snapchat.png"} alt="" width={40} height={40}/>
        {children}
            </div>
        </div>
    </div>
  )
}
export default layout