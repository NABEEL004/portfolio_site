import Header from '../components/Header'
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import gmailLogo from '../resources/gmail.png'
import linkedinLogo from '../resources/linkedin.png'
import { motion } from 'framer-motion'

const parentVariants = {
  hidden: {
    opacity: 0.5,
    width: "60%",
    borderRadius: "100%",
    height: "20%",
    background: "rgba(1,1,1,0)",
  },
  visible: {
    width: "100%",
    height: "100%",
    borderRadius: "15px",
    background: "#FFF",
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
      // repeatDelay: 1,
      staggerChildren: 0.1,
      when: "beforeChildren",
    }
  }
}

const childVariants = {
  hidden: {
    y: -5,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
    }
  }
}

export default function Contact() {
  return (
    <div className="">
      <div className='sticky top-0 w-screen mx-0 px-0 flex lg:flex-row flex-col sm:justify-between justify-center bg-[#FDFAE3] z-50'>
        <Header/>
        <NavBar/>
      </div>
      <div className='flex flex-col sm:flex-row justify-center items-center font-mono text-lg sm:text-2xl h-[calc(100vh-216px)] sm:h-[calc(100vh-240px)] lg:h-[calc(100vh-144px)]'>
        <div className='w-[23rem] sm:w-[36rem] md:w-[44rem] lg:w-[50rem] h-[26rem] lg:h-[32rem] flex justify-center items-center'>
          <motion.div variants={parentVariants} initial="hidden" animate="visible" className='flex flex-col w-[50rem] justify-center items-center bg-[rgba(0,0,0,0)] border border-gray-300 rounded-2xl text-black font-medium'>
            <motion.div variants={childVariants} className='font-black text-3xl lg:text-4xl mt-12'>Nabeel Muhammad</motion.div>
            <motion.div variants={childVariants} className='font-medium text-base lg:text-lg'>Aspiring Developer</motion.div>
            <motion.div variants={childVariants} className="m-5 flex justify-start items-center w-4/5 sm:w-3/5">
              <a href="mailto:nabeel.mbab@gmail.com">
                <img src={gmailLogo} alt="gmail logo" className= "h-12 mr-6 sm:mr-10 sm:h-26 md:h-28 lg:h-30 hover:scale-105 transition active:scale-95"/> 
              </a>
              <div className="text-left text-base md:text-xl lg:text-2xl">Contact me at <br/><b><a href="mailto:nabeel.mbab@gmail.com">nabeel.mbab@gmail.com</a></b></div>
            </motion.div>
            <motion.div variants={childVariants} className="m-5 flex justify-start items-center w-4/5 sm:w-3/5">
              <a href="https://www.linkedin.com/in/nabeel-mbab/" target="_blank" rel="noreferrer">
                <img src={linkedinLogo} alt="linkedin logo" className="h-12 mr-6 sm:mr-10 sm:h-26 md:h-28 lg:h-30 hover:scale-105 transition active:scale-95"/>         
              </a>
              <div className="text-left text-base md:text-xl lg:text-2xl">Connect with me on <br/> <b><a href="https://www.linkedin.com/in/nabeel-mbab/" target="_blank" rel="noreferrer">LinkedIn</a></b>!</div>
            </motion.div>
            <motion.div variants={childVariants} className='font-medium text-xs lg:text-base mb-12'><br/>Looking forward to hearing from you :-)</motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
