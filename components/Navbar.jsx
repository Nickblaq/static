import { useState } from 'react'
import Link from 'next/link'
import EventButton from './EventButton'




const Navbar = () => {

    const [isSearch, SetSearch] = useState(false)

    return (
        <>
        <div className="flex flex-col justify-between items-center w-11/12 mx-auto bg-gray-200 border-b border-gray-700">
        {/* <div className="flex cursor-pointer">
            <div className="w-8 h-8">
            <img src="/nftlogo.svg" />
            </div>
            <h1 className="text-2xl font-extrabold">Cursor</h1>
        </div> */}

<header className="shadow-sm">
  <div
    className="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto "
  >
  

    <div className="flex items-center space-x-4">
      <Link href='/'>
      <span className="w-20 h-10  mr-6">
        <h1 className='text-2xl font-black font-fancy'>PISSAR</h1>
      </span>
      </Link>
    </div>

   

   
  </div>
  </header>
  <nav
      className="flex items-center justify-between space-x-6 md:space-x-12 mx-auto"
    >
         <Link href='/listnftform'>
         <span className="text-gray-900 cursor-pointer text-base md:text-xl" >List</span>
         </Link>
         <Link href='/nftform'>
         <span className="text-gray-900 cursor-pointer text-base md:text-xl" >Events</span>
         </Link>

      <Link href='/about'>
      <span className="text-gray-900 cursor-pointer text-base md:text-xl">About</span>
      </Link>
    </nav>

        </div>
        
        </>
    )
}

export default Navbar