import React from 'react'
import Nav from './nav'
import { Button } from './ui/button'
import MNav from './mobileNav'
import Link from 'next/link'

function Header() {
  return (
    <div className=" p-11  lg:px-20 py-11 flex items-center justify-center  w-full ">
    <h1 className="text-white text-2xl font-mono font-bold mr-auto">Ericsson<span className="text-3xl text-emerald-600">.</span></h1>
  <div className="hidden lg:flex justify-center items-center">
  <Nav/>
  <Button asChild><Link href={"/"}>hire me</Link></Button>
  </div>
  <div className="lg:hidden">
    <MNav/>
    </div>
  
    </div>
  )
}

export default Header
