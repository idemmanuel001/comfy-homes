import { useState, useCallback, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import HeroBgSlider from '../components/HeroBgSlider';
import SearchBar from '../components/SearchBar';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';





export default function Home({ propertiesForRent }) {
  const [locationProperties, setLocationProperties] = useState([]);
  const [viewMoreInSelectedLocation, setViewMoreInSelectedLocation] = useState(false);
  const [viewMoreInDubai, setViewMoreInDubai] = useState(false);



  //recieving and storing the selected location's list of properties from the searchBar component
  //Here I am using useCallback hook to memoize the recieved data
  const getLocationProperties = useCallback((data) => {
    setLocationProperties(data);

  }, [setLocationProperties]);


  //Targeting the location to scroll to when the user selects a location
  const locationRef = useRef(null);
  

  useEffect(() => {
    if (locationProperties.length > 0) {
      locationRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [locationProperties]); 


  return (
    <>
      <Head>
        <title>Comfy-homes: Real Estate Website</title>
      </Head>

      <main className='w-full h-full bg-white'>
        <section className="flex flex-col items-center justify-center w-full bg-blue-500 -z-10 h-65-vh md:h-85-vh">

          {/* setting image as the background */}
          <div className="absolute w-full h-65-vh md:h-85-vh ">
            <HeroBgSlider />
          </div>

          {/* background overlay with content*/}
          <div className="absolute z-10 flex items-center justify-center w-full bg-black bg-opacity-60 h-65-vh md:h-85-vh">
            <div className='z-20 flex flex-col items-center w-10/12 md:max-w-screen-lg' >
              <h1 className='mb-2 text-4xl font-bold tracking-tight text-center text-white drop-shadow-sm md:text-6xl xl:text-7xl md:mb-5'>
                Discover Your New Home
              </h1>
              <p
                className="text-xl text-center text-white drop-shadow-sm md:text-2xl xl:text-4xl"
              >Let’s find a home that’s perfect for you in the U.A.E</p>

              {/* Search Component */}
              <SearchBar getLocationProperties={getLocationProperties} />

            </div>
          </div>

        </section>
        <section className="w-10/12 py-4 mx-auto md:py-8 md:max-w-screen-lg">

          <div>
            <h2
              className='text-2xl font-semibold text-center text-gray-800 md:text-4xl'
            >New Rentals in Dubai and Abu Dhabi</h2>

            {/* Properties for rent in dubai container  */}
            <div className="grid grid-rows-1 gap-6 my-4 overflow-hidden md:grid-cols-2 lg:grid-cols-3">
              {viewMoreInDubai ?
                propertiesForRent.map((property) => <Property property={property} key={property.id} />) :
                propertiesForRent.slice(0, 3).map((property) => <Property property={property} key={property.id} />)}
            </div>

          </div>

          <button
            onClick={() => setViewMoreInDubai(!viewMoreInDubai)}
            className='inline-flex items-center justify-between p-2 mx-auto text-lg text-blue-800 transition duration-300 ease-in-out border border-blue-800 rounded-md cursor-pointer cols-span-1 hover:border-gray-100 md:shadow-md md:text-base bg-gradient-to-r from-gray-100 hover:text-white hover:from-blue-400 hover:to-blue-800' >
            <span className="mr-1">
              {viewMoreInDubai ? 'See Less' : 'See More'}
            </span>
            <span className="grid place-items-center">
              {viewMoreInDubai ? <AiFillCaretUp /> : <AiFillCaretDown />}
            </span>
          </button>


          {/* Small Banner */}
          <div className="flex flex-col justify-between w-full my-10 overflow-hidden bg-gray-100 rounded-md md:flex-row-reverse md:h-52">
            <div id='img-clip-path' className='flex h-52 md:justify-end md:w-1/2 md:h-full md:justify-self-end ' >
              <Image
                src='/images/meeting.jpg'
                alt='meeting'
                width='700'
                height='208'
                objectFit='cover'
                objectPosition='left center'
              />
            </div>
            <div className='p-2 my-4 ml-4 mr-auto text-gray-800 md:p-4'>
              <h3 className='text-xl font-bold ' >
                Let&#39;s find the right selling option for you
              </h3>
              <p className='my-0.5 text-semibold' >
                Get your home&#39;s value and see selling options
              </p>

              <Link
                href='/coming-soon'
              >
                <button
                  className='flex items-center justify-center px-4 py-2 mt-4 text-lg text-white transition duration-300 ease-in-out bg-blue-800 rounded-md hover:text-blue-800 hover:bg-gray-100 hover:border hover:border-blue-800'
                >
                  Start Exploring
                </button>
              </Link>
            </div>
          </div>




          {/* Render the slected location's data if it has been loaded */}
          {locationProperties.length > 0 && (
            <div
              ref={locationRef}
              className='mb-6 md:mb-8' >

              <h2
                className='text-2xl font-semibold text-center text-gray-800 md:text-4xl'
              >Available Properties in {locationProperties[0].location[1].name}</h2>

              {/* Properties for rent in the selcted location's container  */}
              <div className="grid grid-rows-1 gap-6 my-6 overflow-hidden md:grid-cols-2 lg:grid-cols-3 md:flex-row ">
                {viewMoreInSelectedLocation ?
                  locationProperties.map((property) => <Property property={property} key={property.id} />) :
                  locationProperties.slice(0, 3).map((property) => <Property property={property} key={property.id} />)}
              </div>


              {locationProperties.length > 3 && (
                <button
                  onClick={() => setViewMoreInSelectedLocation(!viewMoreInSelectedLocation)}
                  className='inline-flex items-center justify-around p-2 text-lg text-blue-800 transition duration-300 ease-in-out border border-blue-800 rounded-md cursor-pointer hover:border-gray-100 md:shadow-md md:text-base bg-gradient-to-r from-gray-100 hover:text-white hover:from-blue-400 hover:to-blue-800' >
                  <span className="mr-1">
                    {viewMoreInSelectedLocation ? 'See Less' : 'See More'}
                  </span>
                  <span className="grid place-items-center">
                    {viewMoreInSelectedLocation ? <AiFillCaretUp /> : <AiFillCaretDown />}
                  </span>
                </button>
              )}
            </div>

          )}
        </section>
      </main>

    </>);
}


export async function getStaticProps() {

  const propertiesForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002,6020&purpose=for-rent&date-asc&hitsPerPage=12`);

  return {
    props: {
      propertiesForRent: propertiesForRent?.hits,
    },
  };
}
