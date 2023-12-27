import { useState, useEffect } from 'react';
import ReactPageScroller from "react-page-scroll";
import AOS from 'aos';
import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";
import AchievementSection from './components/AchievementSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectSection from './components/ProjectSection';

export default function App() {
  useEffect(() => {
    document.title = "Daniel Christian Mandolang"

    AOS.init();
  }, [])

  const [ curSection, setCurSection ] = useState(0);

  const handlePageChange = (number) => {
    setCurSection(number);
  };

  return (
    <div class="bg-gray-50">
      <Navbar />
      {/* <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={curSection}
      > */}
        <AboutSection />
        <ExperienceSection />
        <AchievementSection />
        <ProjectSection />
      {/* </ReactPageScroller> */}
    </div>
  );
}