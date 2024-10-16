import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Resume from "@/components/Resume";


export default function Home() {

  return (
    <section className="h-full">
      <div className="container mx-auto h-full ">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center flex flex-col justify-center items-center xl:text-left order-2 xl:order-none">
            <span className="text-xl  xl:text-start w-full">Software Developer</span>
            <h1 className="h1 mb-6">
              {"Hello I'm "} <br/> <span className="text-emerald-600">Ericsson Ishaka</span>
            </h1>
            <p className="max-w-[500px] self-start mb-9 text-white/80">
              I excel at crafting elegamt digital experiences and i am proficient in various programming Languages and technologies
            </p>

            <Resume/>
            <div className="mb-8 xl:mb-0 xl:self-start">
              <Socials containerStyle='flex gap-6 mt-6' iconStyle='w-9 h-9 border-emerald-600 border rounded-full flex justify-center  text-center items-center text-emerald-600 text-base hover:bg-emerald-600  hover:text-primary hover:transition-all duration-500'/>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>   
                 <Stats/>

      </div>
 
    </section>
  );
}

