import type { LucideIcon } from 'lucide-react';
import { Building2, Store } from 'lucide-react';

export type FranchiseFormState = {
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

export const INITIAL_FORM: FranchiseFormState = {
  name: '',
  phone: '',
  email: '',
  city: '',
  property: '',
  investment: '',
  format: '',
  experience: '',
  message: '',
};

export type PropertyOption = {
  id: string;
  badge: string;
  title: string;
  desc: string;
};

export const PROPERTY_OPTIONS: PropertyOption[] = [
  {
    id: 'have-space',
    badge: 'Space Ready',
    title: 'Space Identified',
    desc: 'Own or leased commercial property ready for review',
  },
  {
    id: 'searching',
    badge: 'Site Search',
    title: 'Searching for Location',
    desc: 'Actively evaluating prime high-street corridors',
  },
  {
    id: 'landlord',
    badge: 'Property Host',
    title: 'Property Landlord',
    desc: 'Seeking a specialty café brand for premises',
  },
];

export type InvestmentOption = {
  id: string;
  range: string;
  label: string;
  desc: string;
};

export const INVESTMENT_OPTIONS: InvestmentOption[] = [
  {
    id: '25-40',
    range: '₹25L – ₹40L',
    label: 'Compact & Galleria',
    desc: 'Suited for galleria & commercial hub footprints',
  },
  {
    id: '40-60',
    range: '₹40L – ₹60L',
    label: 'Standard Café',
    desc: 'Suited for neighborhood high-street locations',
  },
  {
    id: '60-plus',
    range: '₹60L+',
    label: 'Flagship & Multi-Unit',
    desc: 'Suited for larger flagship or cluster opportunities',
  },
];

export type FormatOption = {
  id: string;
  title: string;
  size: string;
  desc: string;
  icon: LucideIcon;
};

export const FORMAT_OPTIONS: FormatOption[] = [
  {
    id: 'flagship',
    title: 'High-Street Café Format',
    size: 'Indicative ~1,200–2,200 sq.ft.',
    desc: 'Full kitchen + 100% Arabica espresso bar and sit-down seating',
    icon: Building2,
  },
  {
    id: 'galleria',
    title: 'Galleria & Commercial Format',
    size: 'Indicative ~800–1,400 sq.ft.',
    desc: 'All-day coffee bar, bakery showcase & light kitchen',
    icon: Store,
  },
];

export type ExperienceOption = {
  id: string;
  label: string;
};

export const EXPERIENCE_OPTIONS: ExperienceOption[] = [
  { id: 'experienced', label: 'Experienced F&B Operator' },
  { id: 'first-time', label: 'First-Time Hospitality Investor' },
  { id: 'group', label: 'Multi-Brand Hospitality Group' },
];

export function getPropertyTitle(id: string): string {
  return PROPERTY_OPTIONS.find((opt) => opt.id === id)?.title || 'Not selected';
}

export function getInvestmentRange(id: string): string {
  return INVESTMENT_OPTIONS.find((opt) => opt.id === id)?.range || 'Not selected';
}

export function getFormatTitle(id: string): string {
  return FORMAT_OPTIONS.find((opt) => opt.id === id)?.title || 'Not selected';
}

export function getExperienceLabel(id: string): string {
  return EXPERIENCE_OPTIONS.find((opt) => opt.id === id)?.label || 'Not selected';
}
