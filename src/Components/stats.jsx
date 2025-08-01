import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaPlus } from "react-icons/fa";

const stats = [
  { label: "Projects", value: 1200 },
  { label: "Clients", value: 2500 },
  { label: "Awards", value: 750 },
  { label: "Years of Experience", value: 10 },
];

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative w-full text-white py-28 px-4 flex items-center justify-center
                 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}img/stats.jpg)`,
      }}
    >
      {/* Blackish-orange overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-orange-900/60 z-0"></div>

      {/* Stats Content */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-10 max-w-6xl w-full text-center">
        {stats.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <h2 className="text-4xl font-bold text-orange-400 hover:text-orange-500 transition">
              {inView ? <CountUp end={item.value} duration={2} /> : 0}
              <FaPlus className="inline ml-1 text-orange-500" />
            </h2>
            <p className="mt-2 text-lg font-semibold text-orange-100">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
