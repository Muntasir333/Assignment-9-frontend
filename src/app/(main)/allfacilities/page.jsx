'use client';
import Image from 'next/image';
import React from 'react';

import { useEffect, useState } from 'react';

const Allfacilities = () => {
      const [facilities, setFacilities] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

      useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:5000/add-facility?search=${search}&sort=${sort}`
      );
      const data = await res.json();
      setFacilities(data);
    };

    fetchData();
  }, [search, sort]);
    return (
   <div className='container mx-auto p-4'>
            <h1>All Facilities</h1>
           <input
  suppressHydrationWarning
  type="text"
  placeholder="Search facilities..."
  className="border p-2 w-full mb-8 rounded"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
 <select
        className="border p-2 w-full mb-4 rounded"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Default</option>
        <option value="name_asc">Name A → Z</option>
        <option value="name_desc">Name Z → A</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>

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