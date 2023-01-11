import React from 'react'
import logo from '../assets/logo-white.png'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { GrLinkedinOption } from 'react-icons/gr'
import { FaFacebookF } from 'react-icons/fa'
import gplay from '../assets/google-play.png';


export default function Footer() {
  return (
    <footer className='flex flex-col justify-between px-8 px-6 lg:px-12 xl:px-36 py-2 md:py-4 lg:py-10 space-y-8 bg-efi_mildGreen text-white text-sm lg:text-base'>
      <div className='flex flex-col md:flex-row justify-between md:space-x-2 lg:space-x-8 xl:space-x-16 text-left'>
        <div className='md:space-y-4 w-full md:w-[30%]'>
          <img className='h-[36px]' src={logo} alt='eFishery'/>
          <p className='mt-4 md:mt-0 text-efi_gold font-semibold'>PT Multidaya Teknologi Nusantara</p>
          <p>Jl. Bukit Pakar Timur IV No.Kav. B1, Ciburial, Kec. Cimenyan, Kabupaten Bandung, Jawa Barat 40254</p>
        </div>
        <div className='flex flex-col md:space-y-2 md:w-[17%]'>
          <p className='mt-4 md:mt-0 text-efi_gold font-semibold text-sm'>Company</p>
          <a href='https://efishery.com/about_us/' className='cursor-pointer hover:font-bold'>About eFIshery</a>
          <a href='https://efishery.com/blog/' className='cursor-pointer hover:font-bold'>Blog</a>
          <a href='https://efishery.com/contact/' className='cursor-pointer hover:font-bold'>Hubungi kami</a>
          <a href='https://efishery.com/term-conditions/' className='cursor-pointer hover:font-bold'>Syarat & ketentuan</a>
          <a href='https://efishery.com/pertanyaan-yang-sering-ditanyakan-faq/' className='cursor-pointer hover:font-bold'>FAQ</a>
        </div>
        <div className='flex flex-col md:space-y-2 md:w-[30%]'>
          <p className='mt-4 md:mt-0 text-efi_gold font-semibold text-sm'>Products</p>
          <a href='https://efishery.com/products/solusi-untuk-pembudidaya-ikan/' className='cursor-pointer hover:font-bold'>Solusi untuk Pembudidaya  Ikan</a>
          <a href='https://efishery.com/products/efarm-solusi-untuk-para-pembudidaya-udang/' className='cursor-pointer hover:font-bold'>Solusi untuk Pembudidaya Udang</a>
          <a href='https://efishery.com/products/efishery-efresh-tempat-jual-ikan-segar-langsung-petani/' className='cursor-pointer hover:font-bold'>Solusi untuk Pembeli dan Pedagang</a>
        </div>
        <div className='flex flex-col md:space-y-8 md:w-[20%]'>
          <div className='mt-4 md:mt-0 xl:ml-4 space-y-2'>
            <p className='text-efi_gold font-semibold text-sm'>Follow Us</p>
            <div className='flex flex-row md:space-x-2 lg:space-x-4'>
              <a href='https://www.instagram.com/efishery' className='p-3 md:p-2 xl:p-3 bg-black rounded-full md:text-lg text-xl xl:text-xl cursor-pointer hover:bg-darkGray'><BsInstagram/></a>
              <a href='https://twitter.com/efishery_ai' className='p-3 md:p-2 xl:p-3 bg-black rounded-full md:text-lg text-xl xl:text-xl cursor-pointer hover:bg-darkGray'><BsTwitter/></a>
              <a href='https://www.linkedin.com/company/efisheryid/' className='p-3 md:p-2 xl:p-3 bg-black rounded-full md:text-lg text-xl xl:text-xl cursor-pointer hover:bg-darkGray'><GrLinkedinOption/></a>
              <a href='https://www.facebook.com/efishery.id/' className='p-3 md:p-2 xl:p-3 bg-black rounded-full md:text-lg text-xl xl:text-xl cursor-pointer hover:bg-darkGray'><FaFacebookF/></a>
            </div>
          </div>
          <div>
            <p className='text-efi_gold font-semibold text-sm mt-4 md:mt-0 xl:ml-4'>Donwload Our Apps</p>
            <img className='cursor-pointer' src={gplay} alt='eFishery'></img>
          </div>
        </div>
      </div>
      <p className='text-xs'>©2023 eFishery | eFishery is a trademark of PT Multidaya Teknologi Nusantara</p>
    </footer>
  )
}
