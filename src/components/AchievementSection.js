export default function AchievementSection() {
  return (
    <div 
      className="w-screen h-screen flex items-center" 
      data-aos="zoom-in" 
      data-aos-duration="2000"
    >
      <div className="flex w-full justify-center">
        <div className="md:w-[65%] w-[85%] space-y-10">
          <p className="inline font-bold text-transparent lg:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
            Achievements
          </p>
          <div className="grid lg:grid-cols-2 grid-cols-1 sm:gap-4 gap-2">
            <p className="sm:text-lg font-semibold">Apr 2022</p>
            <div>
              <p className="sm:text-lg font-bold">[National] Top 3 of Google Developer Student Club Hackfest</p>
              <p>Google Developer Student Clubs Hackfest is a national hackathon which was attended by thousands of students from all over Indonesia.</p>
            </div>
            <p className="sm:text-lg font-semibold">Nov 2021</p>
            <div>
              <p className="sm:text-lg font-bold">[National] National Gold Medalist of International Collegiate Programming Contest (ICPC) Asia Jakarta Regional Contest 2021</p>
              <p>ICPC is an international competitive programming competition among universities.</p>
            </div>
            <p className="sm:text-lg font-semibold">May 2021</p>
            <div>
              <p className="sm:text-lg font-bold">[Regional] Asia Pacific Informatics Olympiad (APIO) 2021 as 14th Best Indonesian Participant</p>
              <p>APIO is an international competitive programming competition among high school students from around Asia Pacific.</p>
            </div>
            <p className="sm:text-lg font-semibold">Oct 2020</p>
            <div>
              <p className="sm:text-lg font-bold">[National] National Science Olympiad in Informatics (OSN) 2020 as Bronze Medallist</p>
              <p>OSN is an annual science olympiad event which is hosted by Ministry of Education in Indonesia for high school students.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
