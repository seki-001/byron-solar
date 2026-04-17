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
    slug: '3kw-home-solar-system',
    name: '3kW Home Solar System',
    category: 'residential',
    shortDesc: 'Perfect for small to medium households. Covers essential loads including lighting, TV, and fridge.',
    fullDesc:
      'Our 3kW Home Solar System is the ideal starting point for Kenyan homeowners looking to slash electricity bills and gain independence from KPLC outages. The system includes high-efficiency monocrystalline panels, a pure sine wave inverter, and deep-cycle battery storage sized for overnight coverage. Installation is completed within one day by our certified technicians.',
    specs: {
      'System Size': '3kW',
      'Panel Type': 'Monocrystalline',
      'No. of Panels': '8 × 375W',
      'Inverter Type': 'Hybrid (Grid-Tie + Off-Grid)',
      'Battery Capacity': '10kWh Lithium',
      'Daily Output': '12–15 kWh',
      'Warranty': '5 Years (System) / 25 Years (Panels)',
      'Best For': 'Small–medium homes',
    },
    featured: true,
    image: '/images/product-3kw-home.jpg',
  },
  {
    id: '2',
    slug: '10kw-business-solar-system',
    name: '10kW Business Solar System',
    category: 'commercial',
    shortDesc: 'Designed for SMEs, offices, and retail outlets. Significant reduction in commercial power bills.',
    fullDesc:
      'The 10kW Business Solar System delivers reliable, clean energy for small-to-medium enterprises across Kenya. Grid-tied with battery backup, it ensures your operations continue even during grid outages. Includes remote monitoring via mobile app and a dedicated account manager for after-sales support.',
    specs: {
      'System Size': '10kW',
      'Panel Type': 'Monocrystalline PERC',
      'No. of Panels': '20 × 500W',
      'Inverter Type': 'Grid-Tie with Backup',
      'Battery Capacity': '20kWh Lithium',
      'Daily Output': '40–50 kWh',
      'Monitoring': 'Remote App Monitoring',
      'Warranty': '5 Years (System) / 25 Years (Panels)',
    },
    featured: true,
    image: '/images/product-10kw-business.jpg',
  },
  {
    id: '3',
    slug: 'solar-water-heater-200l',
    name: 'Solar Water Heater 200L',
    category: 'water-heater',
    shortDesc: 'Pressurised solar water heater for domestic and light commercial use. No electricity required.',
    fullDesc:
      'Our 200L pressurised solar water heater uses vacuum tube collector technology to heat water efficiently even on cloudy days. It integrates with your existing plumbing and includes an electric backup element for extended low-sun periods. Ideal for families of 4–6 and guest houses.',
    specs: {
      'Tank Capacity': '200 Litres',
      'Collector Type': 'Evacuated Tube',
      'No. of Tubes': '20',
      'Working Pressure': '0.6 MPa',
      'Max Temperature': '95°C',
      'Backup Element': '2kW Electric',
      'Warranty': '5 Years Tank / 2 Years Collector',
      'Best For': 'Families of 4–6',
    },
    featured: true,
    image: '/images/product-water-heater.jpg',
  },
  {
    id: '4',
    slug: 'hybrid-inverter-5kw',
    name: 'Hybrid Inverter 5kW',
    category: 'accessory',
    shortDesc: 'Multi-mode inverter supporting grid, solar, and battery. Seamless switching with zero downtime.',
    fullDesc:
      'The 5kW Hybrid Inverter is the brain of any modern solar installation. It intelligently manages power flow between solar panels, battery bank, the grid, and your loads. Features include programmable load priorities, AC/DC coupling compatibility, and a built-in charge controller. Compatible with lithium and lead-acid batteries.',
    specs: {
      'Rated Power': '5kW',
      'Input Voltage (PV)': '120–450V DC',
      'AC Output': '230V / 50Hz',
      'Battery Voltage': '48V',
      'Efficiency': '97.5%',
      'MPPT Channels': '2',
      'Display': 'LCD + Mobile App',
      'Warranty': '3 Years',
    },
    featured: false,
    image: '/images/product-inverter.jpg',
  },
  {
    id: '5',
    slug: 'solar-street-light-kit',
    name: 'Solar Street Light Kit',
    category: 'accessory',
    shortDesc: 'All-in-one solar street light for estates, compounds, and rural roads. No wiring required.',
    fullDesc:
      'Our Solar Street Light Kit is a complete, self-contained lighting solution for estates, security lighting, and rural electrification. Each unit includes an integrated solar panel, lithium battery, LED lamp (120W equivalent), and dusk-to-dawn sensor. Installation takes under 30 minutes with no trenching or wiring.',
    specs: {
      'LED Power': '60W',
      'Solar Panel': '80W Monocrystalline',
      'Battery': '30Ah LiFePO4',
      'Lighting Hours': '10–12 hrs/night',
      'Pole Height': '5–8m',
      'Control': 'PIR + Dusk-to-Dawn Sensor',
      'IP Rating': 'IP65',
      'Warranty': '2 Years',
    },
    featured: false,
    image: '/images/product-street-light.jpg',
  },
  {
    id: '6',
    slug: 'battery-storage-unit-5kwh',
    name: 'Battery Storage Unit 5kWh',
    category: 'accessory',
    shortDesc: 'Stackable LiFePO4 battery for solar storage. Safe, long-cycle, and compatible with most inverters.',
    fullDesc:
      'The 5kWh LiFePO4 Battery Storage Unit provides reliable, long-lasting energy storage for your solar system. LiFePO4 chemistry offers superior safety, over 6,000 charge cycles, and operates efficiently in Kenya\'s warm climate. Units are stackable up to 30kWh and compatible with most hybrid inverters on the market.',
    specs: {
      'Capacity': '5kWh',
      'Chemistry': 'LiFePO4',
      'Nominal Voltage': '48V',
      'Cycle Life': '>6,000 cycles (80% DOD)',
      'Operating Temp': '-10°C to 50°C',
      'Stackable': 'Yes (up to 30kWh)',
      'BMS': 'Built-in',
      'Warranty': '5 Years / 6,000 Cycles',
    },
    featured: false,
    image: '/images/product-battery.jpg',
  },
]
