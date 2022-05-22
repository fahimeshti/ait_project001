import phoneIcon from '../../assets/images/phone.png';
import logo from '../../assets/images/logo.png';
import { useEffect, useState } from 'react';
import TopSlider from './TopSlider';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [heightFromTop, setHeightFromTop] = useState(false)

    const toggleNav = () => {
        setToggle(prevCheck => !prevCheck)
    }

    useEffect(() => {
        function watchHeight() {
            setHeightFromTop(window.scrollY > 250)
        }

        window.addEventListener("scroll", watchHeight)

        return function () {
            window.removeEventListener("scroll", watchHeight)
        }
    }, [])


    return (
        <div>
            <div className='w-full bg-[#333] border-b-[#222] flex flex-row items-center justify-between overflow-x-hidden'>
                <div className='grow p-4 pl-9 text-[#898989] text-center md:text-left text-sm'>
                   <button>SIGN IN</button>
                </div>
                <div className='hidden md:flex flex-row items-center p-4 pr-12 '>
                    <span className='w-6 pr-2'>
                        <img src={phoneIcon} alt="" />
                    </span>
                    <span className='text-[#00ade5]'> +(88) 0192 999 88 00</span>
                </div>
            </div>
            <header className={`${heightFromTop ? 'sticky top-0 bg-[#222] md:h-[7rem] h-0' : 'relative md:h-[10rem]'}
                w-full flex flex-col justify-between items-center px-4 h-32 
                md:px-12 z-[10] md:overflow-hidden`}>

                <div className='w-[17rem] flex flex-col md:w-full md:flex-row justify-between items-stretch'>
                    <a href="#logo" className={`
                        bg-[#000F47] 
                        w-full 
                        flex 
                        justify-center 
                        items-center 
                        px-10 py-4
                        md:px-0 md:w-[270px] transition-all duration-500 
                        ${heightFromTop ? 'md:py-0' : 'md:py-8'} 
                        `}
                    >
                        <img className='w-[100px] md:w-[130px]' src={logo} alt="" />
                    </a>
                    <nav className={`${heightFromTop ? 'bg-[#222]' : 'bg-[#5a5a5a]'} relative w-full after:bg-[#22222270] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[80px]
                        md:py-14 md:flex md:flex-col md:items-start`}>
                    <div className='w-full px-3 flex md:hidden flex-row items-center justify-between'>
                        <span className='text-white font-bold px-0 py-3 z-40'>MENU</span>
                        <button onClick={toggleNav} className='px-0 py-3 transition-all z-40'>
                            {!toggle ?
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#00ADE5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg> :
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#00ADE5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            }

                        </button>
                    </div>

                    <div className='
                            w-full 
                            absolute 
                            top-[50px] 
                            left-0 
                            flex 
                            items-center 
                            justify-center
                            md:relative md:-top-12'
                    >
                        <ul className={`overflow-hidden md:overflow-visible w-[90%] md:w-full md:px-7 text-xs bg-white md:bg-transparent capitalize transition-all duration-700 z-40 
                                md:flex md:flex-row md:max-h-auto md:text-sm 
                                ${!toggle ? 'max-h-0' : 'max-h-[20rem]'} ${heightFromTop && 'md:translate-y-[15px]'}`}
                        >
                            <li className='border px-2.5 py-2.5 md:pl-0 md:border-0'>
                                <a href="#home" className='text-[#252525] md:text-[#1cadd9] hover:text-[#1cadd9] transition-colors duration-500'>
                                    Home
                                </a>
                            </li>
                            <li className='border-l border-r px-2.5 py-2.5 md:border-0'>
                                <a href="#about" className='text-[#252525] md:text-white hover:text-[#1cadd9] transition-colors duration-500'>
                                    About us
                                </a>
                            </li>
                            <li className='border p-2.5 md:border-0'>
                                <a href="#products" className='text-[#252525] md:text-white hover:text-[#1cadd9] transition-colors duration-500'>
                                    Products
                                </a>
                            </li>
                        </ul>
                    </div>

                    {!heightFromTop &&
                        (<form className='w-full md:px-7 md:w-auto flex items-center justify-center' onSubmit={(e) => e.preventDefault()}>
                            <label htmlFor="table-search" className="sr-only">Search</label>
                            <div className="w-[90%] md:w-auto relative min-h-[2.5rem] z-10">
                                <input
                                    type="search"
                                    name="search"
                                    id="table-search"
                                    className="w-full min-h-[2.3rem] md:min-h-[2.7rem] md:w-[25rem] bg-[#F2F2F3] border border-transparent hover:border-gray-300 focus:border outline-none text-xs text-gray-900 rounded-lg focus:ring-check-blue focus:border-check-blue block pl-5 p-1.5 transition"
                                    placeholder="Enter keyword here"
                                />
                                <div className="absolute inset-y-0 right-3 flex items-center pr-3 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#252525]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>
                        </form>)
                    }

                </nav>
            </div>
            </header >
            <TopSlider />
        </div >
    );
};

export default Navbar;