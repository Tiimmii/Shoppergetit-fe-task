import React from 'react'
import { IoMdSwap } from "react-icons/io";

const ManualLoginForm = ({setGoogleLoginModal, text, className}: LoginModalProps) => {
    return (
        <>
            <form className='flex flex-col gap-3'>
                <div className='flex flex-col gap-4'>
                    <input className={`form-input ${text === "Tap"? " w-[100%]": " w-[85%]"}`} type='email' placeholder='name@email.com' required />
                    <input className={`form-input ${text === "Tap"? " w-[100%]": " w-[85%]"}`} type='password' placeholder='please enter password' required />
                </div>
                <a href='#'><span className='text-[13px] text-gray-400'>Forgot Password?</span></a>
                <div className={`bg-black py-2 px-6 my-2`+ className}>
                    <span className='!text-white'>Proceed</span>
                </div>
            </form>
            <div className='flex mt-2 items-center gap-1 cursor-pointer' onClick={() => setGoogleLoginModal(true)}>
                <IoMdSwap />
                <span className='text-gray-500'>{text} to login with google</span>
            </div>
        </>
    )
}

export default ManualLoginForm
