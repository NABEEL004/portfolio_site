import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='text-2xl flex justify-center z-21 items-center'>
        <Link to='/about' className={`${window.location.pathname === '/about' ? 'text-[#FDFAE3] bg-[#B16F36]  ' : 'hover:bg-[#D4A269] hover:scale-105 transition active:scale-95'} py-5 px-12 mx-8 font-title font-semibold text-center w-64 rounded-full`}> About Me </Link>
        <Link to='/projects' className={`${window.location.pathname === '/projects' ? 'text-[#FDFAE3] bg-[#B16F36]  ' : 'hover:bg-[#D4A269] hover:scale-105 transition active:scale-95'} py-5 px-12 mx-8 font-title font-semibold text-center w-64 rounded-full`}> Projects </Link>
        <Link to='/contact' className={`${window.location.pathname === '/contact' ? 'text-[#FDFAE3] bg-[#B16F36]  ' : 'hover:bg-[#D4A269] hover:scale-105 transition active:scale-95'} py-5 px-12 mx-8 font-title font-semibold text-center w-64 rounded-full`}> Contact Me </Link>
    </div>
  )
}
