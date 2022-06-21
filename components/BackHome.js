import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi'

export default function BackHome() {
  return (
    <Link 
    href={'/'}
    passHref
    className='w-full flex cursor-pointer'
    >
         <div
              className='py-2 md:py-4 text-left flex justify-start items-center w-10/12 px-2 mmd:px-0  md:max-w-screen-lg'
         >
              <HiArrowLeft /> <span className='ml-1 md:ml-2'> go back Home</span>
         </div>
    </Link>
  )
}
