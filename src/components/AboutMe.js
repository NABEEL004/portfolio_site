import React from 'react'

export default function AboutMe(props) {
  const image_url = require('../resources/' + props.image)

  return (
    <div
      className=' bg-[#FDFAE3] flex flex-col justify-between items-center w-[350px] sm:w-[400px] h-[480px] sm:h-[520px] border-gray-300 border rounded-3xl mx-3 my-6 px-7 py-8'>
        <img src={image_url} alt={props.alt} className='h-36'/>
        <h1 className='font-bold font-title text-[1.2rem] sm:text-[1.4rem] h-[40px]'>{props.title}</h1>
        <p className='text-gray-600 font-poppins text-center h-[200px] text-sm sm:text-base'>{props.description}</p>
    </div>
  )
}
