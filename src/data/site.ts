export type Service = { code: string; name: string; risk: 'HIGH' | 'MODERATE' | 'LOW'; type: string; min: string };
export type KPI = { label: string; value: string };
export type PricingPlan = { name: string; price: string; features: string[] };

export interface SiteConfig {
  brand: string;
  domain: string;
  highlight: string;
  tagline: string;
  contact: { address: string; phone: string; email: string };
  sebi: { show: boolean; registrationLabel: string; registrationValue: string; complianceOfficer: string };
  nav: { label: string; href: string }[];
  servicesIntro: string;
  services: Service[];
  kpis: KPI[];
  pricing: PricingPlan[];
  social: { label: string; href: string }[];
}

export const SITE: SiteConfig = {
  brand: 'FundAura by Riocap',
  domain: 'fundaura.in',
  highlight: 'An IIM Alumni Initiative',
  tagline: 'Strategic Insights. Simpler Decisions.',
  contact: {
    address: '402, B120, sapporji pallonji complex, new town, kolkata 700135',
    phone: '+91-88200 34446',
    email: 'Riokapital@gmail.com'
  },
  sebi: {
    show: true,
    registrationLabel: 'SEBI Registration No.',
    registrationValue: 'INA00XXXXXXX',
    complianceOfficer: 'Compliance Officer: (Name)'
  },
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
    { label: 'Careers', href: '#careers' },
    { label: 'Complaint Board', href: '#complaint' }
  ],
  servicesIntro: 'Explore our core offerings. Risk level and horizon are indicative—final suitability depends on your profile and risk assessment.',
  services: [
    { code: '01', name: 'Stock Option', risk: 'HIGH', type: 'Intraday / Ultra Short Term', min: '₹50,000' },
    { code: '02', name: 'Option Ultra', risk: 'HIGH', type: 'Intraday / Ultra Short Term', min: '₹2,00,000' },
    { code: '03', name: 'Stock Cash', risk: 'MODERATE', type: 'Short to Medium Term', min: '₹2,00,000' },
    { code: '04', name: 'Cash Ultra', risk: 'MODERATE', type: 'Short to Medium Term', min: '₹2,00,000' },
    { code: '05', name: 'Stock Future', risk: 'HIGH', type: 'Intraday / Ultra Short Term', min: '₹2,00,000' }
  ],
  kpis: [
    { label: 'Years of Experience', value: '10+' },
    { label: 'Customer Satisfaction', value: '99%' }
  ],
  pricing: [
    { name: 'Starter', price: '₹4,999/mo', features: ['Basic signals', 'Email support', 'Monthly summary'] },
    { name: 'Growth', price: '₹9,999/mo', features: ['Priority alerts', 'Phone support', 'Weekly review call'] },
    { name: 'Pro HNI', price: 'Custom', features: ['Custom strategies', 'Dedicated RM', 'Detailed reporting'] }
  ],
  social: [
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'LinkedIn', href: '#' }
  ]
};