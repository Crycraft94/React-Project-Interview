import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <>

     <div className="bg-[#2B3440] text-[#E1E6ED] w-full md:w-[350px] rounded-sm p-4">
      <div className='p-2 max-h-screen'>
      <h1 className='text-2xl py-2 font-semibold uppercase'>Sidebar</h1>
      <div className='mt-10'>
        <ul className='text-xl'>
          <Link to='/'><li className='cursor-pointer mb-2'>Home</li></Link>
          <Link to='/layout'><li className='cursor-pointer mb-2'>Layout</li></Link>
          <Link to='/searchbar'><li className='cursor-pointer mb-2'>Searchbar</li></Link>
          <Link to='/table'><li className='cursor-pointer mb-2'>Table</li></Link>
        </ul>
      </div>
      </div>
    
   </div>


    </>
  )
}
