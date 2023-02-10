import Image from 'next/image'
import React from 'react'
import { Bounce, Fade } from 'react-reveal'
import apc from 'images/logo.png'
import apc_shape from 'images/apc_shape.png'
import pdp from 'images/pdp.png'
import pdp_shape from 'images/pdp_shape.png'
import lp from 'images/lp.png'
import lp_shape from 'images/lp_shape.png'
import prp from 'images/prp.png'
import nnpp from 'images/nnpp.png'

import ballot from 'images/ballot.png'
import { FiArrowUpRight } from 'react-icons/fi'
import Footer from '@/components/footer'
import Header from '@/components/header'

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

  const others = [
    {
      id: 1,
      logo: prp,
      result: "300,000,000"
    },
    {
      id: 2,
      logo: nnpp,
      result: "300,000,000"
    },
    {
      id: 3,
      logo: prp,
      result: "300,000,000"
    },
    {
      id: 4,
      logo: nnpp,
      result: "300,000,000"
    },
    {
      id: 5,
      logo: prp,
      result: "300,000,000"
    },
  ]

  const statistics = [
    {
      id: 1,
      bg: "bg-[#19A43E2f]",
      list: [
        {
          id: 1.1,
          logo: apc,
          result: "00,000,000"
        },
        {
          id: 1.2,
          logo: apc,
          result: "00,000,000"
        },
      ]
    },
    {
      id: 2,
      bg: "bg-[]",
      list: [
        {
          id: 2.1,
          logo: pdp,
          result: "00,000,000"
        },
        {
          id: 2.2,
          logo: apc,
          result: "00,000,000"
        },
      ]
    },
    {
      id: 3,
      bg: "bg-[#19A43E2f]",
      list: [
        {
          id: 3.1,
          logo: lp,
          result: "00,000,000"
        },
        {
          id: 3.2,
          logo: apc,
          result: "00,000,000"
        },
      ]
    },
    {
      id: 4,
      bg: "bg-[]",
      list: [
        {
          id: 4.1,
          logo: nnpp,
          result: "00,000,000"
        },
        {
          id: 4.2,
          logo: apc,
          result: "00,000,000"
        },
      ]
    },
    {
      id: 5,
      bg: "bg-[#19A43E2f]",
      list: [
        {
          id: 5.1,
          logo: prp,
          result: "00,000,000"
        },
        {
          id: 5.2,
          logo: apc,
          result: "00,000,000"
        },
      ]
    },
  ]

  const StatBallot = ({logo, result}) => (
    <div className='w-full md:w-[70%] mx-auto flex items-end'>
      <div className='w-full'>
        <div className='w-full relative h-[80px] text-center '>
          <Image alt="logo" src={logo} className="w-[40%] img-fluid mx-auto h-[110%] absolute left-0 right-0" />
        </div>
        <div className='w-full'>
          <Image alt='ballot' src={ballot} className="img-fluid mx-auto" />
        </div>
      </div>
      <div className='py-3'>
        <p className='font-bold'>TOTAL VOTES</p>
        <p className='text-xl md:text-4xl font-bold'>{result || "00,000,000"}</p>
      </div>
    </div>
  )
  return (
    <>
      <Header />
      <div className='w-full pt-28'>
        <div className='container-sm'>
          <Fade left>
            <div>
              <p className='text-xl font-bold text-green'>2023 Election Result</p>
              <span className='p-1 text-2xl font-bold text-white bg-red'>Presidential </span>
            </div>
          </Fade>
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
        <Fade bottom>
          <div className='w-full sm:flex items-center pt-10 space-y-5 md:space-y-0'>
            <div className='w-full sm:w-[20%] py-2 px-3 text-center bg-gradient-to-br from-red to-dark_red sm:rounded-r-3xl'>
              <p className='text-white text-lg font-bold'>Other Political Parties</p>
            </div>
            <div className='w-full sm:w-full flex overflow-x-auto overflow-y-hidden px-3'>
              {others.map((val)=>(
                <div className='min-w-[250px] inline' key={val.id}>
                  <Image alt='' src={val.logo} className="img-fluid w-[100px] h-[80px]" />
                  <p className='text-4xl font-bold'>{val.result}</p>
                </div>
              ))}
            </div>
          </div>  
        </Fade>
        <div className='w-full'>
          <Fade bottom>
            <div className='w-full bg-gradient-to-br from-[#2EA7CE5f] to-[#51C2E75f] py-10 text-center'>
              <p className='text-red text-3xl font-bold'>Statistical Analysis </p>
            </div>
          </Fade>
          {statistics.map((val)=>(
            <Bounce bottom key={val.id}>
              <div className={`w-full ${val.bg} py-3`}>
                <div className='container row'>
                  {val.list.map((sub)=>(
                    <div className='col-md-6' key={sub.id}>
                      <StatBallot logo={sub.logo} result={sub.result} />
                    </div>
                  ))}
                </div>
              </div>
            </Bounce>
          ))}
          <Fade bottom>
            <div className='w-full bg-gradient-to-br from-[#2EA7CE5f] to-[#51C2E75f] py-10 px-3 px-md-5 flex overflow-x-auto overflow-y-hidden'>
              {[1,2,3,4].map((val)=>(
                <div className='min-w-[350px] inline-flex space-x-3' key={val}>
                  <Image alt='logo' src={prp} className="img-fluid" />
                  <div>
                    <p className='font-bold'>TOTAL VOTES:</p>
                    <p className='text-3xl font-bold'>00,000,000</p>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
        <div className='w-full py-3'>
            <Fade>
              <p className='text-red text-2xl font-bold text-center uppercase'>Latest News</p>
            </Fade>
            <div className='container-fluid px-3 px-md-5'>
              <div className='row'>
                <div className='col-md-8'>
                  <div className='row py-5 px-3 px-md-0 md:px-0'>
                    <div className='col-md-6'>
                      <Fade bottom>
                        <div className=''>
                          <p className='text-xl font-bold py-2 border-b-2 border-green'>Election Update</p>
                          <p className='text-md'>The total death toll in Syria rose to 1,073. News agency SANA reports 593 across government-controlled areas and the &quot;White Helmets&quot; group, officially known as the Syria Civil Defense, reported 480 deaths in opposition-controlled areas. The total death toll in Syria rose to 1,073. News agency SANA reports 593 across government-controlled areas and the &quot;White Helmets&quot; group, officially known as the Syria Civil Defense, reported 480 deaths in opposition-controlled areas.</p>
                          <p className='text-base font-medium my-2'>7th February, 2023</p>
                          <p className='flex clear-both text-[#51C2E7] float-right italic font-medium cursor-pointer'>Read more <FiArrowUpRight /></p>
                        </div>
                      </Fade>
                    </div>
                    <div className='col-md-6'>
                      <Fade bottom>
                        <div className=''>
                          <p className='text-xl font-bold py-2 border-b-2 border-green'>The Polling Units</p>
                          <p className='text-md'>The total death toll in Syria rose to 1,073. News agency SANA reports 593 across government-controlled areas and the &quot;White Helmets&quot; group, officially known as the Syria Civil Defense, reported 480 deaths in opposition-controlled areas. The total death toll in Syria rose to 1,073. News agency SANA reports 593 across government-controlled areas and the &quot;White Helmets&quot; group, officially known as the Syria Civil Defense, reported 480 deaths in opposition-controlled areas.</p>
                          <p className='text-base font-medium my-2'>7th February, 2023</p>
                          <p className='flex clear-both text-[#51C2E7] float-right italic font-medium cursor-pointer'>Read more <FiArrowUpRight /></p>
                        </div>
                      </Fade>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='py-5'>
                    <Fade bottom>
                      <div className='bg-[#51C2E7] w-full p-3'>
                        <p className='font-extrabold'>Tweets</p>
                        <div className='space-y-3'>
                          <p className=''>The total death toll in Syria rose to 1,073. News agency SANA reports 593 across government-controlled areas and the</p>
                          <p className=''>The total death toll in Syria rose to 1,073. News agency SANA reports 593 across government-controlled areas and the</p>
                          <p className=''>The total death toll in Syria rose to 1,073. News agency SANA reports 593 across government-controlled areas and the</p>
                          <p className=''>The total death toll in Syria rose to 1,073. News agency SANA reports 593 across government-controlled areas and the</p>
                        </div>
                      </div>    
                    </Fade>
                  </div>
                </div>
              </div>

            </div>
          </div>
      </div>
      <Footer />
    </>
  )
}

export default Update