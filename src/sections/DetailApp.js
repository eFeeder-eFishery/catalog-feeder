import {React, useLayoutEffect, useRef} from 'react'
import gsap from 'gsap';
import phone1 from '../assets/phone-1.png';
import phone2 from '../assets/phone-2.png';
import phone3 from '../assets/phone-3.png';
import phone4 from '../assets/phone-4.png';
import bg2 from '../assets/bg2-efishery.png';
import Outro from './Outro';
import Footer from './Footer';

export default function DetailApp() {
    const appRef = useRef(null);

    useLayoutEffect(() => {
        let appImgList = gsap.utils.toArray(".app-img");
        let height = 100 * appImgList.length;

        let stepList = gsap.utils.toArray(".app-step");
    
        let ctx = window.innerWidth < 768 ? gsap.context(() => {}) : gsap.context(() => {
            let tl = gsap.timeline({
              scrollTrigger:{
                  trigger: appRef.current,
                  start: "top top",
                  end: "+="+height*2+"%",
                  // end: "+=200%",
                  pin: appRef.current,
                  pinspacer:true,
                  scrub: true,
                  anticipatePin: 1    
              }
            })
    
            appImgList.forEach((elem, i) => {
              tl.from(elem, {autoAlpha:0, scale:0.75, translateX: 100}, i)
              tl.to(elem, {autoAlpha:0}, i+1) 
              if (i != appImgList.length-1) {
                tl.to(elem, {translateX: 0}, i + 0.75)
              }
            })

            stepList.forEach((step, i) => {
                tl.from(step, {autoAlpha:0, translateY: 100}, i)
                tl.to(step, {autoAlpha:0}, i + 1) 
                if (i != stepList.length-1) {
                    tl.to(step, {autoAlpha:0, translateY: -100}, i + 0.75)
                  }
            })
    
        });
        
        return () => ctx.revert();
    },[])

    return (
        <>
        <div className='h-screen'></div>
        <div ref={appRef}>
            {/* <div className="absolute z-1 w-full">
                <img className='object-fill w-full h-screen' src={bg2} alt='eFishery'></img>
            </div> */}
            <div className='absolute hidden md:block z-10 w-full h-screen bg-gradient-to-r from-efi_darkGreen to-efi_lightGreen opacity-90'></div>
            <div className='md:absolute z-20 pt-10 md:pt-0 flex flex-col md:flex-row justify-start md:justify-center items-center w-full md:h-screen lg:space-x-10 md:overflow-hidden bg-gradient-to-r from-efi_darkGreen to-efi_lightGreen md:bg-transparent'>
                <div className='flex justify-center items-start w-full lg:w-[50%] xl:w-[70%] md:h-[50%] lg:pt-8'>
                    <div className='flex flex-col justify-center items-start'>
                        <div className='space-y-3 pb-2 flex flex-col justify-center items-center w-full'>
                            <h2 className='text-[14px] min-[341px]:text-base xl:text-xl text-efi_mildGreen bg-efi_lightGold px-4 xl:px-8 py-2 rounded-full'>Manajemen Pakan via Aplikasi eFeeder</h2>
                            <div className='h-[2px] w-[100px] bg-darkGray'></div>
                        </div>
                        <div className='relative w-full h-full md:h-[300px] pb-8 pt-4 space-y-2 overflow-y-hidden'>
                            <div className='relative'>
                                <div className='app-step app-step1 md:absolute space-x-4 text-left w-full flex justify-center lg:justify-start items-start'>
                                    <h1 className='text-3xl min-[470px]:text-5xl lg:text-7xl font-bold text-efi_gold'>01</h1>
                                    <p className='text-xl md:text-2xl xl:text-3xl font-semibold text-white leading-[1.2]'>
                                        Klik <span className='font-extrabold text-darkGray bg-efi_gold'><b>Pengaturan <br/> Feeder</b></span>
                                    </p>
                                </div>
                                <div className='md:hidden mb-8 flex justify-center'>
                                    <img className='h-[400px]' src={phone1} alt='eFishery'></img>
                                </div>
                                <div className='app-step app-step2 md:absolute space-x-4 text-left w-full flex justify-center lg:justify-start items-start opacity-1'>
                                    <h1 className='text-3xl min-[470px]:text-5xl lg:text-7xl font-bold text-efi_gold'>02</h1>
                                    <p className='text-xl md:text-2xl xl:text-3xl font-semibold text-white leading-[1.2]'>
                                        Klik <span className='font-extrabold text-darkGray bg-efi_gold'><b>Jadwal <br/> Pemberian Pakan</b></span>
                                    </p>
                                </div>
                                <div className='md:hidden mb-8 flex justify-center'>
                                    <img className='h-[400px]' src={phone2} alt='eFishery'></img>
                                </div>
                                <div className='app-step app-step3 md:absolute px-4 min-[470px]:px-24 sm:px-40 md:px-0 space-x-4 text-left w-full flex justify-center lg:justify-start items-start opacity-1'>
                                    <h1 className='text-3xl min-[470px]:text-5xl lg:text-7xl font-bold text-efi_gold'>03</h1>
                                    <p className='text-xl min-[470px]:text-lg md:text-2xl xl:text-3xl md:w-auto font-semibold text-white leading-[1.2]'>
                                        Pada tab Schedule, pilih metode <span className='font-extrabold text-darkGray bg-efi_gold'><b>Basic</b></span>, <span className='font-extrabold text-darkGray bg-efi_gold'><b>Advanced</b></span>, atau <span className='font-extrabold text-darkGray bg-efi_gold'><b>Continuos</b> </span>
                                    </p>
                                </div>
                                <div className='md:hidden mb-8 flex justify-center'>
                                    <img className='h-[400px]' src={phone3} alt='eFishery'></img>
                                </div>
                                <div className='app-step app-step4 md:absolute px-4 min-[470px]:px-24 sm:px-40 md:px-0 space-x-4 text-left w-full flex justify-center lg:justify-start items-start opacity-1'>
                                    <h1 className='text-3xl min-[470px]:text-5xl lg:text-7xl font-bold text-efi_gold'>04</h1>
                                    <p className='text-xl md:text-2xl xl:text-3xl w-full sm:w-auto font-semibold text-white leading-[1.2]'>
                                        Masukkan jumlah pakan serta jadwal yang dibutuhkan lalu klik <span className='font-extrabold text-darkGray bg-efi_gold'><b>Simpan</b></span>
                                    </p>
                                </div>
                                <div className='md:hidden mb-8 flex justify-center'>
                                    <img className='h-[400px]' src={phone4} alt='eFishery'></img>
                                </div>
                                {/* <div className='w-[70%] bg-efi_gold py-2 rounded-full hover:bg-efi_lightGold cursor-pointer'>Download Sekarang</div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='w-[300px] overflow-x-hidden overflow-y-visible'> */}
                <div className='relative hidden md:flex justify-center lg:justify-start items-center w-full pt-6 md:pt-4 lg:pt-6 lg:w-[40%] xl:w-[50%] h-[70%] sm:h-[75%] md:h-screen overflow-hidden'>
                    <div className='app-img app-img1 absolute w-[280px] min-[470px]:w-[290px] sm:w-[300px] md:w-[330px] lg:w-[380px] xl:w-[450px] '>
                        <img className='lg:mt-8 scale-100' src={phone1} alt='eFishery'></img>
                    </div>
                    <div className='app-img app-img2 absolute w-[280px] min-[470px]:w-[290px] sm:w-[300px] md:w-[330px] lg:w-[380px] xl:w-[450px] '>
                        <img className='lg:mt-8 scale-100' src={phone2} alt='eFishery'></img>
                    </div>
                    <div className='app-img app-img3 absolute w-[280px] min-[470px]:w-[290px] sm:w-[300px] md:w-[330px] lg:w-[380px] xl:w-[450px] '>
                        <img className='lg:mt-8 scale-100' src={phone3} alt='eFishery'></img>
                    </div>
                    <div className='app-img app-img4 absolute w-[280px] min-[470px]:w-[290px] sm:w-[300px] md:w-[330px] lg:w-[380px] xl:w-[450px] '>
                        <img className='lg:mt-8 scale-100' src={phone4} alt='eFishery'></img>
                    </div>
                </div>
            </div>
        </div>
        <div className='md:h-screen'></div>
        </>
    )
}
