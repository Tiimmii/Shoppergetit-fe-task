"use client";
import GoogleLoginModal from './GoogleLoginModal';
import ManualLoginModal from './ManualLoginModal';
import { useLoginContext } from './LoginContext';


const Loginmodal = () => {
    const { googleLoginModal, setGoogleLoginModal } = useLoginContext();
    return (
        <div className='login-modal p-10'>
            {googleLoginModal? <GoogleLoginModal setGoogleLoginModal={setGoogleLoginModal}/>: <ManualLoginModal setGoogleLoginModal={setGoogleLoginModal}/>}
        </div>
    )
}

export default Loginmodal
