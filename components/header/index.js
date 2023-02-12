// import Link from 'next/link'
import React from 'react'
import logo from 'images/logo.png'
import Image from 'next/image'
import { Navbar } from 'flowbite-react'

function Header() {
  return (
    <div className='w-100 border-b-4 bg-white'>
      <Navbar
        fluid={true}
        rounded={true}
        className="container-sm"
      >
        <Navbar.Brand to="/" href='/'>
          <Image
            src={logo}
            alt="Logo"
            className="w-[80px]"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/update" className='font-bold border-0'>
            Election Update +
          </Navbar.Link>
          <Navbar.Link href="/candidate" className='font-bold border-0'>
            Candidates+
          </Navbar.Link>
          <Navbar.Link href="/auth/login" className='font-bold border-0'>
            Sign In
          </Navbar.Link>
          <Navbar.Link
            href="/auth/register"
            className="w-[100px] font-bold border-0 hover:opacity-60 text-center rounded-full bg-gradient-to-br from-red to-dark_red text-white"
          >
            Sign Up
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header