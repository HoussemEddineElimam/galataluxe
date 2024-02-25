import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'

const Header = () => {
  return (
    <header style={{color:"white"}}>
        <nav>
            <div className='navbar justify-between bg-base-300'>
              
                <Link href="/" className='btn btn-ghost text-lg'> <Image alt="logo" src={"/images/galata-logo.jpg"} width={50} height={50}  /> </Link>
                <Menu/>
            </div>
        </nav>
        

    </header>
  )
}

export default Header