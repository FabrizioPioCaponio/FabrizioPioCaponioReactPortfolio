import React from 'react'
import bootstrap from '../assets/Icone/bootstrap.png'
import css from '../assets/Icone/css-3.png'
import html from '../assets/Icone/html-5.png'
import js from '../assets/Icone/js.png'
import react from '../assets/Icone/physics.png'
import sass from '../assets/Icone/sass.png'
import tailwind from '../assets/Icone/tailwind-css.1024x615.png'
import java from "../assets/Icone/java.png";
import next from "../assets/Icone/next-js.png"


const Skills = () => {

const icons = [
  {
    id: 1,
    src: react,
    alt: 'React',
  },
  {
    id: 2,
    src: css,
    alt: 'css'
  },
  {
    id: 3,
    src: html,
    alt: 'html',
  },
  {
    id: 4,
    src: js,
    alt: 'java script',
  },
  {
    id: 5,
    src: bootstrap,
    alt: 'Bootstap',
  },
  {
    id: 6,
    src: tailwind,
    alt: 'Tailwind',
  },
  {
    id: 7,
    src: sass,
    alt: 'Saas',
  },
  {
    id: 8,
    src: java,
    alt: 'java',
  },
  {
    id: 9,
    src: next,
    alt: 'next.js',
  }
  
]

  return (
    <div name='competenze' className='w-full z-20 relative text-white h-full'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen'>
        <div  className='pb-8'>
          <p  className='text-5xl bebas inline py-4 border-b-4 color2 '>Competenze</p>
        </div>
        <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 '>
          
          {
            icons.map(
              ({id, src, alt}) => (
                <img  key={id} src={src} className=' m-auto p-10 hover:rotate-12 duration-500 hover:scale-95' alt={alt}/>
              )
            )
          }
          
          
          
          
          
        </div>
        
      </div>
    </div>
  )
}

export default Skills