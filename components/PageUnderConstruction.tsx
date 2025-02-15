import Image from 'next/image'
import React from 'react'

const PageUnderConstruction = () => {
  return (
    <div className='flex w-full items-center justify-center'>
      <Image
        src={"/under_construction.svg"}
        alt='under construction'
        fill
      />
      <h1 className='text-center text-[40px] z-10'>Page Under Construction Come Back Soon!</h1>
    </div>
  )
}

export default PageUnderConstruction
