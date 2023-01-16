import {React, useLayoutEffect, useRef} from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import eFeeder4 from '../assets/eFeeder4.png';
import bg3 from '../assets/bg3-efishery.png';

gsap.registerPlugin(ScrollTrigger);

export default function WhyFeeder() {
  const whyRef = useRef(null);

  useLayoutEffect(() => {
    let whyList = gsap.utils.toArray(".why");
    let height = 100 * whyList.length;

    let ctx = window.innerWidth < 768 ? gsap.context(() => {}) : gsap.context(() => {
        let tl = gsap.timeline({
          scrollTrigger:{
              trigger: whyRef.current,
              start: "top top",
              end: "+="+height*1.3+"%",
              pin: whyRef.current,
              pinspacer:true,
              scrub: true,
              anticipatePin: 1    
          }
        })

        whyList.forEach((elem, i) => {
          tl.from(elem, {autoAlpha:0, translateY: 100}, i)
          if (i !== whyList.length-1) {
            tl.to(elem, {autoAlpha:0, translateY: -100}, i + 0.75)
          }
        })

    });
    
    return () => ctx.revert();
},[])
  return (
    <>
    <div>
    <div ref={whyRef}>
      <div className="absolute z-1 w-full">
        <img className='object-fill w-full h-screen' src={bg3} alt='eFishery'></img>
      </div>
      <div className='absolute z-10 w-full h-screen bg-white opacity-80'></div>
      <div className='absolute z-20 flex justify-center items-center w-full h-screen md:space-x-2 lg:space-x-10 overflow-hidden'>
        <div className='flex flex-col justify-center md:justify-start items-center md:items-start'>
          <div className='space-y-3 pb-2 flex md:block flex-col justify-center items-center '>
            <h2 className='text-xl md:text-2xl xl:text-3xl font-semibold text-efi_mildGreen'>Dengan eFeeder 5</h2>
            <div className='h-[2px] w-[100px] bg-efi_gold'></div>
          </div>
          <div className='relative pb-8 pt-4 space-y-10 md:space-y-2 whyList min-[470px]:overflow-hidden h-auto md:h-[300px] w-[300px] md:w-[400px] sm:w-[270px] md:w-[350px] lg:w-[430px] xl:w-[460px]'>
            <div className='why why1 md:absolute space-y-2 md:space-y-4 md:text-left'>
              <h1 className='text-xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black'>Lebih Praktis</h1>
              <p className='text-base min-[470px]:text-[14px] md:text-xl text-black leading-relaxed'>
                Proses pengaturan <b>3x lebih cepat</b> serta dapat mengatur semua eFeeder 5 dalam waktu <b>bersamaan via aplikasi</b> 
              </p>
            </div>
            <div className='why why2 md:absolute space-y-2 md:space-y-4 md:text-left opacity-1'>
              <h1 className='text-xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black'>Lebih Aman</h1>
              <p className='text-base min-[470px]:text-[14px] md:text-xl text-black leading-relaxed'>
                Dilengkapi dengan sistem notifikasi jika terjadi kerusakan untuk <b>penanganan yang lebih cepat</b>
              </p>
            </div>
            <div className='why why3 md:absolute z-30 space-y-2 md:space-y-4 md:text-left opacity-1'>
              <h1 className='text-xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black'>Lebih Lengkap</h1>
              <p className='text-base min-[470px]:text-[14px] md:text-xl text-black leading-relaxed'>
                Manajemen pakan <b>lebih menyeluruh, akurat</b> dan <i><b> real time</b></i>
              </p>
            </div>
          </div>
        </div>
        <img className='hidden md:block min-[470px]:h-[200px] sm:h-[230px] md:h-[300px] lg:h-[380px] xl:h-[500px] xl:mt-8' src={eFeeder4} alt='eFishery'></img>
      </div>
    </div>
    <div className='h-screen relative' >
        
    </div>
    </div>
    </>
  )
}
