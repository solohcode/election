import React, { useState } from 'react'
import { Fade } from 'react-reveal'
import slider from 'images/slider.png'
import Image from 'next/image'
import Header from '@/components/header'
import { connect } from 'react-redux'
import { login } from '@/store/auth/action'
import Link from 'next/link'
// import { Form, Input } from 'antd'

const Login = ({loading, dispatch}) => {
	const [data, setData] = useState({
    email: '',
    password: ''
  })

	const handleChange  = (e) => {
    const {value, name} = e.target;
    setData((d) => ({...d, [name] : value}))
	}

  const handleSubmit = () => {
    if (data.email !== '' && data.password !== '')
      dispatch(login({ value: data, admin: "admin" }))
  }

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
          <span className='title'>Login</span>
        </div>
        <hr />
        <p className='description'>
          Enter your details to login.
        </p>
        <div className='input-groups'>
          <label>Email</label>
          <input
            placeholder='Enter your email'
            type='email'
            onChange={handleChange}
            name='email'
            required
          />
        </div>
        <div className='input-groups'>
          <label>Password</label>
          <input
            placeholder='Enter a password'
            type='password'
            onChange={handleChange}
            name='password'
            required
          />
        </div>
        <button className='submit-btn' onClick={handleSubmit}>
          {loading? 'Loading...':'LOG IN'}
        </button>
        <p>I dont have an account?<Link href='/auth/register' style={{color: 'red'}}> Sign up</Link></p>
      </div>
		</>
  )
}

const mapStateToProps = ({ dispatch, auth }) => ({
	dispatch,
	loading: auth.loading,
	show: auth.show
})

export default connect(mapStateToProps)(Login)