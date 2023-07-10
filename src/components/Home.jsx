import React from 'react'
import HeroImage from '../assets/HeroImage.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from "react-scroll";

const Home = () => {

const HomeCopy = "Realizzo Web Applications e siti web funzionali, prestando una particolare attenzione all'esperienza utente attraverso design accattivanti ed intuitivi. "


    return (
        <div className='h-screen w-full bg-gradient-to-b from-black to-gray-800  fixed '>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ' >
                <div className=' flex-col justify-center'>
                    <h2 className='transition-opacity text-4xl sm:text-7xl font-bold color2 pt-16 md:pt-10 sm:pt-36 '>Front End Developer</h2>
                    <p className='text-gray-300 py-4  text-xl max-w-md'>
                       {HomeCopy}</p>
                    <Link to='portfolio' smooth duration={500} className='group w-fit px-3 py-2 my-2 flex items-center bg-gradient-to-bl from-white to-yellow-200 hover:scale-105 duration-300 hover:to-yellow-300 cursor-pointer rounded-md bebas text-2xl' >
                        PORTFOLIO
                        <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={23} /></span>
                    </Link>
                </div>
                <div className='flex flex-col justify-center h-ful group'>
                    <img className=' w-3/5 md:w-2/3 z-10 mx-auto md:ml-48 pt-20 sm:w-2/5 group-hover:scale-125 duration-700' src={HeroImage} alt="Immagine Profilo" />
                    <svg className='group-hover:rotate-180 group-hover:scale-75 duration-1000 absolute z-0 max-w-2xl ' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#E9E41D" d="M55.3,-65.8C71.1,-52.7,82.9,-34.7,86.2,-15.3C89.5,4.1,84.3,24.9,72.7,39C61,53.1,42.9,60.5,24.4,67.4C5.9,74.3,-12.9,80.7,-30.9,77.4C-49,74.1,-66.3,61.2,-73,44.6C-79.7,27.9,-75.8,7.6,-70.3,-10.4C-64.8,-28.5,-57.6,-44.2,-45.6,-58C-33.6,-71.8,-16.8,-83.5,1.5,-85.3C19.8,-87.1,39.6,-78.9,55.3,-65.8Z" transform="translate(100 100)" />
                    </svg>

                </div>

            </div>
        </div>
    )
}

export default Home 