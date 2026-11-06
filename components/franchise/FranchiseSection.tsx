'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';

type FormState = {
  name: string;
  phone: string;
  email: string;
  city: string;
  property: string;
  investment: string;
  experience: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  phone: '',
  email: '',
  city: '',
  property: '',
  investment: '',
  experience: '',
  message: '',
};

const fieldClass = (invalid: boolean) =>
  `mt-2 w-full border bg-espresso px-3.5 py-3 text-base text-cream placeholder:text-cream/50 transition-colors focus:outline-none focus:ring-1 focus:ring-caramel/60 sm:text-sm [color-scheme:dark] ${
    invalid ? 'border-caramel-light' : 'border-cream/15 focus:border-caramel'
  }`;

const propertyLabels: Record<string, string> = {
  'have-space': 'I have a space',
  searching: "I'm searching",
};

const investmentLabels: Record<string, string> = {
  '25-40': '₹25L–₹40L',
  '40-60': '₹40L–₹60L',
  '60-plus': '₹60L+',
};

export default function FranchiseSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {}
  );
  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (submitted) successRef.current?.focus();
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
      nextErrors.name = 'Please enter your full name.';
    }

    const digits = form.phone.replace(/\D/g, '');
    const localPhone =
      digits.length === 12 && digits.startsWith('91')
        ? digits.slice(2)
        : digits.length === 11 && digits.startsWith('0')
          ? digits.slice(1)
          : digits;

    if (!/^[6-9]\d{9}$/.test(localPhone)) {
      nextErrors.phone = 'Enter a valid 10-digit Indian mobile number.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (form.city.trim().length < 2) {
      nextErrors.city = 'Tell us your target city or location.';
    }

    if (!form.property) {
      nextErrors.property = 'Select your property status.';
    }

    if (!form.investment) {
      nextErrors.investment = 'Select an investment bracket.';
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
    requestAnimationFrame(() => {
      document.getElementById('franchise-name')?.focus();
    });
  };

  const mailtoHref = `mailto:hello@ammyscoffee.com?subject=${encodeURIComponent(
    `Franchise inquiry — ${form.name || 'New inquiry'}`
  )}&body=${encodeURIComponent(
    [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Target city: ${form.city}`,
      `Property status: ${
        propertyLabels[form.property] || 'Not provided'
      }`,
      `Investment bracket: ${
        investmentLabels[form.investment] || 'Not provided'
      }`,
      `Experience: ${form.experience || 'Not provided'}`,
      `Message: ${form.message || 'Not provided'}`,
    ].join('\n')
  )}`;

  return (
    <section
      id="franchise"
      className="relative w-full scroll-mt-24 overflow-hidden border-t border-cream/10 bg-espresso py-20 text-cream sm:py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute -right-24 top-1/3 h-[420px] w-[420px] rounded-full bg-caramel/[0.05] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="mb-3 block text-[11px] font-medium uppercase tracking-[0.3em] text-caramel sm:text-xs">
              Franchise With Us
            </span>
            <h2 className="font-serif text-[clamp(2.6rem,6vw,5rem)] font-normal leading-[0.98] tracking-[-0.03em] text-cream">
              Bring Ammy&apos;s <br />
              <span className="font-light italic text-caramel-light">
                to your city.
              </span>
            </h2>

            <p className="mt-6 max-w-[44ch] text-sm leading-7 text-cream/70">
              We&apos;re opening the next chapter of Ammy&apos;s across India. If
              you share our standard for coffee, food, and hospitality, start
              the conversation below.
            </p>

            <dl className="mt-8 space-y-4 border-t border-cream/10 pt-6">
              <div className="flex gap-4">
                <dt className="shrink-0 text-[10px] uppercase tracking-[0.22em] text-caramel">
                  01
                </dt>
                <dd className="text-sm leading-6 text-cream/70">
                  Prime flagship presence across Delhi NCR.
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="shrink-0 text-[10px] uppercase tracking-[0.22em] text-caramel">
                  02
                </dt>
                <dd className="text-sm leading-6 text-cream/70">
                  A sit-down lifestyle café — not a grab-and-go kiosk.
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="shrink-0 text-[10px] uppercase tracking-[0.22em] text-caramel">
                  03
                </dt>
                <dd className="text-sm leading-6 text-cream/70">
                  100% Arabica coffee and an artisanal kitchen.
                </dd>
              </div>
            </dl>

            <div className="mt-8">
              <p className="text-[10px] uppercase tracking-[0.22em] text-cream/60">
                Prefer email?
              </p>
              <a
                href="mailto:hello@ammyscoffee.com"
                className="mt-2 inline-block border-b border-cream/25 pb-1 text-sm text-caramel transition-colors hover:border-caramel hover:text-caramel-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-caramel/70"
              >
                hello@ammyscoffee.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border border-cream/10 bg-espresso-surface p-6 sm:p-8 lg:p-10">
              <div className="flex items-baseline justify-between gap-4 border-b border-cream/10 pb-5">
                <h3 className="font-serif text-2xl font-normal tracking-[-0.01em] text-cream">
                  Franchise Inquiry
                </h3>
                <span className="text-[10px] uppercase tracking-[0.22em] text-cream/60">
                  Expansion Team
                </span>
              </div>

              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="pt-8"
                >
                  <span className="block text-[10px] uppercase tracking-[0.24em] text-caramel">
                    Inquiry ready
                  </span>
                  <h4
                    ref={successRef}
                    tabIndex={-1}
                    className="mt-3 font-serif text-3xl font-normal tracking-[-0.02em] text-cream focus:outline-none"
                  >
                    Thank you.
                  </h4>
                  <p className="mt-3 max-w-[42ch] text-sm leading-7 text-cream/70">
                    This concept form keeps your details locally. Send them to
                    our expansion team to start the conversation.
                  </p>
                  <a
                    href={mailtoHref}
                    className="mt-6 inline-flex items-center gap-2 border-b border-cream/30 pb-1 text-[11px] uppercase tracking-[0.22em] text-cream transition-colors hover:border-caramel hover:text-caramel focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-caramel/70"
                  >
                    Email the expansion team
                  </a>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-6 block border-b border-cream/30 pb-1 text-[11px] uppercase tracking-[0.22em] text-cream transition-colors hover:border-caramel hover:text-caramel focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-caramel/70"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="pt-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="franchise-name"
                        className="text-[10px] uppercase tracking-[0.2em] text-cream/60"
                      >
                        Full name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="franchise-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={form.name}
                        onChange={(event) =>
                          updateField('name', event.target.value)
                        }
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={
                          errors.name ? 'franchise-name-error' : undefined
                        }
                        placeholder="Your name"
                        className={fieldClass(Boolean(errors.name))}
                      />
                      {errors.name ? (
                        <p
                          id="franchise-name-error"
                          className="mt-1.5 text-[11px] leading-5 text-caramel-light"
                        >
                          {errors.name}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor="franchise-phone"
                        className="text-[10px] uppercase tracking-[0.2em] text-cream/60"
                      >
                        Phone / WhatsApp <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="franchise-phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        required
                        value={form.phone}
                        onChange={(event) =>
                          updateField('phone', event.target.value)
                        }
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={
                          errors.phone ? 'franchise-phone-error' : undefined
                        }
                        placeholder="+91 98765 43210"
                        className={fieldClass(Boolean(errors.phone))}
                      />
                      {errors.phone ? (
                        <p
                          id="franchise-phone-error"
                          className="mt-1.5 text-[11px] leading-5 text-caramel-light"
                        >
                          {errors.phone}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor="franchise-email"
                        className="text-[10px] uppercase tracking-[0.2em] text-cream/60"
                      >
                        Email address <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="franchise-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={(event) =>
                          updateField('email', event.target.value)
                        }
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email ? 'franchise-email-error' : undefined
                        }
                        placeholder="you@company.com"
                        className={fieldClass(Boolean(errors.email))}
                      />
                      {errors.email ? (
                        <p
                          id="franchise-email-error"
                          className="mt-1.5 text-[11px] leading-5 text-caramel-light"
                        >
                          {errors.email}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor="franchise-city"
                        className="text-[10px] uppercase tracking-[0.2em] text-cream/60"
                      >
                        Target city / location <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="franchise-city"
                        name="city"
                        type="text"
                        autoComplete="address-level2"
                        required
                        value={form.city}
                        onChange={(event) =>
                          updateField('city', event.target.value)
                        }
                        aria-invalid={Boolean(errors.city)}
                        aria-describedby={
                          errors.city ? 'franchise-city-error' : undefined
                        }
                        placeholder="e.g. Chandigarh"
                        className={fieldClass(Boolean(errors.city))}
                      />
                      {errors.city ? (
                        <p
                          id="franchise-city-error"
                          className="mt-1.5 text-[11px] leading-5 text-caramel-light"
                        >
                          {errors.city}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor="franchise-property"
                        className="text-[10px] uppercase tracking-[0.2em] text-cream/60"
                      >
                        Commercial property <span aria-hidden="true">*</span>
                      </label>
                      <select
                        id="franchise-property"
                        name="property"
                        required
                        value={form.property}
                        onChange={(event) =>
                          updateField('property', event.target.value)
                        }
                        aria-invalid={Boolean(errors.property)}
                        aria-describedby={
                          errors.property
                            ? 'franchise-property-error'
                            : undefined
                        }
                        className={fieldClass(Boolean(errors.property))}
                      >
                        <option value="" disabled>
                          Select status
                        </option>
                        <option value="have-space">I have a space</option>
                        <option value="searching">I&apos;m searching</option>
                      </select>
                      {errors.property ? (
                        <p
                          id="franchise-property-error"
                          className="mt-1.5 text-[11px] leading-5 text-caramel-light"
                        >
                          {errors.property}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor="franchise-investment"
                        className="text-[10px] uppercase tracking-[0.2em] text-cream/60"
                      >
                        Investment capacity <span aria-hidden="true">*</span>
                      </label>
                      <select
                        id="franchise-investment"
                        name="investment"
                        required
                        value={form.investment}
                        onChange={(event) =>
                          updateField('investment', event.target.value)
                        }
                        aria-invalid={Boolean(errors.investment)}
                        aria-describedby={
                          errors.investment
                            ? 'franchise-investment-error'
                            : undefined
                        }
                        className={fieldClass(Boolean(errors.investment))}
                      >
                        <option value="" disabled>
                          Select bracket
                        </option>
                        <option value="25-40">₹25L – ₹40L</option>
                        <option value="40-60">₹40L – ₹60L</option>
                        <option value="60-plus">₹60L+</option>
                      </select>
                      {errors.investment ? (
                        <p
                          id="franchise-investment-error"
                          className="mt-1.5 text-[11px] leading-5 text-caramel-light"
                        >
                          {errors.investment}
                        </p>
                      ) : null}
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="franchise-experience"
                        className="text-[10px] uppercase tracking-[0.2em] text-cream/60"
                      >
                        Business / F&amp;B experience
                      </label>
                      <textarea
                        id="franchise-experience"
                        name="experience"
                        rows={3}
                        value={form.experience}
                        onChange={(event) =>
                          updateField('experience', event.target.value)
                        }
                        placeholder="Current business, F&B background, or anything relevant."
                        className={fieldClass(false)}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="franchise-message"
                        className="text-[10px] uppercase tracking-[0.2em] text-cream/60"
                      >
                        Additional message
                      </label>
                      <textarea
                        id="franchise-message"
                        name="message"
                        rows={3}
                        value={form.message}
                        onChange={(event) =>
                          updateField('message', event.target.value)
                        }
                        placeholder="Tell us about your plans."
                        className={fieldClass(false)}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group mt-6 inline-flex w-full items-center justify-center gap-2 bg-caramel px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.24em] text-espresso transition-colors hover:bg-caramel-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel/70 focus-visible:ring-offset-2 focus-visible:ring-offset-espresso-surface"
                  >
                    Start the Conversation
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <p className="mt-4 text-[11px] leading-5 text-cream/60">
                    We&apos;ll only use these details to respond to your
                    inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
