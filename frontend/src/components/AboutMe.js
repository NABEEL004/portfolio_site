import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function AboutMe(props) {
  return (
    <motion.div
      animate = {{ y: 20, opacity: 1}}
      initial = {{ y: -20, opacity: 0.5}}
      transition = {{ type:'spring', stiffness: 400}}
      className=' bg-[#FDFAE3] flex flex-col justify-center items-center z-100 leading-loose'>
        {/* <img src={props.img} alt={props.alt}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p> */}
        <h1 className='text-2xl font-semibold pb-5 sm:pb-7 md:pb-8 lg:pb-10 font-mono'>peace be upon you!</h1>
        <p className='w-3/4 xl:w-1/2 text-center font-mono text-sm sm:text-xl leading-relaxed'>i am currently a student at Nanyang Technological University under the{' '}
        <a href="https://www.ntu.edu.sg/admissions/undergraduate/premier-scholar-programmes/renaissance-engineering-programme" target="_blank"><span className="bg-[#B16F36] text-white italic sm:hover:text-[1.3rem] transition-all sm:active:text-xl">Renaissance Engineering Programme</span></a>.
        <br/><br/>i will be graduating in{' '}
        <span className="bg-[#B16F36] text-white italic sm:hover:not-italic transition-all sm:active:text-xl">December 2024</span>
        {' '}with a 
        {' '}
        <span className="bg-[#B16F36] text-white italic sm:hover:text-[1.3rem] transition-all sm:active:text-xl">Masters of Science in Technology Management</span>
        {' '}
        and a 
        {' '}
        <span className="bg-[#B16F36] text-white italic sm:hover:text-[1.3rem] transition-all sm:active:text-xl">Bachelors in Electrical and Electronics Engineering</span>
        .
        i have a keen interest in 
        {' '}
        <span className="bg-[#B16F36] text-white italic sm:hover:text-[1.3rem] transition-all sm:active:text-xl">Software Development</span>
        {' '}
        and
        {' '}
        <span className="bg-[#B16F36] text-white italic sm:hover:text-[1.3rem] transition-all sm:active:text-xl">Embedded Systems</span>
        {' '}
        . <br /> <br/> check out some of my projects{' '}
        <Link to="/projects" className='underline'>here</Link>!</p>
    </motion.div>
  )
}
