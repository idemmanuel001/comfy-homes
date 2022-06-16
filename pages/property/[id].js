import { FaBath, FaBed } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import { fetchApi, baseUrl } from '../../utils/fetchApi';
import ImageSlider  from '../../components/ImageSlider';

export default function PropertyDetails({ propertyDetails: { price, rentFrequency, rooms, title, baths, agency, area, isVerified, description, type, purpose, amenities, furnishingStatus, photos, geography } }) {
    return (
        <main className='w-full h-full bg-white'>
            <h2 className='w-full my-4 text-center '>
                {
                    `${title} Property Details`
                }``
            </h2>

            {/* Property photos */}
            {photos && <ImageSlider photos={photos} />}
  
            <section className="w-10/12 px-2 py-4 mx-auto md:px-4 md:py-8 md:max-w-screen-lg">

                <div className="flex w-full flex-col items-center p-2 text-gray-800 md:py-3 md:px-2 ">

                    <h3 className='py-1 text-lg font-semibold text-center' > {title}</h3>
                    <p className='flex items-center justify-center text-lg italic' >
                        <span className='mx-1.5'>AED {millify(price)}{rentFrequency && `/${rentFrequency}`} </span>
                        <span className='text-green-400 mx-1.5' >
                            {isVerified && <GoVerified />}
                        </span>
                    </p>

                    <p className="flex items-center  justify-around mt-1.5 w-4/5 text-blue-400">
                        <span className='flex items-center justify-around' >{rooms} - <FaBed />|</span>
                        <span className='flex items-center justify-around'>{baths} - <FaBath />|</span>
                        <span className='flex items-center justify-around'>{millify(area)}sqft - <BsGridFill /></span>
                    </p>
                </div>
            </section>


        </main>
    );
}


export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props: {
            propertyDetails: data
        }
    };
}