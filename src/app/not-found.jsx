import Link from 'next/link';
import React from 'react';

const Notfound = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col'>
            <h1 className='text-4xl font-bold'>404</h1>
            <p className='text-xl'>Page Not Found</p>
            <p className='text-gray-600 mt-3'>The page you are looking for does not exist.</p>
            <Link href="/" className='btn btn-primary mt-5'>Go Back Home</Link>
        </div>
    );
};

export default Notfound;