'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const Details = () => {

    const { id } = useParams();

    const [facility, setFacility] = useState(null);

    // FETCH DATA
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:5000/add-facility/${id}`);
            const data = await res.json();
            setFacility(data);
        };

        if (id) fetchData();
    }, [id]);

    // DELETE
    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this facility?");

        if (!confirmDelete) return;

        const res = await fetch(`http://localhost:5000/add-facility/${id}`, {
            method: "DELETE",
        });

        if (res.ok) {
            alert("Deleted successfully");
            window.location.href = "/";
        }
    };

    // EDIT
    const handleEdit = () => {
        window.location.href = `/Edit-facility/${id}`;
    };

    if (!facility) return <p>Loading...</p>;

    return (
        <div>
            <div className='flex justify-center items-center flex-col bg-slate-200 rounded-3xl p-5 space-y-3 mt-5 container mx-auto'>

                <img
                    className='mx-auto object-cover'
                    src={facility.image}
                    alt={facility.facilityName}
                    width={300}
                    height={200}
                />

                <h1 className='font-bold text-xl'>
                    {facility.facilityName}
                </h1>

                <p className='font-bold text-xl'>
                    {facility.description}
                </p>

                <p className='font-bold text-xl'>
                    Location: {facility.location}
                </p>

                <p className='font-bold text-xl'>
                    Price per Hour: ${facility.pricePerHour}
                </p>

                <p className='font-bold text-xl'>
                    Capacity: {facility.capacity}
                </p>

                <Link href="/" className='btn btn-primary mt-5'>
                    Go Back Home
                </Link>

                <div className="flex gap-4 mt-5">

                    <button facility={facility} onClick={handleEdit} className="btn btn-primary">
                        Edit
                    </button>

                    <button onClick={handleDelete} className="btn btn-error">
                        Delete
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Details;