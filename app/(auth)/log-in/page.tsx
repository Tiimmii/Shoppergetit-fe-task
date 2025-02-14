import Loginmodal from '@/components/Loginmodal'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='main-content'>
      <div className='p-4 rounded-xl flex flex-1'>
        <img
            src={"/images/clothes_with_sofa.png"}
            alt='Sofa with clothes'
            style={{objectFit: "contain", width: "100%", height: "100%"}}
        />
      </div>
      <Loginmodal/>
    </div>
  )
}

export default page
