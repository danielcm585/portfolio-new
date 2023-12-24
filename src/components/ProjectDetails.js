export default function ProjectDetails({ project, isVisible, setIsVisible }) {
  const onClose = () => {
    setIsVisible(false);
  }
  
  console.log(project)
  return (
    <div 
      onClick={onClose}
      class="absolute flex justify-center items-center top-0 h-screen w-screen bg-black opacity-60" 
      style={{ zIndex: 130 }} 
    >
      <div class={`${!isVisible ? 'opacity-100' : 'opacity-100'} absolute top-1/2 translate-y-1/2 left-1/2 translate-x-1/2 bg-white p-4 rounded-xl`}>
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
