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
              className='mt-4 hover:text-blue-800 cursor-pointer md:mt-8 text-left mx-auto flex justify-start items-center w-10/12  md:max-w-screen-lg'
         >
              <HiArrowLeft /> <span className='ml-0.5 md:ml-1 underline '> go back Home</span>
         </div>
    </Link>
  )
}
