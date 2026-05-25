import { Button, Card } from '@heroui/react';
import {DateField, Label} from "@heroui/react";
import React from 'react';

const Bookingcart = ({ facility }) => {
    return (
    <Card className='w-full md:w-1/2 mx-auto mt-5 p-5 bg-slate-200 rounded-3xl' >
        <h2 className='text-2xl font-bold mb-4'>Booking Cart</h2>
        <p className='text-lg'>Your selected bookings will appear here.</p>
        <p className='text-md'>Selected Facility: {facility.facilityName}</p>
        <p>Starting From</p>
        <h2>${facility.pricePerHour}</h2>
        <p>per hour</p>
         <DateField className="w-[256px]" name="date">
      <Label>Date</Label>
      <DateField.Group>
        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
      </DateField.Group>
    </DateField>
    <Button className="mt-4" variant="primary">Book Now</Button>
        
    </Card>
    );
};

export default Bookingcart;