
import ServicesCard from './ServicesCard'

const services = [
  {
    icon: '/svg/team.svg',
    desc: 'Manage your global team in one system',
    color: '#00AC6B',
  },
  {
    icon: '/svg/visa.svg',
    desc: 'Hire or relocate team members with in-house visa support',
    color: '#519AF4',
  },
  {
    icon: '/svg/equipment.svg',
    desc: 'Send equipment worldwide, without the hassle',
    color: '#1C4396',
  },
  {
    icon: '/svg/benefits.svg',
    desc: 'Offer country-specific benefits at competitive rates',
    color: '#F78400',
  },
]

const Services = () => {
  return (
    <div className='py-14 px-[7%]' id='services'>
        <div className='md:w-1/2'>
          <h3 className='md:text-5xl text-4xl font-semibold'>Our Services</h3>
          <p className='mt-5 text-lg text-gray'>
            We’re simplifying every aspect of managing a
            worldwide team, from benefits and equity to
            working visas and equipment. It’s one platform
            made to get you set up compliantly in just 5 minutes.
          </p>
        </div>
        <div
          className='mt-7 grid gap-10 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] '
        >
          {
            services.map(({ icon, desc, color }, index) => (
              <ServicesCard 
                key={index}
                icon={icon}
                description={desc}
                color={color}
              />
            ))
          }
        </div>
    </div>
  )
}

export default Services