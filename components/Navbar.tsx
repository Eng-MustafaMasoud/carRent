"use client";

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Navbar = () => {
  const handelAuth=()=>{

  }
  return (
    <header className='w-full absolute z-10'>
        <nav className='flex justify-between  max-width padding-x padding-y'>
            <Link href="/" className="flex items-center">
                
            <Image src="/car-logo.png" alt="logo" width={70} height={18} className="object-contain " />
            
            <span className="text-2xl max-sm:text-[16px] font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-[#E1862C]">Automobile</span>
            </Link>
          <CustomButton
            title="Sign in"
            containerStyles='text-primary-blue bg-white rounded-full '
            handleClick={handelAuth}
            btnType="button"
          />
        </nav>
        
    </header>
  )
}

export default Navbar