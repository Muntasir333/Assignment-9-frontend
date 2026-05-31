'use client';

import { authClient } from '@/lib/auth-client';
import {
  Button,
  Input,
  Label,
  TextArea,
  TextField,
  Select,
  ListBox
} from '@heroui/react';
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

const EditFacility = () => {
  

    const { id } = useParams();
      const router = useRouter();
       const { data: session } = authClient.useSession();
        
         const ownerEmail = session?.user?.email || "";

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
  

    

    const handleUpdate = async (e) => {
        e.preventDefault();
           const formData = new FormData(e.target);
           const data = Object.fromEntries(formData.entries());
           console.log(data);

          const tokenResponse = await authClient.token();
  const token = tokenResponse?.data?.token;

  if (!token) return console.log("No token");

  const res = await fetch(`http://localhost:5000/add-facility/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    console.log(await res.text());
    return;
  }

  toast.success("Updated successfully");
  router.push("/");
};

   
       
   
    
     if (!facility) return <p>Loading...</p>;
   
     return (
       <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white flex justify-center p-8">
   
       
         <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden flex">
   
           
           <div className="w-full md:w-2/3 p-10">
   
             <h2 className="text-2xl font-semibold mb-6 text-gray-800">
               UpdateFacility
             </h2>
   
             <form onSubmit={handleUpdate} className="space-y-6">
   
       
               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
   
   <Label>Facility Name</Label>
  <Input
    name="facilityName"
    defaultValue={facility?.facilityName}
    className="bg-gray-100 w-full"
  />
   
                 <TextField defaultValue={facility?.location} name="location" isRequired>
                   <Label>Location</Label>
                   <Input className="bg-gray-100 w-full" placeholder="Dhaka, Bangladesh" />
                 </TextField>
   
               </div>
   
   
               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
   
                 <TextField defaultValue={facility?.pricePerHour} name="price" type="number" isRequired>
                   <Label>Price / Hour</Label>
                   <Input className="bg-gray-100 w-full" type="number" placeholder="500" />
                 </TextField>
   
                 <TextField defaultValue={facility?.capacity} name="capacity" type="number" isRequired>
                   <Label>Capacity</Label>
                   <Input className="bg-gray-100 w-full" type="number" placeholder="50 people" />
                 </TextField>
   
               </div>
   
               <Select defaultValue={facility?.facilityType} name="facilityType" isRequired>
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
   
               <Select
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
               <TextField defaultValue={facility?.image} name="image" isRequired>
                 <Label>Image URL</Label>
                 <Input className="bg-gray-100 w-full" placeholder="https://..." />
               </TextField>
   
               <TextField defaultValue={facility?.description} name="description" isRequired>
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
                 Save Facility
               </Button>
   
             </form>
           </div>
   
         </div>
       </div>
     );
   };
   

export default EditFacility;