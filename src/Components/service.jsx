import React from 'react';

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
    name: 'Filter Replacement',
    desc: 'Timely air filter replacement services.',
    img: 'img/Service-3.png',
  },
  {
    name: 'Duct Cleaning',
    desc: 'Deep cleaning for ventilation systems.',
    img: 'img/Service-4.png', // Make sure you have this image
  },
];

const ServiceSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
        Our <span className="text-[#ff9721]">Services</span>
      </h2>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#f9f9f9] rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
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
          </div>
        ))}
      </div>

    </section>
  );
};

export default ServiceSection;
