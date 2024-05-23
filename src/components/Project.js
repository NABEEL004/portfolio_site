import React from 'react';
import youtubeIcon from "../resources/play2.png";
import githubIcon from "../resources/GitHubIcon.png";
import Language from "./Language"

export default function Project(prop) {
  const image_url = require('../images/' + prop.image)
  const github_url = 'https://github.com/NABEEL004/' + prop.github
  const languages = prop.language
  const language_components = languages.map((item, key) => <Language key={key} value={item} />)

  return (
    <div className='relative group flex flex-col justify-between items-center text-center w-[260px] sm:w-[300px] bg-white h-[350px] sm:h-[420px] sm:drop-shadow-md sm:hover:drop-shadow-xl rounded-2xl hover:scale-y-105 sm:hover:scale-105 transition overflow-hidden z-0 hover:z-0 my-2 sm:my-8 mx-1'>
        <div className= "h-1/2"><img src={image_url} alt="project visual" className="object-cover h-[100%] w-auto object-top group-hover:-translate-y-7 group-hover:opacity-70 transition-all duration-300"/></div>
        <div className="font-mono font-bold text-lg sm:text-xl group-hover:-translate-y-7 transition duration-300">{prop.title}</div>
        <div className="w-[200px] sm:w-[270px] pt-2 font-mono text-sm sm:text-base group-hover:-translate-y-7 transition duration-300">{prop.description}</div>
        <div className='group-hover:opacity-0 transition-all absolute bottom-[2.8rem] duration-300 group-hover:bottom-[4rem] flex flex-row translate-y-[20px]'>{language_components}</div>
        {/* <Language>Test</Language> */}
        <div className='flex translate-y-[100px] group-hover:-translate-y-6 delay-75 transition-all duration-500 overflow-hidden group-hover:scale-y-95 sm:group-hover:scale-105'>
          <a href={prop.play} target="_blank" rel="noreferrer"><div className=' mx-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150 rounded-full'><img src={youtubeIcon} className="h-[36px] sm:h-[48px]" alt="youtube" /></div></a>
          {prop.github !== '' ? 
            <a href={github_url} target="_blank" rel="noreferrer"><div className='mx-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150 rounded-full'><img src={githubIcon} className="h-[36px] sm:h-[48px]" alt="github" /></div></a>
          : ''}
        </div>
    </div>
  )
}
