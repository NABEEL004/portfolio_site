import React from 'react'

export default function Project(prop) {
  return (
    <div>
        Project Name: {prop.title} <br/>
        Skill Displayed: {prop.skill} <br/>
        Languages/Libraries used: {prop.language} <br/> <br/>
    </div>
  )
}
