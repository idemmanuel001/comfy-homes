import { FaBath, FaBed } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import { fetchApi, baseUrl } from '../../utils/fetchApi';
import ImageSlider  from '../../components/ImageSlider';
import Map from '../../components/Map';
import BackHome from '../../components/BackHome';

export default function PropertyDetails({ propertyDetails: { price, rentFrequency, rooms, title, baths, agency, area, isVerified, description, type, purpose, amenities, furnishingStatus, photos, geography, location, agency: { name, url }, phoneNumber: { mobile, phone, whatsapp } } }) {
    return (
        <main className='w-full h-full mb-6 bg-white md:my-12'>

            <BackHome />
            <h3 className='w-10/12 mx-auto mt-4 mb-2 md:mt-8 md:mb-6 text-lg text-gray-800 md:text-4xl font-bold text-center' > {title}</h3>
  
            <section className="w-10/12 py-4  mx-auto md:py-8 md:max-w-screen-lg">
                {/* Property photos */}
                {photos && <ImageSlider data={photos} />}

                <div className="flex flex-col items-center w-full text-gray-800 md:py-3 md:px-2 ">

                    <div className='flex items-center justify-center text-lg italic'>

                        <div
                        className='flex'
                        >
                            <span className='mx-1.5'>AED {millify(price)}{rentFrequency && `/${rentFrequency}`} </span>
                            <span className='text-green-400 mx-1.5' >
                                {isVerified && <GoVerified />}
                            </span>
                        </div>

                        {/* google map rendered here */}
                        <div id="map" className="flex flex-col w-full h-56 rounded items-center justify-center py-4">
                            <Map geography={geography} />
                        </div>
                    </div> 

                    <p className="flex items-center  justify-center mt-1.5 w-full md:w-4/5 text-blue-400">
                        <span className='flex items-center justify-center mx-2' >{rooms} - <FaBed />|</span>
                        <span className='flex items-center justify-center mx-2'>{baths} - <FaBath />|</span>
                        <span className='flex items-center justify-center mx-2 '>{millify(area)}sqft - <BsGridFill /></span>
                    </p>

                       
                    
                    <div className="flex items-center justify-center py-4 text-justify">
                        {description}
                    </div>
                </div>
            </section>


        </main>
    );
}``


export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props: {
            propertyDetails: data
        }
    };
}