import Header from '../components/Header'
import React from 'react'
import AboutMe from '../components/AboutMe'
import NavBar from '../components/NavBar'
import { motion } from 'framer-motion'

const about_data = [
  {
    img: "grad.png",
    alt: "image of graduation cap",
    title: "renaissance student",
    description: "I'm currently pursuing a double degree under the Renaissance Engineering Programme (REP) at Nanyang Technological University (NTU). I'm expecting to graduate in Decemeber 2024 with a Master of Science in Technology Management and a Bachelor in Electrical and Electronics Engineering (EEE)"
  },
  {
    img: "code.png",
    alt: "image of code icon",
    title: "aspiring software developer",
    description: "Despite having a background in EEE, the realm of software development has always resonated well with me. I enjoy being able to learn about trending and relevant digital skills anywhere and anytime with just my computer. I believe that software has the power to improve the lives of everyone."
  },
  {
    img: "kopi.png",
    alt: "image of coffee cup",
    title: "appreciates the little things",
    description: "I am fond of looking for and enjoying the simple things in life. I enjoy capturing everyday moments using my mirrorless, having a good game of volleyball with friends and even sipping on my coffee in the morning."
  },
]

const about_components = about_data.map((about, key) => <AboutMe key={key} image={about.img} alt={about.alt} title={about.title} description={about.description} />)

export default function About() {
  return (
    <motion.div 
      className="flex flex-col h-full v-full justify-center items-stretch"
    >
      <div className='sticky top-0 w-screen mx-0 px-0 flex lg:flex-row flex-col sm:justify-between justify-center bg-[#FDFAE3] z-9999'>
        <Header/>
        <NavBar/>
      </div>
      <div className='h-[calc(100vh-216px)] sm:h-[calc(100vh-240px)] lg:h-[calc(100vh-144px)] flex flex-col xl:flex-row justify-center items-center'>
        {/* <AboutMe title={about_data[0].title} description={about_data[0].description}/>   */}
        {/* <AboutMe />   */}
        {about_components}
      </div>
    </motion.div>
  )
}
