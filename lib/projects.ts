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
    slug: 'nairobi-residential-rooftop-array',
    title: 'Nairobi Residential Rooftop Array',
    location: 'Nairobi',
    county: 'Nairobi',
    clientType: 'Residential',
    systemSize: '6.6kW',
    description:
      'Two-string rooftop PV array installed on a tiled residential roof for daytime consumption and battery charging.',
    challenge:
      'The home needed lower daytime electricity bills without compromising roof integrity or aesthetics.',
    solution:
      'We implemented a low-profile rail-mount design with balanced string layout and protection hardware matched to the inverter MPPT window.',
    outcomes: [
      'Strong daytime load coverage',
      'Reduced monthly utility spend',
      'Clean cable routing and roof-safe installation',
      'Expandable for future battery integration',
    ],
    image: '/images/projects/residential-rooftop-nairobi.jpg',
  },
  {
    id: '2',
    slug: 'ground-mount-commercial-array',
    title: 'Ground-Mount Commercial Array',
    location: 'Kiambu outskirts',
    county: 'Kiambu',
    clientType: 'Commercial',
    systemSize: '18kW',
    description:
      'Ground-mounted PV field designed for a mixed commercial/agricultural site with open land availability.',
    challenge:
      'The site had sufficient land but needed a robust structure and serviceable layout for long-term maintenance.',
    solution:
      'We used elevated steel mounting, orientation tuning, and accessible string grouping for easier cleaning and servicing.',
    outcomes: [
      'High daytime generation consistency',
      'Improved serviceability and cleaning access',
      'Reduced diesel/generator dependence',
      'Future-ready expansion footprint',
    ],
    image: '/images/projects/ground-mount-commercial.jpg',
  },
  {
    id: '3',
    slug: 'large-rooftop-kiambu-array',
    title: 'Large Rooftop PV in Kiambu',
    location: 'Ruiru',
    county: 'Kiambu',
    clientType: 'Residential',
    systemSize: '12kW',
    description:
      'Large-format rooftop array distributed across a broad roof surface to maximize generation area.',
    challenge:
      'Client required high production capacity while preserving access corridors and safe roof walk paths.',
    solution:
      'Panel blocks were arranged in two aligned rows with maintenance spacing and optimized tilt for annual yield.',
    outcomes: [
      'Higher solar offset for household consumption',
      'Improved inverter loading throughout the day',
      'Cleaner roof zoning for operations and maintenance',
      'Prepared for hybrid backup integration',
    ],
    image: '/images/projects/large-rooftop-kiambu.jpg',
  },
  {
    id: '4',
    slug: 'residential-water-heater-installation',
    title: 'Residential 300L Tube Water Heater',
    location: 'Nairobi metropolitan',
    county: 'Nairobi',
    clientType: 'Residential',
    systemSize: '300L',
    description:
      'On-roof installation of a 300L evacuated tube water heating unit for daily household hot-water demand.',
    challenge:
      'Client needed a reliable hot-water solution with minimal electrical heating backup use.',
    solution:
      'We installed and commissioned a properly inclined collector with insulated plumbing and secure roof anchoring.',
    outcomes: [
      'Consistent daytime hot water availability',
      'Lower water-heating electricity costs',
      'Safe and stable roof-mounted structure',
      'Improved household comfort and reliability',
    ],
    image: '/images/projects/water-heater-installation.jpg',
  },
  {
    id: '5',
    slug: 'multi-water-heater-bank-installation',
    title: 'Multi-Unit Water Heater Bank',
    location: 'Nairobi',
    county: 'Nairobi',
    clientType: 'Commercial',
    systemSize: '3 x 300L',
    description:
      'Three-unit evacuated tube heater bank configured for higher simultaneous hot-water demand.',
    challenge:
      'The facility had peak hot-water demand above single-tank capacity and needed staged supply reliability.',
    solution:
      'We deployed multiple roof units with balanced plumbing lines and commissioning checks for flow distribution.',
    outcomes: [
      'Higher hot-water delivery capacity',
      'Redundancy through multi-unit architecture',
      'Reduced electrical heating dependence',
      'Scalable layout for future demand growth',
    ],
    image: '/images/projects/multi-water-heater-bank.jpg',
  },
  {
    id: '6',
    slug: 'elevated-solar-canopy-installation',
    title: 'Elevated Solar Canopy Structure',
    location: 'Nakuru corridor',
    county: 'Nakuru',
    clientType: 'Industrial',
    systemSize: '20kW',
    description:
      'Elevated steel canopy supporting panel strings over service equipment and protected ground area.',
    challenge:
      'Ground constraints required a raised structure that preserved below-space utility access.',
    solution:
      'We fabricated and erected a steel canopy frame with cable-ready routing and maintenance clearance underneath.',
    outcomes: [
      'Efficient use of constrained footprint',
      'Protected service area below array',
      'Improved access for inspections',
      'Strong platform for phased expansion',
    ],
    image: '/images/projects/elevated-solar-canopy.jpg',
  },
]
