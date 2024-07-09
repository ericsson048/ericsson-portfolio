"use client"

import { Description } from "@radix-ui/react-dialog"
import Link from "next/link"
import { BsArrowDownRight} from "react-icons/bs"
import { motion } from "framer-motion"


const services=[
  {
    num:'01',
    title:'Web developments',
    Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    href:""
  },
  {
    num:'02',
    title:'Mobile developments',
    Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    href:""

  },
  {
    num:'03',
    title:'Machine learning',
    Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    href:""

  },
  {
    num:'04',
    title:'SEO',
    Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    href:""

  }
]
 
function page() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center py-12  xl:py-0">
      <div className="container mx-auto">
        <motion.div  initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4, ease:"easeIn"}}} className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((services,idx)=>{
            return(
              <div key={idx} className="flex-1 flex flex-col justify-center gap-6 group">
                 <div className=" w-full flex justify-between items-center">
                 <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">{services.num}</div>
                  <Link href={services.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-emerald-600 transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                 </div>
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-emerald-600 transition-all duration-500">{services.title}</h2>
                  <p className="text-white/60 ">{services.Description}</p>
                  <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default page
