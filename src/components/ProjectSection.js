import Carousel from "./Carousel";
import { projects } from '../assets/data/projects';

export default function ProjectSection() {
  return (
    <div 
      className="relative" 
      data-aos="zoom-in" 
      data-aos-duration="2000"
    >
      <div className="w-screen h-screen flex items-center">
        <div className="flex w-full justify-center">
          <div className="md:w-[65%] w-[85%] space-y-10">
            <p className="inline font-bold text-transparent lg:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
              Projects
            </p>
            <div className="flex justify-center w-full relative">
              <Carousel projects={projects} className="hover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
