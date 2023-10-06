import Header from '../components/Header'
import React from 'react'
import AboutMe from '../components/AboutMe'
import NavBar from '../components/NavBar'

export default function About() {
  return (
    <div className="flex flex-col h-full v-full justify-center items-stretch">
      <div className='sticky top-0 w-screen mx-0 px-0 flex lg:flex-row flex-col sm:justify-between justify-center bg-[#FDFAE3] z-9999'>
        <Header/>
        <NavBar/>
      </div>
      <div className='h-[calc(100vh-216px)] sm:h-[calc(100vh-240px)] lg:h-[calc(100vh-144px)] flex justify-center items-center'>
        <AboutMe/>  
      </div>
    </div>
  )
}
