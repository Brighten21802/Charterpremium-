import React, { useState, useEffect } from 'react';
import { EnquiryData } from '../types';
import { Mail, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import { OfficialLogo } from './OfficialLogo';

interface PrivateEnquiryProps {
  prefilledPropertyInterest?: string;
}

export const PrivateEnquiry: React.FC<PrivateEnquiryProps> = ({ prefilledPropertyInterest }) => {
  const [formData, setFormData] = useState<EnquiryData>({
    fullName: '',
    email: '',
    phone: '',
    propertyInterest: 'Penthouse / Sky Villa',
    preferredLocation: 'South Mumbai',
    budgetRange: '₹ 25 Cr – ₹ 50 Cr',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledPropertyInterest) {
      setFormData((prev) => ({
        ...prev,
        propertyInterest: prefilledPropertyInterest,
        message: `I would like to arrange a private discussion regarding ${prefilledPropertyInterest}.`
      }));
    }
  }, [prefilledPropertyInterest]);

  const propertyInterestOptions = [
    'Penthouse / Sky Villa',
    'Seafront Residence',
    'Duplex Manor',
    'Private Garden Estate',
    'Off-Market Portfolio Mandate',
    'Acquisition Advisory'
  ];

  const locationOptions = [
    'South Mumbai (Altamount / Malabar Hill)',
    'Worli (Sea Face)',
    'Bandra (Pali Hill / Bandstand)',
    'Juhu (Beachfront)',
    'Prabhadevi',
    'Lower Parel',
    'Powai',
    'Flexible / Multiple Enclaves'
  ];

  const budgetOptions = [
    '₹ 15 Cr – ₹ 25 Cr',
    '₹ 25 Cr – ₹ 50 Cr',
    '₹ 50 Cr – ₹ 100 Cr',
    '₹ 100 Cr+'
  ];

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide a valid contact email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your contact number.';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      errs.phone = 'Please provide a complete contact number.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate discrete luxury submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      propertyInterest: 'Penthouse / Sky Villa',
      preferredLocation: 'South Mumbai',
      budgetRange: '₹ 25 Cr – ₹ 50 Cr',
      message: ''
    });
  };

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 bg-[#050505] text-[#F5F5F0] border-t border-white/10"
      aria-label="Private enquiry and consultation"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Editorial Guidance Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <span className="block font-sans text-xs uppercase tracking-[0.35em] text-[#C5A059] mb-3 font-semibold">
                CHARTER PREMIUM • PRIVATE ADVISORY & CONSULTATION
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#F5F5F0] tracking-tight leading-tight mb-4">
                Begin a private conversation.
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#A1A1A1] font-light leading-relaxed mb-8">
                Tell us what you're looking for. We'll take it from there.
              </p>

              {/* Discretion Commitment Card */}
              <div className="p-6 bg-[#080808] border border-white/10 space-y-4">
                <div className="flex items-center gap-2.5 text-xs font-sans uppercase tracking-widest text-[#C5A059]">
                  <Shield className="w-4 h-4 text-[#C5A059]" />
                  <span>DISCRETION & PRIVACY ASSURANCE</span>
                </div>
                <p className="text-xs text-[#888888] font-light leading-relaxed">
                  We respect the confidential nature of luxury real estate transactions. Your contact details, property criteria, and financial preferences are held in strictest confidence.
                </p>
              </div>

              {/* Direct Inquiries & Email Contact */}
              <div className="mt-8 space-y-3 pt-6 border-t border-white/10">
                <span className="block text-[10px] uppercase tracking-[0.25em] text-[#888888]">
                  DIRECT EMAIL CORRESPONDENCE
                </span>
                <a
                  href="mailto:info@charterpremium.in"
                  className="inline-flex items-center gap-2 text-lg sm:text-xl font-serif text-[#F5F5F0] hover:text-[#C5A059] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C5A059]" />
                  <span>info@charterpremium.in</span>
                </a>
                <p className="text-xs text-[#888888] font-sans tracking-wide">
                  Official Advisory Address: charterpremium.in • Mumbai, Maharashtra, India
                </p>
              </div>
            </div>

            {/* Official Brand Badge in consultation column */}
            <div className="pt-6 hidden lg:flex items-center gap-4">
              <OfficialLogo size="lg" showWordmark={true} />
            </div>
          </div>

          {/* Right Consultation Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 bg-[#080808] border border-white/10 shadow-2xl relative">
              {isSubmitted ? (
                /* Elegant Confirmation State strictly following prompt */
                <div className="py-12 px-4 text-center space-y-6">
                  <div className="flex justify-center mb-2">
                    <OfficialLogo size="lg" showWordmark={false} />
                  </div>
                  <div className="w-14 h-14 rounded-full border border-[#C5A059]/40 flex items-center justify-center mx-auto bg-[#C5A059]/10">
                    <CheckCircle2 className="w-7 h-7 text-[#C5A059]" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F5F0] font-light">
                      Thank you. Your enquiry has been received.
                    </h3>
                    <p className="font-sans text-base text-[#C5A059] font-light tracking-wide max-w-md mx-auto">
                      A member of Charter Premium will be in touch.
                    </p>
                  </div>

                  <div className="p-6 bg-black/40 border border-white/10 text-xs text-[#888888] max-w-md mx-auto text-left space-y-2">
                    <p>
                      <strong className="text-[#F5F5F0]">Client:</strong> {formData.fullName}
                    </p>
                    <p>
                      <strong className="text-[#F5F5F0]">Interest:</strong> {formData.propertyInterest}
                    </p>
                    <p>
                      <strong className="text-[#F5F5F0]">Location:</strong> {formData.preferredLocation}
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-8 py-3 border border-[#C5A059] text-[#C5A059] text-xs font-sans uppercase tracking-[0.2em] hover:bg-[#C5A059] hover:text-[#050505] transition-colors"
                    >
                      SUBMIT ANOTHER INQUIRY
                    </button>
                  </div>
                </div>
              ) : (
                /* Consultation Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* FULL NAME */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-[11px] uppercase tracking-[0.25em] text-[#C5A059] mb-2 font-medium"
                      >
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        placeholder="e.g. Anand Mahindra"
                        className={`w-full px-4 py-3.5 bg-[#050505] border text-sm text-[#F5F5F0] placeholder-[#555555] focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-white/10 focus:border-[#C5A059]'
                        }`}
                      />
                      {errors.fullName && (
                        <span className="text-xs text-rose-400 mt-1 block">{errors.fullName}</span>
                      )}
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[11px] uppercase tracking-[0.25em] text-[#C5A059] mb-2 font-medium"
                      >
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="e.g. name@residence.com"
                        className={`w-full px-4 py-3.5 bg-[#050505] border text-sm text-[#F5F5F0] placeholder-[#555555] focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-white/10 focus:border-[#C5A059]'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-xs text-rose-400 mt-1 block">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* PHONE */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[11px] uppercase tracking-[0.25em] text-[#C5A059] mb-2 font-medium"
                      >
                        PHONE *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="+91 98200 00000"
                        className={`w-full px-4 py-3.5 bg-[#050505] border text-sm text-[#F5F5F0] placeholder-[#555555] focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-white/10 focus:border-[#C5A059]'
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-xs text-rose-400 mt-1 block">{errors.phone}</span>
                      )}
                    </div>

                    {/* PROPERTY INTEREST */}
                    <div>
                      <label
                        htmlFor="propertyInterest"
                        className="block text-[11px] uppercase tracking-[0.25em] text-[#C5A059] mb-2 font-medium"
                      >
                        PROPERTY INTEREST
                      </label>
                      <select
                        id="propertyInterest"
                        value={formData.propertyInterest}
                        onChange={(e) =>
                          setFormData({ ...formData, propertyInterest: e.target.value })
                        }
                        className="w-full px-4 py-3.5 bg-[#050505] border border-white/10 text-sm text-[#F5F5F0] focus:outline-none focus:border-[#C5A059] transition-colors"
                      >
                        {propertyInterestOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#050505] text-[#F5F5F0]">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* PREFERRED LOCATION */}
                    <div>
                      <label
                        htmlFor="preferredLocation"
                        className="block text-[11px] uppercase tracking-[0.25em] text-[#C5A059] mb-2 font-medium"
                      >
                        PREFERRED LOCATION
                      </label>
                      <select
                        id="preferredLocation"
                        value={formData.preferredLocation}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredLocation: e.target.value })
                        }
                        className="w-full px-4 py-3.5 bg-[#050505] border border-white/10 text-sm text-[#F5F5F0] focus:outline-none focus:border-[#C5A059] transition-colors"
                      >
                        {locationOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#050505] text-[#F5F5F0]">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* BUDGET RANGE */}
                    <div>
                      <label
                        htmlFor="budgetRange"
                        className="block text-[11px] uppercase tracking-[0.25em] text-[#C5A059] mb-2 font-medium"
                      >
                        BUDGET RANGE
                      </label>
                      <select
                        id="budgetRange"
                        value={formData.budgetRange}
                        onChange={(e) =>
                          setFormData({ ...formData, budgetRange: e.target.value })
                        }
                        className="w-full px-4 py-3.5 bg-[#050505] border border-white/10 text-sm text-[#F5F5F0] focus:outline-none focus:border-[#C5A059] transition-colors"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#050505] text-[#F5F5F0]">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[11px] uppercase tracking-[0.25em] text-[#C5A059] mb-2 font-medium"
                    >
                      MESSAGE / SPECIFIC REQUIREMENTS
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share specific criteria, preferences regarding sea-view, floor levels, family requirements, or private viewing timelines..."
                      className="w-full px-4 py-3.5 bg-[#050505] border border-white/10 text-sm text-[#F5F5F0] placeholder-[#555555] focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
                    />
                  </div>

                  {/* CTA BUTTON */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#C5A059] text-[#050505] font-sans text-xs uppercase tracking-[0.25em] font-bold flex items-center justify-center gap-3 hover:bg-[#d6b26d] transition-all duration-300 disabled:opacity-50 active:scale-[0.99]"
                    >
                      <span>
                        {isSubmitting ? 'TRANSMITTING INQUIRY...' : 'REQUEST A PRIVATE CONSULTATION'}
                      </span>
                      {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                    </button>
                    <p className="mt-3 text-center text-[10px] uppercase tracking-[0.2em] text-[#888888]">
                      Strict Non-Disclosure & Confidentiality Protocol Observed
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
