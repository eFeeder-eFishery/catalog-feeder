import {React, useLayoutEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lele from '../assets/01-lele.png';
import mas from '../assets/02-mas.png';
import nila from '../assets/03-nila.png';
import bandeng from '../assets/04-bandeng.png';
import gurame from '../assets/05-gurame.png';
import gabus from '../assets/06-gabus.png';
import patin from '../assets/07-patin.png';

gsap.registerPlugin(ScrollTrigger);

export default function Fish() {
    const fishRef = useRef(null);

    // useLayoutEffect(() => {
    //     const ikanList = gsap.utils.toArray(".ikan");
    
    //     let ctx = gsap.context(() => {
    //         gsap.timeline({
    //             scrollTrigger:{
    //                 trigger: fishRef.current,
    //                 start: "top 400",
    //                 end: "bottom",
    //                 scrub: true,
    //                 pinspacer:true,
    //                 anticipatePin: 1   
    //             }})
    //         .to(ikanList, {translateX: -600, duration: 1}, 0) 
            
    //     });
        
    //     return () => ctx.revert();
    // },[])
    return (
        <div ref={fishRef} className='relative flex flex-col justify-center items-center overflow-hidden bg-efi_darkGreen text-white py-6 xl:py-8' >
            <h1 className='text-base lg:text-2xl font-semibold '>eFeeder dapat digunakan untuk berbagai jenis ikan</h1>
            <div className='h-[2px] w-[100px] bg-efi_gold mt-2 mb-4 xl:mb-12'></div>
            <div className='grid grid-cols-2 min-[470px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-4 lg:gap-y-8 relative overflow-hidden md:px-16 lg:px-28'>
                <div className='ikan flex flex-col justify-center items-center space-y-4'>
                    <img className='h-[50px] min-[470px]:h-[65px] sm:h-[80px] md:h-[90px] xl:h-[100px]' src={lele} Alt="Ikan Lele"></img>
                    <h3 className='font-bold text-sm lg:text-2xl xl:text-3xl'>Ikan Lele</h3>
                </div>
                <div className='ikan flex flex-col justify-center items-center space-y-4'>
                    <img className='h-[50px] min-[470px]:h-[65px] sm:h-[80px] md:h-[90px] xl:h-[100px]' src={mas} Alt="Ikan Lele"></img>
                    <h3 className='font-bold text-sm lg:text-2xl xl:text-3xl'>Ikan Mas</h3>
                </div>
                <div className='ikan flex flex-col justify-center items-center space-y-4'>
                    <img className='h-[50px] min-[470px]:h-[65px] sm:h-[80px] md:h-[90px] xl:h-[100px]' src={nila} Alt="Ikan Lele"></img>
                    <h3 className='font-bold text-sm lg:text-2xl xl:text-3xl'>Ikan Nila</h3>
                </div>
                <div className='ikan flex flex-col justify-between items-center space-y-4'>
                    <img className='h-[45px] min-[470px]:h-[60px] sm:h-[75px] md:h-[85px] xl:h-[95px]' src={bandeng} Alt="Ikan Lele"></img>
                    <h3 className='font-bold text-sm lg:text-2xl xl:text-3xl'>Ikan Bandeng</h3>
                </div>
                <div className='ikan flex flex-col justify-between items-center space-y-4'>
                    <img className='h-[45px] min-[470px]:h-[60px] sm:h-[75px] md:h-[85px] xl:h-[95px]' src={gurame} Alt="Ikan Lele"></img>
                    <h3 className='font-bold text-sm lg:text-2xl xl:text-3xl'>Ikan Gurame</h3>
                </div>
                <div className='ikan flex flex-col justify-between items-center space-y-4'>
                    <img className='h-[45px] min-[470px]:h-[60px] sm:h-[75px] md:h-[85px] xl:h-[95px]' src={gabus} Alt="Ikan Lele"></img>
                    <h3 className='font-bold text-sm lg:text-2xl xl:text-3xl'>Ikan Gabus</h3>
                </div>
                <div className='ikan flex flex-col justify-between items-center space-y-4'>
                    <img className='h-[45px] min-[470px]:h-[60px] sm:h-[75px] md:h-[85px] xl:h-[85px]' src={patin} Alt="Ikan Lele"></img>
                    <h3 className='font-bold text-sm lg:text-2xl xl:text-3xl'>Ikan Patin</h3>
                </div>
            </div>
        </div>
    )
}
