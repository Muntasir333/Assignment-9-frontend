'use client'

import { authClient } from '@/lib/auth-client';
import Navlink from './Navlink';
import { Button } from '@heroui/react';




const Navbar = () => {
    const { 
        data: session, 
        isPending, 
        error, 
        refetch 
    } = authClient.useSession()
    const user = session?.user;

    const handleLogout = async () => {
        await authClient.signOut();
        refetch(); 
    }
   
    return (
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center p-5 bg-neutral text-white'>
            <div className=''>
                <h2 className='text-3xl font-bold'>Sportnest</h2>
            </div>
            <div className='bg-slate-500 text-black p-3 rounded-lg mt-3 md:mt-0'>
                <ul className='flex justify-between items-center gap-3'>
                    <li className='font-bold'><Navlink href='/'>Home</Navlink></li>
                    <li className='font-bold'><Navlink href='/allfacilities'>All Facilities</Navlink></li>
                    <li className='font-bold'><Navlink href='/mybookings'>My Bookings</Navlink></li>
                    <li className='font-bold'><Navlink href='/addfacility'>Add Facility</Navlink></li>
                    <li className='font-bold'><Navlink href='/managemyfacilities'>Manage My Facilities</Navlink></li>
                    
                </ul>
            </div>
            {user ? (
                <div className='flex items-center gap-3 mt-3 md:mt-0'>
                    <img src={user.photoUrl} className='w-10 h-10 rounded-full' />
                    <span className='font-bold'>Hi, {user.name}</span>
                    <div>
                        <Button variant='dangeer' className='bg-red-500 text-white px-4 py-2 rounded' onClick={handleLogout}>
                            Logout
                        </Button>
                    </div>
                </div>
            ) : (
                <div className='mt-3 md:mt-0'>
                    <Navlink href='/login' className='bg-blue-500 text-white px-4 py-2 rounded'>Login</Navlink>
                </div>
            )}
        </div>
    );
};

export default Navbar;