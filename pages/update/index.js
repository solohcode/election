import Image from 'next/image'
import React from 'react'
import { Bounce } from 'react-reveal'
import apc from 'images/logo.png'
import apc_shape from 'images/apc_shape.png'
import pdp from 'images/pdp.png'
import pdp_shape from 'images/pdp_shape.png'
import lp from 'images/lp.png'
import lp_shape from 'images/lp_shape.png'
import prp from 'images/prp.png'

import ballot from 'images/ballot.png'

function Update() {
  const updates = [
    {
      id: 1,
      candidate: "Asiwaju Bola Tinubu",
      result: "300,000,000",
      logo: apc,
      bg: "bg-[#51C2E7]",
      shape: apc_shape
    },
    {
      id: 2,
      candidate: "Atiku Abubakar",
      result: "300,000,000",
      logo: pdp,
      bg: "bg-[#008F4F]",
      shape: pdp_shape
    },
    {
      id: 3,
      candidate: "Peter Obi",
      result: "300,000,000",
      logo: lp,
      bg: "bg-[#FF0000]",
      shape: lp_shape
    },
  ]
  return (
    <div className='w-full py-28'>
      <div className='container-sm'>
        <div>
          <p className='text-xl font-bold text-green'>2023 Election Result</p>
          <span className='p-1 text-2xl font-bold text-white bg-red'>Presidential </span>
        </div>
        <div className='row space-y-5 md:space-y-0 md:px-20'>
          {updates.map((val)=>(
            <div className='col-md-4' key={val.id}>
              <Bounce bottom>
                <div className=''>
                  <div className='container-sm relative min-h-[100px] md:min-h-[150px]'>
                    <div className='absolute left-3 bottom-1 z-10'>
                      <Image alt={val.candidate} src={val.logo} className="img-fluid w-[70px]" />
                    </div>
                    <div className={`container-sm absolute left-0 right-0 bottom-0 ${val.bg} flex justify-end py-2`}>
                      <p className='font-bold text-base md:text-base text-white'>{val.candidate}</p>
                    </div>
                  </div>
                  <div className='w-full relative h-[100px] text-center '>
                    <Image alt={val.candidate} src={val.shape} className="img-fluid w-full h-[110%] absolute left-0 right-0" />
                    <p className='font-bold text-3xl'>{val.result}</p>
                  </div>
                  <div className='w-full'>
                    <Image alt='ballot' src={ballot} className="img-fluid mx-auto" />
                  </div>
                </div>
              </Bounce>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full sm:flex items-center py-10'>
        <div className='w-full sm:w-[20%] py-2 px-3 text-center bg-gradient-to-br from-red to-dark_red sm:rounded-r-3xl'>
          <p className='text-white text-lg font-bold'>Other Political Parties</p>
        </div>
        <div className='w-full sm:w-full overflow-x-auto px-3'>
          <div className='w-[200px] inline'>
            <Image alt='' src={prp} className="img-fluid w-[100px]" />
            <p className='text-3xl font-bold'>300,000,000</p>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Update