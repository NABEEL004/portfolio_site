import Header from '../components/Header'
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
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
  { name: 'Vanilla Portfolio', skill: 'Front-end Development', description: 'A frontend dev project to learn and revisit vanilla HTML, CSS and JavaScript', languages: ['HTML', 'CSS', 'JS'], github:'html-css-js-portfolio', play:'https://nabeel-vanilla-portfolio.netlify.app/', image: 'vanilla_portfolio.jpeg'},
  { name: 'React Portfolio', skill: 'Front-end Development', description: 'A front-end development project to display my personal projects.', languages: ['ReactJS', 'TailwindCSS', 'Figma'], github:'portfolio_site', image: 'react_portfolio.jpeg'},
  { name: 'Super Pong', skill: 'Game Development', description: 'A simple game of pong hosted on a website', languages: ['HTML', 'CSS', 'JS'], github:'pong-js', play:'https://nabeel-super-pong.netlify.app/', image: 'pong.png'},
  { name: 'Smart Aquaponics', skill: 'Embedded Development', description: 'A simple project showcasing elements of a smart aquaponics system', languages: ['C++'], github:'', image: 'aquaponics.jpeg'},
]


const projectsComponents = project_data.map((project, key) => <Project key ={key} title = {project.name} skill = {project.skill} description={project.description } language = {project.languages} image={project.image} github={project.github} play={project.play} />)

export default function Projects() {
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 650, itemsToShow: 2 },
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
      <Footer />
    </div>
  )
}
