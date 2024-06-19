import React from 'react'
import logo from '../assets/test.png'
import Image from 'next/image'
const Logo = () => {
  return (
    <div>
        <Image src={logo} width={'30'} alt='ads'/>
    </div>
  )
}

export default Logo