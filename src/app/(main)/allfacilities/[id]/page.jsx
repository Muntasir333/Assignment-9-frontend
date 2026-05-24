import Link from 'next/link';
import React from 'react';

const Details = async ({ params }) => {
    const {id} = await params;
    const res = await fetch(`http://localhost:5000/allfacilities/${id}`);
    const facility = await res.json();
    return (
        <div>
            {facility && (
                <div className='flex justify-center items-center flex-col  bg-slate-200 rounded-3xl p-5 space-y-3 mt-5 container mx-auto'>
                    <img className='mx-auto object-cover' src={facility.image} alt={facility.facilityName} width={300} height={200} />
                    <h1 className='font-bold text-xl'>{facility.facilityName}</h1>
                    <p className='font-bold text-xl'>{facility.description}</p>
                    <p className='font-bold text-xl'>Location: {facility.location}</p>
                    <p className='font-bold text-xl'>Price per Hour: ${facility.pricePerHour}</p>
                    <p className='font-bold text-xl'>Capacity: {facility.capacity}</p>
                    <Link href="/" className='btn btn-primary mt-5'>Go Back Home</Link>
                    
                </div>
            )}
        </div>
    );
};

export default Details;