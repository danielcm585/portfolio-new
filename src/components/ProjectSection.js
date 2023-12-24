import { useEffect } from "react";
import Carousel from "./Carousel";
import { projects } from '../assets/data/projects';

export default function ProjectSection({ curSection }) {
  return (
    <div class="relative">
      <div class="w-screen h-screen flex items-center">
        <div class="flex w-full justify-center">
          <div class="md:w-[65%] w-[80%] space-y-10">
            <p class="inline font-bold text-transparent lg:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
              Projects
            </p>
            <div class="flex justify-center w-full relative">
              <Carousel projects={projects} class="hover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
