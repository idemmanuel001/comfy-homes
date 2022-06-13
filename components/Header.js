import Link from 'next/link';
import Image from 'next/image';

export default function Header({ propertiesForSale}) {
 
  return (
    <header className='flex justify-center w-full bg-white shadow-md h-14 item-center'>
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
          <Link href='/properties-for-sale'>
            <span className='flex items-center justify-center h-full px-5 py-1 my-1 md:my-3 text-sm font-semibold text-white transition duration-300 ease-in-out rounded-lg shadow cursor-pointer md:shadow-md md:text-base bg-gradient-to-r from-blue-400 to-blue-800 hover:text-black hover:from-blue-800 hover:to-blue-400 md:px-6 md:py-2'>
              Buy a Home
            </span>
          </Link>
      
        </nav>
      </div>
    </header>
  );
}

