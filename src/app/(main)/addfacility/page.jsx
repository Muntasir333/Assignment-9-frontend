'use client';

import React from 'react';
import {
  Button,
  Input,
  Label,
  TextArea,
  TextField,
  Select,
  ListBox
} from '@heroui/react';
import { authClient } from '@/lib/auth-client';

import { Router } from 'next/router';
import { useRouter } from 'next/navigation';

const AddFacility = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  
   const ownerEmail = session?.user?.email || "";

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        data.ownerEmail = ownerEmail;
        console.log(data);


        const tokenResponse = await authClient.token();
        console.log(tokenResponse);
            const token = tokenResponse?.data?.token;
        
            if (!token) {
                console.log("No token");
                return;
            }

        const res = await fetch (`${process.env.NEXT_PUBLIC_SERVER_URL}/add-facility`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            
            },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        console.log(result);
         router.push("/managemyfacilities");
    }


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white flex justify-center p-8">

    
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden flex">

        <div className="hidden md:flex w-1/3 bg-black text-white p-8 flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold leading-snug">
              Create Your Facility
            </h1>
            <p className="text-gray-300 mt-3 text-sm">
              Add your space to our platform and start getting bookings instantly.
            </p>
          </div>

          <div className="text-xs text-gray-400">
            Tip: High quality images increase bookings by 70%
          </div>
        </div>
        <div className="w-full md:w-2/3 p-10">

          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Facility Details
          </h2>

          <form onSubmit={onSubmit} className="space-y-6">

    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <TextField name="facilityName" isRequired>
                <Label>Facility Name</Label>
                <Input className="bg-gray-100 w-full" placeholder="Modern Gym / Hall" />
              </TextField>

              <TextField name="location" isRequired>
                <Label>Location</Label>
                <Input className="bg-gray-100 w-full" placeholder="Dhaka, Bangladesh" />
              </TextField>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <TextField name="price" type="number" isRequired>
                <Label>Price / Hour</Label>
                <Input className="bg-gray-100 w-full" type="number" placeholder="500" />
              </TextField>

              <TextField name="capacity" type="number" isRequired>
                <Label>Capacity</Label>
                <Input className="bg-gray-100 w-full" type="number" placeholder="50 people" />
              </TextField>

            </div>

            <Select name="facilityType" isRequired>
              <Label>Facility Type</Label>
              <Select.Trigger className="mt-1 w-full bg-gray-100 rounded-lg p-3 text-left">
                <Select.Value placeholder="Select type" />
              </Select.Trigger>

              <Select.Popover>
                <ListBox className="w-full bg-white border rounded-lg shadow-lg p-2">
                  <ListBox.Item id="gym">Gym</ListBox.Item>
                  <ListBox.Item id="hall">Hall</ListBox.Item>
                  <ListBox.Item id="meeting">Meeting Room</ListBox.Item>
                  <ListBox.Item id="sports">Sports Ground</ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>

            <TextField name="timeSlots" isRequired>
              <Label>Available Time Slots</Label>
              <Input className="bg-gray-100 w-full" placeholder="9:00 AM - 10:00 PM" />
            </TextField>
            <TextField name="image" isRequired>
              <Label>Image URL</Label>
              <Input className="bg-gray-100 w-full" placeholder="https://..." />
            </TextField>

            <TextField name="description" isRequired>
              <Label>Description</Label>
              <TextArea className="bg-gray-100 w-full" placeholder="Describe your facility..." />
            </TextField>

           <Input
  className="bg-gray-100 w-full"
  value={ownerEmail}
  readOnly
/>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
            >
              Publish Facility
            </Button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default AddFacility;