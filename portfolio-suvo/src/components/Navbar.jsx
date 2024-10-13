import React from 'react'

export const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-8 lg:px-24' >
         
        <div className='container py-2  px-6 flex justify-center items-center justify-between'>
        <div className='text-2xl font-bold  md:inline'>Akbar</div>
            <div className='space-x-6'>
                
                    <a href="">Home</a>
                    <a href="">About Me</a>
                    <a href="">Contact</a>
                       

            </div>
            <button>Contact Me</button>
        </div>
    </nav>
  )
}
