import '../App.css'
import { useState,useRef } from 'react';
import { FaGithub } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { TbMenu3 } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import profile from '../assets/Mypic.jpg'


import { FaLinkedin } from "react-icons/fa";

const Main = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [closeMenu,setmenu] = useState(true);
    const [search,setSearch] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        
    };
    const handleMenu = () => {
        setmenu(!closeMenu)
        toggleMenu();
    }
    const secondpart = useRef(null);
    const home = useRef(null);
    const scrollToHome = () =>  {
        home.current?.scrollIntoView({behavior: 'smooth'})
    }
    const handleScrollToSecondpart = () => {
        secondpart.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const openSearch = () => {
        setSearch(!search)
    }
    return(
        <>
            <nav ref={home} className='w-full h-[50px] flex justify-between items-center'>
                <header className='flex justify-start'>
                    <h3 className=" font-extrabold mt-3 mx-5 text-2xl text-red-600 items-center logo" style={{ fontFamily: "'Orbitron', monospace" }}>Lynn'studio</h3>
                </header>
                
                <ul className='nav flex justify-end text-red-600 mr-7 items-center'>
                    <li><a className='mx-4 p-2 hover:underline ' href="#">Home</a></li>
                    <li><a className='mx-4 p-2 hover:underline ' href="#">About</a></li>
                    <li><a className='mx-4 p-2 hover:underline ' href="#">Contact</a></li>
                    <li><a className='mx-4 p-2 hover:underline ' href="#">Projects</a></li>
                    <div class="w-[50px] h-[50px] bg-white rounded-full mx-auto mt-2 border-2 shadow-2xl">
                        <img  class="w-full h-auto object-cover rounded-full " src={profile} height="60"  width="60"/>
                    </div>
                </ul>
                {/* Toggle menu */}
                
                <div className='menuB md:hidden flex mt-3 mr-5'>
                    {closeMenu ? (
                        <TbMenu3 onClick={handleMenu} color='white' size={20} />
                    ) : (
                        <RiCloseFill onClick={handleMenu} size={20} color='white' />
                    )}
                </div>
                <div class="mbpf sm:hidden bg-white rounded-full border-2 shadow-2xl">
                    <img  class="w-full h-auto object-cover rounded-full " src={profile} height="60"  width="60"/>
                </div>
            </nav>
                {/* Responive for small dev */}
            {isOpen && (
                <div className='md:hidden  text-white p-4 transition-transform ease-in-out duration-700 h-auto z-1'>
                    <ul className='flex justify-end flex-col text-red-600'>
                        <li className='py-3 border-b-1 hover:undeline'><a className='block' href="">Home</a></li>
                        <li className='py-3 border-b-1 hover:undeline'><a className='block' href="">About</a></li>
                        <li className='py-3 border-b-1 hover:undeline'><a className='block' href="">Services</a></li>
                        <li className='py-3 border-b-1 hover:undeline'><a className='block' href="">Contact</a></li>
                        <li className='py-3 flex'><FaGithub color='white' size='20' /><FaFacebook color='white' size='20' className='mx-2'/><FaLinkedin color='white' size='20' /></li>
                    </ul>
                </div>
            )}
            
            <main  className='mb text-white mt-50 w-full h-[718px] ' style={{ fontFamily: "'Orbitron', monospace" }}>
                <h2 className='lg:text-4xl mx-5 text-3xl text-red-600 font-bold'>Portfolio Website</h2>
                <p className='lg:text-xl mt-4 mx-5 text-md' style={{ fontFamily: "'modern sans-serif', monospace" }}>I'm a UI/UX Desginer Lynn Lynn Aung</p>
                <button className='lg:text-lg mx-5 mt-6 bg-white rounded-xl text-black p-2 text-xs' onClick={handleScrollToSecondpart}>LET'S EXPLORE</button>
                <button className='lg:text-lg mx-2 mt-6 bg-white rounded-xl text-black p-2 text-xs' >DOWNLOAD CV</button>
                <div className=''>
                {search && (
                <div class="navbar-container  fixed  bottom-[30px] left-0 right-0 flex justify-center items-center" style={{ fontFamily: "'modern sans-serif', monospace" }}>
                <div class="search-bar">
                    <div class="InputContainer">
                    <svg
                        class="searchIcon"
                        width="20px"
                        viewBox="0 0 24 24"
                        height="20px"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                        d="M15.5 14h-.79l-.28-.27A6.518 6.518 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                        ></path>
                    </svg>
                    <input
                        class="input"
                        id="search-input"
                        placeholder="Search..."
                        type="text"
                    />
                    </div>
                    <div class="border"></div>
                    <button aria-label="Voice search" class="micButton">
                    <svg
                        width="20px"
                        viewBox="0 0 384 512"
                        height="20px"
                        class="micIcon"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"
                        ></path>
                    </svg>
                    </button>
                </div>
                </div>
                )}
                </div>
                
            </main>
            <footer className=' fixed bottom-0 left-0 right-0 flex justify-center items-center '>
                    <div class="button-container mx-auto">
                    <button class="button" onClick={scrollToHome}>
                        <svg
                        class="icon"
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
                        ></path>
                        </svg>
                    </button>
                    <button class="button" onClick={openSearch}>
                        <svg
                        class="icon"
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                        </svg>
                    </button>
                    <button class="button">
                        <svg
                        class="icon"
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"
                        ></path>
                        </svg>
                    </button>

                    <button className='button'>
                        <FaGithub color='white' size='20'/>
                    </button>
                    </div>

                </footer>
            {/*Second path*/}
            <div ref={secondpart} className='w-full h-[100vh] mx-5 '>
                <a id='second' className='text-white mx-5'>Hello</a>
            </div>
            
        </>
    )
}
export default Main;    