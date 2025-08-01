import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    name: 'Air Quality Testing',
    desc: 'Professional testing for indoor air pollutants.',
    img: 'img/Service-1.png',
  },
  {
    name: 'HVAC Maintenance',
    desc: 'Routine servicing for HVAC systems.',
    img: 'img/Service-2.png',
  },
  {
    name: 'System Upgrades',
    desc: 'We upgrade old systems for better performance and compliance.',
    img: 'img/Service-3.png',
  },
  {
    name: 'Duct Cleaning',
    desc: 'Deep cleaning for ventilation systems.',
    img: 'img/Service-4.png',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: 'spring',
    },
  }),
};

const ServiceSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
        Our <span className="text-[#ff9721]">Services</span>
      </h2>

      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#f9f9f9] rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <img
              src={service.img}
              alt={service.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{service.name}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
