import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

export default function NoPage() {
  return (
    <div className='flex flex-col'>
      <div className='sticky top-0 w-screen mx-0 px-0 flex lg:flex-row flex-col sm:justify-between justify-center bg-[#FDFAE3] z-50'>
        <Header/>
        <NavBar/>
      </div>
      <div className='text-3xl font-mono font-bold flex justify-center items-center text-center py-20'>
        Error 404: No Page found
      </div>
    </div>
  )
}
