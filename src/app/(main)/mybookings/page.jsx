import { auth } from '@/lib/auth';
import React from 'react';
import { headers } from "next/headers";
import Image from 'next/image';
import {Bookingcancel}  from '@/component/Bookingcancel';

const Mybookings = async () => {
    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
    
})
const user = session?.user
    const res = await fetch(`http://localhost:5000/booking/${user?.id}`);
    const bookings = await res.json();
    return (
        <div className=' container min-w-3xl mx-auto p-5'>
             <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings?.map((booking) => (
          <div
            key={booking._id}
            className="bg-white border shadow-md rounded-xl p-5 hover:shadow-lg transition"
          >
            <Image src={booking.facilityImage} alt={booking.facilityName} width={200} height={200} className="rounded-lg object-cover" />
            <h2 className="text-xl font-semibold text-gray-800">
              {booking.facilityName}
            </h2>

            <p className="text-gray-600 mt-3">
              Date: <span className="font-medium">{booking.date}</span>
            </p>

            <p className="text-gray-600">
              Time: <span className="font-medium">{booking.timeSlot}</span>
            </p>

            <p className="text-gray-600">
              Price: <span className="font-medium">${booking.price}</span>
            </p>

            <div className="mt-4 flex justify-between items-center">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                Confirmed
              </span>

              <Bookingcancel bookingId={booking._id} />
            </div>
          </div>
        ))}
      </div>
        </div>
    );
};

export default Mybookings;