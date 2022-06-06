import Link from 'next/link'
import Image from 'next/image'
import { FaBath, FaBed } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go'


/* Property card */ 
export default function Property() {
  return (
      <Link href={'/'} passHref >
          <div className="flex flex-col items-center bg-gray-100 rounded-md shadow-md">

              <Image
                  src='/images/hero-image-1.jpg'
                  alt='image'
                  width='400'
                  height='300'
                  className='w-full rounded-t-md'
              />
              <div className="flex flex-col items-center py-2 text-black md:py-3 ">
                  <h3 className='py-1 text-2xl font-semibold text-center' >Sunview</h3>
                  <p className="flex text-lg italic">
                      buj khalifa street 25. dubai.
                  </p>
                  <div className="flex items-center justify-center text-lg ">
                      <span>baths</span>
                      <span>rooms</span>
                      <span>etc</span>
                  </div>
              </div>

          </div>
      </Link>
  )
}
