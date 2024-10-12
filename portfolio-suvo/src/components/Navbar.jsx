import React from 'react'

export const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-8 lg:px-14' >
        <div className='container py-2 flex justify-end md:justify-between items-center'>
            <div className='text-xl font-bold hidden md:inline'>
                Akbar
                <div className='space-x-6'>
                    <a href="#home" className='hover:text-gray-400'>Home</a>
                    <a href="#about" className='hover:text-gray-400'>About Me</a>
                    <a href="#services" className='hover:text-gray-400'>Services</a>
                    <a href="#projects" className='hover:text-gray-400'>Projects</a>
                    <a href="#contact" className='hover:text-gray-400'>Contact</a>
                </div>
                <button className='bg-gradient-to-r from-green-400 to to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                    Contact Me

                </button>
            </div>
        </div>
    </nav>
  )
}
