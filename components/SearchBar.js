import React from 'react';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import { useRouter } from 'next/router';
import { baseUrl, fetchApi } from '../utils/fetchApi';



//SearchOPtions for the various Emirates in U.A.E
const locationOptions = [
    { value: 'abu dhabi', label: 'Abu Dhabi' },
    { value: 'dubai', label: 'Dubai' },
    { value: 'sharjah', label: 'Sharjah' },
    { value: 'ajman', label: 'Ajman' },
    { value: 'ras al khaimah', label: 'Ras Al Khaimah' },
    { value: 'fujairah', label: 'Fujairah' },
    { value: 'umm al-quwain', label: 'Umm al-Quwain' }
];

export default function Search({ getLocationProperties }) {
    const [selectedOption] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const router = useRouter();


  /*   const searchLocations = () => {
        const path = router.pathname;
        const { query } = router;

        //if an option have been selected then set the query object from nextjs router to that particular option
        if (selectedLocation.value && selectedLocation.label?.[selectedLocation.label]) {
            query[item.label] = item.value;
        }

        router.push({ pathname: path, query: query });

    }; */

    useEffect(() => {

        //Query the API using the value of the selected Option from the location searchbar
        if (selectedLocation?.value) {
            const fetchData = async () => {
                //fetching the selected location data
                const locationData = await fetchApi(`${baseUrl}/auto-complete?query=${selectedLocation.value}`);

                //Getting the externalID (a required parameter to get the location's properties) from the returnedvalue
                const externalID = locationData?.hits[0].externalID;

                //Fetching the llst of properties for the current location
                const response = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${externalID}&purpose=for-rent&hitsPerPage=21`);
                const data = response?.hits;

                //Passing the recieved data to the function from the index page
                getLocationProperties(data);

            };
            fetchData();
        }
    }, [selectedLocation?.value, getLocationProperties]);



    return (
        <div className="flex items-center justify-center w-full h-12 mt-8 text-black md:w-4/5 ">
            <Select
                options={locationOptions}
                selectOption={selectedOption}
                onChange={setSelectedLocation}
                placeholder={'Search'}
                className='block w-full h-full px-3 py-1 m-0 text-base font-normal transition ease-in-out bg-white border border-gray-400 border-solid rounded outline-none form-control first-line:text-gray-700 bg-clip-padding drop-shadow-md hover:drop-shadow-xl focus:text-gray-700 md:h-12 focus:bg-white focus:border-blue-600 focus:outline-none placeholder:text-gray-200'
            />

            <button
                onClick={ (selectedOption) => setSelectedLocation(selectedOption)}
                type="submit"
                className="block w-20 h-full px-3 py-1 ml-1 font-bold text-white transition duration-300 ease-in-out border border-blue-800 border-solid rounded outline-none md:w-32 md:text-xl drop-shadow-md hover:drop-shadow-xl bg-gradient-to-r from-blue-400 to-blue-800 hover:text-black hover:from-blue-800 hover:to-blue-400 focus:opacity-90 focus:outline-none"
            >Search</button>
        </div>
    );
}
