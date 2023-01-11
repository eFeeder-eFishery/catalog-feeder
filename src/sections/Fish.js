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

    useLayoutEffect(() => {
        const ikanList = gsap.utils.toArray(".ikan");
    
        let ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger:{
                    trigger: fishRef.current,
                    start: "top 400",
                    end: "bottom",
                    markers: true,
                    scrub: true,
                    pinspacer:true,
                    anticipatePin: 1   
                }})
            .to(ikanList, {translateX: -600, duration: 1}, 0) 
            
        });
        
        return () => ctx.revert();
    },[])
    return (
        <div ref={fishRef} className='relative overflow-hidden bg-efi_darkGreen text-white py-6 xl:py-12' >
            <h1 className='text-base lg:text-2xl font-semibold pb-4 xl:pb-12'>eFeeder dapat digunakan untuk berbagai jenis ikan</h1>
            <div className='flex relative overflow-hidden w-[350%] space-x-8 lg:space-x-16 xl:space-x-24 px-8'>
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
                    <img className='h-[45px] min-[470px]:h-[60px] sm:h-[75px] md:h-[85px] xl:h-[100px]' src={bandeng} Alt="Ikan Lele"></img>
                    <h3 className='font-bold text-sm lg:text-2xl xl:text-3xl'>Ikan Bandeng</h3>
                </div>
                <div className='ikan flex flex-col justify-between items-center space-y-4'>
                    <img className='h-[45px] min-[470px]:h-[60px] sm:h-[75px] md:h-[85px] xl:h-[100px]' src={gurame} Alt="Ikan Lele"></img>
                    <h3 className='font-bold text-sm lg:text-2xl xl:text-3xl'>Ikan Gurame</h3>
                </div>
                <div className='ikan flex flex-col justify-between items-center space-y-4'>
                    <img className='h-[45px] min-[470px]:h-[60px] sm:h-[75px] md:h-[85px] xl:h-[100px]' src={gabus} Alt="Ikan Lele"></img>
                    <h3 className='font-bold text-sm lg:text-2xl xl:text-3xl'>Ikan Gabus</h3>
                </div>
                <div className='ikan flex flex-col justify-between items-center space-y-4'>
                    <img className='h-[45px] min-[470px]:h-[60px] sm:h-[75px] md:h-[85px] xl:h-[100px]' src={patin} Alt="Ikan Lele"></img>
                    <h3 className='font-bold text-sm lg:text-2xl xl:text-3xl'>Ikan Patin</h3>
                </div>
            </div>
        </div>
    )
}
