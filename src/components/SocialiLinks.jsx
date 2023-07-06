import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const links = [
    {
        id: 1,
        child: (
            <>
                LinkedIn  <FaLinkedin size={30} />
            </>
        ),
        href: 'https://www.linkedin.com/in/fabrizio-pio-caponio-aa8271254/',
        style: 'rounded-tr-md',
        styleB: 'rounded-tl-md',
        icon: <FaLinkedin size={30} />
    },
    {
        id: 2,
        child: (
            <>
                GitHub  <FaGithub size={30} />
            </>
        ),
        href: 'https://github.com/FabrizioPioCaponio',
        icon: <FaGithub size={30}/>
    },

    {
        id: 3,
        child: (
            <>
                Mail  <HiOutlineMail size={30} />
            </>
        ),
        href: 'mailto:fabrizio.caponio99@gmail.com',
        icon: <HiOutlineMail size={30} />
    },
    {
        id: 4,
        child: (
            <>
                Download  <BsFillPersonLinesFill size={30} />
            </>
        ),
        href: '/CVFabrizioCaponio.pdf',
        style: 'rounded-br-md',
        styleB: 'rounded-tr-md',
        download: true,
        icon: <BsFillPersonLinesFill size={30}/>
    },
]


const SocialiLinks = () => {
    return (
        <><div className='hidden lg:flex flex-col top-[35%] left-0 fixed z-50'>
            <ul>

                {links.map(
                    ({ id, child, href, download, style }) => (
                        <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 linklist ${style}`}>
                            <a href={href} download={download} target='_blank' rel='noreferrer' className='flex justify-between items-center w-full bebas text2 text-2xl'>{child}</a>
                        </li>

                    ))}
            </ul>
        </div>

        <div className='lg:hidden  bottom-0 fixed z-50  bottomBar'>
            <ul className='flex '>

                {links.map(
                    ({ id, icon, href, download, styleB }) => (
                        <li key={id} className={`  px-4 py-2 bg1 color2 ${styleB}`}>
                            <a href={href} download={download} target='_blank' rel='noreferrer' className=' '>{icon}</a>
                        </li>

                    ))}
            </ul>
        </div>
        </>
        
        
    )
}

export default SocialiLinks