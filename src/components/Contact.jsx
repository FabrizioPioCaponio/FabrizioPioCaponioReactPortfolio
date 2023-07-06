import React from 'react'


const Contact = () => {
    return (
        <div name='contatti' className='w-full h-screen color2 z-20 relative'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-5xl bebas inline py-4 border-b-4 '>Contatti</p>
            </div>
          <form action='https://getform.io/f/28b0ed5b-5477-4b50-a61c-a3712c3bee31' method="POST" className='flex flex-col w-full md:w-1/2'>

            <input
            type='text'
            name='name'
            placeholder='Inserisci il tuo nome'
            className='p-2 m-2 mt-9 bg-transparent border2 rounded-md text-white focus:outline-none'>
            
            </input>
            <input
            type='text'
            name='email'
            placeholder='Inserisci la tua mail'
            className='m-2 p-2 bg-transparent border2 rounded-md text-white focus:outline-none'>
            
            </input>
            <textarea
            type='text'
            name='message'
            rows={10}
            placeholder='Scrivi il tuo messaggio'
            className='m-2 p-2 bg-transparent border2 rounded-md text-white focus:outline-none'>
            
            </textarea>

            <button className='color1 mx-auto my-2 flex py-3 px-6 items-center hover:scale-105  bg-gradient-to-bl from-white to-yellow-200 hover:to-yellow-300 duration-300 cursor-pointer rounded-md bebas text-2xl'>
                Contattami

            </button>



            


          </form>
        </div>
    </div>
    )
}

export default Contact