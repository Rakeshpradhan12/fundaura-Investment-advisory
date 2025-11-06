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
export type Pms = {
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
  pms: Pms[];
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
    'Wealth Management',
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
    {
      code: '03',
      name: '10 Karat',
      risk: 'LOW',
      type: 'Quarterly, Annually',
      min: '₹2,00,000',
      allocation: 'Equity & Derivatives: 20%, Fixed Income Security: 80%',
      lockIn: '12 Months',
      withdrawal: 'Quarterly, Annually',
      hurdleRate: '10%',
      charges: { amc: '1%', performance: '25%', exit: '1%' }

    },
  ],

  pms: [
    {
      code: '01',
      name: 'Ruby',
      risk: 'HIGH',
      type: 'Annually',
      min: '₹40,00,000',
      allocation: 'Mutual Funds, Equity & Derivatives: 60-70%, Fixed Income Security: 20-25%, Others: 10% - 15%',
      lockIn: '12 Months',
      withdrawal: 'Annually',
      hurdleRate: '18%',
      charges: { amc: '2%', performance: '35%', exit: '1%' }
    },
    {
      code: '02',
      name: 'Sapphire',
      risk: 'MEDIUM',
      type: 'Annually',
      min: '₹25,00,000',
      allocation: 'Mutual Funds,Equity & Derivatives: 50-60%, Fixed Income Security: 30-40%, Others: 5% - 10%',
      lockIn: '12 Months',
      withdrawal: 'Annually',
      hurdleRate: '14%',
      charges: { amc: '1.5%', performance: '30%', exit: '1%' }

    },
    {
      code: '03',
      name: 'Emerald',
      risk: 'LOW',
      type: 'Annually',
      min: '₹15,00,000',
      allocation: 'Mutual Funds,Equity & Derivatives: 25% - 30%, Fixed Income Security: 65% - 70%, Others: 5%',
      lockIn: '12 Months',
      withdrawal: 'Annually',
      hurdleRate: '8%',
      charges: { amc: '1%', performance: '25%', exit: '1%' }

    },
  ],


  kpis: [
    { label: 'Years of Experience', value: '14+' },
    { label: 'Customer Satisfaction', value: '100%' }
  ],
  pricing: [
    { name: 'Standard', price: '₹2,999/mo', features: ['Basic signals', 'Email support', 'Monthly summary'] },
    { name: 'Ultra ', price: '₹4,999/mo', features: ['Priority alerts', 'Phone support', 'Weekly review call'] },
    { name: 'Max ', price: '₹6,999/mo', features: ['Personalized Support', 'Expert Analysis'] },
    { name: 'Custom', price: '₹7,999/mo', features: ['Custom strategies', 'Dedicated RM', 'Detailed reporting'] }
  ],
  social: [
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'LinkedIn', href: '#' }
  ]
};