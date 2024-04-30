import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { FaLaptop } from "react-icons/fa";
function Main() {
  return (
    <div className=' lg:flex justify-evenly items-start max-w-6xl mx-auto '>
      <div>
        <h1 className=' md:mt-28 md:text-6xl text-5xl px-8 md:px-0 font-medium'>Snapchat is <br/> now on the <br/> web!</h1>
        <h1 className=' my-5 text-2xl font-semibold'>Chat, Snap and Video call your <br/> friends from wherever you are.</h1>
        <Button className='gap-2 rounded-full px-6 mx-12'><FaLaptop /> Login to Chat</Button>
      </div>
      <div>
        <Image src="/myai-asset.png" width={580} height={750} alt='' />
      </div>
    </div>
  )
}

export default Main