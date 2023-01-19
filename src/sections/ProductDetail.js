import {React, useLayoutEffect, useRef} from 'react'
import gsap from 'gsap';


export default function ProductDetail() {
    const fishRef = useRef(null);
    const shrimpRef = useRef(null);
    const feederRef = useRef(null);
    const videoFish = useRef(null);
    const videoShrimp = useRef(null);
    
    useLayoutEffect(() => {
        let fishVideo = document.querySelector("#fish-video");
        let shrimpVideo = document.querySelector("#shrimp-video");
        let sections = gsap.utils.toArray(".section");

        // fish feeder canvas
        const fishContext = videoFish.current.getContext("2d");

        videoFish.current.width = 1280;
        videoFish.current.height = 720;

        const frameCount = 91;
        
        const fishCurrentFrame = index => ( 
        `./images-feeder/fish-feeder/fish-feeder (${(index + 1).toString()}).png` 
        );

        const fishImages = []
        const fishFeeder = {
            frame: 0
        };

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = fishCurrentFrame(i);
            fishImages.push(img);
        }  

        // shrimp feeder canvas
        const shrimpContext = videoShrimp.current.getContext("2d");

        videoShrimp.current.width = 1280;
        videoShrimp.current.height = 720;
        
        const shrimpCurrentFrame = index => ( 
        `./images-feeder/fish-feeder/fish-feeder (${(index + 1).toString()}).png` 
        );

        const shrimpImages = []
        const shrimpFeeder = {
            frame: 0
        };

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = shrimpCurrentFrame(i);
            shrimpImages.push(img);
        }  

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
            .to(fishFeeder, {
                frame: frameCount - 1,
                snap: "frame",
                duration: 15,
                ease: "none",
                onUpdate: fishRender 
            }, 20)
            // .to(fishVideo, 
            //     {
            //     currentTime: 3,
            //     duration: 15,
            //     ease: "none",
            //   }, 20)
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
            .to(shrimpFeeder, {
                frame: frameCount - 1,
                snap: "frame",
                duration: 15,
                ease: "none",
                onUpdate: shrimpRender 
            }, 88)
            // .to(shrimpVideo, 
            //     {
            //     currentTime: 3,
            //     duration: 15,
            //     ease: "none",
            //   }, 88)
            .to('#line2-4', {width: '100%', duration: 3, delay: 1}, 105)
            .to('#detail2-4', {opacity: 1, ease:'none', duration: 3, delay: 1}, 105)
            .to('#line2-5', {width: '100%', duration: 3}, 108)
            .to('#detail2-5', {opacity: 1, ease:'none', duration: 3}, 108)
            .to('#line2-6', {width: '100%', duration: 3}, 111)
            .to('#detail2-6', {opacity: 1, ease:'none', duration: 3}, 111)
            .to(['#line2-4', '#line2-5', '#line2-6'], {width: '0%', duration: 3}, 121)
            .to(['#detail2-4', '#detail2-5', '#detail2-6'], {opacity: 0, ease:'none', duration: 3}, 121);

            fishImages[0].onload = fishRender;
            shrimpImages[0].onload = shrimpRender;
              
            function fishRender() {
                fishContext.clearRect(0, 0, videoFish.current.width, videoFish.current.height);
                fishContext.drawImage(fishImages[fishFeeder.frame], 0, 0); 
            } 

            function shrimpRender() {
                shrimpContext.clearRect(0, 0, videoFish.current.width, videoFish.current.height);
                shrimpContext.drawImage(shrimpImages[shrimpFeeder.frame], 0, 0); 
            } 

            
        });
        
        return () => ctx.revert();
    },[])
  return (
    <div ref={feederRef} className='pin-container w-full h-screen overflow-hidden'>
    <div  className='container-inner flex flex-nowrap w-[200%] overscroll-none bg-primary overflow-hidden'>
        <div ref={fishRef} className='section min-h-screen border-box w-[50%] flex flex-col justify-center items-center border-white bg-[#389A7E] md:bg-efi_lightGreen'>
            <div className='text-black font-bold text-xl mb-4'>
                <div className='bg-efi_gold w-auto'>Bagian eFeeder untuk Ikan</div>
            </div>
            <div className='relative bg-primary rounded-3xl h-auto flex justify-center 
            w-[168px] min-[470px]:w-[300px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-auto'>
                {/* <video ref={videoFish} poster={fishFeederFront} className='rounded-3xl' id="fish-video" preload="auto" autoPlay autoplay loop muted playsinline playsInline webkit-playsinline="true">
                    <source src={fishFeeder3} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>  */}
                <canvas ref={videoFish} id="fish-video" className='rounded-3xl
                w-[1000px] xl:w-[auto]
                h-[450px] sm:h-[338px] md:h-[394px] lg:h-[562px] xl:h-[630px]'></canvas>

                {/* Detail Product Front */}
                <div className='absolute pin-wrapper
                top-[290px] sm:top-[212px] md:top-[250px] lg:top-[360px] xl:top-[400px]
                -right-[50px] min-[470px]:-right-[10px] sm:right-[92px] md:right-[65px] lg:right-[120px] xl:right-[150px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex flex-col justify-end items-end
                        w-32 min-[470px]:w-40 sm:w-52 md:w-72 lg:w-96'>
                            <div id='line-1' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%] self-end'></div>
                            <span id='detail-1' className='flex flex-col justify-end items-center text-right text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-end
                                text-[12px] sm:text-sm md:text-md'>
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
                top-[340px] min-[470px]:top-[343px] sm:top-[255px] md:top-[300px] lg:top-[425px] xl:top-[480px]
                -left-[60px] min-[470px]:left-[9px] sm:left-[110px] md:left-[95px] lg:left-[215px] xl:left-[245px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex-col
                        w-36 min-[470px]:w-36 sm:w-48 md:w-64 lg:w-72 xl:w-80'>
                            <div id='line-2' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%]'></div>
                            <span id='detail-2' className='flex flex-col justify-end items-center text-left text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-start
                                text-[12px] sm:text-sm md:text-md'>
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
                bottom-[50px] sm:bottom-[30px] md:bottom-[40px] lg:bottom-[70px]
                -right-[30px] min-[470px]:right-[2px] sm:right-[92px] md:right-[65px] lg:right-[120px] xl:right-[180px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex flex-col justify-end items-end
                        w-32 min-[470px]:w-40 sm:w-52 md:w-72 lg:w-96'>
                            <div id='line-3' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%] self-end'></div>
                            <span id='detail-3' className='flex flex-col justify-end items-center text-right text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-end
                                text-[12px] sm:text-sm md:text-md'>
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
                top-[350px] sm:top-[260px] md:top-[310px] lg:top-[450px] xl:top-[500px]
                -left-[60px] sm:left-[55px] md:left-[20px] lg:left-[55px] xl:left-[105px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex-col
                        w-24 min-[470px]:w-40 sm:w-52 md:w-72 lg:w-96'>
                            <div id='line-4' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%] self-end'></div>
                            <span id='detail-4' className='flex flex-col justify-start items-center text-left text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-start
                                text-[12px] sm:text-sm md:text-md'>
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
                top-[180px] sm:bottom-[230px] md:bottom-[280px] lg:bottom-[390px] xl:bottom-[430px]
                -right-[60px] sm:right-[92px] md:right-[65px] lg:right-[120px] xl:right-[130px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex flex-col justify-end items-end
                        w-24 min-[470px]:w-40 sm:w-52 md:w-72 lg:w-96'>
                            <div id='line-5' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%] self-end'></div>
                            <span id='detail-5' className='flex flex-col justify-end items-center text-right text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-end
                                text-[12px] sm:text-sm md:text-md'>
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
                bottom-[130px] sm:bottom-[95px] md:bottom-[110px] lg:bottom-[170px] xl:bottom-[200px]
                -right-[50px] min-[470px]:-right-[30px] sm:right-[92px] md:right-[60px] lg:right-[110px] xl:right-[160px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex flex-col justify-end items-end
                        w-32 min-[470px]:w-40 sm:w-52 md:w-72 lg:w-96'>
                            <div id='line-6' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%] self-end'></div>
                            <span id='detail-6' className='flex flex-col justify-end items-center text-right text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-end
                                text-[12px] sm:text-sm md:text-md'>
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
        <div ref={shrimpRef} className='section min-h-screen border-box w-[50%] flex flex-col justify-center items-center bg-[#389A7E] md:bg-efi_lightGreen overflow-hidden'>
            <div className='text-black font-bold text-xl mb-4'>
                <div className='bg-efi_gold w-auto'>Bagian eFeeder untuk Udang</div>
            </div>
            <div className='relative bg-primary rounded-3xl h-auto flex justify-center
            w-[168px]  min-[470px]:w-[300px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-auto'>
                {/* <video ref={videoShrimp} poster={shrimpFeederFront} className='rounded-3xl' preload="auto" src={shrimpFeeder} id="shrimp-video" playsInline></video> */}
                <canvas ref={videoShrimp} id="shrimp-video" className='rounded-3xl
                w-[1000px] xl:w-auto
                h-[450px] sm:h-[338px] md:h-[394px] lg:h-[562px] xl:h-[630px]'></canvas>

                {/* Detail Product Front */}
                <div className='absolute pin-wrapper
                top-[290px] sm:top-[212px] md:top-[250px] lg:top-[360px] xl:top-[400px]
                -right-[50px] min-[470px]:-right-[10px] sm:right-[92px] md:right-[65px] lg:right-[120px] xl:right-[150px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex flex-col justify-end items-end
                        w-32 min-[470px]:w-40 sm:w-52 md:w-72 lg:w-96'>
                            <div id='line2-1' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%] self-end'></div>
                            <span id='detail2-1' className='flex flex-col justify-end items-center text-right text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-end
                                text-[12px] sm:text-sm md:text-md'>
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
                top-[340px] min-[470px]:top-[343px] sm:top-[255px] md:top-[300px] lg:top-[425px] xl:top-[480px]
                -left-[57px] min-[470px]:left-[9px] sm:left-[110px] md:left-[95px] lg:left-[215px] xl:left-[245px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex-col
                        w-36 min-[470px]:w-36 sm:w-48 md:w-64 lg:w-72 xl:w-80'>
                            <div id='line2-2' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%]'></div>
                            <span id='detail2-2' className='flex flex-col justify-end items-center text-left text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-start
                                text-[12px] sm:text-sm md:text-md'>
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
                bottom-[50px] sm:bottom-[30px] md:bottom-[40px] lg:bottom-[70px]
                -right-[30px] min-[470px]:right-[2px] sm:right-[92px] md:right-[65px] lg:right-[120px] xl:right-[180px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex flex-col justify-end items-end
                        w-32 min-[470px]:w-40 sm:w-52 md:w-72 lg:w-96'>
                            <div id='line2-3' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%] self-end'></div>
                            <span id='detail2-3' className='flex flex-col justify-end items-center text-right text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-end
                                text-[12px] sm:text-sm md:text-md'>
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
                top-[350px] sm:top-[260px] md:top-[310px] lg:top-[450px] xl:top-[500px]
                -left-[60px] sm:left-[55px] md:left-[20px] lg:left-[55px] xl:left-[105px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex-col
                        w-24 min-[470px]:w-40 sm:w-52 md:w-72 lg:w-96'>
                            <div id='line2-4' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%] self-end'></div>
                            <span id='detail2-4' className='flex flex-col justify-start items-center text-left text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-start
                                text-[12px] sm:text-sm md:text-md'>
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
                bottom-[250px] sm:bottom-[230px] md:bottom-[280px] lg:bottom-[390px] xl:bottom-[430px]
                -right-[60px] sm:right-[92px] md:right-[65px] lg:right-[120px] xl:right-[130px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex flex-col justify-end items-end
                        w-32 min-[470px]:w-40 sm:w-52 md:w-72 lg:w-96'>
                            <div id='line2-5' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%] self-end'></div>
                            <span id='detail2-5' className='flex flex-col justify-end items-center text-right text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-end
                                text-[12px] sm:text-sm md:text-md'>
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
                bottom-[130px] sm:bottom-[95px] md:bottom-[110px] lg:bottom-[170px] xl:bottom-[200px]
                -right-[50px] min-[470px]:-right-[30px] sm:right-[92px] md:right-[60px] lg:right-[110px] xl:right-[160px]'>
                    <div className='flex gap-1 top-0 left-0'>
                        <div className='flex flex-col justify-end items-end
                        w-32 min-[470px]:w-40 sm:w-52 md:w-72 lg:w-96'>
                            <div id='line2-6' className='h-[0.7px] mb-0 sm:mb-1 box-border bg-white w-[0%] self-end'></div>
                            <span id='detail2-6' className='flex flex-col justify-end items-center text-right text-white mt-1 opacity-0'>
                                <h3 className='font-bold self-end
                                text-[12px] sm:text-sm md:text-md'>
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
