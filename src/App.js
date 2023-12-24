import { useState, useEffect } from 'react';
import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";
import AchievementSection from './components/AchievementSection';
import ReactPageScroller from "react-page-scroll";
import ExperienceSection from './components/ExperienceSection';
import ProjectSection from './components/ProjectSection';

export default function App() {
  useEffect(() => {
    document.title = "Daniel Christian Mandolang"
  }, [])

  const [ curSection, setCurSection ] = useState(0);

  const handlePageChange = (number) => {
    setCurSection(number);
  };

  return (
    <div>
      <Navbar />
      <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={curSection}
      >
        <AboutSection />
        <ExperienceSection />
        <AchievementSection />
        <ProjectSection curSection={curSection} />
      </ReactPageScroller>
    </div>
  );
}