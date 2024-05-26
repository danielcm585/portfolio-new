import { useContext, useState } from "react";
import { IoDocument } from "react-icons/io5";
import { SiWhatsapp, SiGithub, SiLinkedin, SiCodeforces, SiGmail, SiDocker } from "react-icons/si"
import { FaSun, FaMoon } from "react-icons/fa"
import { MdMenu } from "react-icons/md"
import { themeContext } from "../contexts/themeContext"

export default function Navbar() {
  const { theme, toggleTheme } = useContext(themeContext);
  
  const [ isMenuVisible, setIsMenuVisible ] = useState(false);

  const showMenu = () => {
    setIsMenuVisible((prev) => !prev);
  }

  return (
    <div className="py-4 w-full flex justify-center fixed bg-gray-50" style={{ zIndex: 100 }}>
      <div className="lg:w-[70%] w-[85%] flex justify-between items-center">
        <p className="font-semibold md:text-3xl text-2xl">Daniel C.M.</p>
        <div>
          <button onClick={showMenu} className="sm:hidden block">
            <MdMenu className="w-[25px] h-[25px]" />
          </button>
          <div className="sm:flex hidden space-x-2">
            <button 
              onClick={() => {
                window.open('https://drive.google.com/file/d/1aqibW0pV7ZWuvTRwX7E28qB8CSNHKnRq/view?usp=sharing', '_blank');
              }} 
              className="rounded-full bg-gray-100 p-3 shadow-xl hover:bg-gray-200 duration-100"
              >
              <div className="flex items-center space-x-1">
                <IoDocument />
                <p>Get CV</p>
              </div>
            </button>
            <button 
              onClick={() => {
                window.open('https://api.whatsapp.com/send/?phone=6281313233290&text&type=phone_number&app_absent=0', '_blank');
              }} 
              className="rounded-full bg-gray-100 p-3 shadow-xl hover:bg-gray-200 duration-100"
              >
              <SiWhatsapp />
            </button>
            <button 
              onClick={() => {
                window.open('https://github.com/danielcm585', '_blank');
              }} 
              className="rounded-full bg-gray-100 p-3 shadow-xl hover:bg-gray-200 duration-100"
              >
              <SiGithub />
            </button>
            <button 
              onClick={() => {
                window.open('https://www.linkedin.com/in/daniel-christian-mandolang/', '_blank');
              }} 
              className="rounded-full bg-gray-100 p-3 shadow-xl hover:bg-gray-200 duration-100"
            >
              <SiLinkedin />
            </button>
            <button 
              onClick={() => {
                window.open('mailto:danielcm585@gmail.com', '_blank');
              }} 
              className="rounded-full bg-gray-100 p-3 shadow-xl hover:bg-gray-200 duration-100"
            >
              <SiGmail />
            </button>
            <button 
              onClick={() => {
                window.open('https://codeforces.com/profile/danielcm585', '_blank');
              }} 
              className="rounded-full bg-gray-100 p-3 shadow-xl hover:bg-gray-200 duration-100"
            >
              <SiCodeforces />
            </button>
            {/* <div className="h-[full] w-[2px]"></div>
            <button 
              onClick={toggleTheme} 
              className="rounded-full bg-gray-100 p-3 shadow-xl hover:bg-gray-200 duration-100"
            >
              {
                theme === 'light' ? <FaMoon /> : <FaSun />
              }
            </button> */}
          </div>
        </div>
        <div className={`${isMenuVisible ? 'opacity-100' : 'opacity-0'} flex absolute justify-center top-16 left-0 bg-gray-50 p-2 w-full duration-500 ease-in-out transition-opacity`}>
          <div className="w-[85%]"> 
            <button 
              disabled={!isMenuVisible}
              onClick={() => {
                window.open('https://drive.google.com/file/d/16dGzjLt1uUglbPQNp5nBMTzh-Put6TSV/view?usp=sharing', '_blank');
              }} 
              className="w-full bg-white hover:bg-gray-100 p-2 rounded-md duration-100"
              >
              <div className="flex justify-center items-center">
                <IoDocument />
                <p className="ml-2">Get CV</p>
              </div>
            </button>
            <button 
              disabled={!isMenuVisible}
              onClick={() => {
                window.open('https://api.whatsapp.com/send/?phone=6281313233290&text&type=phone_number&app_absent=0', '_blank');
              }} 
              className="mt-2 w-full bg-white hover:bg-gray-100 p-2 rounded-md duration-100"
              >
              <div className="flex justify-center items-center">
                <SiWhatsapp />
                <p className="ml-2">
                  +6281313233290
                </p>
              </div>
            </button>
            <button 
              disabled={!isMenuVisible}
              onClick={() => {
                window.open('https://github.com/danielcm585', '_blank');
              }} 
              className="mt-2 w-full bg-white hover:bg-gray-100 p-2 rounded-md duration-100"
              >
              <div className="flex justify-center items-center">
                <SiGithub />
                <p className="ml-2">
                  danielcm585
                </p>
              </div>
            </button>
            <button 
              disabled={!isMenuVisible}
              onClick={() => {
                window.open('https://www.linkedin.com/in/daniel-christian-mandolang/', '_blank');
              }} 
              className="mt-2 w-full bg-white hover:bg-gray-100 p-2 rounded-md duration-100"
            >
              <div className="flex justify-center items-center">
                <SiLinkedin />
                <p className="ml-2">
                  Daniel Christian Mandolang
                </p>
              </div>
            </button>
            <button 
              disabled={!isMenuVisible}
              onClick={() => {
                window.open('mailto:danielcm585@gmail.com', '_blank');
              }} 
              className="mt-2 w-full bg-white hover:bg-gray-100 p-2 rounded-md duration-100"
            >
              <div className="flex justify-center items-center">
                <SiGmail />
                <p className="ml-2">
                  danielcm585@gmail.com
                </p>
              </div>
            </button>
            <button 
              disabled={!isMenuVisible}
              onClick={() => {
                window.open('https://codeforces.com/profile/danielcm585', '_blank');
              }} 
              className="mt-2 w-full bg-white hover:bg-gray-100 p-2 rounded-md duration-100"
            >
              <div className="flex justify-center items-center">
                <SiCodeforces />
                <p className="ml-2">
                  danielcm585
                </p>
              </div>
            </button>
            <div className="h-[full] w-[2px]"></div>
            {/* <button 
              disabled={!isMenuVisible}
              onClick={toggleTheme} 
              className="mt-4 w-full bg-white hover:bg-gray-100 p-2 rounded-md duration-100"
            >
              <div className="flex justify-center items-center">
                {
                  theme === 'light' ? <FaMoon /> : <FaSun />
                }
                <p className="ml-2">
                  {theme === 'light' ? 'Dark mode' : 'Light mode'}
                </p>
              </div>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
