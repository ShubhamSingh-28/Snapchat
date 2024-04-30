import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'
function page() {
  return (
    <div>
      <h1 className=' text-center text-2xl font-medium my-2'>Sign up to Snapchat</h1>
      <Button className=' w-full gap-2 my-2 bg-blue-500'> <FaGoogle size={"24px"}/> Sign up with google</Button>
      <p>Already have an account ? <Link href={"/login"} className=' underline'>Login</Link></p>
    </div>
  )
}

export default page