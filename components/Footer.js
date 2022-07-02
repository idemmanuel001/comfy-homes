import Image from 'next/image';
import footerArt from '/public/images/footer-art.svg';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaPinterestSquare, FaYoutubeSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='relative bottom-0 w-full pt-8 mt-12 bg-gray-100 border-t border-gray-500 h-max md:mt-24 '>
      {/* Container */}
      <div className="flex flex-col-reverse  px-2 md:flex-row mx-auto md:items-start md:justify-between md:max-w-screen-lg">
        
        {/* Quick Links */}
        <div className="flex flex-col items-start md:mb-32">
          <div className="flex flex-col">
            <h3 className="text-left text-xl font-bold py-1.5  mb-4 border-b-4 border-blue-800">
              Quick Links
            </h3>
            <ul className="flex flex-col mb-2 ">
              <li className='font-semibold '>About Us</li>
              <li className='font-semibold '>Blog</li>
              <li className='font-semibold '>Guide</li>
              <li className='font-semibold '>FAQs</li>
              <li className='font-semibold '>Forum</li>
              <li className='font-semibold '>Contact Us</li>
              <li className='font-semibold '>Our App</li>

            </ul>
          </div>


          <div className="flex flex-col items-start justify-center mt-8">
            <Image
              src='/images/logo.svg'
              alt='logo'
              priority='true'
              width='200'
              height='30'
            />
            <p className="flex font-semibold ">
              &copy; 2022 Comfy-homes Group, Inc.
            </p>
            <p className="font-semibold  ">
              Developed by <a href='#' className="text-blue-800 cursor-pointer underline"> Idoko Emmanuel</a>
            </p>
          </div>

          <div className="flex items-center justify-center my-2 ">
            <FaFacebookSquare
              className='w-6 h-6 cursor-pointer md:w-8 md:h-8'
            />
            <FaInstagramSquare
              className='w-6 h-6 mx-1 cursor-pointer md:w-8 md:h-8'
            />
            <FaTwitterSquare
              className='w-6 h-6 mx-1 cursor-pointer md:w-8 md:h-8'
            />
            <FaPinterestSquare
              className='w-6 h-6 mx-1 cursor-pointer md:w-8 md:h-8'
            />
            <FaYoutubeSquare
              className='w-6 h-6 cursor-pointer md:w-8 md:h-8'
            />
          </div>


        </div>


        <div className="flex flex-col items-start  md:h-full mb-8">
          <h3 className="text-left max-w-fit text-xl font-bold py-1.5  mb-4 border-b-4 border-blue-800 ">
            Properties
          </h3>
          <ul className="flex flex-col mb-2 ">
            <li className='font-semibold '>Find a Property to Buy</li>
            <li className='font-semibold '>Find a Property to Rent</li>
            <li className='font-semibold '>Penthouses for Sale</li>
            <li className='font-semibold '>Houses for Sale with Swimming Pool</li>
            <li className='font-semibold '>Houses for Sale with Tennis Court</li>
            <li className='font-semibold '>New Homes for Sale in the U.A.E</li>
            <li className='font-semibold '>Water Side Properties for Sale in the U.A.E</li>

          </ul>
        </div>

       

      </div>

      {/* footer Art */}
      <div id='footer-art' className="w-full h-6 mt-10">
        <Image
          src={footerArt}
          alt='footer art'
          layout="responsive"
          objectFit="cover"
          priority='true'
          quality={100}
          className='bg-gray-100 '
        />
      </div>
    </footer>
  );
}
