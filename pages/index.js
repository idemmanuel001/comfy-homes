import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { set } from 'nprogress';





export default function Home() {
  const [count, setCount] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);


  const heroImages = [
    '/images/hero-image-1.jpg',
    '/images/hero-image-2.jpg',
    '/images/hero-image-3.jpg'
  ];
  useEffect(() => {
    const lastIndex = heroImages.length - 1;
    if (count > lastIndex) {
      setCount(0);
    }
  }, [count, heroImages.length]);

  useEffect(() => {
    let slider = setInterval(() => {
      setCount(count + 1);
      setImageIndex(count);
    }, 8000);
    return () => {
      clearInterval(slider);
    };
  }, [count]);


  return (

    <main className='w-full h-full bg-white'>
      <section className="-z-10 w-full h-65-vh md:h-85-vh flex flex-col justify-center items-center bg-blue-500">

        {/* setting image as the background */}
        <div className="absolute h-65-vh md:h-85-vh w-full ">
          <Image
            src={heroImages[imageIndex]}
            alt='hero section image'
            priority='true'
            layout="fill"
            objectFit="cover"
            quality={100}
          />

        </div>

        {/* background overlay with content*/}
        <div className="z-10 absolute h-65-vh md:h-85-vh w-full bg-black bg-opacity-60 flex justify-center items-center">
          <div className='z-20 w-10/12 md:px-0 md:max-w-screen-lg  p-4 flex flex-col items-center' >
            <h1 className='text-white drop-shadow-sm text-center text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-2 md:mb-5'>
              Discover Your New Home
            </h1>
            <p className="text-white drop-shadow-sm text-center  text-xl md:text-2xl xl:text-5xl">Let’s find a home that’s perfect for you</p>

            <div id="filter" className="text-black flex justify-center items-center mt-8 w-full md:w-4/5 md:h-12 ">
              <input 
              type="text" 
              name="search" 
              placeholder= 'eg. London'
              id="search"
                className='form-control block w-full px-3  py-1 text-base font-normal first-line:text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 drop-shadow-md hover:drop-shadow-xl focus:text-gray-700 md:h-12 focus:bg-white focus:border-blue-600 focus:outline-none' />
           
              <button
                type="submit"
                className='block w-20 md:w-32 md:h-12 md:text-xl px-3 py-1 ml-1 font-bold text-white bg-blue-800 rounded drop-shadow-md hover:drop-shadow-xl transition ease-in-out duration-300 hover:opacity-80 focus:opacity-70 focus:outline-none'
                >Search</button>
            </div>


           
          </div>
        </div>


      </section>

    </main>);
}

