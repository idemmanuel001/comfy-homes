import {useEffect, useState} from 'react'
import Image from 'next/image'

export default function HeroBgSlider() {
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
            //console.clear();
        }, 8000);
        return () => {
            clearInterval(slider);
        };
    }, [count]);
  return (
    <>
          <Image
              src={heroImages[imageIndex]}
              alt='hero section image'
              priority='true'
              layout="fill"
              objectFit="cover"
              quality={100}
          />
    </>
  )
}
