"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

const Header = () => {
    const [active, setActive] = useState("")
    const handleItemClick = (item:any) => {
        setActive(item);
    };
  return (
    <nav className='sticky top-0 z-50 w-full bg-header p-2 flex justify-end items-center gap-[15rem]'>
        <div className='flex gap-4 items-center'>
            <Image
                src={'/images/location_vector.png'}
                alt='location'
                width={12}
                height={5}
                className='location-icon'
            />
            <p className='header-text'>Abuja</p>
        </div>
        <div className='flex gap-6 mr-5'>
            <div className='nav-links flex gap-5 items-center justify-center'>
                <Link
                    href={"/store"}
                    className={`relative ${active==="store"?" active":""}`}
                    onClick={()=>handleItemClick("store")}
                >
                    <span>Store</span>
                </Link>
                <Link
                    href={"/log-in"}
                    className={`relative ${active==="login"?" active":""}`}
                    onClick={()=>handleItemClick("login")}
                >
                    <span>login</span>
                </Link>
            </div>
            <button className='bg-button_primary text-white p-4 rounded-xl'>
                <span className='shopper-button'>Become a Shopper</span>
            </button>
        </div>
    </nav>
  )
}

export default Header
