'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
    const { id } = useParams();

    const [facility, setFacility] = useState(null);

    console.log("ID:", id);

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

        const res = await fetch(`http://localhost:5000/allfacilities/${id}`, {
            method: "DELETE",
        });

        if (res.ok) {
            alert("Deleted successfully");
            window.location.href = "/";
        }
    };

    // EDIT
    const handleEdit = () => {
        window.location.href = `/edit-facility/${id}`;
    };

    if (!facility) return <p>Loading...</p>;

    return (
        <div className="container mx-auto p-4">

            <div className="bg-slate-200 p-5 rounded-xl">
                <img src={facility.image} className="w-60" />
                <h1 className="text-2xl font-bold">{facility.facilityName}</h1>
                <p>{facility.description}</p>
                <p>Location: {facility.location}</p>
                <p>Price: ${facility.pricePerHour}</p>
                <p>Capacity: {facility.capacity}</p>
            </div>

            <div className="flex gap-4 mt-5">
                <button onClick={handleEdit} className="btn btn-primary">
                    Edit
                </button>

                <button onClick={handleDelete} className="btn btn-error">
                    Delete
                </button>
            </div>

        </div>
    );
};

export default Page;