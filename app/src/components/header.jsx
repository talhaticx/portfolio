import React from 'react'
import Portfolio from '../assets/portfolio'
import menu from './../utlis/constants'

const Header = () => {
    return (
        <header className="bg-transparent flex w-screen h-28 items-center md:justify-between justify-center md:px-5">
            <Portfolio />
            <div className='flex px-2 hidden md:block'>
                {menu.map((item) => (
                    <h1 key={item.title} className='px-6 text-xl underline-animate font-light'>{item.title}</h1>
                ))}
            </div>
        </header>
    )
}

export default Header