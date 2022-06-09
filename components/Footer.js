import Image from 'next/image';
import footerArt from '/public/images/footer-art.svg';

export default function Footer() {
  return (
    <div className='absolute bottom-0 h-max w-full ' >


      <div className="h-20 w-full">
        <Image
          src={footerArt}
          alt='footer art'
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  );
}
