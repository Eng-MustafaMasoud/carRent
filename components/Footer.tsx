import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='footer max-width '>
      <div className="footer__links-container ">
        <div className="  flex-1  flex flex-col gap-4">

        <Link href="/" className="flex items-center">
          <Image src="/car-logo.png" alt="logo" width={70} height={18}/>
          <span className='font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-[#E1862C]'>Automobile</span>
          </Link>
          <div className="">

          <p className='text-xs text-grey'>Automobile 2024</p>
          <p className='text-xs text-grey'> All rights reserved &copy;</p>
          </div>
        </div>
        <div className=" flex gap-6 flex-1 justify-between flex-wrap ">

          <ul className='flex flex-col gap-2 capitalize'>
            <h6 className='font-bold mb-4'>About</h6>
            <li className='text-grey text-sm'> How it works</li>
            <li className='text-grey text-sm'> Featured</li>
            <li className='text-grey text-sm'> partnership</li>
            <li className='text-grey text-sm'>business relation</li>
          </ul>
          <ul className='flex flex-col gap-2 capitalize'>
            <h6 className='font-bold mb-4'>Company</h6>
            <li className='text-grey text-sm'> Events</li>
            <li className='text-grey text-sm'> Blog</li>
            <li className='text-grey text-sm'> Podcast</li>
            <li className='text-grey text-sm'>invite a friend </li>
          </ul>
          <ul className='flex flex-col gap-2 capitalize'>
            <h6 className='font-bold mb-4'>Socials</h6>
            <li className='text-grey text-sm'> Discord</li>
            <li className='text-grey text-sm'> instagram</li>
            <li className='text-grey text-sm'> twitter</li>
            <li className='text-grey text-sm'>facebook </li>
          </ul>

        </div>
      </div>
      <div className="footer__copyrights  w-full max-sm:flex-col">
        <div className="footer__copyrights-link ">

        <p className=" text-grey text-sm w-full ">
          @2024 Automobile. All rights reserved
        </p>
        </div>
        <div className="footer__copyrights-link w-full flex-wrap">
          <p className=' text-grey text-sm'>Privacy&Policy</p>
          <p className=' text-grey text-sm'>Terms&Condition</p>
        </div>

      </div>
      
    </footer>
  )
}

export default Footer