import React from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.a 
    // animate = {{ y: 20, opacity: 1}}
    // initial = {{ y: -20, opacity: 0.5}}
    // transition = {{ duration: 0.5}}
    href="/landing">
      <div className='text-5xl sm:text-7xl text-left font-title font-black z-20 left-0 top-2 leading-[58px]'>
        Nabeel<br/>
        Muhammad
      </div>
    </motion.a>
  )
}
