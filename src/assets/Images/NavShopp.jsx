import React, { Component } from 'react'

export default class NavShopp extends Component {
  render() {
    return (
      <div>
      <nav className='w-full top-0 leading-8 border-b-2 border-stone-600 pl-10  absolute text-stone-400 uppercase'>
      <div className='flex gap-10 '>
      <span>Home</span>
      <span>Store</span>
      </div>
      <span className='pl-10'>About</span>
     
      </nav>
      </div>
    )
  }
}
