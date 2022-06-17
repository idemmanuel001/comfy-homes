import { FaBath, FaBed } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import { fetchApi, baseUrl } from '../../utils/fetchApi';
import ImageSlider  from '../../components/ImageSlider';

export default function PropertyDetails({ propertyDetails: { price, rentFrequency, rooms, title, baths, agency, area, isVerified, description, type, purpose, amenities, furnishingStatus, photos, geography } }) {
    return (
        <main className='w-full h-full my-6 bg-white md:my-12'>
           

            {/* Property photos */}
            {photos && <ImageSlider data={photos} />}
  
            <section className="w-10/12 px-2 py-4 mx-auto md:px-4 md:py-8 md:max-w-screen-lg">

                <div className="flex flex-col items-center w-full p-2 text-gray-800 md:py-3 md:px-2 ">

                    <h3 className='py-1 text-lg font-bold text-center' > {title}</h3>
                    <p className='flex items-center justify-center text-lg italic' >
                        <span className='mx-1.5'>AED {millify(price)}{rentFrequency && `/${rentFrequency}`} </span>
                        <span className='text-green-400 mx-1.5' >
                            {isVerified && <GoVerified />}
                        </span>
                    </p>

                    <p className="flex items-center  justify-center mt-1.5 w-full md:w-4/5 text-blue-400">
                        <span className='flex items-center justify-center mx-2' >{rooms} - <FaBed />|</span>
                        <span className='flex items-center justify-center mx-2'>{baths} - <FaBath />|</span>
                        <span className='flex items-center justify-center mx-2 '>{millify(area)}sqft - <BsGridFill /></span>
                    </p>

                    <div>
                        <div id="map" className="flex flex-col items-center justify-center py-4">
                            Google Map would go here:::::::
                            <p> Lat:{geography.lat} </p>
                            <p> Lon:{geography.lng} </p>
                        </div>

                        <div className="flex items-center justify-center py-4 text-justify">
                            {description}
                        </div>
                    </div>
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