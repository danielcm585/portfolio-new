export default function AchievementSection() {
  return (
    <div class="w-screen h-screen flex items-center">
      <div class="flex w-full justify-center">
        <div class="md:w-[65%] w-[80%] space-y-10">
          <p class="inline font-bold text-transparent lg:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
            Achievements
          </p>
          <div class="grid lg:grid-cols-2 grid-cols-1 sm:gap-4 gap-2">
            <p class="text-lg font-semibold">Apr 2022</p>
            <div>
              <p class="text-lg font-bold">[National] Top 3 of Google Developer Student Club Hackfest</p>
              <p>Google Developer Student Clubs Hackfest is a national hackathon which was attended by thousands of students from all over Indonesia.</p>
            </div>
            <p class="text-lg font-semibold">Nov 2021</p>
            <div>
              <p class="text-lg font-bold">[National] National Gold Medalist of International Collegiate Programming Contest (ICPC) Asia Jakarta Regional Contest 2021</p>
              <p>ICPC is an international competitive programming competition among universities.</p>
            </div>
            <p class="text-lg font-semibold">May 2021</p>
            <div>
              <p class="text-lg font-bold">[Regional] Asia Pacific Informatics Olympiad (APIO) 2021 as 14th Best Indonesian Participant</p>
              <p>APIO is an international competitive programming competition among high school students from around Asia Pacific.</p>
            </div>
            <p class="text-lg font-semibold">Oct 2020</p>
            <div>
              <p class="text-lg font-bold">[National] National Science Olympiad in Informatics (OSN) 2020 as Bronze Medallist</p>
              <p>OSN is an annual science olympiad event which is hosted by Ministry of Education in Indonesia for high school students.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
