import {React, useLayoutEffect, useRef} from 'react'
import gsap from 'gsap';
import phone from '../assets/phone.png';
import bg from '../assets/bg-efishery.png';
import gplay from '../assets/google-play.png';

export default function DownloadApp() {
    const downloadRef = useRef(null);
    useLayoutEffect(() => {
      let ctx = gsap.context(() => {

      let tl = gsap.timeline({
        scrollTrigger:{
            trigger: downloadRef.current,
            start: "center 300",
            scrub: true, 
            id:"donwload"
        }
      })
      tl.to('.app-phone', {translateX: 0, duration:2}, 0)
      tl.to('.text', {translateX: 0, duration:1.25}, 0.25)

    });
    
    return () => ctx.revert();
},[])
    return (
        <div ref={downloadRef}>
            <div className="absolute z-1 w-full">
                <img className='object-fill w-full h-screen' src={bg} alt='eFishery'></img>
            </div>
            <div className='absolute z-10 w-full h-screen bg-white opacity-80'></div>
            <div className='absolute z-20 flex justify-center items-center w-full h-screen space-x-10'>
                <div className='sm:flex justify-center items-center overflow-hidden w-[10]'>
                    <div className='relative flex justify-center items-center w-[300px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-[350px] md:h-[450px] lg:h-screen'>
                        <img className='app-phone absolute z-50 overflow-visible h-[300px] min-[470px]:h-[360px] md:h-[450px] lg:h-[550px] xl:mt-8 translate-x-[100%]' src={phone} alt='eFishery'></img>
                    </div>
                    <div className='relative overflow-hidden flex justify-center items-center sm:w-[350px] md:w-[400px] xl:w-[750px] h-[200px] min-[470px]:h-[250px] md:h-[340px] lg:h-screen'>
                        <div className='text absolute z-30 flex flex-col justify-start items-center sm:items-start -translate-x-[100%]'>
                            <h1 className='text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-left text-black sm:ml-4 mb-1'>Download Aplikasi eFeeder *</h1>
                            <h2 className='text-sm md:text-base lg:text-lg xl:text-xl sm:text-left sm:ml-4 '>untuk memudahkan Anda mengontrol <br/>manajemen pemberian pakan</h2>
                            <div className='h-[2px] xl:h-[3px] w-[100px] sm:w-[200px] bg-efi_gold sm:ml-4 mt-1 sm:mt-4 mb-2'></div>
                            <img className='h-[50px] sm:h-[70px] lg:h-[90px]' src={gplay} alt='eFishery'></img>
                            <p className='text-[11px] xl:text-sm sm:text-left text-black leading-relaxed w-[70%] ml-4 opacity-70'>
                            *aplikasi ini dapat diinstal kapan saja tetapi hanya dapat digunakan ketika sudah menggunakan efeeder
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
