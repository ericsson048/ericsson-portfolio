"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectLabel,SelectValue,SelectItem,SelectTrigger,SelectGroup,SelectContent  } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import {FaPhoneAlt,FaEnvelope,FaMapMarkedAlt} from "react-icons/fa"


const info=[
  {
    icon:<FaPhoneAlt/>,
    title:"Phone",
    description:"(+257) 775 768 60"
  },
  {
    icon:<FaEnvelope/>,
    title:"Email",
    description:"erickssonishaka@gmail.com"
  },
  {
    icon:<FaMapMarkedAlt/>,
    title:"Address",
    description:"Bujumbura, Mutimbuzi, Kajaga 3"
  },
]


function page() {
  return (
    <motion.section
    initial={{opacity:0}}
    animate={{
      opacity:1,
      transition:{
        delay:2.4,
        duration:0.4,
        ease:"easeIn"
      }
    }}
    className="py-6"
    >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="xl:w-[54%] order-2 xl:order-none">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-emerald-400">{"Let's work together"}</h3>
            <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facere sapiente id voluptatum! Explicabo deserunt consequatur repellendus sint repellat totam .</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="text" placeholder="FirstName"/>
              <Input type="text" placeholder="LastName"/>
              <Input type="email" placeholder="email@gmail.com"/>
              <Input type="phone" placeholder="(+257)77576860"/>
            </div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service"/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="fw">Fullstack website</SelectItem>
                  <SelectItem value="frw">landing website</SelectItem>
                  <SelectItem value="lwd">Learning web development</SelectItem>
                  <SelectItem value="lp">Learning Python</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Textarea className="h-[200px]" placeholder="type your message here"/>
            <Button size="md" className="max-w-40 h-12">Send message</Button>
          </form>
        </div>
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((itm,idx)=>{
              return <li key={idx} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-16 xl:h-16 bg-[#27272c] text-emerald-400 rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{itm.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{itm.title}</p>
                      <h3 className="text-xl">{itm.description}</h3>
                    </div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
    </motion.section>
  )
}

export default page
