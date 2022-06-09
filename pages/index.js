import Link from 'next/link';
import Image from 'next/image';
import { set } from 'nprogress';
import Header from '../components/Header';
import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import HeroBgSlider from '../components/HeroBgSlider';




export default function Home({ propertiesForRent, propertiesForSale }) {



  return (
   <>
      <Header propertiesForRent={propertiesForRent} propertiesForSale={propertiesForSale} />
    <main className='w-full h-full bg-white'>
      <section className="flex flex-col items-center justify-center w-full bg-blue-500 -z-10 h-65-vh md:h-85-vh">

        {/* setting image as the background */}
        <div className="absolute w-full h-65-vh md:h-85-vh ">
         <HeroBgSlider />
        </div>

        {/* background overlay with content*/}
        <div className="absolute z-10 flex items-center justify-center w-full bg-black bg-opacity-50 h-65-vh md:h-85-vh">
          <div className='z-20 flex flex-col items-center w-10/12 px-2 md:px-4 md:max-w-screen-lg' >
            <h1 className='mb-2 text-4xl font-bold tracking-tight text-center text-white drop-shadow-sm md:text-6xl xl:text-7xl md:mb-5'>
              Discover Your New Home
            </h1>
            <p
              className="text-xl text-center text-white drop-shadow-sm md:text-2xl xl:text-5xl"
            >Let’s find a home that’s perfect for you in the UAE</p>

            <div className="flex items-center justify-center w-full mt-8 text-black md:w-4/5 md:h-12 ">
              <input
                type="text"
                name="search"
                placeholder='Search by cities in the UAE eg Dubai'
                id="search"
                className='block w-full px-3 py-1 m-0 text-base font-normal transition ease-in-out bg-white border border-gray-400 border-solid rounded outline-none form-control first-line:text-gray-700 bg-clip-padding drop-shadow-md hover:drop-shadow-xl focus:text-gray-700 md:h-12 focus:bg-white focus:border-blue-600 focus:outline-none placeholder:text-gray-200' />
             
              <button
                type="submit"
                className="block w-20 px-3 py-1 ml-1 font-bold text-white transition duration-300 ease-in-out bg-blue-800 border border-blue-800 border-solid rounded outline-none md:w-32 md:h-12 md:text-xl drop-shadow-md hover:drop-shadow-xl hover:opacity-80 focus:opacity-70 focus:outline-none"
              >Search</button>
            </div>



          </div>
        </div>

      </section>
      <section className="w-10/12 px-2 py-4 mx-auto md:px-4 md:py-6 md:max-w-screen-lg">
        <h2
          className='text-3xl font-semibold text-center text-gray-800 md:text-4xl'
        >Explore Rentals in the UAE</h2>

        {/* Property container  */}
          <div className="grid grid-rows-1 md:grid-cols-3 gap-8 md:gap-10 my-6 overflow-hidden md:flex-row md:my-8">
            {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
        </div>
      </section>

    
    </main>
    
    </>);
}


export async function getStaticProps() {

  const propertiesForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=25`);
  const propertiesForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=25`);

  return {
    props: {
      propertiesForRent: propertiesForRent?.hits,
      propertiesForSale: propertiesForSale?.hits,
    },
  };
}
