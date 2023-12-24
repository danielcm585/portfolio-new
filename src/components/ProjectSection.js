import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import ProjectDetails from "./ProjectDetails";
import { projects } from '../assets/data/projects';

export default function ProjectSection() {
  const [ isHidden, setIsHidden ] = useState(Array.from({ length: projects.length }, () => true));

  useEffect(() => {
    console.log(isHidden);
  }, [ isHidden ])

  return (
    <div class="relative">
      <div class="w-screen h-screen flex items-center">
        <div class="flex w-full justify-center">
          <div class="md:w-[65%] w-[80%] space-y-10">
            <p class="inline font-bold text-transparent lg:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
              Projects
            </p>
            <div class="flex justify-center w-full relative">
              <Carousel projects={projects} setIsHidden={setIsHidden} class="hover" />
            </div>
          </div>
        </div>
      </div>
      {
        projects && projects.map((project, index) => (
          <ProjectDetails 
            projects={project} 
            isHidden={isHidden[index]} 
            setIsHidden={(newVal) => {
              setIsHidden((prev) => {
                const next = [...prev]
                next[index] = newVal;
                return next;
              })
            }} 
          />
        ))
      }
    </div>
  )
}
