'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import {
  Building2,
  Store,
  MapPin,
  Mail,
  Phone,
  User,
  Sparkles,
  ShieldCheck,
  Clock,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  FileCheck,
  Send,
  HelpCircle,
} from 'lucide-react';

type FormState = {
  name: string;
  phone: string;
  email: string;
  city: string;
  property: string;
  investment: string;
  format: string;
  experience: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  phone: '',
  email: '',
  city: '',
  property: 'have-space',
  investment: '40-60',
  format: 'flagship',
  experience: 'experienced',
  message: '',
};

const propertyOptions = [
  {
    id: 'have-space',
    title: 'Space Ready',
    desc: 'Own or leased commercial property',
    badge: 'Immediate',
  },
  {
    id: 'searching',
    title: 'Site Searching',
    desc: 'Shortlisting prime high streets',
    badge: 'In Progress',
  },
  {
    id: 'landlord',
    title: 'Property Landlord',
    desc: 'Seeking flagship tenant partnership',
    badge: 'Host Brand',
  },
];

const investmentOptions = [
  {
    id: '25-40',
    range: '₹25L – ₹40L',
    tier: 'Boutique Galleria',
    desc: 'Ideal for 800–1,200 sq.ft. mall & tech hub formats',
  },
  {
    id: '40-60',
    range: '₹40L – ₹60L',
    tier: 'Signature Flagship',
    desc: 'Ideal for 1,200–1,800 sq.ft. high-street cafés',
  },
  {
    id: '60-plus',
    range: '₹60L+',
    tier: 'Master / Multi-Unit',
    desc: 'For multi-store cluster or prime metro territories',
  },
];

const formatOptions = [
  {
    id: 'flagship',
    title: 'High-Street Flagship',
    size: '1,200 – 2,200 sq.ft.',
    desc: 'Full kitchen + specialty espresso lounge + patio',
    icon: Building2,
  },
  {
    id: 'galleria',
    title: 'Galleria Hub',
    size: '800 – 1,400 sq.ft.',
    desc: 'High-throughput espresso bar + artisan bakery',
    icon: Store,
  },
];

const experienceOptions = [
  { id: 'experienced', label: 'Experienced F&B Operator' },
  { id: 'first-time', label: 'First-Time Hospitality Investor' },
  { id: 'group', label: 'Corporate Franchise Group' },
];

