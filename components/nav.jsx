"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'


function Nav() {
    // Navigation bar component here
  
       const navItems = [
            {title: 'Home', path: '/'},
            {title: 'Services', path: '/service'},
            {title: 'Resume', path: '/resume'},
            {title: 'Work', path: '/work'},
            {title: 'Contact', path: '/contact'}
        ]
        const pathname =usePathname()
    
  return (
      <ul className='flex gap-3 text-white'>
        {navItems.map((item, index) => (
          <li key={index} >
            <Link href={item.path} className={`${item.path=== pathname && 'border-b-2  border-b-emerald-600 text-emerald-600 '}  font-mono font-bold  hover:text-emerald-600`}>{item.title}</Link>
          </li>
        ))}
      </ul>
  )
}

export default Nav
