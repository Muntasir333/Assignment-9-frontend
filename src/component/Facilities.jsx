import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

 

const Facilities = async () => {
    const res = await fetch (`${process.env.NEXT_PUBLIC_SERVER_URL}/add-facility`, {
        method: 'GET',
    });
    const facilities = await res.json();

    const Faci = facilities.slice(6, 12);

    return (
         <div className='mx-auto container mt-7 bg-slate-200 p-7'>
                    <h2 className='font-bold text-xl text-center'>Meet Our Top Rated Facilities</h2>
                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-7'>
                    {Faci.map((inst) => (
                       <Link
      key={inst._id}
      href={`/allfacilities/${inst._id}`}
       className="block"
    >
                      <div className='text-center bg-white p-5 shadow-md rounded-lg'>
                        <Image className='mx-auto object-cover rounded-full' src={inst.image.trim()} alt={inst.facilityName} width={400} height={400} />
                        <h3 className='text-xl font-bold mt-3'>{inst.facilityName}</h3>
                        <p className='text-gray-600'>{inst.facilityType}</p>
                        <p className='text-gray-600'>{inst.location}</p>
                        <p className='text-gray-600'>Price: ${inst.pricePerHour}/hr</p> 
                        
                      </div>
                      </Link>
                    ))}
                  </div>
                </div>
    );
};

export default Facilities;