'use client';

import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from 'react';
import {
  Mail,
  Phone,
  User,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  RotateCcw,
  Send,
  ShieldCheck,
  Clock,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import {
  INITIAL_FORM,
  PROPERTY_OPTIONS,
  INVESTMENT_OPTIONS,
  FORMAT_OPTIONS,
  EXPERIENCE_OPTIONS,
  getPropertyTitle,
  getInvestmentRange,
  getFormatTitle,
  getExperienceLabel,
  type FranchiseFormState,
} from './franchise-data';

const STEPS = [
  { step: 1, title: 'Partner & Location', shortTitle: 'Details' },
  { step: 2, title: 'Space & Capital', shortTitle: 'Scope' },
  { step: 3, title: 'Format & Experience', shortTitle: 'Alignment' },
] as const;

export default function FranchiseSection() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [form, setForm] = useState<FranchiseFormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FranchiseFormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [copied, setCopied] = useState(false);

  const stepHeadingRef = useRef<HTMLHeadingElement>(null);
  const successContainerRef = useRef<HTMLDivElement>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  // Listen for format preselection dispatched from FranchiseFormats component
  useEffect(() => {
    const handleFormatSelect = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setForm((prev) => ({ ...prev, format: customEvent.detail }));
        setErrors((prev) => {
          if (!prev.format) return prev;
          const next = { ...prev };
          delete next.format;
          return next;
        });
      }
    };

    window.addEventListener('ammy:select-format', handleFormatSelect);
    return () => window.removeEventListener('ammy:select-format', handleFormatSelect);
  }, []);

  const updateField = (field: keyof FranchiseFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handleRadioKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    options: { id: string }[],
    currentIndex: number,
    field: keyof FranchiseFormState
  ) => {
    let nextIndex = -1;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % options.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + options.length) % options.length;
    }

    if (nextIndex !== -1) {
      const nextOpt = options[nextIndex];
      updateField(field, nextOpt.id);
      const targetBtn = document.getElementById(`radio-${field}-${nextOpt.id}`);
      targetBtn?.focus();
    }
  };

  const validateStep1 = (): boolean => {
    const nextErrors: Partial<Record<keyof FranchiseFormState, string>> = {};

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
      const firstField = Object.keys(nextErrors)[0] as keyof FranchiseFormState;
      document.getElementById(`franchise-${firstField}`)?.focus();
      return false;
    }

    return true;
  };

  const validateStep2 = (): boolean => {
    const nextErrors: Partial<Record<keyof FranchiseFormState, string>> = {};

    if (!form.property) {
      nextErrors.property = 'Please indicate your commercial space status.';
    }

    if (!form.investment) {
      nextErrors.investment = 'Please select an indicative capital bracket.';
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstField = Object.keys(nextErrors)[0] as keyof FranchiseFormState;
      const firstId =
        firstField === 'property' ? PROPERTY_OPTIONS[0].id : INVESTMENT_OPTIONS[0].id;
      document.getElementById(`radio-${firstField}-${firstId}`)?.focus();
      return false;
    }

    return true;
  };

  const validateStep3 = (): boolean => {
    const nextErrors: Partial<Record<keyof FranchiseFormState, string>> = {};

    if (!form.format) {
      nextErrors.format = 'Please select a preferred store format.';
    }

    if (!form.experience) {
      nextErrors.experience = 'Please indicate your hospitality background.';
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstField = Object.keys(nextErrors)[0] as keyof FranchiseFormState;
      const firstId =
        firstField === 'format' ? FORMAT_OPTIONS[0].id : EXPERIENCE_OPTIONS[0].id;
      document.getElementById(`radio-${firstField}-${firstId}`)?.focus();
      return false;
    }

    return true;
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (validateStep1()) {
        setCurrentStep(2);
        setTimeout(() => stepHeadingRef.current?.focus(), 50);
      }
    } else if (currentStep === 2) {
      if (validateStep2()) {
        setCurrentStep(3);
        setTimeout(() => stepHeadingRef.current?.focus(), 50);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as 1 | 2);
      setTimeout(() => stepHeadingRef.current?.focus(), 50);
    }
  };

  const handleStepClick = (targetStep: 1 | 2 | 3) => {
    if (targetStep < currentStep) {
      setCurrentStep(targetStep);
      setTimeout(() => stepHeadingRef.current?.focus(), 50);
    } else if (targetStep === 2 && currentStep === 1) {
      if (validateStep1()) {
        setCurrentStep(2);
        setTimeout(() => stepHeadingRef.current?.focus(), 50);
      }
    } else if (targetStep === 3 && currentStep === 2) {
      if (validateStep2()) {
        setCurrentStep(3);
        setTimeout(() => stepHeadingRef.current?.focus(), 50);
      }
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateStep1()) {
      setCurrentStep(1);
      return;
    }
    if (!validateStep2()) {
      setCurrentStep(2);
      return;
    }
    if (!validateStep3()) {
      setCurrentStep(3);
      return;
    }

    // Generate local client draft reference ID
    const randomHex =
      typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID().slice(0, 8).toUpperCase()
        : Math.floor(100000 + Math.random() * 900000).toString();
    const newRefId = `AMY-${randomHex}`;

    setReferenceId(newRefId);
    setSubmitted(true);

    // Scroll to success state with reduced motion check
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    setTimeout(() => {
      successContainerRef.current?.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
      successHeadingRef.current?.focus();
    }, 50);
  };

  const resetForm = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setCurrentStep(1);
    setSubmitted(false);
    setReferenceId('');
    setCopied(false);
  };

  const selectedInvestment = getInvestmentRange(form.investment);
  const selectedProperty = getPropertyTitle(form.property);
  const selectedFormat = getFormatTitle(form.format);
  const selectedExperience = getExperienceLabel(form.experience);

  // Cap message length at 1000 characters
  const trimmedMessage = form.message.slice(0, 1000);

  const dossierSummaryText = [
    `AMMY'S COFFEE — FRANCHISE INQUIRY DOSSIER`,
    `------------------------------------------`,
    `Reference: ${referenceId || 'DRAFT'}`,
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Email: ${form.email}`,
    `Target City / Territory: ${form.city}`,
    `Property Status: ${selectedProperty}`,
    `Indicative Capital: ${selectedInvestment}`,
    `Preferred Format: ${selectedFormat}`,
    `Experience: ${selectedExperience}`,
    `Additional Notes: ${trimmedMessage || 'None provided'}`,
    `------------------------------------------`,
    `Prepared via ammyscoffee.com`,
  ].join('\n');

  const mailtoHref = `mailto:hello@ammyscoffee.com?subject=${encodeURIComponent(
    `Franchise Inquiry [${referenceId || 'Concept'}] — ${form.name || 'Inquiry'} (${form.city || 'India'})`
  )}&body=${encodeURIComponent(dossierSummaryText)}`;

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(dossierSummaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="inquiry"
      className="relative w-full scroll-mt-24 overflow-hidden border-t border-cream/10 bg-espresso py-16 sm:py-24 lg:py-32"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-caramel/[0.04] blur-[150px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[500px] w-[500px] rounded-full bg-caramel/[0.03] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-caramel/30 bg-espresso-surface px-3.5 py-1 text-[10px] uppercase tracking-[0.26em] text-caramel">
            <span>Franchise Inquiry · Step-by-Step Dossier</span>
          </div>
          <h2 className="mt-4 font-serif text-[clamp(2.4rem,5.5vw,4.5rem)] font-normal leading-[1] tracking-[-0.03em] text-cream">
            Partner with Ammy&apos;s. <br />
            <span className="font-light italic text-caramel-light">
              Submit your inquiry in 3 steps.
            </span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-cream/75 sm:text-base">
            A focused, three-step dossier to evaluate territorial fit and capital scope. Your information stays in this browser until you choose to email us.
          </p>
        </div>

        {/* 2-Column Responsive Layout: On mobile, Form renders FIRST (order-1), Dossier summary SECOND (order-2) */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 lg:items-start">
          
          {/* Column A: Multi-Step Interactive Form (order-1 on mobile, lg:order-2) */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div
              ref={successContainerRef}
              className="rounded-2xl border border-cream/15 bg-espresso-surface p-6 sm:p-9 lg:p-11 shadow-xl relative overflow-hidden"
            >
              {submitted ? (
                /* Honest Success State */
                <div
                  role="status"
                  aria-live="polite"
                  className="py-4 text-left"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-caramel/40 bg-caramel/15 text-caramel mb-5">
                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <span className="block text-[11px] uppercase tracking-[0.24em] text-caramel font-semibold">
                    Draft Prepared Locally
                  </span>

                  <h3
                    ref={successHeadingRef}
                    tabIndex={-1}
                    className="mt-2 font-serif text-2xl sm:text-3xl font-normal text-cream outline-none"
                  >
                    Thank you, {form.name.split(' ')[0] || 'Partner'}.
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-cream/75 max-w-[50ch]">
                    Your draft reference is <strong className="text-caramel font-mono">{referenceId}</strong>. Nothing has been sent yet. To share your inquiry with our expansion desk, launch the pre-filled email or copy your dossier below:
                  </p>

                  {/* Primary Email CTA + Copy Fallback */}
                  <div className="mt-7 flex flex-col sm:flex-row gap-3.5">
                    <a
                      href={mailtoHref}
                      className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-caramel px-7 text-xs font-semibold uppercase tracking-[0.2em] text-espresso transition-colors hover:bg-caramel-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
                    >
                      <Send className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Send Email Inquiry</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyToClipboard}
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-cream/20 bg-cream/[0.04] px-6 text-xs uppercase tracking-[0.18em] text-cream/80 hover:border-caramel hover:text-caramel transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-caramel" aria-hidden="true" />
                          <span>Copied to Clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Copy Dossier Text</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-cream/15 px-5 text-xs uppercase tracking-[0.18em] text-cream/65 hover:text-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
                    >
                      <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Reset</span>
                    </button>
                  </div>

                  {/* Direct Contact fallback */}
                  <div className="mt-8 rounded-xl border border-cream/10 bg-espresso/60 p-4 text-xs">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-cream/60 block">
                      Direct Email Address
                    </span>
                    <a
                      href="mailto:hello@ammyscoffee.com"
                      className="font-medium text-caramel hover:text-caramel-light transition-colors text-sm mt-0.5 inline-block"
                    >
                      hello@ammyscoffee.com
                    </a>
                    <p className="mt-1 text-[11px] text-cream/65 font-light">
                      If your default mail client does not open automatically, copy the dossier text above and email it directly.
                    </p>
                  </div>

                  {/* Legal Disclaimer */}
                  <p className="mt-6 text-[10px] text-cream/60 leading-relaxed font-light border-t border-cream/10 pt-4">
                    Disclaimer: This inquiry form is a conceptual partner intake and does not constitute a binding franchise offer or agreement. Any formal partnership is subject to site due diligence and a definitive written agreement.
                  </p>
                </div>
              ) : (
                /* The 3-Step Wizard Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-7">
                  
                  {/* Step Progress Header */}
                  <div>
                    {/* Visual Stepper Pills */}
                    <div className="flex items-center justify-between border-b border-cream/10 pb-4 mb-6">
                      <div className="flex items-center gap-2 sm:gap-3">
                        {STEPS.map((s) => {
                          const isCurrent = currentStep === s.step;
                          const isPast = currentStep > s.step;
                          return (
                            <button
                              type="button"
                              key={s.step}
                              onClick={() => handleStepClick(s.step as 1 | 2 | 3)}
                              disabled={s.step > currentStep}
                              aria-current={isCurrent ? 'step' : undefined}
                              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel ${
                                isCurrent
                                  ? 'border border-caramel bg-caramel/20 text-cream font-semibold'
                                  : isPast
                                    ? 'border border-cream/20 text-caramel hover:border-caramel/50'
                                    : 'border border-cream/10 text-cream/35 cursor-not-allowed'
                              }`}
                            >
                              <span className="font-mono text-[10px]">
                                {isPast ? '✓' : `0${s.step}`}
                              </span>
                              <span className="hidden sm:inline">{s.shortTitle}</span>
                            </button>
                          );
                        })}
                      </div>

                      <span className="text-[10px] uppercase tracking-[0.2em] text-cream/50 font-mono">
                        Step 0{currentStep} / 03
                      </span>
                    </div>

                    {/* Thin Progress Track */}
                    <div className="h-0.5 w-full bg-cream/10 rounded-full overflow-hidden mb-6">
                      <div
                        className="h-full bg-caramel transition-all duration-500 ease-out"
                        style={{ width: `${(currentStep / 3) * 100}%` }}
                      />
                    </div>

                    {/* Step Title Heading */}
                    <div className="mb-6">
                      <span className="text-[10px] uppercase tracking-[0.24em] text-caramel font-semibold block">
                        Phase {currentStep} of 3
                      </span>
                      <h3
                        ref={stepHeadingRef}
                        tabIndex={-1}
                        className="mt-1 font-serif text-2xl font-normal text-cream outline-none"
                      >
                        {STEPS[currentStep - 1].title}
                      </h3>
                      <p className="mt-1 text-xs text-cream/65 font-light">
                        {currentStep === 1 && 'Introduce yourself and your preferred operating city or territory.'}
                        {currentStep === 2 && 'Indicate your commercial property readiness and investment scope.'}
                        {currentStep === 3 && 'Select your café format preference and hospitality experience.'}
                      </p>
                    </div>
                  </div>

                  {/* STEP 1: Applicant Details & Territory */}
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        {/* Name */}
                        <div>
                          <label
                            htmlFor="franchise-name"
                            className="block text-[11px] uppercase tracking-[0.16em] text-cream/75 mb-1.5"
                          >
                            Full Name <span className="text-caramel" aria-hidden="true">*</span>
                          </label>
                          <div className="relative">
                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-cream/60" aria-hidden="true" />
                            <input
                              id="franchise-name"
                              name="name"
                              type="text"
                              required
                              autoComplete="name"
                              aria-invalid={Boolean(errors.name)}
                              aria-describedby={errors.name ? 'error-franchise-name' : undefined}
                              value={form.name}
                              onChange={(e) => updateField('name', e.target.value)}
                              placeholder="e.g. Arjun Kapoor"
                              className={`w-full rounded-xl border bg-espresso/80 pl-10 pr-4 py-3 text-sm text-cream placeholder:text-cream/55 transition-colors focus:outline-none focus:ring-2 ${
                                errors.name
                                  ? 'border-caramel-light focus:ring-caramel-light'
                                  : 'border-cream/15 focus:border-caramel focus:ring-caramel'
                              }`}
                            />
                          </div>
                          {errors.name && (
                            <p id="error-franchise-name" role="alert" className="mt-1.5 text-[11px] text-caramel-light font-light">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        {/* Phone */}
                        <div>
                          <label
                            htmlFor="franchise-phone"
                            className="block text-[11px] uppercase tracking-[0.16em] text-cream/75 mb-1.5"
                          >
                            Mobile Number <span className="text-caramel" aria-hidden="true">*</span>
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-cream/60" aria-hidden="true" />
                            <input
                              id="franchise-phone"
                              name="phone"
                              type="tel"
                              inputMode="tel"
                              required
                              autoComplete="tel"
                              aria-invalid={Boolean(errors.phone)}
                              aria-describedby={errors.phone ? 'error-franchise-phone' : undefined}
                              value={form.phone}
                              onChange={(e) => updateField('phone', e.target.value)}
                              placeholder="+91 98765 43210"
                              className={`w-full rounded-xl border bg-espresso/80 pl-10 pr-4 py-3 text-sm text-cream placeholder:text-cream/55 transition-colors focus:outline-none focus:ring-2 ${
                                errors.phone
                                  ? 'border-caramel-light focus:ring-caramel-light'
                                  : 'border-cream/15 focus:border-caramel focus:ring-caramel'
                              }`}
                            />
                          </div>
                          {errors.phone && (
                            <p id="error-franchise-phone" role="alert" className="mt-1.5 text-[11px] text-caramel-light font-light">
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label
                            htmlFor="franchise-email"
                            className="block text-[11px] uppercase tracking-[0.16em] text-cream/75 mb-1.5"
                          >
                            Email Address <span className="text-caramel" aria-hidden="true">*</span>
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-cream/60" aria-hidden="true" />
                            <input
                              id="franchise-email"
                              name="email"
                              type="email"
                              required
                              autoComplete="email"
                              aria-invalid={Boolean(errors.email)}
                              aria-describedby={errors.email ? 'error-franchise-email' : undefined}
                              value={form.email}
                              onChange={(e) => updateField('email', e.target.value)}
                              placeholder="you@domain.com"
                              className={`w-full rounded-xl border bg-espresso/80 pl-10 pr-4 py-3 text-sm text-cream placeholder:text-cream/55 transition-colors focus:outline-none focus:ring-2 ${
                                errors.email
                                  ? 'border-caramel-light focus:ring-caramel-light'
                                  : 'border-cream/15 focus:border-caramel focus:ring-caramel'
                              }`}
                            />
                          </div>
                          {errors.email && (
                            <p id="error-franchise-email" role="alert" className="mt-1.5 text-[11px] text-caramel-light font-light">
                              {errors.email}
                            </p>
                          )}
                        </div>

                        {/* Target City */}
                        <div>
                          <label
                            htmlFor="franchise-city"
                            className="block text-[11px] uppercase tracking-[0.16em] text-cream/75 mb-1.5"
                          >
                            Target City / Territory <span className="text-caramel" aria-hidden="true">*</span>
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-cream/60" aria-hidden="true" />
                            <input
                              id="franchise-city"
                              name="city"
                              type="text"
                              required
                              autoComplete="address-level2"
                              aria-invalid={Boolean(errors.city)}
                              aria-describedby={errors.city ? 'error-franchise-city' : undefined}
                              value={form.city}
                              onChange={(e) => updateField('city', e.target.value)}
                              placeholder="e.g. Chandigarh, Jaipur, Delhi NCR"
                              className={`w-full rounded-xl border bg-espresso/80 pl-10 pr-4 py-3 text-sm text-cream placeholder:text-cream/55 transition-colors focus:outline-none focus:ring-2 ${
                                errors.city
                                  ? 'border-caramel-light focus:ring-caramel-light'
                                  : 'border-cream/15 focus:border-caramel focus:ring-caramel'
                              }`}
                            />
                          </div>
                          {errors.city && (
                            <p id="error-franchise-city" role="alert" className="mt-1.5 text-[11px] text-caramel-light font-light">
                              {errors.city}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Step 1 Actions */}
                      <div className="pt-4 flex items-center justify-between border-t border-cream/10">
                        <span className="text-[11px] text-cream/50 font-light">
                          All fields marked with <span className="text-caramel">*</span> are required.
                        </span>
                        <button
                          type="button"
                          onClick={handleNext}
                          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-caramel px-7 text-xs font-semibold uppercase tracking-[0.18em] text-espresso transition-colors hover:bg-caramel-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
                        >
                          <span>Continue</span>
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Space & Capital */}
                  {currentStep === 2 && (
                    <div className="space-y-8 sm:space-y-9">
                      {/* Property Status Fieldset */}
                      <fieldset
                        role="radiogroup"
                        aria-labelledby="legend-property"
                        aria-describedby={errors.property ? 'error-property' : undefined}
                        className="border-0 p-0 m-0"
                      >
                        <legend id="legend-property" className="block mb-4">
                          <span className="text-[11px] uppercase tracking-[0.24em] text-caramel font-semibold block">
                            Commercial Space Status <span className="text-caramel" aria-hidden="true">*</span>
                          </span>
                          <span className="mt-1 block text-xs text-cream/65 font-light">
                            Indicate whether you have a space secured or are scouting locations.
                          </span>
                        </legend>

                        <div className="grid gap-3.5 sm:grid-cols-3">
                          {PROPERTY_OPTIONS.map((opt, idx) => {
                            const isSelected = form.property === opt.id;
                            return (
                              <button
                                type="button"
                                key={opt.id}
                                id={`radio-property-${opt.id}`}
                                role="radio"
                                aria-checked={isSelected}
                                tabIndex={isSelected || (!form.property && idx === 0) ? 0 : -1}
                                onClick={() => updateField('property', opt.id)}
                                onKeyDown={(e) => handleRadioKeyDown(e, PROPERTY_OPTIONS, idx, 'property')}
                                className={`flex flex-col justify-between text-left p-4 sm:p-5 rounded-2xl border min-h-[125px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel ${
                                  isSelected
                                    ? 'border-caramel bg-caramel/[0.12] text-cream ring-1 ring-caramel shadow-lg shadow-caramel/10'
                                    : 'border-cream/15 bg-espresso/50 text-cream/70 hover:border-cream/35 hover:bg-cream/[0.02]'
                                }`}
                              >
                                <div className="flex items-center justify-between w-full mb-3">
                                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-caramel font-semibold">
                                    {opt.badge}
                                  </span>
                                  <div
                                    className={`h-4 w-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                                      isSelected ? 'border-caramel bg-caramel' : 'border-cream/25'
                                    }`}
                                  >
                                    {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-espresso" />}
                                  </div>
                                </div>

                                <div>
                                  <span className="block text-sm font-medium text-cream leading-snug">
                                    {opt.title}
                                  </span>
                                  <span className="mt-1.5 block text-xs text-cream/60 leading-relaxed font-light">
                                    {opt.desc}
                                  </span>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                        {errors.property && (
                          <p id="error-property" role="alert" className="mt-2 text-[11px] text-caramel-light font-light">
                            {errors.property}
                          </p>
                        )}
                      </fieldset>

                      {/* Subtle Section Divider */}
                      <div className="border-t border-cream/[0.08]" />

                      {/* Investment Bracket Fieldset */}
                      <fieldset
                        role="radiogroup"
                        aria-labelledby="legend-investment"
                        aria-describedby={errors.investment ? 'error-investment' : undefined}
                        className="border-0 p-0 m-0"
                      >
                        <legend id="legend-investment" className="block mb-4">
                          <span className="text-[11px] uppercase tracking-[0.24em] text-caramel font-semibold block">
                            Indicative Capital Scope <span className="text-caramel" aria-hidden="true">*</span>
                          </span>
                          <span className="mt-1 block text-xs text-cream/65 font-light">
                            Indicative qualification brackets to evaluate format suitability (subject to discussion).
                          </span>
                        </legend>

                        <div className="grid gap-3.5 sm:grid-cols-3">
                          {INVESTMENT_OPTIONS.map((opt, idx) => {
                            const isSelected = form.investment === opt.id;
                            return (
                              <button
                                type="button"
                                key={opt.id}
                                id={`radio-investment-${opt.id}`}
                                role="radio"
                                aria-checked={isSelected}
                                tabIndex={isSelected || (!form.investment && idx === 0) ? 0 : -1}
                                onClick={() => updateField('investment', opt.id)}
                                onKeyDown={(e) => handleRadioKeyDown(e, INVESTMENT_OPTIONS, idx, 'investment')}
                                className={`flex flex-col justify-between text-left p-4 sm:p-5 rounded-2xl border min-h-[125px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel ${
                                  isSelected
                                    ? 'border-caramel bg-caramel/[0.12] text-cream ring-1 ring-caramel shadow-lg shadow-caramel/10'
                                    : 'border-cream/15 bg-espresso/50 text-cream/70 hover:border-cream/35 hover:bg-cream/[0.02]'
                                }`}
                              >
                                <div className="flex items-center justify-between w-full mb-3">
                                  <span className="font-mono text-base font-semibold text-cream tracking-tight">
                                    {opt.range}
                                  </span>
                                  <div
                                    className={`h-4 w-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                                      isSelected ? 'border-caramel bg-caramel' : 'border-cream/25'
                                    }`}
                                  >
                                    {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-espresso" />}
                                  </div>
                                </div>

                                <div>
                                  <span className="block text-xs text-caramel font-medium">
                                    {opt.label}
                                  </span>
                                  <span className="mt-1.5 block text-xs text-cream/60 leading-relaxed font-light">
                                    {opt.desc}
                                  </span>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                        {errors.investment && (
                          <p id="error-investment" role="alert" className="mt-2 text-[11px] text-caramel-light font-light">
                            {errors.investment}
                          </p>
                        )}
                      </fieldset>

                      {/* Step 2 Actions */}
                      <div className="pt-6 flex items-center justify-between border-t border-cream/10">
                        <button
                          type="button"
                          onClick={handleBack}
                          className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-cream/20 px-6 text-xs uppercase tracking-[0.16em] text-cream/75 hover:border-cream/40 hover:text-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
                        >
                          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Back</span>
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-caramel px-8 text-xs font-semibold uppercase tracking-[0.18em] text-espresso transition-colors hover:bg-caramel-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
                        >
                          <span>Continue</span>
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Format, Experience & Notes */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        {/* Format Preference Fieldset */}
                        <fieldset
                          role="radiogroup"
                          aria-labelledby="legend-format"
                          aria-describedby={errors.format ? 'error-format' : undefined}
                          className="border-0 p-0 m-0"
                        >
                          <legend id="legend-format" className="block text-[10px] uppercase tracking-[0.22em] text-cream/75 mb-2.5">
                            Proposed Format <span className="text-caramel" aria-hidden="true">*</span>
                          </legend>
                          <div className="space-y-2.5">
                            {FORMAT_OPTIONS.map((opt, idx) => {
                              const isSelected = form.format === opt.id;
                              const Icon = opt.icon;
                              return (
                                <button
                                  type="button"
                                  key={opt.id}
                                  id={`radio-format-${opt.id}`}
                                  role="radio"
                                  aria-checked={isSelected}
                                  tabIndex={isSelected || (!form.format && idx === 0) ? 0 : -1}
                                  onClick={() => updateField('format', opt.id)}
                                  onKeyDown={(e) => handleRadioKeyDown(e, FORMAT_OPTIONS, idx, 'format')}
                                  className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel ${
                                    isSelected
                                      ? 'border-caramel bg-caramel/10 ring-1 ring-caramel text-cream'
                                      : 'border-cream/15 bg-espresso/40 text-cream/70 hover:border-cream/30 hover:bg-cream/[0.02]'
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <Icon className="h-4 w-4 text-caramel shrink-0" aria-hidden="true" />
                                    <div>
                                      <span className="text-xs font-medium text-cream block">{opt.title}</span>
                                      <span className="text-[10px] text-cream/60">{opt.size}</span>
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
                          {errors.format && (
                            <p id="error-format" role="alert" className="mt-1.5 text-[11px] text-caramel-light font-light">
                              {errors.format}
                            </p>
                          )}
                        </fieldset>

                        {/* Hospitality Background Fieldset */}
                        <fieldset
                          role="radiogroup"
                          aria-labelledby="legend-experience"
                          aria-describedby={errors.experience ? 'error-experience' : undefined}
                          className="border-0 p-0 m-0"
                        >
                          <legend id="legend-experience" className="block text-[10px] uppercase tracking-[0.22em] text-cream/75 mb-2.5">
                            Hospitality Background <span className="text-caramel" aria-hidden="true">*</span>
                          </legend>
                          <div className="space-y-2.5">
                            {EXPERIENCE_OPTIONS.map((opt, idx) => {
                              const isSelected = form.experience === opt.id;
                              return (
                                <button
                                  type="button"
                                  key={opt.id}
                                  id={`radio-experience-${opt.id}`}
                                  role="radio"
                                  aria-checked={isSelected}
                                  tabIndex={isSelected || (!form.experience && idx === 0) ? 0 : -1}
                                  onClick={() => updateField('experience', opt.id)}
                                  onKeyDown={(e) => handleRadioKeyDown(e, EXPERIENCE_OPTIONS, idx, 'experience')}
                                  className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel ${
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
                          {errors.experience && (
                            <p id="error-experience" role="alert" className="mt-1.5 text-[11px] text-caramel-light font-light">
                              {errors.experience}
                            </p>
                          )}
                        </fieldset>
                      </div>

                      {/* Additional Message */}
                      <div>
                        <label
                          htmlFor="franchise-message"
                          className="block text-[10px] uppercase tracking-[0.2em] text-cream/75 mb-2"
                        >
                          Additional Notes or Property Coordinates (Optional)
                        </label>
                        <textarea
                          id="franchise-message"
                          name="message"
                          rows={3}
                          maxLength={1000}
                          value={form.message}
                          onChange={(e) => updateField('message', e.target.value)}
                          placeholder="Share details regarding your site, partner background, or target launch timeline (max 1000 characters)..."
                          className="w-full rounded-xl border border-cream/15 bg-espresso/80 p-3.5 text-sm text-cream placeholder:text-cream/55 transition-colors focus:border-caramel focus:outline-none focus:ring-2 focus:ring-caramel"
                        />
                        <div className="mt-1 text-right text-[10px] text-cream/60">
                          {form.message.length} / 1000
                        </div>
                      </div>

                      {/* Final Step Actions */}
                      <div className="pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-cream/10">
                        <button
                          type="button"
                          onClick={handleBack}
                          className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-cream/20 px-6 text-xs uppercase tracking-[0.16em] text-cream/75 hover:border-cream/40 hover:text-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
                        >
                          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Back</span>
                        </button>
                        <button
                          type="submit"
                          className="inline-flex h-12 items-center justify-center gap-3 rounded-full bg-caramel px-8 text-xs font-semibold uppercase tracking-[0.2em] text-espresso transition-colors hover:bg-caramel-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
                        >
                          <span>Prepare Inquiry Dossier</span>
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </div>

                      <p className="text-[11px] text-cream/60 font-light leading-relaxed">
                        Nothing is sent until you choose to email us. This concept form keeps your details in this browser and opens a pre-filled message.
                      </p>
                    </div>
                  )}

                </form>
              )}
            </div>
          </div>

          {/* Column B: Live Dossier Summary (order-2 on mobile, lg:order-1) */}
          <div className="order-2 lg:order-1 lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            
            <div className="relative overflow-hidden rounded-2xl border border-cream/15 bg-espresso-surface p-7 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between border-b border-cream/10 pb-5">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-caramel font-semibold block">
                    Inquiry Preview
                  </span>
                  <span className="text-xs font-mono text-cream/70">
                    {submitted ? referenceId : `STEP 0${currentStep} IN PROGRESS`}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cream/20 bg-cream/[0.04] px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-cream/75">
                  {submitted ? 'Draft Ready' : 'In Progress'}
                </span>
              </div>

              {/* Dossier Field Feed */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-cream/60 uppercase tracking-[0.16em] text-[10px]">
                    Applicant Name
                  </span>
                  <span className={`font-medium truncate max-w-[20ch] ${form.name.trim() ? 'text-cream' : 'text-cream/35'}`}>
                    {form.name.trim() || '—'}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-cream/60 uppercase tracking-[0.16em] text-[10px]">
                    Target City
                  </span>
                  <span className={`font-medium truncate max-w-[20ch] ${form.city.trim() ? 'text-cream' : 'text-cream/35'}`}>
                    {form.city.trim() || '—'}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-cream/60 uppercase tracking-[0.16em] text-[10px]">
                    Property Status
                  </span>
                  <span className={`text-[11px] ${form.property ? 'text-cream/90' : 'text-cream/35'}`}>
                    {selectedProperty}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-cream/60 uppercase tracking-[0.16em] text-[10px]">
                    Indicative Capital
                  </span>
                  <span className={`font-mono text-[11px] ${form.investment ? 'text-cream' : 'text-cream/35'}`}>
                    {selectedInvestment}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-cream/60 uppercase tracking-[0.16em] text-[10px]">
                    Preferred Format
                  </span>
                  <span className={`text-[11px] truncate max-w-[22ch] ${form.format ? 'text-cream/90' : 'text-cream/35'}`}>
                    {selectedFormat}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-cream/60 uppercase tracking-[0.16em] text-[10px]">
                    Experience
                  </span>
                  <span className={`text-[11px] truncate max-w-[22ch] ${form.experience ? 'text-cream/90' : 'text-cream/35'}`}>
                    {selectedExperience}
                  </span>
                </div>
              </div>

              {/* Honest Trust & Privacy Notice */}
              <div className="mt-6 border-t border-cream/10 pt-5 text-xs text-cream/60 space-y-2.5">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="h-4 w-4 text-caramel shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Confidential inquiry; we can discuss an NDA if needed.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-caramel shrink-0 mt-0.5" aria-hidden="true" />
                  <span>We aim to review qualified inquiries within 2 business days.</span>
                </div>
              </div>
            </div>

            {/* Expansion Desk Contact Box */}
            <div className="rounded-xl border border-cream/10 bg-cream/[0.02] p-5 text-xs">
              <span className="text-[10px] uppercase tracking-[0.22em] text-cream/60 block mb-1">
                Franchise Desk · Delhi NCR
              </span>
              <a
                href="mailto:hello@ammyscoffee.com"
                className="font-medium text-caramel hover:text-caramel-light transition-colors block text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-caramel"
              >
                hello@ammyscoffee.com
              </a>
              <span className="text-[11px] text-cream/60 block mt-1">
                Inquiries reviewed by Ammy&apos;s Coffee management team.
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
