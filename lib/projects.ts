export type ClientType = 'Residential' | 'Commercial' | 'Industrial'

export interface Project {
  id: string
  slug: string
  title: string
  location: string
  county: string
  clientType: ClientType
  systemSize: string
  description: string
  challenge: string
  solution: string
  outcomes: string[]
  image: string
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'nairobi-villa-3kw',
    title: 'Nairobi Villa Residential System',
    location: 'Karen, Nairobi',
    county: 'Nairobi',
    clientType: 'Residential',
    systemSize: '3kW',
    description:
      'A complete 3kW solar installation for a 4-bedroom villa in Karen, Nairobi. The system handles all critical household loads including security systems, lighting, and refrigeration.',
    challenge:
      'The client was experiencing frequent KPLC outages lasting 6–8 hours daily, disrupting work-from-home operations and spoiling refrigerated food.',
    solution:
      'We installed an 8-panel monocrystalline system with a 5kW hybrid inverter and 10kWh lithium battery bank. The hybrid setup allows seamless switching between grid, solar, and battery with zero interruption.',
    outcomes: [
      '85% reduction in monthly electricity bill',
      'Zero downtime during grid outages',
      'System pays for itself in under 4 years',
      '5-year performance warranty provided',
    ],
    image: '/images/project-nairobi-villa.jpg',
  },
  {
    id: '2',
    slug: 'mombasa-hotel-50kw',
    title: 'Mombasa Boutique Hotel',
    location: 'Nyali, Mombasa',
    county: 'Mombasa',
    clientType: 'Commercial',
    systemSize: '50kW',
    description:
      'A 50kW rooftop solar system for a 40-room boutique hotel in Nyali, reducing operating costs and aligning with the hotel\'s eco-tourism branding.',
    challenge:
      'High electricity bills were eating 18% of the hotel\'s monthly revenue. The coastal location also suffered from unstable grid supply during peak tourism season.',
    solution:
      'We designed a 50kW grid-tied system with a 30kWh battery buffer. The system is monitored remotely via cloud dashboard, with automated alerts for performance anomalies.',
    outcomes: [
      'KES 180,000 saved monthly in electricity costs',
      '"Green Certified" status achieved',
      'Uninterrupted power during load-shedding',
      'Carbon footprint reduced by 42 tonnes CO₂/year',
    ],
    image: '/images/project-mombasa-hotel.jpg',
  },
  {
    id: '3',
    slug: 'kisumu-school-15kw',
    title: 'Kisumu Primary School Installation',
    location: 'Kisumu CBD',
    county: 'Kisumu',
    clientType: 'Commercial',
    systemSize: '15kW',
    description:
      'A 15kW solar system powering a 600-pupil primary school, covering computer labs, lighting, and administrative offices.',
    challenge:
      'The school\'s computer lab could only be used 3 hours per day due to unreliable grid power, affecting digital literacy programmes.',
    solution:
      'Installed 15kW of rooftop solar with a dedicated 20kWh battery bank sized for full school-day operation. The computer lab now runs entirely on clean solar energy.',
    outcomes: [
      'Computer lab operates full school day (8 hrs)',
      '100% solar-powered digital literacy programme',
      'KES 60,000/month in electricity savings',
      'Used as an educational model for students',
    ],
    image: '/images/project-kisumu-school.jpg',
  },
  {
    id: '4',
    slug: 'nakuru-farm-water-pump',
    title: 'Nakuru Farm Solar Pumping System',
    location: 'Nakuru Rural',
    county: 'Nakuru',
    clientType: 'Industrial',
    systemSize: '7.5kW',
    description:
      'A solar-powered water pumping system for a 200-acre mixed farm, replacing a diesel pump and enabling irrigation across the entire property.',
    challenge:
      'Diesel fuel costs for irrigation were unsustainable at KES 45,000/month. Fuel shortages also caused crop losses during dry seasons.',
    solution:
      'We installed a 7.5kW solar pump system with variable frequency drive (VFD), delivering water at up to 20,000 litres/hour from a 60m borehole depth.',
    outcomes: [
      'Diesel costs eliminated completely',
      'Irrigation reliability increased to 99.9%',
      'Crop yield increased by 30%',
      'System ROI achieved in 14 months',
    ],
    image: '/images/project-nakuru-farm.jpg',
  },
  {
    id: '5',
    slug: 'eldoret-clinic-8kw',
    title: 'Eldoret Medical Clinic',
    location: 'Eldoret Town',
    county: 'Uasin Gishu',
    clientType: 'Commercial',
    systemSize: '8kW',
    description:
      'Critical power backup for a busy medical clinic, ensuring medical equipment, refrigeration for vaccines, and theatre lighting remain operational 24/7.',
    challenge:
      'The clinic was losing KES 30,000/month running diesel generators. Vaccine storage was at risk during extended outages, threatening patient safety.',
    solution:
      'Installed an 8kW solar system with an oversized 25kWh battery bank to provide 36 hours of backup for critical medical loads. Critical circuits are on a dedicated protected sub-panel.',
    outcomes: [
      'Zero vaccine cold-chain failures since installation',
      'Generator fuel costs reduced by 90%',
      'Critical loads protected for 36+ hours',
      'MOH compliance on power backup maintained',
    ],
    image: '/images/project-eldoret-clinic.jpg',
  },
  {
    id: '6',
    slug: 'thika-apartment-20kw',
    title: 'Thika Apartment Complex',
    location: 'Thika Town',
    county: 'Kiambu',
    clientType: 'Residential',
    systemSize: '20kW',
    description:
      'A communal 20kW solar system for a 24-unit apartment block, powering shared services and subsidising individual unit electricity costs.',
    challenge:
      'Common area electricity bills (lifts, lighting, water pumps, security) were KES 85,000/month, forcing management to increase service charge.',
    solution:
      'Designed a shared rooftop system with smart metering to attribute solar generation fairly across common services and individual units. Includes a tenant app for real-time monitoring.',
    outcomes: [
      'Service charge reduced by 40%',
      'Common area costs cut from KES 85k to KES 18k/month',
      'Smart metering providing transparent billing',
      'Property value increased by estimated 8%',
    ],
    image: '/images/project-thika-apartments.jpg',
  },
]
