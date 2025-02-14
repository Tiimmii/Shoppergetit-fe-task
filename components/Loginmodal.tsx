"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import GoogleLoginModal from './GoogleLoginModal';
import ManualLoginModal from './ManualLoginModal';


const Loginmodal = () => {
    const [googleLoginModal, setGoogleLoginModal] = useState(true);
    return (
        <div className='login-modal p-10'>
            {googleLoginModal? <GoogleLoginModal setGoogleLoginModal={setGoogleLoginModal}/>: <ManualLoginModal setGoogleLoginModal={setGoogleLoginModal}/>}
        </div>
    )
}

export default Loginmodal
