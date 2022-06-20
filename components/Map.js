import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export default function Map({ geography: { lat, lng } }) {
    const googlemap = useRef(null);

    useEffect(() => {

        //instatiating an Instance of google map using the googlemaps library
        const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
            version: 'weekly',
        });

        //load the google map javascript api script 
        //which returns a promise
        let map;
        loader.load().then(() => {

            // declearing google as a global variable to prevent 
            // ESLint from screeming at me (-_-)
            const google = window.google;
            map = new google.maps.Map(googlemap.current, {
                center: { lat: lat, lng: lng },
                zoom: 8,
            });
        });
    });
    return (
        <div 
        ref={googlemap}
        className='w-full h-52'
        />

    );
}
