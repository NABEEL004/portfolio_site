import Header from '../components/Header'
import React from 'react'
import NavBar from '../components/NavBar'
import Project from '../components/Project'

const project_data = [
  { name: 'Portfolio Site', skill: 'Full-Stack Development', languages: 'ReactJS, NodeJS, TailwindCSS', },
  { name: 'Smart Aquaponics Display', skill: 'Embedded Development', languages: 'C++', },
  { name: 'Football: Home Advantage?', skill: 'Data Analysis', languages: 'Python, NumPy, Pandas'},
]

const projectsComponents = project_data.map((project, key) => <Project key ={key} title = {project.name} skill = {project.skill} language = {project.languages} />)

export default function Projects() {
  return (
    <>
     <Header/>  
     <NavBar/> 
     {projectsComponents}
    </>
  )
}
