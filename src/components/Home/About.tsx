

const About = () => {
  return (
    <div className='px-[7%] sm:pt-14 pt-8' id='about'>
        <h3 className='md:text-5xl text-4xl font-semibold text-center'>About Us</h3>
        <div className=' flex lg:items-center lg:flex-row flex-col justify-between'>
            <div className='sm:mt-0 mt-6'>
                <h4 className='md:text-3xl text-xl font-semibold'>We are a group of like-minded professionals</h4>
                <div className='sm:mt-10 mt-4 flex flex-col sm:gap-6 gap-3'>
                    <p className='md:text-lg text-sm text-gray'>
                        with a wealth of Human Resource and Organisational 
                        Development experience and expertise. The start-up was born 
                        from our collective experiences of witnessing or being on the 
                        receiving end of bullying, harassment, or other challenging workplace situations.
                    </p>
                    <p className='md:text-lg text-sm text-gray'>                    
                        Our mission is to help build great workplace cultures 
                        by using a range of strategies to reduce conflict in 
                        the workplace and create a thriving employment 
                        relationship between employees and the organisation where they work.
                    </p>
                </div>
            </div>
            <div>
                <img src="/img/about.png" alt="about image" className='md:max-w-[500px]'/>
            </div>
        </div>
    </div>
  )
}

export default About