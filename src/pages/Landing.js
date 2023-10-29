import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../images/brown_guy.png'; 
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';



export default function Landing() {
    const [display, setDisplay] = useState(false)
    const [clicked, setClicked] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (clicked) {
            setTimeout(()=>{
                // window.location.href='/about'; 
                navigate('/about')  
            }, 1000)  
        }
      }, [clicked, navigate]
    )

  return (
    <div className="flex justify-center items-center p-1 sm:p-3 md:p-6 bg-[#D4A269] absolute top-0 left-0 h-full w-full">
        <div className='flex flex-col mx-10 justify-between items-center sm:items-start w-[800px]'>
            <div className = "text-5xl sm:text-6xl md:text-8xl font-title font-black text-[#FDFAE3] m-5 h-[200px]">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString("hi, <br> i'm Nabeel :-)")
                        .callFunction(() => {
                            console.log('String typed out!');
                        })
                        .start()
                        .callFunction(() => {
                            setDisplay(true)
                        }
                        );
                    }}
                />
                {/* hi, <br/> i'm Nabeel :-) */}
            </div>
            <motion.div className="h-[40px] relative">
                <motion.div 
                    animate = {{ scale: clicked ? 1500 : 1, opacity: display ? 100 : 0}}  
                    transition = {{ duration: 1}} 
                    className={`h-1 w-1 bg-[#FDFAE3] opacity-0 rounded-full z-[999] absolute left-1/2 bottom-1/4 ${display ? 'opacity-100' : 'opacity-0'}`}>
                </motion.div>
                {/* <Link to='/about'> */}
                    <button onClick={() => setClicked(true)} className={`${display ? 'opacity-100' : 'opacity-0'} ${clicked ? 'hidden' : 'block'} font-title font-black bg-[#FDFAE3] rounded-full p-5 m-5 px-10 text-[#D4A269] text-lg sm:text-xl md:text-3xl hover:scale-105 active:scale-95 transition duration-200`}>Don't Click This!</button>
                {/* </Link> */}
            </motion.div>
        </div>
        <div className = "h-52 w-52 hidden lg:block">
            <img className="h-52 w-48" src={ logo } alt="guy"/>
        </div>
    </div>
  )
}

// function handleClick ({setClicked()}) {
//     setClicked(true)
//     .then(window.location.pathname="./about")
// }
