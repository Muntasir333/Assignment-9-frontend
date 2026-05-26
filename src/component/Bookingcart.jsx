'use client';
import { authClient } from '@/lib/auth-client';
import { Button, Card, ListBox, Select } from '@heroui/react';
import {DateField, Label} from "@heroui/react";
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Bookingcart = ({ facility }) => {
   const { 
          data: session, 
          isPending, //loading state
          error, //error object
          refetch //refetch the session
      } = authClient.useSession()
      const user = session?.user;

      const [selectedDate, setSelectedDate] = useState(null);
      const [selectedTime, setSelectedTime] = useState(null);
      const handleBooking =async ()=>{
        const bookingData = {
            userId: user.id,
            facilityId: facility._id,
            facilityImage: facility.image,
            facilityName: facility.facilityName,
            date: new Date(selectedDate),
            timeSlot: selectedTime,
            price: facility.pricePerHour // This should ideally come from user selection
        };
        const tokenResponse = await authClient.token();
        const token = tokenResponse?.data?.token;

        if (!token) {
            console.log("No token");
            return;
        }
        const res = await fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(bookingData)
        });
        const data = await res.json();

        if (res.ok) {
            toast.success('Booking successful!');
        } else {
            toast.error('Booking failed. Please try again.');
        }
      }
  
    return (
    <Card className='w-full md:w-1/2 mx-auto mt-5 p-5 bg-slate-500 rounded-3xl' >
        <h2 className='text-2xl font-bold mb-4'>Booking Cart</h2>
        <p className='text-lg'>Your selected bookings will appear here.</p>
        <p className='text-md font-bold'>Selected Facility: {facility.facilityName}</p>
        <p className='text-lg'>Starting From</p>
        <h2 className='text-2xl font-bold'>${facility.pricePerHour}</h2>
        <p className='text-lg'>per hour</p>
         <DateField onChange={setSelectedDate} className="w-[256px]" name="date">
      <Label>Date</Label>
      <DateField.Group>
        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
      </DateField.Group>
    </DateField>
    <Select onChange= {setSelectedTime}
  defaultSelectedKeys={[facility?.availableTimeSlots?.[0]]}
  name="timeSlot"
  isRequired
>
  <Label>Available Time Slots</Label>

  <Select.Trigger className="mt-1 w-full bg-gray-100 rounded-lg p-3 text-left">
    <Select.Value placeholder="Select time slot" />
  </Select.Trigger>

  <Select.Popover>
    <ListBox className="w-full bg-white border rounded-lg shadow-lg p-2">

      {facility?.availableTimeSlots?.map((slot) => (
        <ListBox.Item key={slot} id={slot}>
          {slot}
        </ListBox.Item>
      ))}

    </ListBox>
  </Select.Popover>
</Select>
    
    <Button className="mt-4 w-full" variant="primary" onClick={handleBooking}>
      Book Now
    </Button>
        
    </Card>
    );
};


export default Bookingcart;