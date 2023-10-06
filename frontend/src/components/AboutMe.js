import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutMe() {
  return (
    <div className=' bg-[#FDFAE3] flex flex-col justify-center items-center z-100 leading-loose sm:pt-10'>
        <h1 className='text-2xl font-semibold py-3 sm:py-10 font-mono'>peace be upon you!</h1>
        <p className='w-3/4 sm:pb-3 text-center font-mono text-sm sm:text-xl leading-relaxed'>i am currently a student at Nanyang Technological University under the Renaissance Engineering Programme. 
          <br/><br/>i will be graduating in December 2024 with a Masters of Science in Technology Management and a Bachelors in Electrical and Electronics Engineering.
          i have a keen interest in Software Development and Embedded Systems. <br /> <br/> check out some of my projects{' '}
          <Link to="/projects" className='underline'>here</Link>!</p>
    </div>
  )
}
