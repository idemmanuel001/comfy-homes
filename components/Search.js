import React from 'react'

export default function Search() {
  return (
      <div className="flex items-center justify-center w-full mt-8 text-black md:w-4/5 md:h-12 ">
          <input
              type="text"
              name="search"
              placeholder='Search by cities in the UAE eg Dubai'
              id="search"
              className='block w-full px-3 py-1 m-0 text-base font-normal transition ease-in-out bg-white border border-gray-400 border-solid rounded outline-none form-control first-line:text-gray-700 bg-clip-padding drop-shadow-md hover:drop-shadow-xl focus:text-gray-700 md:h-12 focus:bg-white focus:border-blue-600 focus:outline-none placeholder:text-gray-200' />

          <button
              type="submit"
              className="block w-20 px-3 py-1 ml-1 font-bold text-white transition duration-300 ease-in-out bg-blue-800 border border-blue-800 border-solid rounded outline-none md:w-32 md:h-12 md:text-xl drop-shadow-md hover:drop-shadow-xl hover:opacity-80 focus:opacity-70 focus:outline-none"
          >Search</button>
      </div>
  )
}
