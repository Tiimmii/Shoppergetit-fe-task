"use client";
import React from 'react'
import { useLoginContext } from './LoginContext';
import Image from 'next/image';
import { IoMdSwap } from "react-icons/io";
import ManualLoginForm from './ManualLoginForm';

const MobileLoginModal = () => {
    const { googleLoginModal, setGoogleLoginModal } = useLoginContext();
    return (
        <>
            {googleLoginModal ? (
                <div className='mb-[10rem]'>
                    <div className='flex flex-col justify-center items-center'>
                        <button className='flex border-[1px] border-border_gray rounded-full p-4 w-[90%] justify-center items-center gap-4 my-3'>
                            <Image
                                src={"/images/google-logo.png"}
                                alt='google logo'
                                width={25}
                                height={25}
                            />
                            <p>Login with Google</p>
                        </button>
                    </div>
                    <div className='flex px-4 items-center gap-1 cursor-pointer' onClick={()=>setGoogleLoginModal(false)}>
                        <IoMdSwap />
                        <span className='text-gray-500'>Tap to switch to manual</span>
                    </div>
                </div>
            ) :
                <div className='flex flex-col justify-center mx-6 mb-[3rem]'>
                    <ManualLoginForm setGoogleLoginModal={setGoogleLoginModal} text='Tap' className=' rounded-md text-center'/>
                </div>
            }
        </>
    )
}

export default MobileLoginModal
