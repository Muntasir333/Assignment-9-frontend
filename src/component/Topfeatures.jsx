import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const facilities = [
 {
"_id": "6a10c41b1d9f181527992321",
"facilityName": "Elite Football Turf Arena",
"facilityType": "Football Turf",
"image": "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
"location": "Dhaka, Bangladesh",
"pricePerHour": 120,
"capacity": 22,
"availableTimeSlots": [
"08:00 AM - 10:00 AM",
"02:00 PM - 04:00 PM",
"08:00 PM - 10:00 PM"
],
"description": "Premium synthetic football turf with floodlights, changing rooms, and gallery seating.",
"ownerEmail": "admin@sportnest.com"
},
{
"_id": "6a10c41b1d9f181527992322",
"facilityName": "SmashPoint Badminton Court",
"facilityType": "Badminton Court",
"image": "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1200&auto=format&fit=crop",
"location": "Chattogram, Bangladesh",
"pricePerHour": 45,
"capacity": 8,
"availableTimeSlots": [
"09:00 AM - 11:00 AM",
"04:00 PM - 06:00 PM",
"07:00 PM - 09:00 PM"
],
"description": "Indoor badminton court with wooden flooring, professional lighting, and AC environment.",
"ownerEmail": "admin@sportnest.com"
},
{
"_id": "6a10c41b1d9f181527992323",
"facilityName": "BlueWave Swimming Center",
"facilityType": "Swimming Pool",
"image": "https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=1200&auto=format&fit=crop",
"location": "Sylhet, Bangladesh",
"pricePerHour": 60,
"capacity": 30,
"availableTimeSlots": [
"06:00 AM - 08:00 AM",
"12:00 PM - 02:00 PM",
"05:00 PM - 08:00 PM"
],
"description": "Olympic-style swimming lanes with trained lifeguards and modern shower facilities.",
"ownerEmail": "admin@sportnest.com"
},
{
"_id": "6a10c41b1d9f181527992324",
"facilityName": "Ace Tennis Complex",
"facilityType": "Tennis Court",
"image": "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1200&auto=format&fit=crop",
"location": "Rajshahi, Bangladesh",
"pricePerHour": 75,
"capacity": 6,
"availableTimeSlots": [
"07:00 AM - 09:00 AM",
"03:00 PM - 05:00 PM",
"06:00 PM - 08:00 PM"
],
"description": "Outdoor hard tennis courts with spectator benches and night lighting.",
"ownerEmail": "admin@sportnest.com"
},
]

const TopFeatures = () => {
    return (
        <div className='mx-auto container mt-7 bg-slate-200 p-7'>
            <h2 className='font-bold text-xl text-center'>Meet Our New Facilities</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-7'>
            {facilities.map((inst) => (
                               <Link
                    key={inst._id}
                    href={`/allfacilities/${inst._id}`}
                     className="block"
                  >
              <div className='text-center bg-white p-5 rounded-lg'>
                <Image className='mx-auto object-cover rounded-full' src={inst.image} alt={inst.facilityName} width={400} height={400} />
                <h3 className='text-xl font-bold mt-3'>{inst.facilityName}</h3>
                <p className='text-gray-600'>{inst.facilityType}</p>
              </div>
              </Link>
            ))}
          </div>
        </div>
    );
};

export default TopFeatures;