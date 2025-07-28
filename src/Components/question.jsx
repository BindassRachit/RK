import React from 'react';

const faqData = [
  {
    question: "How does the password generator work?",
    answer: `The LastPass password generator creates random passwords based on parameters set by you.
Parameters include password length, whether the password should be easy to say or read,
and whether the password should have uppercase letters, lowercase letters, numbers, and symbols.
The password is then checked using the zxcvbn library to measure its strength.`
  },
  {
    question: "Can a strong password be hacked?",
    answer: `Technically yes, but it would take thousands of years to crack a well-formed 12-character password
with numbers, symbols, and letters. So it’s practically unhackable in your lifetime.`
  },
  {
    question: "Can I use the password generator to create a user name?",
    answer: `No, you should use the dedicated LastPass username generator for that purpose.
It gives you random, unique usernames using letters only.`
  },
  {
    question: "How do you manage your passwords with a password manager?",
    answer: `Saved passwords go into your encrypted password vault.
You can access, search, autofill, and manage your credentials via the LastPass extension or mobile app.`
  },
  {
    question: "Is LastPass password generator safe?",
    answer: `Yes. It generates strong, random passwords using secure logic and checks them with the zxcvbn library.
Saved passwords are encrypted and only visible to you.`
  },
  {
    question: "Is the functionality different in the online generator and in the app?",
    answer: `No, both are the same. The only difference is the app can autofill and save the password directly.
With the online tool, you need to copy-paste manually.`
  }
];

const FAQSection = () => {
  return (
    <div id="details" className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

      {faqData.map((faq, index) => (
        <details key={index} className="group border-b border-gray-300 py-4">
          <summary className="cursor-pointer flex justify-between items-center text-lg font-medium text-gray-800">
            <span>{faq.question}</span>
            {/* + icon (default), − icon when open */}
            <span className="text-2xl font-bold transition-transform group-open:rotate-0">
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </span>
          </summary>
          <p className="mt-2 text-gray-600 whitespace-pre-line">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
};

export default FAQSection;
