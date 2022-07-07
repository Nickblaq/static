import { useState } from 'react'
import Link from 'next/link'
import EventButton from './EventButton'




const Navbar = () => {

    const [isSearch, SetSearch] = useState(false)

    return (
        <>
        <div classNameName="flex justify-between items-center w-11/12 mx-auto mt-6">
        {/* <div className="flex cursor-pointer">
            <div className="w-8 h-8">
            <img src="/nftlogo.svg" />
            </div>
            <h1 classNameName="text-2xl font-extrabold">Cursor</h1>
        </div> */}

<header className="shadow-sm">
  <div
    className="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto"
  >
    {/* <div className="md:flex flex-1 w-0 hidden"
    
    >
      <button className="p-2 text-gray-600 bg-gray-100 rounded-full" type="button"
      
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewbox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></path>
        </svg>
      </button>
    </div> */}

    <div className="flex items-center space-x-4">
      <span className="w-20 h-10  mr-6">
        <h1 className='text-2xl font-black '>CURSOR</h1>
      </span>

      <form className="hidden mb-0 lg:flex">
        <div className="relative">
          <input
            className="h-10 pr-10 text-sm placeholder-gray-300 border-gray-200 rounded-lg focus:z-10"
            placeholder="Search..."
            type="text"
          />

          <button
            className="absolute inset-y-0 right-0 p-2 mr-px text-gray-600 rounded-r-lg"
            type="submit"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </form>

      
    </div>

    {!isSearch && 
    <div className="flex justify-end flex-1 w-0 lg:hidden">
      <button className="p-2 text-gray-500 bg-gray-100 rounded-full"
         onClick={()=> {SetSearch(!isSearch)}}
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewbox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    }

    <nav
      className="items-center justify-center hidden space-x-8 text-sm font-medium lg:flex lg:flex-1 lg:w-0"
    >
         <Link href='/nftform'>
         <span className="text-gray-900 cursor-pointer" >List</span>
         </Link>
      <EventButton />
      <span className="text-gray-900 cursor-pointer" >Promote</span>
      <Link href='/About'>
      <span className="text-gray-900 cursor-pointer">About</span>
      </Link>
      <span className="text-gray-900 cursor-pointer" >Contact</span>
    </nav>

    <div className="items-center hidden space-x-4 lg:flex">
      <div
        className="px-5 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg"
       
      >
        Log in
      </div>
      <div
        className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg"
    
      >
        Sign up
      </div>
    </div>
  </div>

  <div className="border-t border-gray-100 lg:hidden sticky z-20">
    <nav
      className="flex items-center justify-center p-4 overflow-x-auto text-sm font-medium"
    >
        <Link href='/nftform'>
         <span className="text-gray-900 cursor-pointer" >List</span>
         </Link>
         <div  className="flex-shrink-0 pl-4 cursor-pointer">
         <EventButton />
         </div>
      <span className="flex-shrink-0 pl-4 text-gray-900 cursor-pointer" >Promote</span>
      <Link href='/'>
      <span className="flex-shrink-0 pl-4 text-gray-900 cursor-pointer">About</span>
      </Link>
      <span className="flex-shrink-0 pl-4 text-gray-900 cursor-pointer" >Contact</span>
    </nav>
  </div>
  {isSearch && 
      
      <form className="mb-0 flex mx-auto justify-center items-center lg:hidden">
      <div className="relative">
        <input
          className="h-10 pr-10 text-sm placeholder-gray-300 border-gray-200 rounded-lg focus:z-10"
          placeholder="Search..."
          type="text"
        />

        <button
          className="absolute inset-y-0 right-0 p-2 mr-px text-gray-600 rounded-r-lg"
       
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewbox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </form>

      }
</header>
        </div>
        
        </>
    )
}

export default Navbar