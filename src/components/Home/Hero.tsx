const Hero = () => {
  return (
    <div className=" bg-gradient-to-b from-secondary to-white px-[5%] py-14 flex items-start justify-between">
        <div className="flex-1">
            <h3
                className="md:text-[45px] sm:text-4xl text-3xl font-bold md:leading-[50px] "
            >
                “Building blocks for a great culture where every voice matters”.
            </h3>
            <p className="text-gray sm:text-lg text-sm mt-8 font-medium">
                Notable HR Ltd prides itself on being able to accurately assess, identify and resolve a range of workforce challenges which can lead to a toxic culture if not quickly detected or
                addressed. We have a team of HR consultants who can support you to promote a happy
                and healthy workplace culture where employees feel physically and psychologically safe to raise concerns.
            </p>
            <div className="mt-14">
                <button className="btn-primary md:text-2xl text-lg font-semibold">
                    Diagnose your workplace culture!
                </button>
            </div>
        </div>
        <div className="flex-1 lg:block hidden">
            <img src="/img/hero-bg.png" alt="hero image" className="xl:h-[400px] object-cover " />
        </div>
    </div>
  )
}

export default Hero