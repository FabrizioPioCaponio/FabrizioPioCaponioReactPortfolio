import React from 'react'

function About() {

  const Content = " La grande passione per la tecnologia e l'informatica mi ha portato ad apprendere competenze nell' ambito della programmazione inizialmente in modo autonomo, creando accattivanti siti web. "
  const Content2 = "In seguito, grazie a corsi di formazione e grazie a nuovi progetti ho potuto ampliare le mie capacità interfacciandomi con le tecnologie e le metodologie più efficenti."

  return (
    <div name='about' className='w-full h-screen color3 z-20 relative'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-5xl inline py-4 border-b-4 color2 bebas '>About</p>
        </div>
        <p className='text-2xl inline pt-2 color2 bebas '>Classe 99</p>
        <p className='pt-4 md:pr-96'>{Content}</p> <br />
        <p className='pt-1 md:pr-96'>  {Content2}</p>
        
      </div>
    </div>
  )
}

export default About