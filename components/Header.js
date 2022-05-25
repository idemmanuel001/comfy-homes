import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='h-14 w-full bg-white shadow-lg shadow-gray-800 flex item-center justify-center'>
      <div className="h-full w-full px-6 md:px-0 md:max-w-screen-lg flex items-center justify-between ">
        <Link href='/' passhref className='w-20 h-full'>
          <Image
            src='/images/logo.svg'
            alt='logo'
            width='200'
            height='30'
          />
        </Link>

        <nav className="w-24  flex justify-center items-center">
          <Link href='/'>
            <span className='text-white bg-blue-800  hover:opacity-80 transition ease-in-out duration-300 font-semibold rounded-md px-4 py-1 mr-1 md:mr-4 h-full flex justify-center items-center cursor-pointer'>Buy</span>
          </Link>
          <Link href='/'>
            <span className='text-white bg-blue-800 hover:opacity-80 transition ease-in-out duration-300 font-semibold rounded-md px-4 py-1 h-full flex justify-center items-center cursor-pointer'>Rent</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
