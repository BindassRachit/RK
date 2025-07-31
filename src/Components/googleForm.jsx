import React, { useState } from "react";

const GoogleForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLSdhXz51Kz-rzTEgie1b5r3XH84KbsG2j-GMdJxy0dkGinD0-w/formResponse";

  const ENTRY_NAME = "entry.2005620554";
  const ENTRY_EMAIL = "entry.1045781291";
  const ENTRY_PHONE = "entry.1166974658";
  const ENTRY_MESSAGE = "entry.839337160";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("Form submission error:", err);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border border-gray-200 min-h-[500px]">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Send us a message
      </h3>

      {submitted ? (
        <p className="text-green-600 font-medium">Thank you! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name={ENTRY_NAME}
              required
              className="w-full rounded-xl border-gray-300 focus:ring-[#ff9721] focus:border-[#ff9721]"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name={ENTRY_EMAIL}
              required
              className="w-full rounded-xl border-gray-300 focus:ring-[#ff9721] focus:border-[#ff9721]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              name={ENTRY_PHONE}
              className="w-full rounded-xl border-gray-300 focus:ring-[#ff9721] focus:border-[#ff9721]"
              placeholder="+91-XXXXXXXXXX"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Message</label>
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
      )}
    </div>
  );
};

export default GoogleForm;
