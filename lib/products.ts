export type ProductCategory = 'residential' | 'commercial' | 'water-heater' | 'accessory'

export interface Product {
  id: string
  slug: string
  name: string
  category: ProductCategory
  shortDesc: string
  fullDesc: string
  specs: Record<string, string>
  featured: boolean
  image: string
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'evacuated-tube-non-pressurized-200l',
    name: 'Evacuated Tube Non-Pressurized 200L',
    category: 'water-heater',
    shortDesc: 'Classic thermosiphon water heater with feeder cup (small tank). Available in galvanized or stainless tank options.',
    fullDesc:
      'This non-pressurized evacuated tube system is the most common domestic solar water heater setup. You can identify it by the small feeder cup/tank mounted on top. It is gravity-fed and works best where there is reliable overhead water supply. We install both galvanized (white) and stainless variants depending on budget and corrosion requirements.',
    specs: {
      Type: 'Evacuated Tube (Non-Pressurized)',
      Capacity: '200 Litres',
      'Tube Count': '20 Tubes',
      Tank: 'Galvanized or Stainless',
      Feed: 'Gravity / Overhead Tank',
      Pressure: 'Low pressure outlets',
      'Best For': 'Homes and apartments',
      Warranty: '5 Years (tank body)',
    },
    featured: true,
    image: '/images/products/non-pressurized-200.jpg',
  },
  {
    id: '2',
    slug: 'evacuated-tube-pressurized-300l',
    name: 'Evacuated Tube Pressurized 300L',
    category: 'water-heater',
    shortDesc: 'Pressurized tube system without top feeder cup. Better flow and pressure at shower mixers and modern bathroom fittings.',
    fullDesc:
      'This pressurized tube system is designed for stronger hot-water delivery pressure and cleaner integration with modern plumbing fixtures. Unlike the non-pressurized model, it does not have the small feeder cup on top. Available in 200L, 300L, and 350L configurations with galvanized (white) or stainless tank options.',
    specs: {
      Type: 'Evacuated Tube (Pressurized)',
      Capacity: '300 Litres',
      'Tube Count': '30 Tubes',
      Tank: 'Galvanized or Stainless',
      Feed: 'Mains / pressurized plumbing',
      Pressure: 'High pressure support',
      'Best For': 'Homes, guest wings, rentals',
      Warranty: '5 Years (tank body)',
    },
    featured: true,
    image: '/images/products/pressurized-300.jpg',
  },
  {
    id: '3',
    slug: 'flat-plate-indirect-300l',
    name: 'Flat Plate Indirect Pressurized 300L',
    category: 'water-heater',
    shortDesc: 'Indirect flat plate system using glycol loop. Recommended for salty-water and high-corrosion zones (especially coastal areas).',
    fullDesc:
      'The indirect flat plate system uses a heat-transfer fluid (glycol) between collector and tank circuit, making it ideal for areas with salty or aggressive water chemistry. This is preferred for coastal installations where long-term reliability matters most. Direct and indirect flat-plate families are physically similar, but indirect units are specified for harsh water conditions.',
    specs: {
      Type: 'Flat Plate (Indirect)',
      Capacity: '300 Litres',
      Collectors: '2 Flat Plates',
      Fluid: 'Closed-loop Glycol circuit',
      Tank: 'Stainless Steel',
      UseCase: 'Salty/coastal water areas',
      Pressure: 'Pressurized delivery',
      Warranty: '5 Years (tank body)',
    },
    featured: true,
    image: '/images/products/flat-plate-system.jpg',
  },
  {
    id: '4',
    slug: 'hybrid-inverter-system-3kva-to-10kva',
    name: 'Hybrid Inverter System (3kVA-10kVA)',
    category: 'accessory',
    shortDesc: 'Wall-mounted hybrid inverter installations for lighting and mixed domestic/commercial backup loads.',
    fullDesc:
      'Our deployed inverter installations use hybrid architecture with automatic source switching between PV, battery, and grid/generator. Typical sizing starts at 3kVA for essential loads and scales up through 5kVA, 8kVA, and 10kVA depending on customer load profile.',
    specs: {
      Topology: 'Hybrid inverter',
      'Power Options': '3kVA, 5kVA, 8kVA, 10kVA',
      AC: '230V / 50Hz',
      Battery: '48V systems',
      MPPT: 'Integrated solar charge control',
      Monitoring: 'Display + remote support ready',
      'Best For': 'Lighting + essential load backup',
      Warranty: '3 Years',
    },
    featured: false,
    image: '/images/products/hybrid-inverter-system.png',
  },
  {
    id: '5',
    slug: 'monocrystalline-solar-panels-400w-to-720w',
    name: 'Monocrystalline Solar Panels (400W-720W)',
    category: 'residential',
    shortDesc: 'Tier-1 style panel arrays deployed on rooftop and ground-mount frames for homes, farms, and institutions.',
    fullDesc:
      'We supply and install monocrystalline PV modules across a broad wattage band depending on site layout and inverter design. Typical field installations run from 400W up to 720W module classes, configured in strings to match MPPT windows and daily energy targets.',
    specs: {
      'Panel Range': '400W to 720W',
      CellType: 'Monocrystalline',
      Mounting: 'Rooftop / Ground mount',
      UseCase: 'Residential and commercial arrays',
      Yield: 'Site-dependent irradiation profile',
      Warranty: '25-Year performance (panel OEM)',
      'Best For': 'Energy bill reduction + backup charging',
      Note: 'Exact panel selected per project design',
    },
    featured: false,
    image: '/images/products/monocrystalline-panel-array.png',
  },
  {
    id: '6',
    slug: 'lithium-battery-bank-5kwh-to-10kwh',
    name: 'Lithium Battery Bank (5.12kWh / 10.24kWh)',
    category: 'accessory',
    shortDesc: 'Scalable wall-mount lithium banks commonly paired with hybrid inverter systems.',
    fullDesc:
      'Our battery installations use modular lithium units, usually in 5.12kWh or 10.24kWh blocks, stacked according to backup autonomy targets and inverter charging limits. Typical applications include evening load support, outage protection, and PV self-consumption optimization.',
    specs: {
      Capacity: '5.12kWh / 10.24kWh modules',
      Chemistry: 'Lithium (LiFePO4 class)',
      Voltage: '48V platform',
      'Cycle Life': 'Long-cycle storage class',
      Scalability: 'Parallel bank expansion supported',
      BMS: 'Built-in',
      'Best For': 'Evening backup and outage resilience',
      Warranty: '5 Years',
    },
    featured: false,
    image: '/images/products/lithium-battery-bank.png',
  },
]
