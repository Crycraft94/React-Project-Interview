import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <>
<div className="navbar bg-neutral text-neutral-content ">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Website</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-2">
        <Link to='/layout'><li className='cursor-pointer ml-4'>Layout</li></Link>
        <Link to='/table'><li className='cursor-pointer ml-4'>Table</li></Link>
        <Link to='searchbar'><li className='cursor-pointer ml-4'>Search Bar</li></Link>
    </ul>
  </div>
</div>
    </>
  )
}
