import React from 'react'

function NavBar() {
  return (
    <nav className='flex justify-between items-center px-52'>
      <header className='text'>Kelvin Arias</header>
      <ul>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
        <li>Home</li>
        <li>About Me</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
      <button className='outline outline-1 outline-[]'>Resume</button>
    </nav>
  )
}

export default NavBar