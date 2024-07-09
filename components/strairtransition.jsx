"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Stairs from "./stairs"

function Strairtransition() {
    const pathName= usePathname()

    
  return (
    <><AnimatePresence mode="wait">
      <div key={pathName}>
        <div className="flex h-screen w-screen  fixed top-0 left-0 right-0 z-40 pointer-events-none"> 
            <Stairs/>
        </div>
        <motion.div className="h-screen w-screen fixed pointer-events-none bg-primary top-0" initial={{ opacity: 1 }} animate={{ opacity: 0,
            transition:{
                delay:1,
                ease:"easeInOut",
                duration:0.4
            }
         }} />

      </div>
    </AnimatePresence>
    </>
    
  )
}

export default Strairtransition
