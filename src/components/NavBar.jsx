import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from "react-scroll";

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'competenze'
        },
        {
            id: 5,
            link: 'contatti'
        },

    ]



    return (
        <div className='flex justify-between items-center w-full bg4 h-16 fixed navbar px-4 z-50'>
            <div className='logo hover:scale-110 duration-200 cursor-default'>
                <h1 className=''>FABRIZIO CAPONIO</h1>
            </div>
            <ul className='hidden md:flex'>

                {links.map(({ id, link }) => (
                    <li key={id} className=' px-4 cursor-pointer capitalize font-medium hover:scale-125 duration-200 nav-li bebas text-2xl'>
                        <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 color2 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (

                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg1 nav-li duration-300  '>
                    {links.map(({ id, link }) => (
                        <li key={id} className=' px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 py-6 text-4xl nav-li bebas '>
                            <Link to={link} onClick={() => setNav(!nav)} smooth duration={500}>{link}</Link>
                        </li>
                    ))}
                </ul>

            )}


        </div>
    )
}

export default NavBar