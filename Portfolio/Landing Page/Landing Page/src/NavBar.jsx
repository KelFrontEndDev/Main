import React from 'react'

function NavBar() {
  return (
    <nav className='flex justify-between items-center px-44 py-3 mb-5'>
      <header className='text-[#EDA751] font-bold text-lg'>Kelvin Arias</header>
      <ul className='flex gap-10 '>
        <li>Home</li>
        <li className=''>About</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
      <button className='outline outline-1 outline-[#EDA751] px-4 py-2 rounded-lg hover:bg-[#EDA751]'>Resume</button>
    </nav>
  )
}

export default NavBar