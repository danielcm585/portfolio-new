import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";

export default function Carousel({ projects, setIsHidden }) {
  const [curIndex, setCurIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);

  const changeIndex = (newIndex) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurIndex(newIndex);
    setIsTransitioning(false);
  }

  const goToNext = () => {
    const nextIndex = curIndex === projects.length - 1 ? 0 : curIndex + 1;
    changeIndex(nextIndex);
  };
  
  const goToPrevious = () => {
    const nextIndex = curIndex === 0 ? projects.length - 1 : curIndex - 1;
    changeIndex(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000); 

    return () => {
      clearInterval(interval);
    }
  }, [ changeIndex ])

  const showDetail = (index) => {
    setIsHidden((prev) => {
      const next = [...prev, ]
      next[index] = false;
      return next;
    });
  }

  return (
    <div class="w-full relative md:h-[36.5vw] h-[45vw]">
      <button 
        onClick={goToPrevious} 
        class="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-50 z-10 shadow-xl hover:bg-gray-200 duration-100"
        style={{ zIndex: 110 }}
      >
        <FaChevronLeft />
      </button>
      <div ref={containerRef} class="w-full">
        {
          projects.map((project, index) => (
            <img 
              key={index}
              src={project.image} 
              class={`aspect-video rounded-xl shadow-xl absolute inset-0 transition-opacity ease-in-out duration-500 ${index === curIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))
        }
      </div>
      <button 
        onClick={goToNext} 
        class="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-50 z-10 shadow-xl hover:bg-gray-200 duration-100"
        style={{ zIndex: 110 }}
      >
        <FaChevronRight />
      </button>
      <a 
        href={projects[curIndex].url}
        target="blank"
        class="absolute flex items-center right-6 bottom-6 py-2 px-4 bg-gray-50 rounded-full shadow-xl hover:bg-gray-200 duration-100"
      >
        Visit site
        <FaExternalLinkAlt class="ml-2" />
      </a>
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 selection:flex justify-center items-center space-x-4 mt-4">
        {
          projects.map((_, index) => (
            <button 
              key={index}
              onClick={() => changeIndex(index)} 
              class={`w-[40px] h-[10px] shadow-xl rounded-full ${index === curIndex ? 'bg-gray-300 hover:bg-gray-400' : 'bg-gray-500 hover:bg-gray-600'} duration-100`}
            />
          ))
        }
      </div>
    </div>
  );
};
