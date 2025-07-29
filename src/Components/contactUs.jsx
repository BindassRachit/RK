import React from "react";
import Navbar from "./navbar";
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
  // ---- CONFIG: Put your real links here ----
  const GOOGLE_FORM_EMBED_URL =
    "https://docs.google.com/forms/d/e/xxxxxxxxxxxxxxxxxxxxxxxxxxxx/viewform?embedded=true";
  const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/xxxxxxxxxxxxxxxxxxxxxxxxxxxx/formResponse";

  // Replace these entry ids with real ones from your Google Form
  const ENTRY_NAME = "entry.1111111111";
  const ENTRY_EMAIL = "entry.2222222222";
  const ENTRY_PHONE = "entry.3333333333";
  const ENTRY_MESSAGE = "entry.4444444444";

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
            Established in 2011 in Faridabad (Haryana, India), we design and
            manufacture air pollution control systems and equipment—Industrial
            Fans, Centrifugal Blowers, Dust Collectors, High Pressure Fans,
            Ventilation & Cooling Systems, Air Washer, Fume Extraction,
            Industrial Scrubbers, Bag Filters, Tunnel/Jet Fans, M.S. Ducting &
            fabrication.
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

        {/* RIGHT: Form Area */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Send us a message
          </h3>

          {/* ---- OPTION A: EMBED GOOGLE FORM (Easiest) ---- */}
          {/* Replace GOOGLE_FORM_EMBED_URL above */}
          <div className="hidden md:block rounded-xl overflow-hidden border border-gray-200">
            <iframe
              title="Contact Form"
              src={GOOGLE_FORM_EMBED_URL}
              className="w-full h-[560px]"
              loading="lazy"
            />
          </div>

          {/* ---- OPTION B: NATIVE FORM that posts to Google Forms ---- */}
          {/* Shown on mobile by default; also useful if you prefer native styling */}
          <div className="md:hidden">
            <form
              action={GOOGLE_FORM_ACTION}
              method="POST"
              target="_blank"
              className="space-y-4"
            >
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name={ENTRY_NAME}
                  required
                  className="w-full rounded-xl border-gray-300 focus:ring-[#ff9721] focus:border-[#ff9721]"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name={ENTRY_EMAIL}
                  required
                  className="w-full rounded-xl border-gray-300 focus:ring-[#ff9721] focus:border-[#ff9721]"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name={ENTRY_PHONE}
                  className="w-full rounded-xl border-gray-300 focus:ring-[#ff9721] focus:border-[#ff9721]"
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name={ENTRY_MESSAGE}
                  rows={4}
                  className="w-full rounded-xl border-gray-300 focus:ring-[#ff9721] focus:border-[#ff9721]"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#ff9721] text-white font-semibold hover:bg-orange-500 transition"
              >
                Submit
              </button>
            </form>

            {/* Fallback link to open full Google Form */}
            <div className="mt-4">
              <a
                href={GOOGLE_FORM_EMBED_URL.replace("embedded=true", "")}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[#ff9721] hover:underline"
              >
                Open full form ↗
              </a>
            </div>
          </div>

          {/* Helper note */}
          <p className="text-xs text-gray-500 mt-4">
            Tip: On desktop we show the embedded Google Form. On mobile, a
            native form posts to Google Forms for a better experience.
          </p>
        </div>
      </div>
    </section>
    <LocationMap />
    <Footer />
    </>
  );
};

export default ContactPage;
