import Image from 'next/image';
import footerArt from '/public/images/footer-art.svg';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaPinterestSquare, FaYoutubeSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='relative bottom-0 w-full pt-8 mt-12 bg-gray-100 border-t border-gray-500 h-max md:mt-24 '>

      <div className="flex flex-col items-start justify-center mt-5 mb-16">
        <div className="flex flex-col">
        <h3 className="text-left">
          About Us
        </h3>
        <ul className="flex flex-col ">
          <li>Our App</li>
          <li>Blog</li>
          <li>Guide</li>
          <li>FAQs</li>
          <li>Forum</li>
          <li>Contact Us</li>
    
        </ul>
        </div>


        <div className="flex flex-col items-start justify-center">
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

        <div className="flex items-center justify-center my-2 ">
          <FaFacebookSquare
            className='w-6 h-6 mx-1 cursor-pointer md:w-8 md:h-8'
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
            className='w-6 h-6 mx-1 cursor-pointer md:w-8 md:h-8'
          />
        </div>

  
      </div>

      <div className="flex">
        
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
