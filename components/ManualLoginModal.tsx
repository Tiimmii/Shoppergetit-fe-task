import React from 'react'
import { IoMdSwap } from "react-icons/io";


interface LoginModalProps {
    setGoogleLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ManualLoginModal = ({ setGoogleLoginModal }: LoginModalProps) => {
    return (
        <>
            <div className='my-2'>
                <h1 className='mb-2'>Log in</h1>
            </div>
            <form className='flex flex-col gap-3'>
                <div className='flex flex-col gap-4'>
                    <input className="form-input" type='email' placeholder='name@email.com' required />
                    <input className="form-input" type='password' placeholder='please enter password' required />
                </div>
                <a href='#'><span className='text-[13px]'>Forgot Password?</span></a>
                <div className='bg-black mr-auto py-2 px-6 rounded-full my-2'>
                    <span className='!text-white'>Proceed</span>
                </div>
            </form>
            <div className='flex mt-2 items-center gap-1 cursor-pointer' onClick={() => setGoogleLoginModal(true)}>
                <IoMdSwap />
                <span>Click to login with google</span>
            </div>
        </>
    )
}

export default ManualLoginModal
