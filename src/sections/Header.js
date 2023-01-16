import {React, useLayoutEffect, useRef, useState} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from '../assets/logo-efishery.png';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
    const [toggle, showNav] = useState(true);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let showHeader = gsap.from('header', { 
                yPercent: -100,
                paused: true,
                duration: 0.2
              }).progress(1);

            gsap.timeline({
            scrollTrigger:{
                start: "top top",
                end: "=+25000%",
                onUpdate: (self) => {
                    self.direction === -1 ? showHeader.play() : showHeader.reverse()
                  }  
            }})
        });
        
        return () => ctx.revert();
    },[])

    return (
        <header className={`fixed z-50 w-screen flex flex-col lg:flex-row justify-between lg:px-40 py-4 ease-linear bg-white text-sm
        ${toggle ? 'h-[55px]' : ''}`}>
            <div className='flex justify-between px-4'>
                <img className='h-[25px] lg:h-[30px]' src={logo} alt='eFishery'></img>
                <div className='text-2xl text-darkGray lg:hidden' onClick={() => showNav(!toggle)}>
                    {toggle ? 
                    <BiMenu />
                    : <AiOutlineCloseCircle className='' onClick={() => showNav(!toggle)}/>
                    }
                </div>
            </div>
            <nav className={toggle ? '-translate-y-[200%]' : ''}>
                <ul className='flex-col flex lg:flex-row justify-center items-center text-efi_green lg:h-full w-full lg:w-auto pt-4 lg:pt-0 space-y-6 lg:space-y-0 lg:space-x-8 text-gray-600'>
                    <li className='hover:text-black'><a href='#'>Home</a></li>
                    <li className='hover:text-black'><a href='#aboutus'>About Us</a></li>
                    <li className='hover:text-black'><a href='#products'>Products</a></li>
                    <li className='hover:text-black'><a href='#contact'>Contact Us</a></li>
                </ul>
            </nav>
        </header>
    )
}
