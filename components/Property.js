import Link from 'next/link';
import Image from 'next/image';
import { FaBath, FaBed } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import millify from 'millify';
import defaultImage from '/public/images/house.jpg';

/* Property card */
export default function Property({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID }}) {
    return (
        <Link 
        href={`/property/${externalID}`} 
        passHref 
        className='block mx-auto my-6 overflow-hidden cursor-pointer md:my-9'
        >
            <div className="flex flex-col items-center w-fit overflow-hidden bg-gray-100 rounded-md shadow-md">

                <Image
                    src={coverPhoto ? coverPhoto.url : defaultImage}
                    alt='image'
                    width='400'
                    height='260'
                    className='w-full rounded-t-md'
           />
                <div className="flex flex-col items-center p-2 text-gray-800 md:py-3 md:px-2 ">
                    <h3 className='py-1 text-lg font-semibold text-center md:text-2xl' > {title.length > 30 ? title.substring(0, 30) + '...' : title }</h3>
                    <p className='flex text-lg italic' >
                        AED {millify(price)}{rentFrequency && `/${rentFrequency}`} 
                    </p>
                    
                    <p className="flex items-center  justify-around mt-1.5 w-4/5 text-blue-400">
                        <span className='flex items-center justify-around' >{rooms} - <FaBed /></span>
                        <span className='flex items-center justify-around'>{baths} - <FaBath /></span>
                        <span className='flex items-center justify-around'>{millify(area)}sqft - <BsGridFill /></span>
                    </p>
                   
                </div>

            </div>
        </Link>
    );
}
