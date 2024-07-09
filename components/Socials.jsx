'use client'
import Link from 'next/link'
import { FaLinkedinIn, FaGithub,FaYoutube,FaTwitter} from 'react-icons/fa'

function Socials({containerStyle,iconStyle}) {
    const socials=[{icon:<FaLinkedinIn/>, path:"/"},{icon:<FaGithub/>, path:"https://github.com/ericsson048"},{icon:<FaYoutube/>, path:"/"},{icon:<FaTwitter/>, path:"/"},]
  return (
    <div className={containerStyle}>
      {socials.map((social,idx)=>{
        return <Link key={idx} className={iconStyle} href={social.path}>{social.icon}</Link>
      })}
    </div>
  )
}

export default Socials
