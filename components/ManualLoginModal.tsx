import React from 'react'
import ManualLoginForm from './ManualLoginForm';


const ManualLoginModal = ({ setGoogleLoginModal }: LoginModalProps) => {
    return (
        <>
            <div className='md:mt-[-1rem] lg:my-2'>
                <h1 className='lg:mb-2'>Log in</h1>
            </div>
            <ManualLoginForm setGoogleLoginModal={setGoogleLoginModal} text='Click' className=' mr-auto rounded-full'/>
        </>
    )
}

export default ManualLoginModal
