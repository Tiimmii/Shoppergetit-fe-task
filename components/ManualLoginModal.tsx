import React from 'react'
import ManualLoginForm from './ManualLoginForm';


const ManualLoginModal = ({ setGoogleLoginModal }: LoginModalProps) => {
    return (
        <>
            <div className='my-2'>
                <h1 className='mb-2'>Log in</h1>
            </div>
            <ManualLoginForm setGoogleLoginModal={setGoogleLoginModal} text='Click' className=' mr-auto rounded-full'/>
        </>
    )
}

export default ManualLoginModal
