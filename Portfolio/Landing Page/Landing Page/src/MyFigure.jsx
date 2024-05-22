import React from 'react'
import myPic from '../src/Assets/Images/MyProfilePicEnhancedAI-removebg.png'


function MyFigure() {
  return (
    <div className='pr-44 flex items-end relative'>
    <figure>
        <img className='z-10 fixed bottom-0 right-0 lg:w-[700px] lg:h-800px] ' src={myPic} alt='Pic of Kelvin' />
      </figure>
      <div className='bg-[#EDA751] w-96 h-96 lg:w-[1000px] lg:h-[1000px] rounded-full absolute -right-60 -bottom-80 -z-10 '>
      </div>
    </div>
  )
}

export default MyFigure