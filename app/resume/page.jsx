"use client"

import {FaHtml5,FaCss3,FaJs,FaReact,FaNodeJs,FaPython} from "react-icons/fa"
import {SiTailwindcss,SiNextdotjs,SiDjango} from "react-icons/si"
import { Tabs,TabsContent,TabsList,TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"




const about = {
  title: 'About me',
  description: "Passionate Computer Engineering student at the University of Burundi with a strong foundation in full-stack development. I specialize in creating modern, responsive web applications using cutting-edge technologies. Driven by curiosity and a commitment to clean code, I'm always eager to learn and tackle new challenges.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ericsson Ishaka"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+257) 7757 6860"
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Burundian"
    },
    {
      fieldName: "Email",
      fieldValue: "erickssonishaka@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "French, English, Kirundi"
    },
  ]
}

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "Professional journey building modern web applications, from freelance projects to collaborative development. Focused on delivering quality solutions with React, Next.js, and Python ecosystems.",
  items: [
    {
      company: "Freelance Developer",
      position: "Full Stack Developer",
      duration: "2023 - Present"
    },
    {
      company: "Personal Projects",
      position: "Web Developer",
      duration: "2022 - Present"
    },
    {
      company: "Open Source Contributions",
      position: "Contributor",
      duration: "2023 - Present"
    },
    {
      company: "University Projects",
      position: "Team Lead Developer",
      duration: "2022 - Present"
    }
  ]
}

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "Academic background in Computer Engineering complemented by continuous self-learning through online platforms and real-world projects. Committed to staying current with industry best practices.",
  items: [
    {
      institution: "University of Burundi",
      degree: "Computer Engineering",
      duration: "2022 - Present"
    },
    {
      institution: "EaseyCoder",
      degree: "Certified Python Fundamentals",
      duration: "2023"
    },
    {
      institution: "OpenClassrooms",
      degree: "Web Development Specialization",
      duration: "2022 - 2023"
    },
    {
      institution: "freeCodeCamp",
      degree: "Responsive Web Design",
      duration: "2022"
    },
    {
      institution: "Junior Seminary of Kanyosha",
      degree: "High School Diploma",
      duration: "2018 - 2021"
    }
  ]
}

const skills = {
  title: "My Skills",
  description: "Proficient in modern web technologies with hands-on experience in building full-stack applications. Strong foundation in both frontend and backend development, with a focus on creating scalable and maintainable solutions.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5"
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    },
    {
      icon: <FaReact />,
      name: "React.js"
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js"
    },
    {
      icon: <FaPython />,
      name: "Python"
    },
    {
      icon: <SiDjango />,
      name: "Django"
    }
  ]
}




function ResumePage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn"
        }
      }}
      className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="Experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsTrigger value="Experience">Experience</TabsTrigger>
            <TabsTrigger value="Education">Education</TabsTrigger>
            <TabsTrigger value="Skills">Skills</TabsTrigger>
            <TabsTrigger value="About">About me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="Experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((itm, idx) => (
                      <li key={idx} className="bg-[#232329] h-[184px] py-6 px-10 rounded-lg flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-emerald-400">{itm.duration}</span>
                        <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">{itm.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                          <p className="text-white/60">{itm.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="Education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((itm, idx) => (
                      <li key={idx} className="bg-[#232329] h-[184px] py-6 px-10 rounded-lg flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-emerald-400">{itm.duration}</span>
                        <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">{itm.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                          <p className="text-white/60">{itm.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="Skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((itm, idx) => (
                    <li key={idx}>
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
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="About" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((itm, idx) => (
                    <li key={idx} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{itm.fieldName}:</span>
                      <span className="text-base">{itm.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default ResumePage
