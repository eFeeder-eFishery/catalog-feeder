import {React, useState, useEffect, useLayoutEffect, useRef} from 'react'
import gsap from 'gsap';
import fishFeederFront from '../assets/fish-feeder-front.jpg';
import shrimpFeederFront from '../assets/shrimp-feeder-front.jpg';
import fishFeeder from '../assets/fish-feeder.mp4';
import shrimpFeeder from '../assets/shrimp-feeder.mp4';


export default function ProductDetail() {
    const [isLoaded, setIsLoaded] = useState(false);

    const fishRef = useRef(null);
    const shrimpRef = useRef(null);
    const feederRef = useRef(null);
    const videoFish = useRef(null);
    const videoShrimp = useRef(null);

    // useEffect(() => {
    //     videoFish.current.addEventListener('loadeddata', (e) => {
    //         if(videoFish.current.readyState === 4){
    //             setIsLoaded(true)
    //             console.log("loaded fish")
    //         }
    //     });
    //     videoShrimp.current.addEventListener('loadeddata', (e) => {
    //         if(videoShrimp.current.readyState === 4){
    //             setIsLoaded(true)
    //             console.log("loaded shrimp")
    //         }
    //     });
    // })
    
    useLayoutEffect(() => {
        let fishVideo = document.querySelector("#fish-video");
        let shrimpVideo = document.querySelector("#shrimp-video");
        let sections = gsap.utils.toArray(".section");

        let ctx = gsap.context(() => {
            gsap.timeline({
            scrollTrigger:{
                trigger: feederRef.current,
                start: "top top",
                end: "+=2000%",
                pin: feederRef.current,
                pinspacer:true,
                scrub: true,
                anticipatePin: 1    
            }})
            .to('#line-1', {width: '100%', duration: 3}, 1)
            .to('#detail-1', {opacity: 1, ease:'none', duration: 3}, 1)
            .to('#line-2', {width: '100%', duration: 3}, 4)
            .to('#detail-2', {opacity: 1, ease:'none', duration: 3}, 4)
            .to('#line-3', {width: '100%', duration: 3}, 7)
            .to('#detail-3', {opacity: 1, ease:'none', duration: 3}, 7)
            .to(['#line-1', '#line-2', '#line-3'], {width: '0%', duration: 3}, 17)
            .to(['#detail-1', '#detail-2', '#detail-3'], {opacity: 0, ease:'none', duration: 3}, 17)
            .to(fishVideo, 
                {
                currentTime: 3,
                duration: 15,
                ease: "none",
              }, 20)
            .to('#line-4', {width: '100%', duration: 3, delay: 1}, 35)
            .to('#detail-4', {opacity: 1, ease:'none', duration: 3, delay: 1}, 35)
            .to('#line-5', {width: '100%', duration: 3}, 38)
            .to('#detail-5', {opacity: 1, ease:'none', duration: 3}, 38)
            .to('#line-6', {width: '100%', duration: 3}, 41)
            .to('#detail-6', {opacity: 1, ease:'none', duration: 3}, 41)
            .to(['#line-4', '#line-5', '#line-6'], {width: '0%', duration: 3}, 51)
            .to(['#detail-4', '#detail-5', '#detail-6'], {opacity: 0, ease:'none', duration: 3}, 51)
            .to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                duration: 15
            }, 54)
            .to('#line2-1', {width: '100%', duration: 3}, 70)
            .to('#detail2-1', {opacity: 1, ease:'none', duration: 3}, 70)
            .to('#line2-2', {width: '100%', duration: 3}, 73)
            .to('#detail2-2', {opacity: 1, ease:'none', duration: 3}, 73)
            .to('#line2-3', {width: '100%', duration: 3}, 76)
            .to('#detail2-3', {opacity: 1, ease:'none', duration: 3}, 76)
            .to(['#line2-1', '#line2-2', '#line2-3'], {width: '0%', duration: 3}, 85)
            .to(['#detail2-1', '#detail2-2', '#detail2-3'], {opacity: 0, ease:'none', duration: 3}, 85)
            .to(shrimpVideo, 
                {
                currentTime: 3,
                duration: 15,
                ease: "none",
              }, 88)
            .to('#line2-4', {width: '100%', duration: 3, delay: 1}, 105)
            .to('#detail2-4', {opacity: 1, ease:'none', duration: 3, delay: 1}, 105)
            .to('#line2-5', {width: '100%', duration: 3}, 108)
            .to('#detail2-5', {opacity: 1, ease:'none', duration: 3}, 108)
            .to('#line2-6', {width: '100%', duration: 3}, 111)
            .to('#detail2-6', {opacity: 1, ease:'none', duration: 3}, 111)
            .to(['#line2-4', '#line2-5', '#line2-6'], {width: '0%', duration: 3}, 121)
            .to(['#detail2-4', '#detail2-5', '#detail2-6'], {opacity: 0, ease:'none', duration: 3}, 121)
            
        });
        
        return () => ctx.revert();
    },[])
  return (
    <div ref={feederRef} className='pin-container w-full h-screen overflow-hidden'>
    <div  className='container-inner flex flex-nowrap w-[200%] overscroll-none bg-primary overflow-hidden'>
        <div ref={fishRef} className='section min-h-screen border-box w-[50%] flex flex-col justify-center items-center bg-efi_lightGreen'>
            <div className='text-black font-bold text-xl mb-4'>
                <div className='bg-efi_gold w-auto'>Bagian eFeeder untuk Ikan</div>
            </div>
            <div className='relative bg-primary rounded-3xl 
            h-[168px] min-[470px]:h-[258px] sm:h-[338px] md:h-[394px] lg:h-[562px] xl:h-[630px]
            w-[300px] min-[470px]:w-[460px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1120px]'>
                <video ref={videoFish} poster={fishFeederFront} className='rounded-3xl' id="fish-video" preload="auto" muted="muted" playsInline={true} webkit-playsinline="true">
                    <source src={fishFeeder}/>
                </video> 

                {/* Detail Product Front */}
                <div className='absolute pin-wrapper
                top-[105px] min-[470px]:top-[165px] sm:top-[212px] md:top-[250px] lg:top-[360px] xl:top-[400px]
                right-[22px] min-[470px]:right-[70px] sm:right-[92px] md:right-[65px] lg:right-[120px] xl:right-[150px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex flex-col justify-end items-end
                        w-32 min-[470px]:w-40 sm:w-52 md:w-72 lg:w-96'>
                            <div id='line-1' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%] self-end'></div>
                            <span id='detail-1' className='flex flex-col justify-end items-center text-right text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-end
                                text-[10px] sm:text-sm md:text-md'>
                                    Takaran
                                </h3>
                                {/* <p className='text-[10px] font-light w-[60%] self-end
                                hidden md:block'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>   */}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='absolute pin-wrapper
                top-[127px] min-[470px]:top-[195px] sm:top-[255px] md:top-[300px] lg:top-[425px] xl:top-[480px]
                left-[39px] min-[470px]:left-[88px] sm:left-[110px] md:left-[95px] lg:left-[215px] xl:left-[245px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex-col
                        w-28 min-[470px]:w-36 sm:w-48 md:w-64 lg:w-72 xl:w-80'>
                            <div id='line-2' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%]'></div>
                            <span id='detail-2' className='flex flex-col justify-end items-center text-left text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-start
                                text-[10px] sm:text-sm md:text-md'>
                                    Pipa Ekstensi
                                </h3>
                                {/* <p className='text-[10px] font-light w-[60%] self-start
                                hidden md:block'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>   */}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='absolute pin-wrapper
                bottom-[9px] min-[470px]:bottom-[30px] sm:bottom-[30px] md:bottom-[40px] lg:bottom-[70px]
                right-[22px] min-[470px]:right-[70px] sm:right-[92px] md:right-[65px] lg:right-[120px] xl:right-[180px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex flex-col justify-end items-end
                        w-32 min-[470px]:w-40 sm:w-52 md:w-72 lg:w-96'>
                            <div id='line-3' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%] self-end'></div>
                            <span id='detail-3' className='flex flex-col justify-end items-center text-right text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-end
                                text-[10px] sm:text-sm md:text-md'>
                                    Pelontar
                                </h3>
                                {/* <p className='text-[10px] font-light w-[60%] self-end
                                hidden md:block'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>   */}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Detail Product Back */}
                <div className='absolute pin-wrapper
                top-[130px] min-[470px]:top-[200px] sm:top-[260px] md:top-[310px] lg:top-[450px] xl:top-[500px]
                left-[20px] min-[470px]:left-[40px] sm:left-[55px] md:left-[20px] lg:left-[55px] xl:left-[105px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex-col
                        w-28 min-[470px]:w-40 sm:w-52 md:w-72 lg:w-96'>
                            <div id='line-4' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%] self-end'></div>
                            <span id='detail-4' className='flex flex-col justify-start items-center text-left text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-start
                                text-[10px] sm:text-sm md:text-md'>
                                    Rangka kaki
                                </h3>
                                {/* <p className='text-[10px] font-light w-[60%] self-start
                                hidden md:block'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>   */}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='absolute pin-wrapper
                bottom-[105px] min-[470px]:bottom-[185px] sm:bottom-[230px] md:bottom-[280px] lg:bottom-[390px] xl:bottom-[430px]
                right-[22px] min-[470px]:right-[70px] sm:right-[92px] md:right-[65px] lg:right-[120px] xl:right-[130px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex flex-col justify-end items-end
                        w-32 min-[470px]:w-40 sm:w-52 md:w-72 lg:w-96'>
                            <div id='line-5' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%] self-end'></div>
                            <span id='detail-5' className='flex flex-col justify-end items-center text-right text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-end
                                text-[10px] sm:text-sm md:text-md'>
                                    Kontainer
                                </h3>
                                {/* <p className='text-[10px] font-light w-[60%] self-end
                                hidden md:block'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>   */}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='absolute pin-wrapper
                bottom-[40px] min-[470px]:bottom-[75px] sm:bottom-[95px] md:bottom-[110px] lg:bottom-[170px] xl:bottom-[200px]
                right-[22px] min-[470px]:right-[70px] sm:right-[92px] md:right-[60px] lg:right-[110px] xl:right-[160px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex flex-col justify-end items-end
                        w-32 min-[470px]:w-40 sm:w-52 md:w-72 lg:w-96'>
                            <div id='line-6' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%] self-end'></div>
                            <span id='detail-6' className='flex flex-col justify-end items-center text-right text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-end
                                text-[10px] sm:text-sm md:text-md'>
                                    Control Box
                                </h3>
                                {/* <p className='text-[10px] font-light w-[60%] self-end
                                hidden md:block'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>   */}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div ref={shrimpRef} className='section min-h-screen border-box w-[50%] flex flex-col justify-center items-center bg-efi_lightGreen'>
            <div className='text-black font-bold text-xl mb-4'>
                <div className='bg-efi_gold w-auto'>Bagian eFeeder untuk Udang</div>
            </div>
            <div className='relative bg-primary rounded-3xl 
            h-[168px] min-[470px]:h-[258px] sm:h-[338px] md:h-[394px] lg:h-[562px] xl:h-[630px]
            w-[300px] min-[470px]:w-[460px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1120px]'>
                <video ref={videoShrimp} poster={shrimpFeederFront} className='rounded-3xl' preload="auto" src={shrimpFeeder} id="shrimp-video" plays-inline=""></video>

                {/* Detail Product Front */}
                <div className='absolute pin-wrapper
                top-[105px] min-[470px]:top-[165px] sm:top-[212px] md:top-[250px] lg:top-[360px] xl:top-[400px]
                right-[22px] min-[470px]:right-[70px] sm:right-[92px] md:right-[65px] lg:right-[120px] xl:right-[150px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex flex-col justify-end items-end
                        w-32 min-[470px]:w-40 sm:w-52 md:w-72 lg:w-96'>
                            <div id='line2-1' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%] self-end'></div>
                            <span id='detail2-1' className='flex flex-col justify-end items-center text-right text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-end
                                text-[10px] sm:text-sm md:text-md'>
                                    Takaran
                                </h3>
                                {/* <p className='text-[10px] font-light w-[60%] self-end
                                hidden md:block'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>   */}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='absolute pin-wrapper
                top-[127px] min-[470px]:top-[195px] sm:top-[255px] md:top-[300px] lg:top-[425px] xl:top-[480px]
                left-[39px] min-[470px]:left-[88px] sm:left-[110px] md:left-[95px] lg:left-[215px] xl:left-[245px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex-col
                        w-28 min-[470px]:w-36 sm:w-48 md:w-64 lg:w-72 xl:w-80'>
                            <div id='line2-2' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%]'></div>
                            <span id='detail2-2' className='flex flex-col justify-end items-center text-left text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-start
                                text-[10px] sm:text-sm md:text-md'>
                                    Pipa Ekstensi
                                </h3>
                                {/* <p className='text-[10px] font-light w-[60%] self-start
                                hidden md:block'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>   */}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='absolute pin-wrapper
                bottom-[9px] min-[470px]:bottom-[30px] sm:bottom-[30px] md:bottom-[40px] lg:bottom-[70px]
                right-[22px] min-[470px]:right-[70px] sm:right-[92px] md:right-[65px] lg:right-[120px] xl:right-[180px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex flex-col justify-end items-end
                        w-32 min-[470px]:w-40 sm:w-52 md:w-72 lg:w-96'>
                            <div id='line2-3' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%] self-end'></div>
                            <span id='detail2-3' className='flex flex-col justify-end items-center text-right text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-end
                                text-[10px] sm:text-sm md:text-md'>
                                    Pelontar
                                </h3>
                                {/* <p className='text-[10px] font-light w-[60%] self-end
                                hidden md:block'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>   */}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Detail Product Back */}
                <div className='absolute pin-wrapper
                top-[130px] min-[470px]:top-[200px] sm:top-[260px] md:top-[310px] lg:top-[450px] xl:top-[500px]
                left-[20px] min-[470px]:left-[40px] sm:left-[55px] md:left-[20px] lg:left-[55px] xl:left-[105px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex-col
                        w-28 min-[470px]:w-40 sm:w-52 md:w-72 lg:w-96'>
                            <div id='line2-4' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%] self-end'></div>
                            <span id='detail2-4' className='flex flex-col justify-start items-center text-left text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-start
                                text-[10px] sm:text-sm md:text-md'>
                                    Rangka kaki
                                </h3>
                                {/* <p className='text-[10px] font-light w-[60%] self-start
                                hidden md:block'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>   */}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='absolute pin-wrapper
                bottom-[105px] min-[470px]:bottom-[185px] sm:bottom-[230px] md:bottom-[280px] lg:bottom-[390px] xl:bottom-[430px]
                right-[22px] min-[470px]:right-[70px] sm:right-[92px] md:right-[65px] lg:right-[120px] xl:right-[130px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex flex-col justify-end items-end
                        w-32 min-[470px]:w-40 sm:w-52 md:w-72 lg:w-96'>
                            <div id='line2-5' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%] self-end'></div>
                            <span id='detail2-5' className='flex flex-col justify-end items-center text-right text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-end
                                text-[10px] sm:text-sm md:text-md'>
                                    Kontainer
                                </h3>
                                {/* <p className='text-[10px] font-light w-[60%] self-end
                                hidden md:block'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>   */}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='absolute pin-wrapper
                bottom-[40px] min-[470px]:bottom-[75px] sm:bottom-[95px] md:bottom-[110px] lg:bottom-[170px] xl:bottom-[200px]
                right-[22px] min-[470px]:right-[70px] sm:right-[92px] md:right-[60px] lg:right-[110px] xl:right-[160px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex flex-col justify-end items-end
                        w-32 min-[470px]:w-40 sm:w-52 md:w-72 lg:w-96'>
                            <div id='line2-6' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%] self-end'></div>
                            <span id='detail2-6' className='flex flex-col justify-end items-center text-right text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-end
                                text-[10px] sm:text-sm md:text-md'>
                                    Control Box
                                </h3>
                                {/* <p className='text-[10px] font-light w-[60%] self-end
                                hidden md:block'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>   */}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
