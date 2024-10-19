

interface ServicesCardProps {
  icon: string;
  description: string;
  color: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ icon, description, color }) => {
  return (
    <div className={`h-[350px] px-6 py-8 rounded-lg`} style={{ background: color }}>
      <div className='flex justify-center'>
        <img src={icon} className='h-[150px]' alt="" />
      </div>
      <p className='text-txtWhite mt-4 text-lg'>{description}</p>
      <a href="#">
          <button className='text-sm mt-4 cursor-pointer text-txtWhite'>
            Learn More &rarr;
          </button>
      </a>
    </div>
  );
}

export default ServicesCard;
