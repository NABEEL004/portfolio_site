import React from 'react';
import detailsIcon from "../resources/DetailsIcon.png";
import youtubeIcon from "../resources/YoutubeIcon.png";
import githubIcon from "../resources/GitHubIcon.png";
import Language from "./Language"

export default function Project(prop) {
  const image_url = require('../images/' + prop.image)
  const github_url = 'https://github.com/NABEEL004/' + prop.github
  const languages = prop.language
  const language_components = languages.map((item, key) => <Language key={key} value={item} />)

  return (
    <div className='relative group flex flex-col justify-between items-center text-center w-[300px] bg-white h-[420px] m-3 shadow-md rounded-2xl hover:scale-105 hover:shadow-xl transition overflow-hidden z-0 hover:z-0'>
        <div className= "h-1/2"><img src={image_url} alt="project visual" className="object-cover h-[100%] w-auto object-top group-hover:-translate-y-7 group-hover:opacity-70 transition-all duration-300"/></div>
        <div className="font-mono font-bold text-xl group-hover:-translate-y-7 transition duration-300">{prop.title}</div>
        <div className="w-[270px] pt-2 font-mono text-base group-hover:-translate-y-7 transition duration-300">{prop.description}</div>
        <div className='group-hover:opacity-0 transition-all absolute bottom-[2.8rem] duration-300 group-hover:bottom-[4rem] flex flex-row translate-y-[20px]'>{language_components}</div>
        {/* <Language>Test</Language> */}
        <div className='flex translate-y-[100px] group-hover:-translate-y-6 delay-75 transition-all duration-500 overflow-hidden '>
          <a href="https://www.youtube.com/channel/UC2zjowvQDHTSS65mvEU-y8Q" target="_blank"><div className='mx-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150 rounded-full'><img src={youtubeIcon} className="h-[48px]" alt="youtube" /></div></a>
          <a href={github_url} target="_blank"><div className='mx-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150 rounded-full'><img src={githubIcon} className="h-[48px]" alt="github" /></div></a>
        </div>
    </div>
  )
}
