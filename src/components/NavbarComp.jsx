import React from 'react'
import Logo from '../assets/movie_logo.png'
import { Link } from 'react-router-dom'

function NavbarComp() {
  return (
    <div className='flex border space-x-8 py-3 pl-2'>
        <img className="w-[50px]" src={Logo} alt=''/>
        <Link to='/' className='text-blue-500 text-lg md:text-3xl font-bold '>Movies</Link>
        <Link to='/watchlist' className='text-blue-500 text-lg md:text-3xl font-bold'>WatchList</Link>
    </div>
  )
}

export default NavbarComp