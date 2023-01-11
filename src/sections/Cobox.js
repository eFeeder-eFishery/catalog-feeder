import {React, useLayoutEffect, useRef} from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cobox from '../assets/cobox.png';
import bg2 from '../assets/bg2-efishery.png';

export default function Cobox() {
  const coboxRef = useRef(null);
  useLayoutEffect(() => {
      let ctx = gsap.context(() => {
      let coboxList = gsap.utils.toArray(".cobox");
      let heightCoboxList = 90 * coboxList.length;

      let tl = gsap.timeline({
        scrollTrigger:{
            trigger: coboxRef.current,
            start: "top top",
            end: "+="+heightCoboxList*1.3+"%",
            markers: true,
            pin: coboxRef.current,
            pinspacer:true,
            scrub: true,
            anticipatePin: 1    
        }
      })
      // tl.to('.cobox-img', {scale:1}, 0)
      tl.to('.bg-color', {backgroundColor: '#3B9477'}, 0)
      tl.to('.bg-color', {backgroundColor: '#1B4739'}, 1)
      tl.to('.bg-color', {backgroundColor: '#00949A'}, 2)
      tl.to('.bg-color', {backgroundColor: '#53C8E0'}, 3)
      tl.to('.bg-color', {backgroundColor: '#D7FCE1'}, 4)
      tl.to('.bg-color', {backgroundColor: '#C4FFEC'}, 5)
      tl.to('.bg-color', {backgroundColor: '#D1EF5E'}, 6)
      tl.to('.bg-color', {backgroundColor: '#D1EF5E'}, 7.75)
      coboxList.forEach((elem, i) => {
        tl.to(elem, {translateY: 0}, i)
      });

      let tl2 = gsap.timeline({
        scrollTrigger:{
            trigger: coboxRef.current,
            start: "top bottom",
            end: "40 center",
            markers: true,
            scrub: true,
            id: 'pin',   
        }
      })
      tl2.to('.cobox-img', {scale:1, duration:0.1}, 0)
      
    
    });
    
    return () => ctx.revert();
},[])
  return (
    <div ref={coboxRef} className='h-auto'>
      <div className="absolute z-1 w-full">
        <img className='object-fill w-full h-screen' src={bg2} alt='eFishery'></img>
      </div>
      <div className='bg-color absolute z-10 w-full h-screen bg-efi_mailGreen opacity-1'></div>
      <div className='absolute z-20 flex flex-col justify-start items-center w-full h-screen overflow-hidden py-8'>
        <img className='cobox-img h-[200px] min-[470px]:h-[250px] xl:h-[320px] ml-4 xl:ml-8 scale-[9.7]' src={cobox} alt='eFishery'></img>
        <div className='flex flex-col justify-start items-start w-[90%] min-[470px]:w-[80%] lg:w-[70%] xl:w-[60%]'>
          <div className='space-x-0.5 xl:space-x-2 pb-2 flex justify-start items-center'>
            <div className='h-[1px] w-[50px] xl:w-[100px] bg-black'></div>
            <h2 className='text-sm xl:text-xl font-semibold text-black'>Control Box eFeeder 5</h2>
          </div>
          <div className='relative coboxList xl:pb-8 xl:pt-4 w-[100%] xl:w-full'>
            <div className='cobox cobox1 absolute translate-y-[110%] xl:translate-y-[105%] flex justify-start items-start text-left space-x-2 xl:space-x-8 h-[250px] xl:h-[230px] bg-efi_mildGreen w-full rounded-lg py-4 xl:py-8 px-2 md:px-4 xl:px-8'>
              <h1 className='text-efi_gold text-3xl min-[470px]:text-4xl sm:text-5xl lg:text-7xl font-bold'>01</h1>
              <div className='flex flex-col justify-start'>
                <h1 className='text-base min-[470px]:text-lg sm:text-2xl lg:text-2xl font-bold text-white leading-1 xl:leading-9 mb-2 w-[90%] min-[470px]:w-[80%] md:w-[70%] xl:w-[50%]'>Kecepatan Pengaturan hingga 3x Lebih Cepat</h1>
                <p className='text-sm min-[470px]:text-base sm:text-lg font-medium leading-relaxed text-white opacity-80'>
                Dapat mengatur control box dengan proses yang lebih cepat serta instan. eFeeder 5 bisa langsung terhubung dengan jalur akses dan membuat semua mesin eFeeder tersambung ke aplikasi yang ada di handphone.
                </p>
              </div>
            </div>
            <div className='cobox cobox2 absolute translate-y-[115%] xl:translate-y-[110%] flex justify-start items-start text-left space-x-2 xl:space-x-8 h-[250px] xl:h-[230px] bg-efi_darkGreen w-full rounded-lg py-4 xl:py-8 px-2 md:px-4 xl:px-8'>
              <h1 className='text-efi_gold text-3xl min-[470px]:text-4xl sm:text-5xl lg:text-7xl font-bold'>02</h1>
              <div className='flex flex-col justify-start'>
                <h1 className='text-base min-[470px]:text-lg sm:text-2xl lg:text-2xl font-bold text-white leading-1 xl:leading-9 mb-2 w-[90%] min-[470px]:w-[80%] md:w-[70%] xl:w-[50%]'>100% Data Pakan Terbaca di Aplikasi dan Hampir Real Time</h1>
                <p className='text-sm min-[470px]:text-base sm:text-lg font-medium leading-relaxed text-white opacity-80'>
                Pembudidaya tidak perlu melakukan sinkronisasi data pakan secara manual. Data pakan akan diperbarui secara otomatis dan hampir real time di dashboard aplikasi.
                </p>
              </div>
            </div>
            <div className='cobox cobox3 absolute translate-y-[120%] xl:translate-y-[115%] flex justify-start items-start text-left space-x-2 xl:space-x-8 h-[250px] xl:h-[230px] bg-efi_mildBlue w-full rounded-lg py-4 xl:py-8 px-2 md:px-4 xl:px-8'>
              <h1 className='text-efi_gold text-3xl min-[470px]:text-4xl sm:text-5xl lg:text-7xl font-bold'>03</h1>
              <div className='flex flex-col justify-start'>
                <h1 className='text-base min-[470px]:text-lg sm:text-2xl lg:text-2xl font-bold text-white leading-1 xl:leading-9 mb-2 w-[90%] min-[470px]:w-[80%] md:w-[70%] xl:w-[50%]'>Pengaturan dari Mana Saja di dalam Area Budidaya</h1>
                <p className='text-sm min-[470px]:text-base sm:text-lg font-medium leading-relaxed text-white opacity-80'>
                Control box eFeeder 5 bisa tersambung dengan internet dan dapat diatur di mana saja selama masih di area tambak atau kolam.
                </p>
              </div>
            </div>
            <div className='cobox cobox4 absolute translate-y-[125%] xl:translate-y-[120%] flex justify-start items-start text-left space-x-2 xl:space-x-8 h-[250px] xl:h-[230px] bg-efi_blueFarm w-full rounded-lg py-4 xl:py-8 px-2 md:px-4 xl:px-8'>
              <h1 className='text-efi_gold text-3xl min-[470px]:text-4xl sm:text-5xl lg:text-7xl font-bold'>04</h1>
              <div className='flex flex-col justify-start'>
                <h1 className='text-base min-[470px]:text-lg sm:text-2xl lg:text-2xl font-bold text-white leading-1 xl:leading-9 mb-2 w-[90%] min-[470px]:w-[80%] md:w-[70%] xl:w-[50%]'>Pemberitauan Kerusakan akan Muncul di Aplikasi</h1>
                <p className='text-sm min-[470px]:text-base sm:text-lg font-medium leading-relaxed text-white opacity-80'>
                Notifikasi kerusakan yang hampir real time membuat Pembudidaya dapat memonitor kondisi eFeeder 5 melalui aplikasi di handphone.
                </p>
              </div>
            </div>
            <div className='cobox cobox5 absolute translate-y-[130%] xl:translate-y-[125%] flex justify-start items-start text-left space-x-2 xl:space-x-8 h-[250px] xl:h-[230px] bg-efi_mailGreen w-full rounded-lg py-4 xl:py-8 px-2 md:px-4 xl:px-8'>
              <h1 className='text-efi_gold text-3xl min-[470px]:text-4xl sm:text-5xl lg:text-7xl font-bold'>05</h1>
              <div className='flex flex-col justify-start'>
                <h1 className='text-base min-[470px]:text-lg sm:text-2xl lg:text-2xl font-bold text-darkGray leading-1 xl:leading-9 mb-2 w-[90%] min-[470px]:w-[80%] md:w-[70%] xl:w-[50%]'>2x Lebih Tahan Lama</h1>
                <p className='text-sm min-[470px]:text-base sm:text-lg font-medium leading-relaxed text-darkGray opacity-80'>
                Komponen seperti soket, listrik internal, dan lainnya yang lebih tahan lama serta minim potensi kerusakan, sehingga durasi penggunaan bisa menjadi lebih lama.
                </p>
              </div>
            </div>
            <div className='cobox cobox6 absolute translate-y-[135%] xl:translate-y-[130%] flex justify-start items-start text-left space-x-2 xl:space-x-8 h-[250px] xl:h-[230px] bg-efi_lightGreen w-full rounded-lg py-4 xl:py-8 px-2 md:px-4 xl:px-8'>
              <h1 className='text-efi_gold text-3xl min-[470px]:text-4xl sm:text-5xl lg:text-7xl font-bold'>06</h1>
              <div className='flex flex-col justify-start'>
                <h1 className='text-base min-[470px]:text-lg sm:text-2xl lg:text-2xl font-bold text-darkGray leading-1 xl:leading-9 mb-2 w-[90%] min-[470px]:w-[80%] md:w-[70%] xl:w-[50%]'>Peningkatan Penggunaan Control Box</h1>
                <p className='text-sm min-[470px]:text-base sm:text-lg font-medium leading-relaxed text-darkGray opacity-80'>
                Pengaturan juga bisa dilakukan secara manual melalui control box tanpa harus melalui aplikasi. Hal ini dikarenakan adanya layar pada control box eFeeder 5.
                </p>
              </div>
            </div>
            <div className='cobox cobox7 absolute translate-y-[140%] xl:translate-y-[125%] flex justify-start items-start text-left space-x-2 xl:space-x-8 h-[250px] xl:h-[250px] bg-efi_freshGreen w-full rounded-lg py-4 xl:py-8 px-2 md:px-4 xl:px-8'>
              <h1 className='text-efi_gold text-3xl min-[470px]:text-4xl sm:text-5xl lg:text-7xl font-bold'>07</h1>
              <div className='flex flex-col justify-start'>
                <h1 className='text-base min-[470px]:text-lg sm:text-2xl lg:text-2xl font-bold text-darkGray leading-1 xl:leading-9 mb-2 w-[90%] min-[470px]:w-[80%] md:w-[70%] xl:w-[50%]'>Tenaga Surya + Baterai <br/> Sebagai Sumber Energi*</h1>
                <p className='text-sm min-[470px]:text-base sm:text-lg font-medium leading-relaxed text-darkGray opacity-80'>
                Solusi bagi Pembudidaya yang memiliki kolam atau tambak budidaya yang lokasinya jauh dari sumber listrik. eFeeder dapat berjalan dengan tenaga surya dan baterai. <br/> *Dijual terpisah. 
                </p>
              </div>
            </div>
            {/* <div className='cobox h-[230px]'></div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
