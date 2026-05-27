import Image from 'next/image';
import React from 'react';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const Allfacilities = async () => {
    // const {token} =await auth.api.getToken({
    //     headers: await headers()
    //   });
    const res = await fetch ('http://localhost:5000/add-facility', {
        cache: 'no-store',
        // headers: {
        //     Authorization: `Bearer ${token}`
        // }
    });
    const facilities = await res.json();
    console.log('facilities:', facilities);
    return (
   <div className='container mx-auto p-4'>
            <h1>All Facilities</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

  {facilities.map((facility) => (
    <div
      key={facility._id}
      className="border border-gray-300 p-4 rounded-lg flex flex-col"
    >

      {/* IMAGE FIX */}
      <div className="relative w-full h-48 mb-4">
        <img
          src={facility.image}
          alt={facility.facilityName}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* TEXT */}
      <div className="flex flex-col flex-1">

        <h2 className="text-lg font-semibold mb-2">
          {facility.facilityName}
        </h2>

        <p className="text-sm text-gray-600 mb-4">
          {facility.description?.slice(0, 100)}...
        </p>

        {/* BUTTON */}
        <a href={`/allfacilities/${facility._id}`}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full mt-auto">
            See Details
          </button>
        </a>

      </div>
    </div>
  ))}

</div>
        </div>
    );
};

export default Allfacilities;