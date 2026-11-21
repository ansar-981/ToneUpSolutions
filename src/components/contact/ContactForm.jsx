"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    subject: "",
    message: "",
    website: "", // Honeypot field
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setIsSuccess(true);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        service: "",
        subject: "",
        message: "",
        website: "",
      });
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center h-full flex flex-col items-center justify-center min-h-[500px]">
        <CheckCircle2 size={64} className="text-green-500 mb-6" />
        <h3 className="text-2xl font-bold text-brand-navy mb-4">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          Your enquiry has been sent successfully. We will get back to you shortly.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-brand-blue font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      
      {errorMsg && (
        <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg flex items-start gap-3 text-sm">
          <AlertCircle size={20} className="shrink-0 mt-0.5" />
          <p>{errorMsg}</p>
        </div>
      )}

      {/* Honeypot Field (Hidden from real users) */}
      <div className="hidden" aria-hidden="true">
        <input 
          type="text" 
          name="website" 
          tabIndex={-1} 
          autoComplete="off" 
          value={formData.website} 
          onChange={handleChange} 
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-brand-navy mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-brand-navy mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-brand-navy mb-2">
            Email Address <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-brand-navy mb-2">
            Service or Domain <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="" disabled>Select a service</option>
            <option value="Home Automation">Home Automation</option>
            <option value="Smart Switches">Smart Switches</option>
            <option value="Web Development">Web Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Video Editing">Video Editing</option>
            <option value="Interior Works">Interior Works</option>
            <option value="Home Renovation">Home Renovation</option>
            <option value="Office Renovation">Office Renovation</option>
            <option value="Retail Renovation">Retail Renovation</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-brand-navy mb-2">
          Subject <span className="text-gray-400 font-normal">(Optional)</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
          placeholder="Brief subject of your enquiry"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-brand-navy mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all resize-none"
          placeholder="Tell us about your requirements..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-blue hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={20} />
            Submit Enquiry
          </>
        )}
      </button>
    </form>
  );
}