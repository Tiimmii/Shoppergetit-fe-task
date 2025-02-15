"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    const [active, setActive] = useState("")
    const handleItemClick = (item: any) => {
        setActive(item);
    };
    return (
        <nav className='sticky top-0 z-50 w-full bg-header p-2 flex justify-between items-center'>
            <div className='md:mx-5'>
                <Image
                    src='/images/shoppergetit_logo.png'
                    width={55}
                    height={30}
                    alt='shoppergetit logo'
                />
            </div>
            <div className='flex sm:gap-2 md:gap-4 items-center md:pl-[2rem] lg:pl-[16rem]'>
                <Image
                    src={'/images/location_vector.png'}
                    alt='location'
                    width={12}
                    height={5}
                    className='location-icon'
                />
                <p className='header-text'>Abuja</p>
            </div>
            <div className='flex gap-6 pr-5'>
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
                        className={`relative ${active === "login" ? " active" : ""}`}
                        onClick={() => handleItemClick("login")}
                    >
                        <span>login</span>
                    </Link>
                </div>
                <Link href={'/store'}>
                    <button className='bg-button_primary text-white p-4 rounded-xl'>
                        <div className='sm:block md:hidden text-[24px]'>
                            <FaShoppingCart />
                        </div>
                        <span className='shopper-button hidden md:block'>Become a Shopper</span>
                    </button>
                </Link>

            </div>
        </nav>
    )
}

export default Header
