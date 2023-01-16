import {React, useLayoutEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import eFisheryVideo from '../assets/eFishery.mp4';
import logo from '../assets/logo-efishery.png';
import eFeeder3 from '../assets/eFeeder3.png';
import { HiChevronDoubleDown } from 'react-icons/hi'

gsap.registerPlugin(ScrollTrigger);

export default function Homepage() {
    const homepageRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            window.innerWidth < 1200 ? gsap.timeline() :
            gsap.timeline({
                scrollTrigger:{
                    trigger: homepageRef.current,
                    start: "top top",
                    end: "+=200%",
                    pin: true,
                    pinspacer:true,
                    scrub: true,
                    anticipatePin: 1   
                }})
                .to('#section-1', {opacity: 0, duration: 0.5}, 0.5)
                .to('.scroll', {opacity: 0, duration: 0.5}, 0.5)
                .to('#section-2', {opacity: 1, duration: 1}, 1)
                .to('#video', {scale: 1.5, ease:'none', duration: 0.5}, 2)
                .to('.hm_text', { duration: 0.5, opacity: 1, y:"-5%" }, 2)  
        });
        
        return () => ctx.revert();
    },[])

    return (
        <div ref={homepageRef}>
            <div className='min-[1200px]:h-screen'>
                <div id='section-1' className='min-[1200px]:absolute h-[600px] min-[470px]:h-[300px] md:h-[350px] lg:h-[400px] min-[1200px]:h-full top-0 left-0 right-0 bottom-0 opacity-1'>
                    <div className='flex flex-col space-y-1 xl:space-y-4 justify-center items-center m-auto h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-efi_lightGreen via-white to-white'>
                        <h1 className='pb-2 text-3xl sm:text-4xl lg:text-5xl min-[1200px]:text-6xl xl:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-efi_darkGreen to-efi_mildGreen'>Katalog eFeeder 5</h1>
                        <div className='h-[1px] lg:h-[2px] xl:h-[3px] w-[130px] bg-efi_gold'></div>
                        <div className='flex items-center space-x-2 pt-2'>
                            <span className='text-md sm:text-base min-[1200px]:text-xl xl:text-2xl font-bold text-efi_green'>by</span><img className='h-[20px] sm:h-[25px] min-[1200px]:h-[30px] xl:h-[36px]' src={logo} alt='eFishery'></img>
                        </div>
                    </div>
                    <div className='scroll min-[1200px]:absolute hidden min-[1200px]:flex z-20 bottom-10 left-50 w-full flex-col justify-center items-center animate-bounce'>
                        <p className='text-efi_mildGreen font-light mb-1 text-xs min-[1200px]:text-sm'>Scroll down</p>
                        <div className='bg-efi_lightGold py-2 min-[1200px]:py-4 px-1 min-[1200px]:px-2 text-xs min-[1200px]:text-base text-efi_mildGreen rounded-full'><HiChevronDoubleDown/></div>
                    </div>
                </div>
                <div id='section-2' className='relative min-[1200px]:absolute h-[500px] md:h-[350px] lg:h-[450px] min-[1200px]:h-full top-0 left-0 right-0 bottom-0 min-[1200px]:opacity-0'>
                    <div className='relative w-full overflow-hidden'>
                        <div className='absolute z-10 h-[100%] h-[500px] md:h-[350px] lg:h-[450px] min-[1200px]:h-full w-full bg-efi_darkGreen opacity-90'></div>
                        <video preload="false" autoplay="autoplay" muted loop id='video' className='object-fill w-full h-screen scale-10 opacity-1'>
                            <source src={eFisheryVideo} type='video/mp4'></source>
                        </video>
                    </div>
                    <div className='hm_text absolute h-[100%] z-20 top-0 left-0 right-0 '>
                    {/* w-[300px] min-[470px]:w-[460px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1120px] */}
                        <div className='flex justify-center items-center h-full m-auto sm:space-x-8 md:space-x-16 min-[1200px]:space-x-24'>
                            <div className='flex flex-col justify-center sm:justify-start items-center sm:items-start space-y-0.5 sm:space-y-1 md:space-y-2 lg:space-y-3 min-[1200px]:space-y-4'>
                                <h2 className='text-lg sm:text-xl lg:text-2xl min-[1200px]:text-3xl font-semibold text-white'>Optimalkan Budidaya dengan</h2>
                                <h1 className='text-xl min-[470px]:text-2xl sm:text-4xl lg:text-5xl min-[1200px]:text-7xl font-extrabold text-efi_gold'>eFeeder 5</h1>
                                <p className='text-sm min-[470px]:text-[11px] sm:text-[13px] lg:text-base min-[1200px]:text-lg font-light text-white sm:text-left pb-2 min-[1200px]:pb-0'>Alat pemberi pakan pintar <br></br>untuk ikan dan udang</p>
                                <p className='py-1.5 lg:py-2 px-8 lg:px-12 text-sm lg:text-base min-[1200px]:text-lg font-semibold bg-efi_gold text-black rounded-full cursor-pointer hover:bg-efi_lightGold'>Order Sekarang</p>
                            </div>
                            <img className='sm:h-[250px] md:h-[280px] lg:h-[380px] min-[1200px]:h-[450px] xl:h-[550px] mt-8
                            hidden sm:block' src={eFeeder3} alt='eFishery'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
