import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi'

export default function BackHome() {
  return (
    <Link 
    href={'/'}
    passHref
    className='w-full flex '
    >
         <div
              className='my-4 hover:text-blue-800 cursor-pointer md:mt-4 text-left mx-auto flex justify-start items-center w-10/12 px-2 md:px-0  md:max-w-screen-lg'
         >
              <HiArrowLeft /> <span className='ml-1 md:ml-2 underline '> go back Home</span>
         </div>
    </Link>
  )
}
