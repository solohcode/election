import React, { useState } from 'react'
import { Fade } from 'react-reveal'
import slider from 'images/slider.png'
import Image from 'next/image'
import Header from '@/components/header'
// import { Form, Input } from 'antd'

const Register = () => {


  return (
		<>
			<Header />
			<div className='w-full'>
				<Fade big>
					<div className='w-full'>
						<Image alt='vote' src={slider} className="w-full h-screen" />
					</div>
				</Fade>
			</div>
      <div className="auth-modal-card">
        <div>
          <span className='title'>Sign Up</span>
        </div>
        <hr />
        <p className='description'>
          Enter your details to sign up.  Sign up  with the name that matches your bank details
        </p>
        <div className='input-groups'>
          <label>Full Name</label>
          <input placeholder='Your name here (Surname,firstname and othername' />
        </div>
        <div className='input-groups'>
          <label>Email</label>
          <input placeholder='Enter your email' />
        </div>
        <div className='input-groups'>
          <label>Phone Number</label>
          <input placeholder='Enter your phone number' />
        </div>
        <div className='input-groups'>
          <label>Password</label>
          <input placeholder='Enter a password' />
        </div>
        <div className='input-groups'>
          <label>COnfirm Password</label>
          <input placeholder='Re-enter a password' />
        </div>
        <button className='submit-btn'>Create Account</button>
        <p>Already have an account?<span style={{color: 'red'}}> Log in</span></p>
      </div>
		</>
  )
}

export default Register