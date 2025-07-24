import React from 'react';

const LocationMap = () => {
  return (
    <div className="w-full h-[400px]">
      <iframe
        title="Ductovent Location"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3505.9881324646185!2d77.33335497549633!3d28.510004775731918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMwJzM2LjAiTiA3N8KwMjAnMDkuNCJF!5e0!3m2!1sen!2sin!4v1753355610797!5m2!1sen!2sin"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
      ></iframe>
    </div>
  );
};

export default LocationMap;
