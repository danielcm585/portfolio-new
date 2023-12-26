import { FaExternalLinkAlt } from "react-icons/fa";

export default function ExperienceSection() {
  return (
    <div 
      className="w-screen h-screen flex items-center" 
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <div className="flex w-full justify-center">
        <div className="md:w-[65%] w-[85%] space-y-10">
          <p className="inline font-bold text-transparent lg:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
            Experiences
          </p>
          <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-2">
            <p className="sm:text-lg font-semibold">Mar 2023 - Present</p>
            <div>
              <p className="sm:sm:text-lg font-bold">[Kokocoder] Freelance Software Engineer</p>
              <div>
                <p>Working on{" "}
                  <a href="https://portal.kokocoder.com" target="blank" className="hover:underline inline-flex items-center text-blue-500">
                    Portal Kokocoder
                    <FaExternalLinkAlt className="ml-1" />
                  </a> 
                  , a web-based platform serving 250+ clients all over Indonesia to learn programming.
                </p>
                <ul className="list-disc ml-6">
                  <li>Develop high-quality APIs and integrate them to the user interfaces.</li>
                  <li>Designing a maintainable and expandable code architecture.</li>
                  <li>Actively fixing bugs that occur in both frontend and backend.</li>
                  <li>Refactor codes and minimize code smells.</li>
                </ul>
              </div>
            </div>
            <p className="sm:text-lg font-semibold">Dec 2021 - Present</p>
            <div>
              <p className="sm:text-lg font-bold">[Kokocoder] Data Structure & Algorithm Coach</p>
              <ul className="list-disc ml-6">
                <li>Coaching data structure and algorithm to middle school to college students.</li>
                <li>Preparing middle to high school students for OSN Informatika.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
