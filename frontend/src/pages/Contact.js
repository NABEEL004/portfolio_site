import Header from '../components/Header'
import React from 'react'
import NavBar from '../components/NavBar'
import gmailLogo from '../resources/gmail.png'
import linkedinLogo from '../resources/linkedin.png'

export default function Contact() {
  return (
    <div className="">
      <div className='sticky top-0 w-screen mx-0 px-0 flex lg:flex-row flex-col sm:justify-between justify-center bg-[#FDFAE3] z-50'>
        <Header/>
        <NavBar/>
      </div>
      <div className='flex flex-col sm:flex-row justify-center items-center font-mono text-lg sm:text-2xl h-[calc(100vh-216px)] sm:h-[calc(100vh-240px)] lg:h-[calc(100vh-144px)]'>
        <div className="m-5 flex flex-col justify-center items-center sm:w-[40%]">
          <div className="text-center">Contact me at <br/><b><a href="mailto:nabeel.mbab@gmail.com">nabeel.mbab@gmail.com</a></b></div>
          <a href="mailto:nabeel.mbab@gmail.com">
            <img src={gmailLogo} alt="gmail logo" className= "h-20 sm:h-36 mt-10 hover:scale-105 transition active:scale-95"/> 
          </a>
        </div>
        <div className="hidden sm:block text-4xl font-thin">/</div>
        <div className="m-5 flex flex-col justify-center items-center sm:w-[40%]">
          <div className="text-center">Connect with me <br/> on <b><a href="https://www.linkedin.com/in/nabeel-mbab/" target="_blank">LinkedIn</a></b>!</div>
          <a href="https://www.linkedin.com/in/nabeel-mbab/" target="_blank">
            <img src={linkedinLogo} alt="linkedin logo" className="h-20 sm:h-36 mt-10 hover:scale-105 transition active:scale-95"/>         
          </a>
          </div>
      </div>
    </div>
  )
}
