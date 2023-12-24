export default function ProjectDetails({ project, isHidden, setIsHidden}) {
  const onClose = () => {
    setIsHidden(false)
  }
  
  if (!project) return <></>
  return (
    <div class={`${isHidden ? 'hidden' : 'absolute'} absolute top-0 h-screen w-screen bg-black opacity-30`} style={{ zIndex: 130 }} onClick={onClose}>
      <div class="absolute top-1/2 translate-y-1/2 left-1/2 translate-x-1/2 bg-white p-4 rounded-xl">
        <p class="text-lg font-semibold">{project.title}</p>
        <p>{project.description}</p>
        <ul class="list-disc ml-6">
          {
            project.contributions.map((contribution, index) => (
              <li key={index}>{contribution}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
