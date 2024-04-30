"use client"
import { signIn } from '@/auth'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'

function page() {
  return (
    <form >
      <h1 className=' text-center text-2xl font-medium my-2'>Login to Snapchat</h1>
      <Button onClick={()=>signIn("google")} className=' w-full gap-2 my-2 bg-blue-500'> <FaGoogle size={"24px"}/>  Login with google</Button>
      <p>not have an account ? <Link href={"/signup"} className=' underline'>Sign up</Link></p>
    </form>
  )
}

export default page