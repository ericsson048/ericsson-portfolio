"use client"
import React, { useState, useEffect } from 'react'

import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { FiStar, FiGitBranch, FiCalendar } from "react-icons/fi"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import Link from 'next/link'
import WorkSliderBtns from '@/components/ui/WorkSliderBtns'

// Projets par défaut (fallback)
const defaultProjects = [
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

function WorkPage() {
  const [projects, setProjects] = useState(defaultProjects)
  const [project, setProject] = useState(defaultProjects[0])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Récupérer les projets depuis l'API GitHub
    fetch('/api/github/repos')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch repos')
        return res.json()
      })
      .then(data => {
        if (data.success && data.repos && data.repos.length > 0) {
          setProjects(data.repos)
          setProject(data.repos[0])
        }
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching GitHub repos:', err)
        setError(err.message)
        setLoading(false)
        // Garder les projets par défaut en cas d'erreur
      })
  }, [])

  const handleSliderChange = (swiper) => {
    const currentslide = swiper.activeIndex;
    setProject(projects[currentslide])
  }

  // Formater la date de mise à jour
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A'
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} 
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className="container mx-auto">
        {/* Header avec titre et compteur */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 2.6, duration: 0.4 } }}
          className="text-center mb-12"
        >
          <h2 className="h2 mb-4">My Latest Projects</h2>
          <p className="text-white/60 max-w-[600px] mx-auto">
            Explore my {projects.length} GitHub repositories showcasing various technologies and solutions
          </p>
        </motion.div>

        {/* Messages d'erreur */}
        {error && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg"
          >
            <p className="text-yellow-500 text-sm">⚠️ Using cached projects</p>
          </motion.div>
        )}

        {/* État de chargement */}
        {loading ? (
          <div className="text-center text-white">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mb-4"></div>
            <p className="text-xl">Loading amazing projects...</p>
          </div>
        ) : (
          <div className="flex flex-col xl:flex-row xl:gap-[40px]">
            {/* Section gauche : Détails du projet */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 2.8, duration: 0.5 } }}
              className="w-full xl:w-[50%] xl:h-[580px] flex flex-col xl:justify-between order-2 xl:order-none"
            >
              <div className="flex flex-col gap-[25px]">
                {/* Numéro du projet */}
                <div className="text-8xl xl:text-9xl font-extrabold text-transparent leading-none text-outline">
                  {project.num}
                </div>

                {/* Titre et catégorie */}
                <div className="space-y-2">
                  <h3 className="text-[36px] xl:text-[42px] font-bold leading-none text-white hover:text-emerald-400 transition-all duration-300 capitalize">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-emerald-400/80 text-lg">
                    <span className="capitalize">{project.category}</span>
                    {project.category && <span>•</span>}
                    <span>Project</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/70 text-base leading-relaxed max-w-[500px]">
                  {project.description}
                </p>

                {/* Stack technologique */}
                {project.stack && project.stack.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-white/80 text-sm font-semibold uppercase tracking-wider">
                      Technologies
                    </h4>
                    <ul className='flex gap-3 flex-wrap'>
                      {project.stack.map((itm, idx) => (
                        <li 
                          key={idx}
                          className="px-3 py-1 bg-emerald-400/10 border border-emerald-400/30 rounded-full text-sm text-emerald-400 hover:bg-emerald-400/20 transition-all duration-200"
                        >
                          {itm.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Statistiques GitHub */}
                {(project.stars !== undefined || project.forks !== undefined || project.updated) && (
                  <div className="flex items-center gap-6 py-3 border-y border-white/10">
                    {project.stars !== undefined && (
                      <div className="flex items-center gap-2 text-white/60">
                        <FiStar className="text-yellow-500" />
                        <span className="text-sm">{project.stars}</span>
                      </div>
                    )}
                    {project.forks !== undefined && (
                      <div className="flex items-center gap-2 text-white/60">
                        <FiGitBranch className="text-emerald-400" />
                        <span className="text-sm">{project.forks}</span>
                      </div>
                    )}
                    {project.updated && (
                      <div className="flex items-center gap-2 text-white/60">
                        <FiCalendar className="text-blue-400" />
                        <span className="text-sm">{formatDate(project.updated)}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Boutons d'action */}
                <div className='flex items-center gap-4 pt-4'>
                  {project.github && (
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-[60px] h-[60px] rounded-full bg-white/5 border border-white/10 flex justify-center items-center group hover:bg-emerald-400 hover:border-emerald-400 transition-all duration-300'>
                            <BsGithub className="text-white text-2xl group-hover:scale-110 transition-transform duration-300" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View on GitHub</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}
                  {project.live && (
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-[60px] h-[60px] rounded-full bg-white/5 border border-white/10 flex justify-center items-center group hover:bg-emerald-400 hover:border-emerald-400 transition-all duration-300'>
                            <BsArrowUpRight className="text-white text-2xl group-hover:scale-110 transition-transform duration-300" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live Demo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}
                  {!project.live && !project.github && (
                    <p className="text-white/40 text-sm italic">No links available</p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Section droite : Carrousel d'images */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 2.8, duration: 0.5 } }}
              className="w-full xl:w-[50%] order-1 xl:order-none"
            >
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className='xl:h-[580px] mb-12 xl:mb-0 relative'
                onSlideChange={handleSliderChange}
              >
                {projects.map((itm, idx) => (
                  <SwiperSlide key={idx} className='w-full'>
                    <div className="h-[400px] xl:h-[580px] relative group rounded-lg overflow-hidden">
                      {/* Overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 group-hover:from-black/60 transition-all duration-300'></div>
                      
                      {/* Image du projet */}
                      <div className="relative w-full h-full bg-gradient-to-br from-emerald-900/20 to-primary/20">
                        <Image 
                          src={project.img} 
                          fill 
                          className='object-cover group-hover:scale-105 transition-transform duration-500' 
                          alt={project.title || 'Project screenshot'}
                          priority={idx === 0}
                        />
                      </div>

                      {/* Badge de projet en haut à droite */}
                      <div className="absolute top-4 right-4 z-20 bg-emerald-400/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-black">
                        Project {itm.num}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                
                {/* Boutons de navigation */}
                <WorkSliderBtns 
                  containerStyle='flex gap-2 items-center absolute bottom-[calc(50%-22px)] z-20 w-full justify-between px-4'
                  buttomStyle='bg-emerald-400/80 hover:bg-emerald-400 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-full transition-all duration-300 hover:scale-110'
                />
              </Swiper>

              {/* Indicateur de progression */}
              <div className="text-center mt-4 text-white/60 text-sm">
                <span className="text-emerald-400 font-semibold">{projects.indexOf(project) + 1}</span>
                {' / '}
                <span>{projects.length}</span>
                {' projects'}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default WorkPage
