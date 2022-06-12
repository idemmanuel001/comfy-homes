import React from 'react';
import Head from 'next/head';
import Property from '../components/Property';

export default function propertiesForSale({ propertiesForSale }) {
  return (
    <>
      <Head>
        <title>Buy a home in the U.A.E</title>
      </Head>
      <main className='w-full h-full bg-white'>

        <section className="w-10/12 px-2 py-4 mx-auto md:px-4 md:py-8 md:max-w-screen-lg">
          <h2
            className='text-3xl font-semibold text-center text-gray-800 md:text-4xl'
          >Buy a Home in the U.A.E</h2>

          {/* Property container  */}
          <div className="grid grid-rows-1 gap-8 my-6 overflow-hidden md:grid-cols-3 md:gap-10 md:flex-row md:my-8">
            {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
          </div>
        </section>
      </main>

    </>
  );
}

export async function getStaticProps() {
  const propertiesForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=27`);

  return {
    props: {
      propertiesForSale: propertiesForSale?.hits,
    },
  };
}