export default function FranchiseSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (submitted) {
      setReferenceId(`AMY-${Math.floor(1000 + Math.random() * 9000)}`);
      successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [submitted]);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (form.name.trim().length < 2) {
      nextErrors.name = 'Please provide your full name.';
    }

    const digits = form.phone.replace(/\D/g, '');
    const localPhone =
      digits.length === 12 && digits.startsWith('91')
        ? digits.slice(2)
        : digits.length === 11 && digits.startsWith('0')
          ? digits.slice(1)
          : digits;

    if (!/^[6-9]\d{9}$/.test(localPhone)) {
      nextErrors.phone = 'Enter a valid 10-digit mobile number.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Enter a valid corporate or personal email.';
    }

    if (form.city.trim().length < 2) {
      nextErrors.city = 'Enter your target city or neighborhood.';
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstField = Object.keys(nextErrors)[0] as keyof FormState;
      document.getElementById(`franchise-${firstField}`)?.focus();
      return;
    }

    setSubmitted(true);
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  };

  const selectedInvestment =
    investmentOptions.find((o) => o.id === form.investment)?.range || '₹40L – ₹60L';
  const selectedProperty =
    propertyOptions.find((o) => o.id === form.property)?.title || 'Space Ready';
  const selectedFormat =
    formatOptions.find((o) => o.id === form.format)?.title || 'High-Street Flagship';

  const mailtoHref = `mailto:hello@ammyscoffee.com?subject=${encodeURIComponent(
    `Franchise Application [Ref: ${referenceId || 'New'}] — ${form.name || 'Inquiry'} (${form.city || 'India'})`
  )}&body=${encodeURIComponent(
    [
      `AMMY'S COFFEE FRANCHISE APPLICATION DOSSIER`,
      `------------------------------------------`,
      `Reference: ${referenceId || 'AMY-PENDING'}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Target City / Territory: ${form.city}`,
      `Property Status: ${selectedProperty}`,
      `Investment Capital: ${selectedInvestment}`,
      `Preferred Format: ${selectedFormat}`,
      `Experience Level: ${form.experience}`,
      `Additional Notes: ${form.message || 'None provided'}`,
      `------------------------------------------`,
      `Sent via ammyscoffee.com Franchise Gateway`,
    ].join('\n')
  )}`;

  return (
    <section
      id="inquiry"
      className="relative w-full scroll-mt-24 overflow-hidden border-t border-cream/10 bg-espresso py-16 sm:py-24 lg:py-32"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-caramel/[0.05] blur-[150px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[500px] w-[500px] rounded-full bg-caramel/[0.04] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-caramel/30 bg-espresso-surface px-3.5 py-1 text-[10px] uppercase tracking-[0.26em] text-caramel">
            <Sparkles className="h-3 w-3 text-caramel" />
            <span>Official Expansion Portal</span>
          </div>
          <h2 className="mt-4 font-serif text-[clamp(2.4rem,5.5vw,4.5rem)] font-normal leading-[1] tracking-[-0.03em] text-cream">
            Confidential Franchise <br />
            <span className="font-light italic text-caramel-light">
              Partnership Application.
            </span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-cream/70 sm:text-base">
            Complete the interactive dossier below. Our executive committee reviews every applicant’s territory, property suitability, and capital alignment within 48 business hours.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Dossier Preview (Left) + Interactive Form (Right) */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 lg:items-start">
          
          {/* Left Column: Live Dossier Summary & Trust Pillars */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            
            {/* Live Interactive Dossier Card */}
            <div className="relative overflow-hidden rounded-3xl border border-cream/15 bg-espresso-surface p-7 sm:p-8 shadow-2xl">
              {/* Subtle top amber highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-caramel to-transparent opacity-80" />

              <div className="flex items-center justify-between border-b border-cream/10 pb-5">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-caramel font-semibold block">
                    Live Application Dossier
                  </span>
                  <span className="text-xs font-mono text-cream/60">
                    {submitted ? referenceId : 'DRAFT IN PROGRESS'}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-caramel/30 bg-caramel/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-caramel font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-caramel animate-pulse" />
                  {submitted ? 'Verified' : 'Live Sync'}
                </span>
              </div>

              {/* Dossier Field Feed */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-cream/50 uppercase tracking-[0.16em] text-[10px]">
                    Prospective Partner
                  </span>
                  <span className="font-medium text-cream truncate max-w-[20ch]">
                    {form.name.trim() || '—'}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-cream/50 uppercase tracking-[0.16em] text-[10px]">
                    Target Territory
                  </span>
                  <span className="font-medium text-cream truncate max-w-[20ch]">
                    {form.city.trim() || '—'}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-cream/50 uppercase tracking-[0.16em] text-[10px]">
                    Property Readiness
                  </span>
                  <span className="rounded-md border border-cream/10 bg-cream/[0.04] px-2 py-0.5 text-caramel text-[11px] font-medium">
                    {selectedProperty}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-cream/50 uppercase tracking-[0.16em] text-[10px]">
                    Capital Scope
                  </span>
                  <span className="font-mono text-cream text-[11px] font-semibold">
                    {selectedInvestment}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-cream/50 uppercase tracking-[0.16em] text-[10px]">
                    Store Format
                  </span>
                  <span className="text-cream/80 text-[11px]">
                    {selectedFormat}
                  </span>
                </div>
              </div>

              {/* Security & Direct Line */}
              <div className="mt-6 border-t border-cream/10 pt-5 text-xs text-cream/50 space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-caramel shrink-0" />
                  <span>Strict NDA &amp; Territory Exclusivity Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-caramel shrink-0" />
                  <span>Guaranteed Direct Review Within 48 Hours</span>
                </div>
              </div>
            </div>

            {/* Expansion Desk Contact Box */}
            <div className="rounded-2xl border border-cream/10 bg-cream/[0.02] p-5 text-xs">
              <span className="text-[10px] uppercase tracking-[0.22em] text-cream/50 block mb-1">
                Direct Expansion Committee
              </span>
              <a
                href="mailto:hello@ammyscoffee.com"
                className="font-medium text-caramel hover:text-caramel-light transition-colors block text-sm"
              >
                hello@ammyscoffee.com
              </a>
              <span className="text-[11px] text-cream/40 block mt-1">
                New Delhi Corporate Headquarters · Open for Pan-India Discussions
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Step-Driven Application Form */}
          <div className="lg:col-span-7">
            <div
              ref={successRef}
              className="rounded-3xl border border-cream/15 bg-espresso-surface p-7 sm:p-10 lg:p-12 shadow-2xl relative"
            >
              
              {submitted ? (
                /* Interactive Success Dossier State */
                <div className="py-6 text-center sm:text-left">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-caramel/40 bg-caramel/15 text-caramel mb-6">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>

                  <span className="block text-[11px] uppercase tracking-[0.26em] text-caramel font-semibold">
                    Application Recorded Locally
                  </span>
                  
                  <h3 className="mt-2 font-serif text-3xl sm:text-4xl font-normal text-cream">
                    Thank you, {form.name.split(' ')[0] || 'Partner'}.
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-cream/70 max-w-[50ch]">
                    Your dossier reference is <strong className="text-caramel font-mono">{referenceId}</strong>. To officially initiate your review with our expansion directors, launch the pre-formatted email below:
                  </p>

                  {/* Pre-formatted Dispatch Button */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a
                      href={mailtoHref}
                      className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-caramel px-8 text-xs font-semibold uppercase tracking-[0.2em] text-espresso transition-all hover:bg-caramel-light hover:shadow-lg hover:shadow-caramel/20"
                    >
                      <span>Transmit Dossier to Expansion Desk</span>
                      <Send className="h-3.5 w-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-cream/20 bg-cream/[0.04] px-6 text-xs uppercase tracking-[0.2em] text-cream/70 hover:border-caramel hover:text-caramel transition-colors"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      <span>Edit or Submit Another</span>
                    </button>
                  </div>

                  {/* Next Steps Timeline */}
                  <div className="mt-10 border-t border-cream/10 pt-8 text-left">
                    <span className="text-[10px] uppercase tracking-[0.24em] text-cream/50 block mb-4">
                      Next Milestones
                    </span>
                    <div className="grid gap-3 sm:grid-cols-3 text-xs">
                      <div className="rounded-xl border border-cream/10 bg-cream/[0.02] p-3.5">
                        <span className="text-caramel font-mono block text-[10px]">01. 48 Hours</span>
                        <p className="text-cream/80 font-medium mt-1">Territory Audit</p>
                      </div>
                      <div className="rounded-xl border border-cream/10 bg-cream/[0.02] p-3.5">
                        <span className="text-caramel font-mono block text-[10px]">02. Day 5</span>
                        <p className="text-cream/80 font-medium mt-1">NDA &amp; Deck Call</p>
                      </div>
                      <div className="rounded-xl border border-cream/10 bg-cream/[0.02] p-3.5">
                        <span className="text-caramel font-mono block text-[10px]">03. Day 10</span>
                        <p className="text-cream/80 font-medium mt-1">Site Visit &amp; Terms</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Interactive Multi-Field Application Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-8">
                  
                  {/* Section 1: Contact Identity */}
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.24em] text-caramel font-semibold block mb-4">
                      1. Applicant Details
                    </span>
                    
                    <div className="grid gap-4 sm:grid-cols-2">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="franchise-name"
                          className="block text-[11px] uppercase tracking-[0.16em] text-cream/70 mb-1.5"
                        >
                          Full Name <span className="text-caramel">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-cream/40" />
                          <input
                            id="franchise-name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => updateField('name', e.target.value)}
                            placeholder="e.g. Arjun Kapoor"
                            className={`w-full rounded-xl border bg-espresso/80 pl-10 pr-4 py-3 text-sm text-cream placeholder:text-cream/30 transition-all focus:outline-none focus:ring-1 ${
                              errors.name
                                ? 'border-caramel-light focus:ring-caramel-light'
                                : 'border-cream/15 focus:border-caramel focus:ring-caramel'
                            }`}
                          />
                        </div>
                        {errors.name && (
                          <p className="mt-1.5 text-[11px] text-caramel-light font-light">{errors.name}</p>
                        )}
                      </div>

                      {/* Phone / WhatsApp */}
                      <div>
                        <label
                          htmlFor="franchise-phone"
                          className="block text-[11px] uppercase tracking-[0.16em] text-cream/70 mb-1.5"
                        >
                          WhatsApp / Mobile <span className="text-caramel">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-cream/40" />
                          <input
                            id="franchise-phone"
                            name="phone"
                            type="tel"
                            inputMode="tel"
                            required
                            value={form.phone}
                            onChange={(e) => updateField('phone', e.target.value)}
                            placeholder="+91 98765 43210"
                            className={`w-full rounded-xl border bg-espresso/80 pl-10 pr-4 py-3 text-sm text-cream placeholder:text-cream/30 transition-all focus:outline-none focus:ring-1 ${
                              errors.phone
                                ? 'border-caramel-light focus:ring-caramel-light'
                                : 'border-cream/15 focus:border-caramel focus:ring-caramel'
                            }`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="mt-1.5 text-[11px] text-caramel-light font-light">{errors.phone}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="franchise-email"
                          className="block text-[11px] uppercase tracking-[0.16em] text-cream/70 mb-1.5"
                        >
                          Email Address <span className="text-caramel">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-cream/40" />
                          <input
                            id="franchise-email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => updateField('email', e.target.value)}
                            placeholder="you@domain.com"
                            className={`w-full rounded-xl border bg-espresso/80 pl-10 pr-4 py-3 text-sm text-cream placeholder:text-cream/30 transition-all focus:outline-none focus:ring-1 ${
                              errors.email
                                ? 'border-caramel-light focus:ring-caramel-light'
                                : 'border-cream/15 focus:border-caramel focus:ring-caramel'
                            }`}
                          />
                        </div>
                        {errors.email && (
                          <p className="mt-1.5 text-[11px] text-caramel-light font-light">{errors.email}</p>
                        )}
                      </div>

                      {/* Target City */}
                      <div>
                        <label
                          htmlFor="franchise-city"
                          className="block text-[11px] uppercase tracking-[0.16em] text-cream/70 mb-1.5"
                        >
                          Target City / Territory <span className="text-caramel">*</span>
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-cream/40" />
                          <input
                            id="franchise-city"
                            name="city"
                            type="text"
                            required
                            value={form.city}
                            onChange={(e) => updateField('city', e.target.value)}
                            placeholder="e.g. Chandigarh, Jaipur, Lucknow"
                            className={`w-full rounded-xl border bg-espresso/80 pl-10 pr-4 py-3 text-sm text-cream placeholder:text-cream/30 transition-all focus:outline-none focus:ring-1 ${
                              errors.city
                                ? 'border-caramel-light focus:ring-caramel-light'
                                : 'border-cream/15 focus:border-caramel focus:ring-caramel'
                            }`}
                          />
                        </div>
                        {errors.city && (
                          <p className="mt-1.5 text-[11px] text-caramel-light font-light">{errors.city}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Interactive Property Status Selection */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.24em] text-caramel font-semibold mb-3">
                      2. Commercial Space Status <span className="text-caramel">*</span>
                    </label>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {propertyOptions.map((opt) => {
                        const isSelected = form.property === opt.id;
                        return (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => updateField('property', opt.id)}
                            className={`flex flex-col text-left p-4 rounded-2xl border transition-all duration-200 ${
                              isSelected
                                ? 'border-caramel bg-caramel/[0.12] text-cream ring-1 ring-caramel shadow-lg shadow-caramel/10'
                                : 'border-cream/15 bg-espresso/50 text-cream/70 hover:border-cream/35 hover:bg-cream/[0.02]'
                            }`}
                          >
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-caramel font-semibold">
                              {opt.badge}
                            </span>
                            <span className="mt-1 text-sm font-medium text-cream">
                              {opt.title}
                            </span>
                            <span className="mt-1 text-[11px] text-cream/50 leading-relaxed font-light">
                              {opt.desc}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Section 3: Interactive Investment Bracket Chips */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.24em] text-caramel font-semibold mb-3">
                      3. Dedicated Investment Capital <span className="text-caramel">*</span>
                    </label>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {investmentOptions.map((opt) => {
                        const isSelected = form.investment === opt.id;
                        return (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => updateField('investment', opt.id)}
                            className={`flex flex-col text-left p-4 rounded-2xl border transition-all duration-200 ${
                              isSelected
                                ? 'border-caramel bg-caramel/[0.12] text-cream ring-1 ring-caramel shadow-lg shadow-caramel/10'
                                : 'border-cream/15 bg-espresso/50 text-cream/70 hover:border-cream/35 hover:bg-cream/[0.02]'
                            }`}
                          >
                            <span className="font-mono text-base font-semibold text-cream">
                              {opt.range}
                            </span>
                            <span className="mt-1 text-xs text-caramel font-medium">
                              {opt.tier}
                            </span>
                            <span className="mt-1 text-[10px] text-cream/50 leading-normal font-light">
                              {opt.desc}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Section 4: Store Format & Experience Selection */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    
                    {/* Preferred Format */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.22em] text-cream/60 mb-2.5">
                        Format Preference
                      </label>
                      <div className="space-y-2.5">
                        {formatOptions.map((opt) => {
                          const isSelected = form.format === opt.id;
                          const Icon = opt.icon;
                          return (
                            <button
                              type="button"
                              key={opt.id}
                              onClick={() => updateField('format', opt.id)}
                              className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${
                                isSelected
                                  ? 'border-caramel bg-caramel/10 ring-1 ring-caramel text-cream'
                                  : 'border-cream/15 bg-espresso/40 text-cream/70 hover:border-cream/30 hover:bg-cream/[0.02]'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <Icon className="h-4 w-4 text-caramel shrink-0" />
                                <div>
                                  <span className="text-xs font-medium text-cream block">{opt.title}</span>
                                  <span className="text-[10px] text-cream/50">{opt.size}</span>
                                </div>
                              </div>
                              <div className={`h-4 w-4 rounded-full border flex items-center justify-center shrink-0 ${
                                isSelected ? 'border-caramel bg-caramel' : 'border-cream/30'
                              }`}>
                                {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-espresso" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Background Experience */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.22em] text-cream/60 mb-2.5">
                        Business &amp; F&amp;B Background
                      </label>
                      <div className="space-y-2.5">
                        {experienceOptions.map((opt) => {
                          const isSelected = form.experience === opt.id;
                          return (
                            <button
                              type="button"
                              key={opt.id}
                              onClick={() => updateField('experience', opt.id)}
                              className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${
                                isSelected
                                  ? 'border-caramel bg-caramel/10 ring-1 ring-caramel text-cream'
                                  : 'border-cream/15 bg-espresso/40 text-cream/70 hover:border-cream/30 hover:bg-cream/[0.02]'
                              }`}
                            >
                              <span className="text-xs font-medium text-cream">{opt.label}</span>
                              <div className={`h-4 w-4 rounded-full border flex items-center justify-center shrink-0 ${
                                isSelected ? 'border-caramel bg-caramel' : 'border-cream/30'
                              }`}>
                                {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-espresso" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                  </div>

                  {/* Section 5: Additional Message */}
                  <div>
                    <label
                      htmlFor="franchise-message"
                      className="block text-[10px] uppercase tracking-[0.2em] text-cream/60 mb-2"
                    >
                      Additional Notes or Property Coordinates (Optional)
                    </label>
                    <textarea
                      id="franchise-message"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      placeholder="Share details regarding your site, partner background, or target launch timeline..."
                      className="w-full rounded-xl border border-cream/15 bg-espresso/80 p-3.5 text-sm text-cream placeholder:text-cream/30 transition-all focus:border-caramel focus:outline-none focus:ring-1 focus:ring-caramel"
                    />
                  </div>

                  {/* Submit CTA Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex h-13 items-center justify-center gap-3 rounded-full bg-caramel px-10 text-xs font-semibold uppercase tracking-[0.22em] text-espresso transition-all duration-300 hover:bg-caramel-light hover:shadow-xl hover:shadow-caramel/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
                    >
                      <span>Submit Franchise Application</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <p className="mt-3 text-[11px] text-cream/45 font-light">
                      Submissions are transmitted securely to Ammy’s Coffee expansion committee under mutual non-disclosure.
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
}
