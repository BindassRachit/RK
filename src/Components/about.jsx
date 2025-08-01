import React from "react";
import { motion } from "framer-motion";

// Variants for animations
const leftImageVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const rightImageVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const iconVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
};

const About = () => {
  return (
    <>
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
            About <span className="text-orange-500">Us</span>
          </h1>
        </div>

        {/* Company description paragraph */}
        <div className="max-w-6xl mx-auto px-6 pb-12">
          <p className="text-lg leading-relaxed text-justify">
            Established in the year 2016 in Badarpur, New Delhi (South East Delhi), 110044, “RK AIR SYSTEM” is amongst the leading Manufacturers and Exporters of a wide variety of air pollution control systems and equipment. Our product range includes Industrial Fans, Centrifugal Blowers, Dust Collectors, Cyclone Dust Collectors, High Pressure Fans, Ventilation Systems, Air Cooling Systems, Air Washer Systems, Fume Extraction Systems, Industrial Scrubbers, Bag Filters, Tunnel Fans, Jet Fans, Fabrication Works, and M.S. Ducting etc.
          </p>
        </div>

        {/* ===== Highlights Section ===== */}
        <div className="max-w-6xl mx-auto px-6 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <article className="group rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-md">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-orange-200 text-orange-600"
              >
                {/* Icon */}
                <svg viewBox="0 0 24 24" className="h-16 w-16">
                  <path
                    d="M3 8l9-4 9 4-9 4-9-4zm2 4v4.5a2.5 2.5 0 005 0V12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 10v6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
              <h3 className="mb-2 text-xl font-semibold ">Quality Manufacturing</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                High‑performance fans and air‑pollution systems with strict QA
                and durable builds.
              </p>
            </article>

            {/* Card 2 */}
            <article className="group rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-md">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-orange-200 text-orange-600"
              >
                <svg viewBox="0 0 24 24" className="h-16 w-16">
                  <path
                    d="M8 10a4 4 0 018 0c0 2.5-2 3.5-2 5H10c0-1.5-2-2.5-2-5z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 18h6m-5 3h4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              <h3 className="mb-2 text-xl font-semibold ">R&D & Custom Solutions</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Application‑specific design for airflow, dust collection, and energy‑efficient systems.
              </p>
            </article>

            {/* Card 3 */}
            <article className="group rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-md">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-orange-200 text-orange-600"
              >
                <svg viewBox="0 0 24 24" className="h-16 w-16">
                  <path
                    d="M4 5.5A2.5 2.5 0 016.5 3H20v16.5A1.5 1.5 0 0118.5 21H6.5A2.5 2.5 0 014 18.5V5.5z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 7h8m-8 3h6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
              <h3 className="mb-2 text-xl font-semibold ">On‑Time Delivery & Support</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Pan‑India installation, AMC, and quick service response for minimum downtime.
              </p>
            </article>
          </div>
        </div>
        {/* ===== End Highlights Section ===== */}

        {/* Left Image - Right Text */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 px-6 pb-12">
          <motion.img
            variants={leftImageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            src={`${import.meta.env.BASE_URL}img/Our Vision.png`}
            alt="Manufacturing"
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-2 ">
              Our <span className="text-orange-600">Vision</span>
            </h2>
            <p className="text-base leading-relaxed text-justify">
              We have built a strong reputation in the market by manufacturing &
              supplying top grade products known for their unmatched performance,
              sturdy design, high strength, and long service life. Our skilled team
              and state-of-the-art manufacturing unit ensure flawless and efficient
              production.
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
            src={`${import.meta.env.BASE_URL}img/Our Aim.png`}
            alt="Clients"
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-orange-600">Future </span>Vision
            </h2>
            <p className="text-base leading-relaxed text-justify">
              As a forward-thinking manufacturing company, we are committed to expanding our reach across global markets. With a passion for excellence and continuous innovation, our vision is to become a recognized industry leader known for delivering reliable, high-quality solutions that shape the future of manufacturing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
