"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Header = () => {
    const [active, setActive] = useState<string|undefined>("")
    const [activeMobileMenu, setActiveMobileMenu] = useState(false)
    useEffect(()=>{
        const currentPath = window.location.pathname.split("/").filter(Boolean).pop();
        if (currentPath !== "undefined") {
               setActive(currentPath)
        }
        else{
            setActive("")
        }
    })
    const handleItemClick = (item: any) => {
        setActive(item);
    };
    return (
        <nav className='sticky top-0 z-50 w-full bg-header p-2 flex sm:justify-between md:justify-between h-[5rem] items-center'>
            <div className='md:mx-5 desktop-navbar-item'>
                <Image
                    src='/images/shoppergetit_logo.png'
                    width={55}
                    height={30}
                    alt='shoppergetit logo'
                />
            </div>
            <div className='desktop-navbar-item flex sm:gap-2 md:gap-4 items-center md:pl-[2rem] lg:pl-[16rem]'>
                <Image
                    src={'/images/location_vector.png'}
                    alt='location'
                    width={12}
                    height={5}
                    className='location-icon'
                />
                <p className='header-text'>Abuja</p>
            </div>
            <div className='desktop-navbar-item flex gap-6 pr-5'>
                <div className='nav-links flex gap-5 items-center justify-evenly'>
                    <Link
                        href={"/store"}
                        className={`relative ${active === "store" ? " active" : ""}`}
                        onClick={() => handleItemClick("store")}
                    >
                        <span>Store</span>
                    </Link>
                    <Link
                        href={"/log-in"}
                        className={`relative ${active === "log-in" ? " active" : ""}`}
                        onClick={() => handleItemClick("log-in")}
                    >
                        <span>login</span>
                    </Link>
                </div>
                <Link href={'/store'}>
                    <button className='bg-button_primary text-white p-4 rounded-xl' onClick={()=>handleItemClick("")}>
                        <span className='shopper-button'>Become a Shopper</span>
                    </button>
                </Link>
            </div>
            <div className='mobile-navbar-item'>
                <button className='flex items-center gap-4 absolute top-6 right-8 text-[#52508A] text-[24px]' onClick={()=>setActiveMobileMenu(!activeMobileMenu)}>
                    <Image
                        src={"/images/user-profile.png"}
                        alt='user profile'
                        width={45}
                        height={40}
                    />
                    <IoMenu/>
                </button>
            </div>
        </nav>
    )
}

export default Header
