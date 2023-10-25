import React from 'react'
// import { styled } from 'styled-components'

export default function Language(prop) {
  return (
    <div className='border border-gray-600 py-0 px-2 mx-[0.1rem] rounded-2xl text-sm'>
        {prop.value}
    </div>
  )
}
