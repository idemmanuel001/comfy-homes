import { useState, useEffect } from 'react';
import Image from 'next/image';
import { HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight } from 'react-icons/hi';


//property details Image Slider
export default function ImageSlider({ data }) {
    const [photos, setPhotos] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = photos.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }

    }, [index, photos]);

    useEffect(() => {
        const slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);

        return () => clearInterval(slider);
    }, [index]);

    return (
        <div className="relative rounded-md  overflow-hidden md:max-w-screen-lg h-72 shadow md:shadow-md md:h-96 ">

            <div className="absolute rounded-md top-0 bottom-0 left-0 right-0 flex w-full h-full  ">
                {photos.map((photo, photoIndex) => {

                    //using an array to place all images at the right part 
                    // of the container where it would be hidden
                    let position = ['opacity-0', 'translate-x-full', 'transition-all', 'duration-300', 'absolute', 'h-full', 'w-full'];
                    if (photoIndex === index) {
                        position = ['opacity-1', 'translate-x-0 ', 'transition-all', 'duration-300', 'absolute', 'h-full', 'w-full'];
                    }
                    if (photoIndex === index - 1 || (index === 0 && photos.length - 1)) {
                        position = ['opacity-0', '-translate-x-full', 'transition-all', 'duration-300', 'absolute', 'h-full', 'w-full'];
                    }

                    return (
                        <div
                            key={photo.url}
                            className={position.join(' ')}>
                            <Image
                                src={photo.url}
                                alt="property photo"
                                blurDataURL={photo.url}
                                layout='fill'
                                objectFit="cover"
                                quality={100}
                                className='w-full h-full' />
                        </div>
                    );

                })}

                <LeftArrow setIndex={setIndex} index={index} />
                <RightArrow setIndex={setIndex} index={index} />
            </div>
        </div>
    );
}


//scroll to prev Image
function LeftArrow({ setIndex, index }) {

    return (
        <button
            className='absolute flex items-center justify-center w-8 h-8 text-white transition-all duration-300 bg-gray-800 rounded shadow cursor-pointer bg-opacity-80 hover:bg-gray-300 hover:text-black top-2/4 left-5 md:left-8'
            onClick={() => setIndex(index - 1)}
        >
            <HiOutlineChevronDoubleLeft />
        </button>
    );
}


//scroll to the next Image
function RightArrow({ setIndex, index }) {
    return (
        <button
            className='absolute flex items-center justify-center w-8 h-8 text-white transition-all duration-300 bg-gray-800 rounded shadow cursor-pointer bg-opacity-80 hover:bg-gray-300 hover:text-black top-2/4 right-5 md:right-8'
            onClick={() => setIndex(index + 1)}

        >
            <HiOutlineChevronDoubleRight />
        </button>
    );
}


