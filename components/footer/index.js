import { Divider } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { Fade } from 'react-reveal'

function Footer() {
  return (
    <Fade bottom>
      <div className='w-full bg-green px-3 px-md-5 pt-3 text-white'>
        <div className='row space-y-5 md:space-y-0 pb-3'>
          <div className='col-md-4'>
            <p className='text-xl font-bold'>Latest News</p>
            <Link href="/update" className='block'>Election Update</Link>
            <Link href="/candidate" className='block'>Candidates</Link>
            <Link href="/polling_unit" className='block'>Polling Units</Link>
          </div>
          <div className='col-md-4'>
            <p className='text-xl font-bold'>Media and Events</p>
            <Link href="/news" className='block'>How to vote</Link>
          </div>
          <div className='col-md-4 space-y-3'>
            <div>
              <p className='text-xl font-bold'>Follow Us</p>
              <div className='flex items-center space-x-2'>
                <Link href="/" className=''>Facebook</Link>
                <Divider orientation='vertical' flexItem />
                <Link href="/" className=''>Twitter</Link>
                <Divider orientation='vertical' flexItem />
                <Link href="/" className=''>Instagram</Link>
              </div>
            </div>
            <div>
              <p className='text-xl font-bold'>Contact Us</p>
              <div className=''>
                <Link href="tel:+2348010004523" className=''>+234 8010004523</Link>
              </div>
            </div>
          </div>
        </div>
        <Divider />
        <div className='text-center py-2'>
          <p>(c) {new Date().getFullYear()} All Progressives Congress Lagos West 1 </p>
        </div>
      </div>
    </Fade>
  )
}

export default Footer