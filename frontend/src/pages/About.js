import Header from '../components/Header'
import React from 'react'
import AboutMe from '../components/AboutMe'
import NavBar from '../components/NavBar'

export default function About() {
  return (
    <div className="flex flex-col h-screen v-full">
      <div className='sticky top-0 w-screen mx-0 px-0 flex sm:flex-row flex-col sm:justify-between justify-center bg-[#FDFAE3] z-9999'>
        <Header/>
        <NavBar/>
      </div>
      <AboutMe/>
    </div>
  )
}
