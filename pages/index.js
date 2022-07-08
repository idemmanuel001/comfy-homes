import { useState, useCallback, useEffect } from 'react';
import Head from 'next/head'
import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import HeroBgSlider from '../components/HeroBgSlider';
import SearchBar from '../components/SearchBar';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'





export default function Home({ propertiesForRent }) {
  const [locationProperties, setLocationProperties] = useState([])
 // const [locationData, setLocationData] = useState()
  const [viewMoreInDubai, setViewMoreInDubai] = useState(false)

  //recieving and storing the selected location's list of properties from the searchBar component
  //Here I am using useCallback hook to memoize the recieved data
  const getLocationProperties = useCallback((data) => {
    setLocationProperties(data);
    // console.log(externalID + 'from index page locationExternalID')
    console.log(data);
    console.log(locationProperties + 'Location properties');
  }, [locationProperties])


  
  /* //get and store the result  the choosen location in a state
  useEffect(()=>{
     const getSelectedLocationData = async (locationExternalID) => {
      if(locationExternalID !== undefined){
        const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalID}&purpose=for-rent&hitsPerPage=21`);
        setLocationData(data);
        console.log(locationData);
      }
     }

    // getSelectedLocationData()
  }, [locationExternalID, locationData])
 */
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
              <SearchBar getLocationProperties={getLocationProperties}/>

          </div>
        </div>

      </section>
      <section className="w-10/12 py-4 mx-auto md:py-8 md:max-w-screen-lg">
        <h2
          className='text-3xl font-semibold text-center text-gray-800 md:text-4xl'
        >Explore Rentals in Dubai</h2>

        {/* Properties for rent in dubai container  */}
            <div className="grid grid-rows-1 gap-6 my-6 overflow-hidden md:grid-cols-2 lg:grid-cols-3 md:flex-row md:mt-8 md:mb-6">
            {viewMoreInDubai ? 
            propertiesForRent.map((property) => <Property property={property} key={property.id} />) :
            propertiesForRent.slice(0, 3).map((property) => <Property property={property} key={property.id} />)}
            </div>
         
          <button
          onClick={() => setViewMoreInDubai(!viewMoreInDubai)} 
            className='inline-flex items-center justify-around p-2 text-lg text-blue-800 transition duration-300 ease-in-out border border-blue-800 rounded-md cursor-pointer hover:border-gray-100 md:shadow-md md:text-base bg-gradient-to-r from-gray-100 hover:text-white hover:from-blue-400 hover:to-blue-800' >
          <span className="mr-1">
              {viewMoreInDubai ? 'See Less' : 'See More'}
          </span> 
            <span className="grid place-items-center">
              {viewMoreInDubai ? <AiFillCaretUp />  :  <AiFillCaretDown />} 
          </span>
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
