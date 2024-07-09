"use client"
import { AnimatePresence,motion } from "framer-motion"
import { usePathname } from "next/navigation"

function PageTransition({children}) {
    const pathName= usePathname()
  return (
    <AnimatePresence>
        
        <div key={pathName}>
        <motion.div
        initial={{opacity:1}}
        animate={{
            opacity:0,
            transition:{delay:1,duration:0.4,ease:"easeInOut"}
        }}
        className="w-screen h-screen pointer-events-none fixed bg-primary top-0"
        />
        {children}
        </div>
    </AnimatePresence>
  )
}

export default PageTransition
