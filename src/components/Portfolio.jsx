import React from 'react'
import SitoVetrina from '../assets/SitoVetrina.png'
import Crm from '../assets/Crm.png'
import PortfolioReact from "../assets/Portfolio.png";
import MeteoApp from "../assets/Screenshot 2023-07-10 004511.png";
import GerryPortfolio from "../assets/Gerryp.png";
import Twotips from "../assets/2tips.png";



import bootstrap from '../assets/Icone/bootstrap.png'
import css from '../assets/Icone/css-3.png'
import js from '../assets/Icone/js.png'
import react from '../assets/Icone/physics.png'
import tailwind from '../assets/Icone/tailwind-css.1024x615.png'
import next from "../assets/Icone/next-js.png";
import mongo from "../assets/Icone/mongodb.png"




function Portfolio() {


  const portfolios = [
    {
      id: 1,
      src: SitoVetrina,
      href: 'https://www.theatresshadows.it/',
      alt: 'Sito Vetrina Compagnia teatrale',
      content: 'Sito vetrina',
      icon1: js,
      icon2: bootstrap,

    },
    {
      id: 2,
      src: Crm,
      href: 'https://github.com/FabrizioPioCaponio/Crm-React-CrudApi',
      alt: 'Crm con Implementazione crud',
      content: 'Crm, CRUD API',
      icon1: react,
      icon2: css,

    },
    {
      id: 3,
      src: PortfolioReact,
      href: '#',
      alt: 'Responsive React Portfolio',
      content: 'React Portfolio',
      icon1: react,
      icon2: tailwind,
    },
    {
      id: 4,
      src: MeteoApp,
      href: 'https://react-meteo-app-fc.netlify.app/',
      alt: 'React meteo app',
      content: 'React meteo app',
      icon1: react,
      icon2: css,
    },

    {
      id: 5,
      src: GerryPortfolio,
      href: 'https://gerry-ciccimarra-portfolio.netlify.app/',
      alt: 'VideoMaker Portfolio',
      content: 'Director Portfolio',
      icon1: next,
      icon2: tailwind,
    },

    {
      id: 6,
      src: Twotips,
      href: 'https://2tips.vercel.app/',
      alt: 'Tips blog',
      content: 'Tips blog',
      icon1: next,
      icon2: mongo,
    },

  ]


  return (
    <div name='portfolio' className='w-full md:h-screen text-white z-20 relative'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-5xl  inline py-4 border-b-4 color2 bebas'>Portfolio</p>
          <p className='pt-8'>Alcuni dei miei lavori..</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 px-12 sm:px-0'>

          {
            portfolios.map(({ id, src, href, alt, content, icon1, icon2, icon3 }) => (
              <div key={id} className='group shadow-md m-4 h-auto max-w-full relative bg2 hover:bg-transparent rounded-md'>
                <a target='_blank'rel="noreferrer" href={href} >
                  <img className=' border2 duration-1000 hover:scale-110  rounded-md blur-0 hover:blur-sm' target='_blank' alt={alt} src={src} />
                </a>
                <h2 class="group-hover:scale-y-0  duration-200 p-1 px-2 absolute text-1xl bg2 color1 bungee  rounded-tr-md rounded-bl-md  bottom-0">{content}</h2>
                <div class="w-0 group-hover:w-1/5  duration-500 p-1  absolute bottom-0 flex ">
                  <img className='p-1' src={icon1} alt={alt} />
                  <img className='p-1' src={icon2} alt={alt}/>

                </div>
              </div>
            ))
          }


        </div>
      </div>
    </div>
  )
}

export default Portfolio