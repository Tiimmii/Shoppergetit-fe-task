import { LoginProvider } from '@/components/LoginContext';
import Loginmodal from '@/components/Loginmodal'
import MobileLoginModal from '@/components/MobileLoginModal';
import Image from 'next/image'
import React from 'react'

const page = () => {
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
                <MobileLoginModal/>
            </div>
        </div>
        </LoginProvider>
    )
}

export default page
