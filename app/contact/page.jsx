"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectLabel, SelectValue, SelectItem, SelectTrigger, SelectGroup, SelectContent } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+257) 775 768 60"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "erickssonishaka@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    description: "Bujumbura, Burundi"
  }
]

function ContactPage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn"
        }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Form Section */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-emerald-400">Let&apos;s work together</h3>
              <p className="text-white/60">
                Have a project in mind or just want to say hi? Fill out the form below and I&apos;ll get back to you as soon as possible. I&apos;m always excited to discuss new opportunities and collaborate on interesting projects.
              </p>

              {/* Name Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  type="text" 
                  placeholder="First Name" 
                  required
                  aria-label="First Name"
                />
                <Input 
                  type="text" 
                  placeholder="Last Name" 
                  required
                  aria-label="Last Name"
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  type="email" 
                  placeholder="Email address" 
                  required
                  aria-label="Email"
                />
                <Input 
                  type="tel" 
                  placeholder="Phone number" 
                  aria-label="Phone"
                />
              </div>

              {/* Service Selection */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-dev">Web Development</SelectItem>
                    <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                    <SelectItem value="backend">Backend Development</SelectItem>
                    <SelectItem value="fullstack">Full Stack Solution</SelectItem>
                    <SelectItem value="consulting">Technical Consulting</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Message */}
              <Textarea 
                className="h-[200px]" 
                placeholder="Tell me about your project or idea..."
                required
                aria-label="Message"
              />

              {/* Submit Button */}
              <Button 
                size="md" 
                className="max-w-40 h-12 bg-emerald-600 hover:bg-emerald-500"
                type="submit"
              >
                Send message
              </Button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((itm, idx) => (
                <li key={idx} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-16 xl:h-16 bg-[#27272c] text-emerald-400 rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{itm.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{itm.title}</p>
                    <h3 className="text-xl">{itm.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactPage
