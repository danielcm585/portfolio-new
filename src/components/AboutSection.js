export default function AboutSection() {
  return (
    <div className="w-screen h-screen flex items-center">
      <div className="flex w-full justify-center">
        <div className="md:w-[65%] w-[85%] lg:flex items-center lg:space-x-16">
          <div className="lg:hidden flex justify-center lg:mb-0 mb-6 w-full">
            <img src={require('../assets/images/my-photo.jpg')} className="w-[250px] h-[250px] rounded-full" />
          </div>
          <img src={require('../assets/images/my-photo.jpg')} className="lg:block hidden w-[300px] h-[300px] rounded-full" />
          <div className="space-y-4">
            <p className="lg:text-4xl text-2xl font-semibold mb-4">Hi, I'm</p>
            <p className="inline font-bold text-transparent lg:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
              Daniel Christian Mandolang
            </p>
            <p className="lg:text-2xl">
              I am a software engineer engaged in numerous projects, successfully serving over 27000 satisfied clients across Indonesia for various companies. As a competitive programmer, I excel in problem-solving, data structures, and algorithms. Additionally, I take pride in coaching, with a keen interest in training high school and computer science students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
