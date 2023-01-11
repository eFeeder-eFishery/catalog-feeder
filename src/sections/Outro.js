import React from 'react'
import logo from '../assets/logo-efishery.png';

export default function Outro() {
  return (
    <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-efi_mailGreen to-efi_lightGreen py-12 lg:py-24 xl:py-36'>
      <div className='flex flex-col items-center justify-center space-y-0.5 sm:space-y-2'>
        <h1 className='text-4xl min-[470px]:text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-efi_darkGreen to-efi_mildGreen'>eFeeder 5</h1>
        <div className='flex items-center space-x-2 pb-1 md:pb-2 lg:pb-4'>
            <span className='text-sm min-[470px]:text-lg lg:text-2xl font-bold text-efi_green'>by</span><img className='h-[23px] min-[470px]:h-[27px] lg:h-[36px]' src={logo} alt='eFishery'></img>
        </div>
        <p className='py-2 px-6 lg:px-12 text-xs min-[470px]:text-sm lg:text-base xl:text-lg font-semibold bg-efi_gold text-black rounded-full cursor-pointer hover:bg-efi_lightGold'>Order Sekarang</p>
      </div>
    </div>
  )
}
