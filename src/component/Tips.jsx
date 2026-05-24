'use client';
import React from 'react';
import { motion } from "framer-motion";

const tips = [
  {
    "_id": "tip1",
    "title": "Warm Up Before Playing",
    "description": "Always do 5–10 minutes of warm-up to prevent injuries and improve performance.",
    "category": "Fitness"
  },
  {
    "_id": "tip2",
    "title": "Stay Hydrated",
    "description": "Drink water before, during, and after your game to maintain energy levels.",
    "category": "Health"
  },
  {
    "_id": "tip3",
    "title": "Wear Proper Sports Shoes",
    "description": "Good footwear improves grip, balance, and reduces injury risk on the field.",
    "category": "Gear"
  },
  {
    "_id": "tip4",
    "title": "Practice Regularly",
    "description": "Consistency is key. Practice daily to improve your skills and game awareness.",
    "category": "Training"
  }
];

const Tips = () => {
  return (
    <div className='container mx-auto'>
       <h2 className='font-bold text-xl text-center p-4'>Meet Our Top Rated Facilities</h2>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-7'>

        {tips.map((tip) => (
          <motion.div
            key={tip._id}
            className='bg-slate-200 p-5 rounded-lg text-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className='text-2xl font-bold mb-3'>
              {tip.title}
            </h2>

            <p className='text-gray-700'>
              {tip.description}
            </p>
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Tips;