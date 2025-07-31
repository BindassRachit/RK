import React from "react";
import Navbar from "./navbar";
import GoogleForm from "./googleForm";
import LocationMap from "./contact";
import Footer from "./footor";

/**
 * ContactPage
 * Left: company details
 * Right: Google Form (embed) OR native form that posts to Google Forms
 *
 * 👉 To use EMBED:
 *  - Replace GOOGLE_FORM_EMBED_URL with your form’s “Send > Embed <>” URL.
 *
 * 👉 To use NATIVE POST:
 *  - Replace GOOGLE_FORM_ACTION with your form “formResponse” action URL.
 *  - Replace entry.XXXXX with your real entry IDs (see notes below).
 */

const ContactPage = () => {
  return (
    <>
    <Navbar />
    <section className="pt-24 pb-16 px-4 bg-[#f9f9f9]">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-10">
        <span className="text-black">Contact </span>
        <span className="text-[#ff9721]">Us</span>
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT: Company Info */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            RK AIR SYSTEM
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            Established in the year 2023 in Badarpur, New Delhi (South East Delhi), 110044, “RK AIR SYSTEM” is amongst the leading Manufacturers and Exporters of a wide variety of air pollution control systems and equipment. Our product range includes Industrial Fans, Centrifugal Blowers, Dust Collectors, Cyclone Dust Collectors, High Pressure Fans, Ventilation Systems, Air Cooling Systems, Air Washer Systems, Fume Extraction Systems, Industrial Scrubbers, Bag Filters, Tunnel Fans, Jet Fans, Fabrication Works, and M.S. Ducting etc.
          </p>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <a
                href="tel:+919717147883"
                className="text-lg font-medium text-gray-900 hover:text-[#ff9721]"
              >
                +91 97171 47883
              </a>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <a
                href="mailto:rkairsystem081@gmail.com"
                className="text-lg font-medium text-gray-900 hover:text-[#ff9721]"
              >
                rkairsystem081@gmail.com
              </a>
            </div>

            <div>
              <p className="text-sm text-gray-500">Address</p>
              <a
                href="https://maps.google.com/?q=Faridabad,Haryana,India"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium text-gray-900 hover:text-[#ff9721]"
              >
                Faridabad, Haryana, India
              </a>
            </div>

            <div>
              <p className="text-sm text-gray-500">Hours</p>
              <p className="text-lg font-medium text-gray-900">
                Mon–Sat: 9:00 AM – 6:00 PM
              </p>
            </div>
          </div>
        </div>
        <div>
            <GoogleForm />
        </div>
       </div>
    </section>
    <LocationMap />
    <Footer />
    </>
  );
};

export default ContactPage;
