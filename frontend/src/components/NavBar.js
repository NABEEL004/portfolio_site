import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='texl-lg sm:text-xl flex justify-center z-21 items-center pt-5 right-0 top-2 mb-2 sm:mb-0'  >
        <Link to='/about' className={`${window.location.pathname === '/about' ? 'text-black border-[#B16F36] border-b-8 ' : 'hover:border-[#D4A269] hover:border-b-8 hover:scale-105 transition active:translate-y-1'} py-5 px-2 mx-2 font-title font-semibold text-center w-[180px]`}> About Me </Link>
        <Link to='/projects' className={`${window.location.pathname === '/projects' ? 'text-black border-[#B16F36] border-b-8 ' : 'hover:border-[#D4A269] hover:border-b-8 hover:scale-105 transition active:translate-y-1'} py-5 px-2 mx-2 font-title font-semibold text-center w-[180px]`}> Projects </Link>
        <Link to='/contact' className={`${window.location.pathname === '/contact' ? 'text-black border-[#B16F36]  border-b-8' : 'hover:border-[#D4A269] hover:border-b-8 hover:scale-105 transition active:translate-y-1'} py-5 px-2 mx-2 font-title font-semibold text-center w-[180px]`}> Contact Me </Link>
    </div>
  )
}
