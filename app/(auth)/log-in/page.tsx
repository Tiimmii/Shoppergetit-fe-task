import { LoginProvider } from '@/components/LoginContext';
import Loginmodal from '@/components/Loginmodal'
import MobileLoginModal from '@/components/MobileLoginModal';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const page = () => {
    const footerData = ["About", "Products", "Privacy", "Terms", "SME", "+234 927370584", "support@test.com"]
    return (
        <LoginProvider>
            <div className='main-content'>
                <h1 className='welcome-back sm:block md:hidden p-5'>Welcome back</h1>
                <div className='p-4 rounded-xl flex flex-1'>
                    <img
                        src={"/images/clothes_with_sofa.png"}
                        alt='Sofa with clothes'
                        style={{ objectFit: "contain", width: "100%", height: "100%" }}
                        className='hidden md:block'
                    />
                    <img
                        src={"/images/clothes_with_sofa_mobile_view.png"}
                        alt='Sofa with clothes'
                        style={{ objectFit: "contain", width: "100%", height: "100%" }}
                        className='sm:block md:hidden'
                    />
                </div>
                <Loginmodal />
                <div className='sm:block md:hidden'>
                    <MobileLoginModal />
                </div>
                <footer className='sm:block md:hidden footer-bottom p-3 text-[14px] text-gray-500'>
                    {footerData.map((data, i)=>(
                        <Link
                            href={"#"}
                            key={data}
                        >
                            <span>{data}</span>
                        </Link>
                    ))}
                </footer>
            </div>
        </LoginProvider>
    )
}

export default page
