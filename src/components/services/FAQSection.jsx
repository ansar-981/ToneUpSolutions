"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * @typedef {Object} FAQ
 * @property {string} question
 * @property {string} answer
 */

/** @param {{ faqs: FAQ[] }} props */
export default function FAQSection({ faqs }) {
const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="border border-gray-200 rounded-lg overflow-hidden bg-white"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-5 text-left font-semibold text-brand-navy hover:bg-brand-light transition-colors"
          >
            <span>{faq.question}</span>
            <ChevronDown 
              size={20} 
              className={`text-gray-400 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} 
            />
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}