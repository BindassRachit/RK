import React, { useEffect } from "react";
import Footer from "./footor";
import Navbar from "./navbar";
import { motion } from "framer-motion";

// Animation Variants
const leftImageVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const rightImageVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const ServicePage = () => {
  return (
    <>
      <Navbar />

      <div className="w-full bg-white text-black">
        {/* Top full-width image */}
        <img
          src={`${import.meta.env.BASE_URL}img/About-us.jpg`}
          alt="About RK Air System"
          className="w-full h-[400px] object-cover"
        />

        {/* Centered ABOUT heading */}
        <div className="text-center py-6">
          <h1 className="text-4xl font-bold inline-block px-4 py-2 rounded">
            Service
          </h1>
        </div>

        {/* Company description paragraph */}
        <div className="max-w-6xl mx-auto px-6 pb-12">
          <p className="text-lg leading-relaxed text-justify">
            Established in the year 2023 in Badarpur, New Delhi (South East Delhi), 110044, “RK AIR SYSTEM” is amongst the leading Manufacturers and Exporters of a wide variety of air pollution control systems and equipment. Our product range includes Industrial Fans, Centrifugal Blowers, Dust Collectors, Cyclone Dust Collectors, High Pressure Fans, Ventilation Systems, Air Cooling Systems, Air Washer Systems, Fume Extraction Systems, Industrial Scrubbers, Bag Filters, Tunnel Fans, Jet Fans, Fabrication Works, and M.S. Ducting etc.
          </p>
        </div>

        {/* Left Image - Right Text */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 px-6 pb-12">
          <motion.img
            variants={leftImageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            src={`${import.meta.env.BASE_URL}img/Service-1.png`}
            alt="Manufacturing"
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-2 ">
              Complete Product <span className="text-orange-600">Maintenance </span> Services
            </h2>
            <p className="text-base leading-relaxed text-justify">
              We provide comprehensive maintenance services for all our products, ensuring they perform with maximum efficiency and reliability. From Double Deflection Louver Grills to Pulse Jet Dust Collectors, Square Ceiling Diffusers to Motorized Dampers and Industrial Blowers — every unit is backed by our full-service support. Our expert team handles regular inspections, cleaning, repairs, and component replacements as needed. Whether it’s a Bag House Filter requiring dust removal or a DIDW/SISW Blower needing checks — we’ve got you covered. With our AMC (Annual Maintenance Contract) options, clients enjoy peace of mind knowing their systems are in professional hands year-round.
            </p>
          </div>
        </div>

        {/* Right Image - Left Text */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-6 px-6 pb-12">
          <motion.img
            variants={rightImageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            src={`${import.meta.env.BASE_URL}img/Service-3.png`}
            alt="Clients"
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-orange-600">Custom Fabrication  </span>& Installation
            </h2>
            <p className="text-base leading-relaxed text-justify">
              We offer custom fabrication and on-site installation services for all types of HVAC components. Whether you need specially sized louvers, duct-mounted diffusers, or dampers configured to unique spaces, our fabrication team ensures precision engineering. Our technicians also handle complete on-site assembly and integration, ensuring perfect alignment with your existing systems.
            </p>
          </div>
        </div>

        {/* Left Image - Right Text */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 px-6 pb-12">
          <motion.img
            variants={leftImageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            src={`${import.meta.env.BASE_URL}img/Service-4.png`}
            alt="Manufacturing"
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-2 ">
              On-Demand <span className="text-orange-600">Repair & Emergency </span> Support
            </h2>
            <p className="text-base leading-relaxed text-justify">
              Facing a sudden breakdown? Our on-demand repair and emergency support team is available to respond swiftly to your needs. From blower motor failures to filter clogging, we resolve all product issues promptly. Our engineers diagnose and restore functionality on-site, reducing your downtime and ensuring business continuity.
            </p>
          </div>
        </div>

        {/* Right Image - Left Text */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-6 px-6 pb-12">
          <motion.img
            variants={rightImageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            src={`${import.meta.env.BASE_URL}img/Service-2.png`}
            alt="Clients"
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-2">
              Upgrade & Retrofitting <span className="text-orange-600"> Solutions</span>
            </h2>
            <p className="text-base leading-relaxed text-justify">
              We help clients modernize their existing HVAC and air management systems with our upgrade and retrofitting services. Whether it's replacing outdated parts or integrating smart dampers and energy-efficient components, our team enhances performance without full replacement. This service ensures long-term savings and sustainability.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServicePage;
