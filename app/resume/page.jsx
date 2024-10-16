"use client"

import {FaHtml5,FaCss3,FaJs,FaReact,FaNodeJs,FaPython} from "react-icons/fa"
import {SiTailwindcss,SiNextdotjs,SiDjango} from "react-icons/si"
import { Tabs,TabsContent,TabsList,TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"




const about ={
    title:'about me',
    decs:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, nisi impedit nesciunt, ipsum sit aspernatur autem ipsam eveniet consequuntur veniam.",
    info:[
      {
        fieldName:"Name",
        fieldValue:"Ericsson Ishaka"
      },
      {
        fieldName:"Phone",
        fieldValue:"(+257) 7757 6860"
      },
      {
        fieldName:"Experience",
        fieldValue:"+2 Years"
      },
      {
        fieldName:"Nationality",
        fieldValue:"Burundian"
      },
      {
        fieldName:"Email",
        fieldValue:"erickssonishaka@gmail.com"
      },
      {
        fieldName:"Freelance",
        fieldValue:"Available"
      },
    ]
}

const experience={
  icon : "/assets/resume/badge.svg",
  title: "My experience",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eligendi aut dignissimos autem eius sunt earum, doloribus voluptatum mollitia.",
  items:[
    {
      company:"Tech Solutions Inc",
      position: "Full Stack Developer",
      duration: "2022 - Presents"
    },
    {
      company:"Web designs studio",
      position: "Front-end Developer intern",
      duration: "Summer 2021"
    },
    {
      company:"E-commerce startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021"
    },
    {
      company:"E-commerce startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021"
    },
    {
      company:"E-commerce startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021"
    },
    {
      company:"E-commerce startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021"
    }
  ]
}

const education={
  icon : "/assets/resume/cap.svg",
  title: "My education",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eligendi aut dignissimos autem eius sunt earum, doloribus voluptatum mollitia.",
  items:[
    {
      institution:"University of Burundi",
      position: "Computer Engeniering",
      duration: "2022 - Presents"
    },
    {
      institution:"EaseyCoder",
      position: "Certified Python fondamental",
      duration: "2023"
    },
    {
      institution:"Junior Seminary of Kanyosha",
      position: "High school",
      duration: "2018-2021"
    }, 
    {
      institution:"Openclassroom",
      position: "Objectif IA : learn about artificial intelligence",
      duration: "05/2024"
    },   
    
  ]
}

const skills={
  title: "My education",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eligendi aut dignissimos autem eius sunt earum, doloribus voluptatum mollitia.",
  skillList:[
    {
      icon:<FaHtml5/>,
      name:"Html 5"
    },
    {
      icon:<FaCss3/>,
      name:"Css 3"
    },
    {
      icon:<FaJs/>,
      name:"Javacripts"
    },
    {
      icon:<FaReact/>,
      name:"React.js"
    },
    {
      icon:<SiNextdotjs/>,
      name:"Next.js"
    },
    {
      icon:<SiTailwindcss/>,
      name:"Tailwind.css"
    },
    {
      icon:<FaNodeJs/>,
      name:"Node.js"
    },
    {
      icon:<FaPython/>,
      name:"Python"
    },
    {
      icon:<SiDjango/>,
      name:"Django"
    },
    
  ]
}




function page() {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{
      opacity:1,
      transition:{
        delay:2.4,
        duration:0.4,
        ease:"easeIn"
      }
    }}
    className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="Experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] xl:mx-0">
          <TabsTrigger value="Experience">Experience</TabsTrigger>
          <TabsTrigger value="Education">Education</TabsTrigger>
          <TabsTrigger value="Skills">Skills</TabsTrigger>
          <TabsTrigger value="About">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
              <TabsContent value="Experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((itm,idx)=>{
                        return(
                          <li key={idx} className="bg-[#232329] h-[184px] py-6 px-10 rounded-lg flex flex-col justify-center tems-center lg:items-start gap-1">
                            <span className="text-emerald-400">{itm.duration}</span>
                            <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">{itm.position}</h3>
                            <div className="flex items-center gap-3">
                              <span className="w-2 h-2  rounded-full bg-emerald-400"></span>
                              <p className="text-white/60">{itm.company}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>

                </div>
                </TabsContent>
              {/* education */}
              <TabsContent value="Education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((itm,idx)=>{
                        return(
                          <li key={idx} className="bg-[#232329] h-[184px] py-6 px-10 rounded-lg flex flex-col justify-center tems-center lg:items-start gap-1">
                            <span className="text-emerald-400">{itm.duration}</span>
                            <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">{itm.position}</h3>
                            <div className="flex items-center gap-3">
                              <span className="w-2 h-2  rounded-full bg-emerald-400"></span>
                              <p className="text-white/60">{itm.institution}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>

                </div>
              </TabsContent>
              {/* skill */}
              <TabsContent value="Skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((itm,idx)=>{
                      return <li key={idx}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-emerald-400 transition-all duration-300">
                              {itm.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{itm.name}</p>
                          </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>;
                    })}
                  </ul>
                </div>
              </TabsContent>
              {/* about */}
              <TabsContent value="About" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.decs}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6  max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((itm,idx)=>{
                      return<li key={idx} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{itm.fieldName}</span>
                        <span className="text-[1erm]">{itm.fieldValue}</span>

                      </li>
                    })}
                  </ul>
                </div>
              </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default page
