import React from 'react'
import { motion } from 'framer-motion'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Link
    // animate = {{ y: 20, opacity: 1}}
    // initial = {{ y: -20, opacity: 0.5}}
    // transition = {{ duration: 0.5}}
    to="/landing">
      <div className='text-5xl sm:text-7xl text-left font-title font-black z-20 left-0 top-2 leading-[58px]'>
        Nabeel<br/>
        Muhammad
      </div>
    </Link>
  )
}
