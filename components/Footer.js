import Image from 'next/image';
import footerArt from '/public/images/footer-art.svg';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaPinterestSquare, FaYoutubeSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='relative bottom-0 w-full pt-8 mt-12 bg-gray-100 border-t border-gray-500 h-max md:mt-24 '>

      <div className="flex flex-col items-center justify-center mt-5 mb-10">
        <div className="flex flex-col items-center justify-center">
          <Image
            src='/images/logo.svg'
            alt='logo'
            priority='true'
            width='200'
            height='30'
          />
          <p className="flex">
            &copy; 2022 Comfy-homes Group, Inc.
          </p>
        </div>

        <div className="flex items-center justify-center my-4 ">
          <FaFacebookSquare
            className='w-6 h-6 mx-1 cursor-pointer md:w-10 md:h-10'
          />
          <FaInstagramSquare
            className='w-6 h-6 mx-1 cursor-pointer md:w-10 md:h-10'
          />
          <FaTwitterSquare
            className='w-6 h-6 mx-1 cursor-pointer md:w-10 md:h-10'
          />
          <FaPinterestSquare
            className='w-6 h-6 mx-1 cursor-pointer md:w-10 md:h-10'
          />
          <FaYoutubeSquare
            className='w-6 h-6 mx-1 cursor-pointer md:w-10 md:h-10'
          />
        </div>

  
      </div>

      <div className="w-full h-8">
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
