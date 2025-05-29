'use client';

import { motion } from 'framer-motion';

const certificateImages = [
  '/certificates/image-removebg-preview (8).png',
  '/certificates/image-removebg-preview (9).png',
  '/certificates/image-removebg-preview (7).png',
];

export default function Certificates() {
  return (
    <div className="py-12 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Our Accreditations</h2>
        <p className="mt-2 text-gray-600">Proof of our commitment to quality and excellence</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {certificateImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-2xl bg-white"
          >
            <img
              src={src}
              alt={`Certificate ${index + 1}`}
              className="w-full h-64 object-contain transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
