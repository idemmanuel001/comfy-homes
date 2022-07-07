import { useState, useEffect } from 'react';
import Head from 'next/head'
import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import HeroBgSlider from '../components/HeroBgSlider';
import SearchBar from '../components/SearchBar';
import { BsFillCaretDownFill } from 'react-icons/bs'





export default function Home({ propertiesForRent }) {
  const [locationExternalID, setLocationExternalID] = useState(0)
  const [viewMoreInDubai, setViewMoreInDubai] = useState(false)

  //recieving and storing the externalID from the searchBar component
  const getexternalID = (externalID)=>{
    setLocationExternalID(externalID)
    console.log(locationExternalID + 'from the Index component');
  }

  return (
   <>
   <Head>
    <title>Comfy-homes: Real Estate Website</title>
   </Head>

    <main className='w-full h-full bg-white'>
      <section className="flex flex-col items-center justify-center w-full bg-blue-500 -z-10 h-73-vh md:h-85-vh">

        {/* setting image as the background */}
        <div className="absolute w-full h-73-vh md:h-85-vh ">
         <HeroBgSlider />
        </div>

        {/* background overlay with content*/}
        <div className="absolute z-10 flex items-center justify-center w-full bg-black bg-opacity-50 h-73-vh md:h-85-vh">
          <div className='z-20 flex flex-col items-center w-10/12 md:max-w-screen-lg' >
            <h1 className='mb-2 text-4xl font-bold tracking-tight text-center text-white drop-shadow-sm md:text-6xl xl:text-7xl md:mb-5'>
              Discover Your New Home
            </h1>
            <p
              className="text-xl text-center text-white drop-shadow-sm md:text-2xl xl:text-4xl"
            >Let’s find a home that’s perfect for you in the U.A.E</p>

          {/* Search Component */}
            <SearchBar getexternalID={getexternalID}/>

              <div className="flex items-center justify-center w-16 h-14 p-4 text-white  text-xl font-extrabold rounded absolute bottom-12 left-auto right-auto">
                <BsFillCaretDownFill style={{width: '3rem', height: '2rem'}} />
            </div>
          </div>
        </div>

      </section>
      <section className="w-10/12 py-4 mx-auto md:py-8 md:max-w-screen-lg">
        <h2
          className='text-3xl font-semibold text-center text-gray-800 md:text-4xl'
        >Explore Rentals in Dubai</h2>

        {/* Properties for rent in dubai container  */}
            <div className="grid grid-rows-1 gap-8 my-6 overflow-hidden md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:flex-row md:my-8">
            {viewMoreInDubai ? 
            propertiesForRent.map((property) => <Property property={property} key={property.id} />) :
            propertiesForRent.slice(0, 3).map((property) => <Property property={property} key={property.id} />) 
          }
            </div>
         
          <button
          onClick={() => setViewMoreInDubai(!viewMoreInDubai)} 
          className='text-white p-2 col-start-3 rounded-md transition duration-300 ease-in-out  shadow cursor-pointer md:shadow-md text-lg md:text-base bg-gradient-to-r from-blue-800 to-blue-400 hover:text-black hover:from-blue-400 hover:to-blue-800' >
            {viewMoreInDubai ? 'View less rentals in Dubai' : 'View more rentals in Dubai'}
         </button>
      </section>

    
    </main>
      
    </>);
}


export async function getStaticProps() {

  const propertiesForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=24`);
 
  return {
    props: {
      propertiesForRent: propertiesForRent?.hits,
    },
  };
}
