import React from 'react';
import detailsIcon from "../resources/DetailsIcon.png";
import youtubeIcon from "../resources/YoutubeIcon.png";
import githubIcon from "../resources/GitHubIcon.png";

export default function Project(prop) {
  const image_url = require('../images/' + prop.image)

  return (
    <div className='group flex flex-col justify-between items-center text-center w-[300px] bg-white h-[420px] m-3 shadow-md rounded-2xl hover:scale-105 hover:shadow-xl transition overflow-hidden z-0 hover:z-0'>
        <div className= "h-1/2"><img src={image_url} alt="project visual" className="h-[100%] object-top group-hover:-translate-y-7 group-hover:opacity-70 transition-all duration-300"/></div>
        <div className="font-mono font-bold text-xl group-hover:-translate-y-7 transition duration-300">{prop.title}</div>
        <div className="w-[270px] pt-2 font-mono text-base group-hover:-translate-y-7 transition duration-300">{prop.description}</div>
        <div className='flex translate-y-[100px] group-hover:-translate-y-6 transition-all duration-500 overflow-hidden '>
          <a href="https://www.youtube.com/channel/UC2zjowvQDHTSS65mvEU-y8Q" target="_blank"><div className='mx-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150 rounded-full'><img src={youtubeIcon} className="h-[48px]" alt="youtube" /></div></a>
          <a href="https://github.com/NABEEL004" target="_blank"><div className='mx-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150 rounded-full'><img src={githubIcon} className="h-[48px]" alt="github" /></div></a>
        </div>
    </div>
  )
}
