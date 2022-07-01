import Link from 'next/link';
import Image from 'next/image';
import { FaBath, FaBed } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import defaultImage from '/public/images/house.jpg';

/* Property card */
export default function Property({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, externalID, isVerified }}) {
    return (
        <Link 
        href={`/property/${externalID}`} 
        passHref 
            className='block mx-auto my-4 overflow-hidden'
        >
            <div className="flex flex-col   mx-auto items-center overflow-hidden transition-all bg-gray-100 rounded-md shadow-md cursor-pointer w-fit md:my-4 hover:shadow-lg group ">

                <Image
                    src={coverPhoto ? coverPhoto.url : defaultImage}
                    alt='image'
                    width='400'
                    height='260'
                      className='w-full transition duration-300 rounded-t-md group-hover:scale-125'
           />
                   <div className="flex flex-col items-center p-2 text-gray-800 md:py-3 md:px-2 ">
                    
                    <h3 className='py-1 text-lg font-semibold text-center' > {title.length > 30 ? title.substring(0, 30) + '...' : title }</h3>
                    <p className='flex items-center justify-center text-lg italic' >
                        <span className='mx-1.5'>AED {millify(price)}{rentFrequency && `/${rentFrequency}`} </span>
                        <span className='text-green-400 mx-1.5' >
                            {isVerified && <GoVerified />}
                        </span>
                    </p>
                    
                    <p className="flex items-center  justify-around mt-1.5 w-4/5">
                        <span className='flex items-center justify-around' >{rooms} - <FaBed />|</span>
                        <span className='flex items-center justify-around'>{baths} - <FaBath />|</span>
                        <span className='flex items-center justify-around'>{millify(area)}sqft - <BsGridFill /></span>
                    </p>
                   
                </div>

            </div>
        </Link>
    );
}
