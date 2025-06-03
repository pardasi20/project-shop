
import React from 'react'
import NavBar from './NavBar'
export default function Header() {
  return (
    <div   className='w-full h-[200px] bg-cover brightness-50'
    style={{ backgroundImage: `url('./src/assets/Images/Header Background.jpg')` }}
    >
        <NavBar/>
        <div className='flex justify-center items-center h-[70%]'>
        <h1 className='text-white text-4xl'>React js</h1>
        </div>
        

    </div>
  )
}
