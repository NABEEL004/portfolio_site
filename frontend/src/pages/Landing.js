import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/brown_guy.png'; 

export default function Landing() {
  return (
    <div className="flex justify-center items-center p-10 bg-[#D4A269] h-screen">
    <div className='mx-10'>
      <div className = "text-8xl font-title font-black text-[#FDFAE3] m-5">
        hi, <br/> i'm Nabeel :-)
      </div>
      <div>
        <Link to='/about'>
            <button className="font-title font-black bg-[#FDFAE3] rounded-full p-5 m-5 px-10 text-[#D4A269] text-3xl hover:scale-105 active:scale-95 transition">Don't Click This!</button>
        </Link>
        <div></div>
      </div>
    </div>
    <div className = "mx-10">
      <img className="h-52" src={ logo } alt="guy"/>

    </div>
</div>
  )
}
