export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  avatar: string
}

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'James Mwangi',
    role: 'Founder & CEO',
    bio: 'James founded SolarCo with a vision to make clean energy accessible to every Kenyan household and business. With 15 years in renewable energy, he has overseen over 500 installations across Kenya.',
    avatar: '/images/team-james.jpg',
  },
  {
    id: '2',
    name: 'Aisha Odhiambo',
    role: 'Head of Engineering',
    bio: 'Aisha leads our technical team with a BSc in Electrical Engineering from UoN and professional certification from the Kenya Renewable Energy Association. She has designed systems from 1kW residential to 500kW industrial.',
    avatar: '/images/team-aisha.jpg',
  },
  {
    id: '3',
    name: 'David Kamau',
    role: 'Sales & Customer Success',
    bio: 'David ensures every client gets the right system for their needs and budget. With a background in energy economics, he specialises in ROI analysis and helping clients make informed solar investment decisions.',
    avatar: '/images/team-david.jpg',
  },
]
