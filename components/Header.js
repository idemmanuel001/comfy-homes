import Link from 'next/link';
import Image from 'next/image';

export default function Header({ propertiesForSale, propertiesForRent }) {
 
  return (
    <header className='flex justify-center w-full bg-white shadow-2xl h-14 item-center'>
      <div className="flex items-center justify-between w-full h-full px-2 md:px-4 md:max-w-screen-lg">
        <Link href='/' passhref className='w-full h-full'>
          <Image
            src='/images/logo.svg'
            alt='logo'
            priority='true'
            width='200'
            height='30'
          />
        </Link>

        <nav className="flex items-center justify-end w-1/2">
          <Link href='/'>
            <span className='text-white shadow md:shadow-md text-sm md:text-base bg-blue-800  hover:opacity-80 transition ease-in-out duration-300 font-semibold rounded-full px-3 py-0.5 md:px-6 md:py-1 h-full flex justify-center items-center cursor-pointer'>Buy</span>
          </Link>
          <Link href='/'>
            <span className='text-white shadow md:shadow-md  text-sm md:text-base bg-blue-800 hover:opacity-80 transition ease-in-out duration-300 font-semibold rounded-full px-3 py-0.5 md:px-6 md:py-1 ml-2 md:ml-4  h-full flex justify-center items-center cursor-pointer'>Rent</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

