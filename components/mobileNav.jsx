"use client"
import Link from 'next/link'
import { Sheet, SheetContent,SheetTrigger } from './ui/sheet'
import { usePathname } from 'next/navigation'
import {CiMenuFries} from 'react-icons/ci'
function MNav() {
    const navItems = [
        {title: 'Home', path: '/'},
        {title: 'Services', path: '/service'},
        {title: 'Resume', path: '/resume'},
        {title: 'Work', path: '/work'},
        {title: 'Contact', path: '/contact'}
    ]
    const pathname=usePathname()
  return (
    <Sheet >
        <SheetTrigger>
            <CiMenuFries className='text-[2rem] text-emerald-600'/>
        </SheetTrigger>
        <SheetContent className="flex flex-col ">
            <div className='mt-24 mb-14 text-center text-2xl'>
                <Link href={'/'}>
                <h1 className="text-white text-2xl font-mono font-bold mr-auto">Ericsson<span className="text-3xl text-emerald-600">.</span></h1>
                </Link>
            </div>
            <nav  className='flex flex-col justify-center gap-5 items-center'>
            {navItems.map((item, index) => ( 
            <Link key={index} href={item.path} className={`${item.path=== pathname && 'border-b-2  border-b-emerald-600 text-emerald-600 '}  font-mono font-bold hover:text-emerald-600`}>{item.title}</Link>          
        ))}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MNav
