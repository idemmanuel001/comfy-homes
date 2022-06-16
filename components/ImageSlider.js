import { useContext } from 'react';
import Image from 'next/image';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


//property details Image Slider
export default function ImageSlider({ photos }) {
    return (
        <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow} 
            style={{overflow: 'hidden'}} >

            {photos.map((photo) => {
                return (
                    <div
                        key={photo.id}
                        className='max-w-4xl overflow-hidden  h-65-vh'
                    >
                        <Image
                            alt='Property Photo'
                            src={photo.url}
                            width={1000}
                            height={500}
                            sizes='(max-width:500px) 100px, (max-width: 1023px) 400px, 1000'
                            placeholder='blur'
                            blurDataURL={photo.url}

                        />
                    </div>
                );
            })}

        </ScrollMenu>
    );
}


//scroll to prev Image
function LeftArrow() {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <span
            className='w-10 flex items-center justify-center cursor-pointer'
            onClick={()=> scrollPrev()} >
            <FaArrowAltCircleLeft />

        </span>
    );
}


//scroll to the next Image
function RightArrow() {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <span
            className='w-10 flex items-center justify-center cursor-pointer'
            onClick={() => scrollNext()} >
            <FaArrowAltCircleRight />

        </span>
    );
}


