'use client'

import Navlink from './Navlink';




const Navbar = () => {
   
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
            
        </div>
    );
};

export default Navbar;