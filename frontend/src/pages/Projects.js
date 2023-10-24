import Header from '../components/Header'
import React from 'react'
import NavBar from '../components/NavBar'
import Project from '../components/Project'
import Carousel from 'react-elastic-carousel'
import { motion } from 'framer-motion'

const childVariants = {
  hidden: {
    y: -10,
    // opacity: 0
  },
  visible: {
    y: 0,
    // opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 500,
    }
  }
}

const project_data = [
  { name: 'Vanilla Portfolio', skill: 'Front-end Development', description: 'A frontend dev project to learn and revisit vanilla HTML, CSS and JavaScript', languages: 'ReactJS, TailwindCSS', image: 'portfolio.jpg'},
  { name: 'React Portfolio', skill: 'Front-end Development', description: 'A front-end development project to display my personal projects.', languages: 'HTML, CSS, JS', image: 'football.jpg'},
  { name: 'Smart Aquaponics', skill: 'Embedded Development', description: 'A simple project showcasing elements of a smart aquaponics system', languages: 'C++', image: 'aquaponics.jpg'},
  { name: 'Pong', skill: 'Game Development', description: 'A simple game of pong hosted on a website', languages: 'HTML, CSS, JS', image: 'pong.png'},
]

const future_data = [
]

const about_data = [
  {
    img: "",
    alt: "image of portfolio site",
    title: "Vanilla Portfolio",
    description: "A frontend dev project to learn and revisit vanilla HTML, CSS and JavaScript"
  },
  {
    img: "",
    alt: "image of portfolio site",
    title: "React Portfolio",
    description: "A frontend project to display my personal projects"
  },
  {
    img: "",
    alt: "image of demo board",
    title: "Smart Aquaponics",
    description: "An embedded project showcasing elements of a smart aquaponics system"
  },
]

const projectsComponents = project_data.map((project, key) => <Project key ={key} title = {project.name} skill = {project.skill} description={project.description } language = {project.languages} image={project.image} />)

export default function Projects() {
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 700, itemsToShow: 2 },
    { width: 1000, itemsToShow: 3 },
  ]

  return (
    <div className='flex flex-col bg-[#FDFAE3] top-0 left-0 w-full h-screen'>
      <div className="sticky top-0 w-screen mx-0 px-0 flex lg:flex-row flex-col sm:justify-between justify-center bg-[#FDFAE3] z-50">
        <Header/>  
        <NavBar/>
      </div>
      <div className='flex flex-wrap justify-center items-center my-2 sm:my-10 bg-[#FDFAE3] lg:h-[calc(100vh-144px)]'>
        <motion.div variants={childVariants} animate="visible" initial="hidden" className='w-[90%] sm:w-4/5'>
          <Carousel breakPoints={breakpoints} className=''>
            {projectsComponents}  
          </Carousel>
        </motion.div>
      </div>
    </div>
  )
}
