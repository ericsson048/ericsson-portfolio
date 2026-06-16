"use client"

import Link from "next/link"
import { BsArrowDownRight } from "react-icons/bs"
import { motion } from "framer-motion"

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks like React, Next.js, and Node.js. Responsive design, fast performance, and SEO-optimized solutions tailored to your business needs.',
    href: "/contact",
    technologies: ['React', 'Next.js', 'Node.js', 'Tailwind CSS']
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that enhance user experience. From wireframes to high-fidelity prototypes, I create designs that are both aesthetic and functional.',
    href: "/contact",
    technologies: ['Figma', 'Adobe XD', 'Responsive Design', 'Prototyping']
  },
  {
    num: '03',
    title: 'Backend Development',
    description: 'Robust server-side solutions with RESTful APIs, database design, and authentication systems. Scalable architecture using Python, Django, and modern cloud technologies.',
    href: "/contact",
    technologies: ['Python', 'Django', 'REST API', 'PostgreSQL']
  },
  {
    num: '04',
    title: 'Full Stack Solutions',
    description: 'End-to-end development services from concept to deployment. Complete web applications with both frontend and backend, database integration, and continuous deployment.',
    href: "/contact",
    technologies: ['MERN Stack', 'Next.js', 'Django', 'MongoDB']
  }
]

function ServicesPage() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 2.2, duration: 0.4, ease: "easeIn" } }}
          className="text-center mb-12 xl:mb-16"
        >
          <h1 className="h2 mb-4">My Services</h1>
          <p className="text-white/70 max-w-[600px] mx-auto">
            Specialized in creating modern, high-performance web applications with cutting-edge technologies
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 2.6 + idx * 0.1, duration: 0.4 } }}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              {/* Header avec numéro et bouton */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-300">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-emerald-600 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>

              {/* Titre */}
              <h2 className="text-[36px] xl:text-[42px] font-bold leading-none text-white group-hover:text-emerald-600 transition-all duration-500">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-white/70 leading-relaxed">
                {service.description}
              </p>

              {/* Technologies */}
              {service.technologies && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {service.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 text-xs font-medium bg-emerald-400/10 text-emerald-400 rounded-full border border-emerald-400/20 group-hover:bg-emerald-400/20 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Separator */}
              <div className="border-b border-white/20 w-full"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 3, duration: 0.4 } }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">
            Interested in working together?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-500 transition-all duration-300 font-semibold"
          >
            Get in Touch
            <BsArrowDownRight className="rotate-[-45deg]" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPage
