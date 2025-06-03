import React, { useState } from 'react'

export default function Footer() {
  const [socials,setSocials]=useState([
    { id: 1, href: 'https://www.youtube.com', img: './src/assets/Images/Spotify Logo.png' },
    { id: 3, href: 'https://www.facebook.com', img: './src/assets/Images/Youtube Logo.png' },
    { id: 2, href: 'https://www.spotify.com', img: './src/assets/Images/Facebook Logo.png' },
  ])
  return (
    <div className='flex justify-center items-center bg-blue-200 h-[50px]'>
     
      {
        socials.map(social=>(
        <ul>
          <li><a href="#" src={social.img}><img src={social.img} className='w-[30px] h-[30px] rounded-full m-1'/></a></li>
        </ul>
      ))
      }
      </div>
  )
}


