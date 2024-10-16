"use client"
import { Button } from "@/components/ui/button";
import {FiDownload} from 'react-icons/fi'

function Resume() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = './CV Resume.pdf';
        link.setAttribute('download', 'CV Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  return (
    <Button variant="outline" size="lg" onClick={handleDownload} className=" self-center rounded-full xl:uppercase xl:self-start flex items-center gap-2">
        <span>Download CV</span>
       <FiDownload />
    </Button>
  )
}

export default Resume