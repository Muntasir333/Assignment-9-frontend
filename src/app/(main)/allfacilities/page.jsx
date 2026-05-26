import Image from 'next/image';
import React from 'react';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const Allfacilities = async () => {
    const {token} =await auth.api.getToken({
        headers: await headers()
      });
    const res = await fetch ('http://localhost:5000/add-facility', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const facilities = await res.json();
    return (
        <div className='container mx-auto p-4'>
            <h1>All Facilities</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {facilities.map((facility) => (
                    <li key={facility._id}>
                        <Image src={facility.image} alt={facility.facilityName} width={200} height={150} />
                        <h2>{facility.facilityName}</h2>
                        <p>{facility.description}</p>
                        <a href={`/allfacilities/${facility._id}`}>
                            <button className='bg-blue-500 text-white px-4 py-2 rounded'>See Details</button>
                        </a>   
                               
                    </li>
                ))}
               
            </div>
        </div>
    );
};

export default Allfacilities;