import { FaBath, FaBed } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import { fetchApi } from '../../utils/fetchApi';
import { baseUrl } from '../../utils/fetchApi';

export default function PropertyDetails({ PropertyDetails: { price, rentFrequency, rooms, title, baths, agency, isVerified, description, type, purpose, amenities, furnishingStatus, photos } }) {
    return (
        <main className='w-full h-full bg-white'>
            <section className="w-10/12 px-2 py-4 mx-auto md:px-4 md:py-8 md:max-w-screen-lg">

            </section>


        </main>
    );
}


export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${baseUrl}/properties/detail?ExternalID=${id}`);

    return {
        props: {
            PropertyDetails: data
        }
    };
}