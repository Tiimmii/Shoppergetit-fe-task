import React from 'react'
import Image from 'next/image'
import { IoMdSwap } from "react-icons/io";

interface LoginModalProps {
    setGoogleLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
}


const GoogleLoginModal = ({ setGoogleLoginModal }: LoginModalProps) => {
    return (
        <>
            <div className='my-4'>
                <h1 className='mb-2'>Welcome back</h1>
                <span className='mb-4'>Login Using:</span>
            </div>
            <button className='flex border-[1px] border-border_gray rounded-full p-3 w-full justify-center items-center gap-2 my-8'>
                <Image
                    src={"/images/google-logo.png"}
                    alt='google logo'
                    width={25}
                    height={25}
                />
                <p>Login with Google</p>
            </button>
            <div className='flex mt-4 mb-20 items-center gap-1 cursor-pointer' onClick={()=>setGoogleLoginModal(false)}>
                <IoMdSwap />
                <span>Click to switch to manual</span>
            </div>
        </>
    )
}

export default GoogleLoginModal
