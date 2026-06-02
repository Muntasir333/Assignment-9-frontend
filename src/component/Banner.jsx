'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Photo from '@/photo1.jpg';
import Photo2 from '@/photo2.jpg';
import Photo3 from '@/photo3.jpg';
import { motion } from 'motion/react';


const Banner = () => {
  return (
    <section className="bg-neutral text-white min-h-[80vh] flex items-center container mx-auto rounded-lg my-10 p-10 text-center">
      <div className="container mx-auto px-5 flex flex-col-reverse md:flex-row items-center justify-between gap-10 ">

      
         <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }} className="flex-1 space-y-5">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Play <br />
            Have fun with <span className="text-primary">Sportnest</span>
          </h1>

          <p className="text-gray-300 text-lg">
          Book premium sports facilities, join exciting matches, and connect with players near you.
          </p>
        <div className='flex justify-center items-center'>
          <div className="flex gap-4">
            <Link href="/course">
              <button className="btn btn-primary">
                Explore Facilities
              </button>
            </Link>

            <Link href="/register">
              <button className="btn btn-outline text-white">
                Get Started
              </button>
            </Link>
          </div>
          </div>
        </motion.div>

        
        <div className="flex-1 flex justify-center flex-col items-center gap-5">
          
          <Image
            src={Photo}
            width={500 }
            height={500}
            alt="banner"
            className="rounded-xl max-w-md shadow-lg w-[200px] sm:w-[250px] md:w-[350px] lg:w-[450px] xl:w-[500px]"
          />
           
          <Image
            src={Photo2}
            width={500}
            height={500}
            alt="banner"
            className="rounded-xl max-w-md shadow-lg w-[200px] sm:w-[250px] md:w-[350px] lg:w-[450px] xl:w-[500px]"
          />
          <Image
            src={Photo3}
            width={500}
            height={500}
            alt="banner"
                className="rounded-xl max-w-md shadow-lg w-[200px] sm:w-[250px] md:w-[350px] lg:w-[450px] xl:w-[500px] h-auto"
  />
        </div>

      </div>
    </section>
  );
};

export default Banner;