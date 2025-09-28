export type Service = {
  code: string;
  name: string;
  risk: 'HIGH' | 'MEDIUM' | 'LOW';
  type: string;
  min: string;
  allocation?: string;
  lockIn?: string;
  withdrawal?: string;
  hurdleRate?: string;
  charges?: { amc: string; performance: string; exit: string };
};
export type KPI = { label: string; value: string };
export type PricingPlan = { name: string; price: string; features: string[] };

export interface SiteConfig {
  brand: string;
  domain: string;
  highlight: string;
  tagline: string;
  contact: { address1: string; address2: string; phone: string; email: string };
  sebi: { show: boolean; registrationLabel: string; registrationValue: string; complianceOfficer: string };
  nav: { label: string; href: string }[];
  servicesIntro: string;
  servicesPoints: string[];
  servicesEnd: string;
  services: Service[];
  kpis: KPI[];
  pricing: PricingPlan[];
  social: { label: string; href: string }[];
}

export const SITE: SiteConfig = {
  brand: 'FundAura',
  domain: 'fundaura.in',
  highlight: 'An IIMK Alumni Initiative',
  tagline: 'Strategic Insights. Simpler Decisions.',
  contact: {
    address1: '402, B120, Shapoorji Pallonji Complex, New Town, Kolkata – 700135',
    address2: 'ST-5, 2nd Floor, SRB Tower, Infocity, Patia, Bhubaneswar – 751021',
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
  servicesIntro: `By blending cutting-edge data analytics, predictive algorithms, and human insight, we provide end-to-end services across:`,
  servicesPoints: [
    'Fund Management',
    'Portfolio Management',
    'Investment Advisory'
  ],
  servicesEnd: `With innovation at our core and trust as our foundation, we’re not just building a platform—we’re building a new standard in wealth management.`,
  services: [
    {
      code: '01',
      name: '24 Karat',
      risk: 'HIGH',
      type: 'Quarterly, Annually',
      min: '₹10,00,000',
      allocation: 'Equity & Derivatives: 60-70%, Fixed Income Security: 30-40%',
      lockIn: '12 Months',
      withdrawal: 'Quarterly, Annually',
      hurdleRate: '24%',
      charges: { amc: '2%', performance: '35%', exit: '1%' }
    },
    {
      code: '02',
      name: '16 Karat',
      risk: 'MEDIUM',
      type: 'Quarterly, Annually',
      min: '₹5,00,000',
      allocation: 'Equity & Derivatives: 40-50%, Fixed Income Security: 50-60%',
      lockIn: '12 Months',
      withdrawal: 'Quarterly, Annually',
      hurdleRate: '16%',
      charges: { amc: '1.5%', performance: '30%', exit: '1%' }

    },
  ],


  kpis: [
    { label: 'Years of Experience', value: '14+' },
    { label: 'Customer Satisfaction', value: '100%' }
  ],
  pricing: [
    { name: 'Starter', price: '₹3,999/mo', features: ['Basic signals', 'Email support', 'Monthly summary'] },
    { name: 'Growth', price: '₹7,999/mo', features: ['Priority alerts', 'Phone support', 'Weekly review call'] },
    { name: 'Pro HNI', price: 'Custom', features: ['Custom strategies', 'Dedicated RM', 'Detailed reporting'] }
  ],
  social: [
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'LinkedIn', href: '#' }
  ]
};