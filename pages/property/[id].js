import Image from 'next/image';
import { FaBath, FaBed } from 'react-icons/fa';
import { BsGridFill, BsWhatsapp, BsFillTelephoneFill, BsTelephoneFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import { fetchApi, baseUrl } from '../../utils/fetchApi';
import ImageSlider from '../../components/ImageSlider';
import Map from '../../components/Map';
import BackHome from '../../components/BackHome';

export default function PropertyDetails({ propertyDetails: { price, rentFrequency, rooms, title, baths, agency, area, isVerified, description, type, purpose, amenities, furnishingStatus, photos, geography, location, phoneNumber: { phone, whatsapp } } }) {
    return (
        <main className='w-full h-full mb-6 bg-white md:my-12'>

            <BackHome />
            <h3 className='w-10/12 mx-auto mt-4 mb-2 md:mt-8 md:mb-6 text-lg text-gray-800 md:text-4xl font-bold text-center' > {title}</h3>

            <section className="w-10/12 py-2  mx-auto md:max-w-screen-lg">
                {/* Property photos */}
                {photos && <ImageSlider data={photos} />}

                <div className="flex flex-col items-center w-full text-gray-800 md:py-3 ">


                    <div className='w-full flex flex-col md:flex-row items-start md:items-start my-4 justify-between md:text-lg font-semibold pb-2'>


                        {/* Price, Verification Status, and Basic Amenities */}
                        <div className="flex flex-col  items-start justify center mt-3 mb-2 md:mt-0 md:mb-0 font-bold">
                            <p className='flex justify-center items-center text-center' >
                                <span className='w-3.5 h-3.5 md:w-4 md:h-4  rounded bg-blue-600 mr-1 md:mr-2' ></span>  {rentFrequency ? 'For Rent' : 'For Sale'}
                            </p>

                            <p className='flex justify-center items-center'>
                                <span className='text-green-600 mr-1 md:mr-2' >
                                    {isVerified && <GoVerified />}
                                </span>
                                <span>AED {millify(price)}{rentFrequency && `/${rentFrequency}`} </span>
                            </p>

                            <p className="flex items-center  justify-center text-blue-600">
                                <span className='flex items-center justify-center' >{rooms}- <FaBed /></span>
                                <span className='flex items-center justify-center mx-4'>{baths}- <FaBath /></span>
                                <span className='flex items-center justify-center'>{millify(area)}sqft- <BsGridFill /></span>
                            </p>
                        </div>

                        {/* Agent Details */}
                        <div className="flex flex-col my-2 md:my-0 items-start justify-center font-bold  ">
                            <p className="text-left mb-2 text-base">Agency Information</p>
                            <div className="flex items-center justify-center">
                                <div className='flex justify-center items-center rounded-full shadow shadow-gray-400'>
                                    <Image
                                        alt='agency logo'
                                        src={agency.logo.url}
                                        width='30'
                                        height='30'
                                    />
                                </div>
                                <p className='ml-2 text-base'>{agency.name} </p>
                            </div>

                            <div className='text-base'>
                                {phone && <p className='flex justify-center items-start my-1.5'>
                                    <BsTelephoneFill style={{ color: 'rgb(22 163 74)', marginRight: '0.5rem', width: '1.5rem', height: '1.5rem' }} /> {phone}
                                </p>}
                                {whatsapp && <p className='flex justify-center items-start my-1.5'>
                                    <BsWhatsapp style={{ color: 'rgb(22 163 74)', marginRight: '0.5rem', width: '1.5rem', height: '1.5rem' }} /> {whatsapp}
                                </p>}
                            </div>

                        </div>

                    </div>
                    {/* google map rendered here */}
                    <div id="map" className="flex flex-col w-full h-56 rounded items-center justify-center">
                        <Map geography={geography} />
                    </div>





                    <div className="flex items-center justify-center text-justify">
                        {description}
                    </div>
                </div>
            </section>


        </main>
    );
} ``;


export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props: {
            propertyDetails: data
        }
    };
}