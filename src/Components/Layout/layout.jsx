import React from 'react'
import { Sidebar } from './Sidebar'
import { MainContent } from './MainContent'
import { Link } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
    <div className="navbar bg-neutral text-neutral-content ">
      <div className="flex-1">
        <Link to='/'><a className="btn btn-ghost normal-case text-xl">Website</a></Link>
      </div>
    </div>
    <div className=' flex  flex-col-reverse min-h-screen md:flex-row w-full p-10 justify-start gap-10'>
    <Sidebar />
    <MainContent />
    </div>

    
    </>
  )
}
