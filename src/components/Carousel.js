import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import Modal from 'react-modal';

export default function Carousel({ projects, setIsHidden }) {
  const [ curIndex, setCurIndex ] = useState(0);
  const [ isTransitioning, setIsTransitioning ] = useState(false);
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
  
  const [ isDetailsVisible, setIsDetailsVisible ] = useState(false);

  const [ customStyles, setCustomStyles ] = useState({
    content: {
      width: '50%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {zIndex: 1000}
  });

  const updateStylesForMobile = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
      setCustomStyles({
        ...customStyles,
        content: {
          ...customStyles.content,
          width: '85%',
        },
      });
    } else {
      setCustomStyles({
        ...customStyles,
        content: {
          ...customStyles.content,
          width: '50%',
        },
      });
    }
  };

  useEffect(() => {
    updateStylesForMobile();
    window.addEventListener('resize', updateStylesForMobile);

    return () => {
      window.removeEventListener('resize', updateStylesForMobile);
    }
  }, []); 

  return (
    <>
      <div class="w-full relative md:h-[36.5vw] h-[45vw]">
        <button 
          onClick={goToPrevious} 
          class="absolute md:left-6 left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-50 z-10 shadow-xl hover:bg-gray-200 duration-100"
          style={{ zIndex: 110 }}
        >
          <FaChevronLeft />
        </button>
        <div ref={containerRef} class="w-full">
          {/* {
            isDetailsVisible && 
          } */}
          {
            projects.map((project, index) => (
              <div>
                <img 
                  key={index}
                  src={project.image} 
                  class={`w-full h-full rounded-xl shadow-xl absolute inset-0 transition-opacity ease-in-out duration-500 ${index === curIndex ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>
            ))
          }
        </div>
        <button 
          onClick={goToNext} 
          class="absolute md:right-6 right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-50 z-10 shadow-xl hover:bg-gray-200 duration-100"
          style={{ zIndex: 110 }}
        >
          <FaChevronRight />
        </button>
        <button
          onClick={() => setIsDetailsVisible((prev) => !prev)}
          class="absolute flex items-center md:right-6 right-2 md:bottom-6 bottom-2 py-2 px-4 bg-gray-50 rounded-full shadow-xl hover:bg-gray-200 duration-100"
          style={{ zIndex: 110 }}
        >
          Show details
          {/* <FaExternalLinkAlt class="ml-2" /> */}
        </button>
        <div 
          class="absolute md:bottom-6 bottom-2 left-1/2 -translate-x-1/2 selection:flex justify-center items-center space-x-4 mt-4"
          style={{ zIndex: 110 }}
        >
          {
            projects.map((_, index) => (
              <button 
                key={index}
                onClick={() => changeIndex(index)} 
                class={`md:w-[40px] w-[10px] h-[10px] shadow-xl rounded-full ${index === curIndex ? 'bg-gray-300 hover:bg-gray-400' : 'bg-gray-500 hover:bg-gray-600'} duration-100`}
              />
            ))
          }
        </div>
      </div>
      <Modal
        isOpen={isDetailsVisible}
        onRequestClose={() => setIsDetailsVisible(false)}
        style={customStyles}
      >
        <div class="p-4">
          <p class="text-lg font-semibold">{projects[curIndex].title}</p>
          <p>{projects[curIndex].description}</p>
          <ul class="list-disc ml-6">
            {
              projects[curIndex].contributions.map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))
            }
          </ul>
          <a
            href={projects[curIndex].url}
            target="_blank"
            style={{ zIndex: 110 }}
            class=" w-full mt-4 flex justify-center items-center py-2 px-4 bg-gray-50 rounded-full shadow-xl hover:bg-gray-200 duration-100"
          >
            Visit site
            <FaExternalLinkAlt class="ml-2" />
          </a>
        </div>
      </Modal>
    </>
  );
};
