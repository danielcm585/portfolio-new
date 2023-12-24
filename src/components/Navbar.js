import { useContext, useState } from "react";
import { SiWhatsapp, SiGithub, SiLinkedin, SiCodeforces, SiGmail } from "react-icons/si"
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
    <div class="py-4 w-full flex justify-center fixed" style={{ zIndex: 100 }}>
      <div class="lg:w-[70%] w-[85%] flex justify-between items-center">
        <p class="font-semibold md:text-3xl text-2xl">Daniel C.M.</p>
        <div>
          <button onClick={showMenu} class="sm:hidden block">
            <MdMenu class="w-[25px] h-[25px]" />
          </button>
          <div class="sm:flex hidden space-x-2">
            <button 
              onClick={() => {
                window.open('https://api.whatsapp.com/send/?phone=6281313233290&text&type=phone_number&app_absent=0', '_blank');
              }} 
              class="rounded-full bg-gray-100 p-3 shadow-xl hover:bg-gray-200 duration-100"
              >
              <SiWhatsapp />
            </button>
            <button 
              onClick={() => {
                window.open('https://github.com/danielcm585', '_blank');
              }} 
              class="rounded-full bg-gray-100 p-3 shadow-xl hover:bg-gray-200 duration-100"
              >
              <SiGithub />
            </button>
            <button 
              onClick={() => {
                window.open('https://www.linkedin.com/in/daniel-christian-mandolang/', '_blank');
              }} 
              class="rounded-full bg-gray-100 p-3 shadow-xl hover:bg-gray-200 duration-100"
            >
              <SiLinkedin />
            </button>
            <button 
              onClick={() => {
                window.open('mailto:danielcm585@gmail.com', '_blank');
              }} 
              class="rounded-full bg-gray-100 p-3 shadow-xl hover:bg-gray-200 duration-100"
            >
              <SiGmail />
            </button>
            <button 
              onClick={() => {
                window.open('https://codeforces.com/profile/danielcm585', '_blank');
              }} 
              class="rounded-full bg-gray-100 p-3 shadow-xl hover:bg-gray-200 duration-100"
            >
              <SiCodeforces />
            </button>
            {/* <div class="h-[full] w-[2px]"></div>
            <button 
              onClick={toggleTheme} 
              class="rounded-full bg-gray-100 p-3 shadow-xl hover:bg-gray-200 duration-100"
            >
              {
                theme === 'light' ? <FaMoon /> : <FaSun />
              }
            </button> */}
          </div>
        </div>
        <div class={`${isMenuVisible ? 'opacity-100' : 'opacity-0'} flex absolute justify-center top-16 left-0 bg-gray-50 p-2 w-full duration-500 ease-in-out transition-opacity`}>
          <div class="w-[85%]"> 
            <button 
              disabled={!isMenuVisible}
              onClick={() => {
                window.open('https://api.whatsapp.com/send/?phone=6281313233290&text&type=phone_number&app_absent=0', '_blank');
              }} 
              class="w-full bg-white hover:bg-gray-100 p-2 rounded-md duration-100"
              >
              <div class="flex justify-center items-center">
                <SiWhatsapp />
                <p class="ml-2">
                  +6281313233290
                </p>
              </div>
            </button>
            <button 
              disabled={!isMenuVisible}
              onClick={() => {
                window.open('https://github.com/danielcm585', '_blank');
              }} 
              class="mt-2 w-full bg-white hover:bg-gray-100 p-2 rounded-md duration-100"
              >
              <div class="flex justify-center items-center">
                <SiGithub />
                <p class="ml-2">
                  danielcm585
                </p>
              </div>
            </button>
            <button 
              disabled={!isMenuVisible}
              onClick={() => {
                window.open('https://www.linkedin.com/in/daniel-christian-mandolang/', '_blank');
              }} 
              class="mt-2 w-full bg-white hover:bg-gray-100 p-2 rounded-md duration-100"
            >
              <div class="flex justify-center items-center">
                <SiLinkedin />
                <p class="ml-2">
                  Daniel Christian Mandolang
                </p>
              </div>
            </button>
            <button 
              disabled={!isMenuVisible}
              onClick={() => {
                window.open('mailto:danielcm585@gmail.com', '_blank');
              }} 
              class="mt-2 w-full bg-white hover:bg-gray-100 p-2 rounded-md duration-100"
            >
              <div class="flex justify-center items-center">
                <SiGmail />
                <p class="ml-2">
                  danielcm585@gmail.com
                </p>
              </div>
            </button>
            <button 
              disabled={!isMenuVisible}
              onClick={() => {
                window.open('https://codeforces.com/profile/danielcm585', '_blank');
              }} 
              class="mt-2 w-full bg-white hover:bg-gray-100 p-2 rounded-md duration-100"
            >
              <div class="flex justify-center items-center">
                <SiCodeforces />
                <p class="ml-2">
                  danielcm585
                </p>
              </div>
            </button>
            <div class="h-[full] w-[2px]"></div>
            {/* <button 
              disabled={!isMenuVisible}
              onClick={toggleTheme} 
              class="mt-4 w-full bg-white hover:bg-gray-100 p-2 rounded-md duration-100"
            >
              <div class="flex justify-center items-center">
                {
                  theme === 'light' ? <FaMoon /> : <FaSun />
                }
                <p class="ml-2">
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
