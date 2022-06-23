import Head from 'next/head'
import { set } from 'nprogress';
import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import HeroBgSlider from '../components/HeroBgSlider';
import SearchBar from '../components/SearchBar';




export default function Home({ propertiesForRent }) {

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
        <div className="absolute z-10 flex items-center justify-center w-full bg-black bg-opacity-50 h-65-vh md:h-85-vh">
          <div className='z-20 flex flex-col items-center w-10/12 md:max-w-screen-lg' >
            <h1 className='mb-2 text-4xl font-bold tracking-tight text-center text-white drop-shadow-sm md:text-6xl xl:text-7xl md:mb-5'>
              Discover Your New Home
            </h1>
            <p
              className="text-xl text-center text-white drop-shadow-sm md:text-2xl xl:text-5xl"
            >Let’s find a home that’s perfect for you in the U.A.E</p>

          {/* Search Component */}
            <SearchBar />

          </div>
        </div>

      </section>
      <section className="w-10/12 py-4 mx-auto  md:py-8 md:max-w-screen-lg">
        <h2
          className='text-3xl font-semibold text-center text-gray-800 md:text-4xl'
        >Explore Rentals in the U.A.E</h2>

        {/* Property container  */}
          <div className="grid grid-rows-1 gap-8 my-6 overflow-hidden md:grid-cols-3 md:gap-10 md:flex-row md:my-8">
            {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
        </div>
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
