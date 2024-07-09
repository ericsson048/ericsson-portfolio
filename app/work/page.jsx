"use client"
import React,{useState} from 'react'

import {BsArrowUpRight,BsGithub} from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';
import WorkSliderBtns from '@/components/ui/WorkSliderBtns'

const projects=[
  {
    num:"01",
    category:"frontend",
    title:"project1",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in felis non neque finibus ullamcorper.",
    img:"/assets/work/thumb1.png",
    stack:[{name:"html 5"},{name:"css 3"},{name:"javascript"}],
    live:"",    
    github:""
  },
  {
    num:"02",
    category:"fullstack",
    title:"project2",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in felis non neque finibus ullamcorper.",
    stack:[{name:"next.js"},{name:"tailwindcss"}],
    img:"/assets/work/thumb2.png",
    live:"",    
    github:""
  },
  {
    num:"03",
    category:"fullstack",
    title:"project3",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in felis non neque finibus ullamcorper.",
    stack:[{name:"next.js"},{name:"tailwindcss"}],
    img:"/assets/work/thumb3.png",
    live:"",    
    github:""
  }
]
function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [project, setProject] = useState(projects[0])
  const handleSliderChange=(swiper)=>{
    const currentslide = swiper.activeIndex;
    setProject(projects[currentslide])
  }
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4,duration:0.4,ease:"easeIn"}}} className='min-h-[80vh] justify-center flex flex-col py-12  xl:px-0 '>
     <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className=" w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
       <div className="flex flex-col gap-[30px] h-[50%]">
       <div className="text-8xl font-extrabold text-transparent leading-none text-outline">{project.num}</div>
          <div className="text-[42px] font-bold leading-none text-white group-hover:text-emerald-400 transition-all duration-500 capitalize">{project.category} project</div>
          <p className="text-white/60" >
            {project.description}
          </p>
          <ul className='flex gap-4'>
            {project.stack.map((itm,idx)=>{
              return <li className="text-xl text-emerald-400" key={idx}>
                {itm.name}
                {idx !== project.stack.length-1 && ","}
                </li>
            })}
          </ul>
          <div className='border border-white/20'></div>
          <div className='flex items-center gap-[30px]'>
            <Link href={project.live}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                  <BsArrowUpRight  className="text-white text-3xl group-hover:text-emerald-400"/>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Live project</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            </Link>
            <Link href={project.github}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                  <BsGithub  className="text-white text-3xl group-hover:text-emerald-400"/>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Github repository</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            </Link>
          </div>
       </div>
        </div>
        <div className="w-full xl:w-[50%]">
          <Swiper
          spaceBetween={30}
          slidesPerView={1}
          className='xl:h-[520px] mb-12 relative '
          onSlideChange={handleSliderChange}
          >
          {projects.map((itm,idx)=>{
            return <SwiperSlide key={idx} className='w-full'>
              <div className="h-[460px] relative group bg-pink-50/60 flex justify-center items-center">
              <div className='h-full w-full bg-black/10 z-10 absolute top-0 bottom-0'></div>
              <div className="relative w-full h-full">
                <Image src={project.img} fill className='object-cover' alt=''/>
              </div>
              </div>
              </SwiperSlide>
          })}
          <WorkSliderBtns containerStyle='flex gap-2  items-center absolute  bottom-[calc(50%)]  z-20 w-full justify-between'
           buttomStyle={'bg-emerald-400/50 hover:bg-emerald-400-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'}/>
          </Swiper>
        </div>
      </div>
      {/* xl:right-0 xl:bottom-0  w-max   xl:justify-none*/}
     </div>
    </motion.div>
    
  )
}

export default page
