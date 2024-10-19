import { useState } from "react"

const Header = () => {
    const [showNav, setShowNav] = useState(false);

    const closeNav = () => setShowNav(false);

  return (
    <div className="h-[80px] bg-secondary sticky top-0 flex justify-between px-[7%] items-center">
        <div>
            <img src="/svg/nh-logo.svg" alt="logo" className="w-[55px] h-[45px]"/>
        </div>
        <nav className={showNav ? 'block' : 'hidden lg:block'}>
            <ul className="flex md:flex-row flex-col items-center font-medium gap-6 text-lg fixed lg:static bg-secondary w-full h-full
                    top-0 left-0 z-50 lg:p-0 p-6">
                <li onClick={closeNav} 
                    className="
                        self-end flex items-center justify-center transition-all ease-out duration-200
                        bg-slate-300 cursor-pointer rounded-full 
                        lg:hidden h-[40px] w-[40px] text-2xl hover:bg-slate-400
                    "
                >
                    X
                </li>
                <li onClick={closeNav} ><a href="#" className="transition-all ease-out 
                    duration-200 hover:text-secondary2">Home</a></li>
                <li onClick={closeNav} ><a href="#about"className="transition-all ease-out 
                    duration-200 hover:text-secondary2">About</a></li>
                <li onClick={closeNav} ><a href="#services" className="transition-all ease-out 
                    duration-200 hover:text-secondary2">Services</a></li>
                <li onClick={closeNav} ><a href="#" className="transition-all ease-out 
                    duration-200 hover:text-secondary2">Contact</a></li>
            </ul>
        </nav>

        <div className="flex items-center gap-x-3">
            <button className="btn-primary">
                Login
            </button>
            <button className="btn-outlined">
                Get Started
            </button>
            <button onClick={() => setShowNav(true)} className="transition-all ease-out duration-200
            lg:hidden h-[40px] w-[40px] text-2xl hover:bg-slate-400 rounded-full  bg-slate-300"><i className="fa fa-solid fa-bars h-[20px]"></i></button>
        </div>
    </div>
  )
}

export default Header