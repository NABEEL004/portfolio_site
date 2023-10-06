import Header from '../components/Header'
import React from 'react'
import NavBar from '../components/NavBar'
import Project from '../components/Project'

const project_data = [
  { name: 'Portfolio Site', skill: 'Front-end Development', description: 'A front-end development project to display my personal projects.', languages: 'ReactJS, TailwindCSS', image: 'portfolio.jpg'},
  { name: 'Smart Aquaponics', skill: 'Embedded Development', description: 'A simple project showcasing elements of a smart aquaponics system', languages: 'C++', image: 'aquaponics.jpg'},
]

const future_data = [
  { name: 'Home Advantage?', skill: 'Data Analysis', description: 'A data analysis project giving insights into football teams\' home performances', languages: 'Python, NumPy, Pandas', image: 'football.jpg'},
]

const projectsComponents = project_data.map((project, key) => <Project key ={key} title = {project.name} skill = {project.skill} description={project.description } language = {project.languages} image={project.image} />)

export default function Projects() {
  return (
    <div className='flex flex-col bg-[#FDFAE3] top-0 left-0 w-full h-screen'>
      <div className="sticky top-0 w-screen mx-0 px-0 flex lg:flex-row flex-col sm:justify-between justify-center bg-[#FDFAE3] z-50">
        <Header/>  
        <NavBar/>
      </div>
      <div className='flex flex-wrap justify-center items-center my-2 sm:my-10 bg-[#FDFAE3] lg:h-[calc(100vh-144px)]'>
        {projectsComponents} 
      </div>
      
    </div>
  )
}
