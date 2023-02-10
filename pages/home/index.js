import React, { useState } from 'react'
import Image from 'next/image'
import slider from 'images/slider.png'
import vote from 'images/vote.png'
import sanwolu from 'images/sanwolu.png'
import { Bounce, Fade } from 'react-reveal'
import { Button } from 'flowbite-react'
import { FiArrowUpRight } from 'react-icons/fi'

function HomePage() {
  const [dateCountDown, setDateCountDown] = useState({
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00"
  })
  const dateSeconds = new Date(2023, 1, 25)
  console.log(dateSeconds)
  setInterval(function() {
    const countDownDate = dateSeconds.getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const arr = (val) => Array.from(String(val), String)

    setDateCountDown({
      days: String(arr(days).length > 1 ? days : `0${days}`),
      hours: String(arr(hours).length > 1 ? hours : `0${hours}`),
      mins: String(arr(minutes).length > 1 ? minutes : `0${minutes}`),
      secs: String(arr(seconds).length > 1 ? seconds : `0${seconds}`)
    }) 
  }, 1000);

  const {
    days,
    hours,
    mins,
    secs
  } = dateCountDown
  return (
    <div className='w-full'>
      <div className='w-full'>
        <Fade big>
          <div className='w-full'>
            <Image alt='vote' src={slider} className="w-full h-screen" />
          </div>
        </Fade>

        <div className='w-full py-10 md:p-10 container-sm'>
          <div className='row space-y-5 md:space-y-0'>
            <div className='col-md-6'>
              <Bounce left>
                <div className='border sm:border border-green rounded-3xl min-h-[300px] py-4'>
                  <div className='px-4'>
                    <p className='font-medium'>Countdown to </p>
                    <p className='text-xl font-bold'>2023 Election </p>
                  </div>
                  <div className='bg-dim_green p-1 text-white ml-4'>
                    <p className='font-bold m-0 p-0'>Presidential and National Assemblies</p>
                    <p className='italic m-0 p-0'>25th February, 2023</p>
                  </div>
                  <div className='px-4 pt-2 flex justify-between gap-2'>
                    <div className='bg-light w-100 text-center pb-2'>
                      <p className='font-bold text-xl'>Days</p>
                      <p className='text-5xl font-bold'>{days || "00"}</p>
                    </div>
                    <div className='bg-light w-100 text-center pb-2'>
                      <p className='font-bold text-xl'>Hours</p>
                      <p className='text-5xl font-bold'>{hours || "00"}</p>
                    </div>
                    <div className='bg-light w-100 text-center pb-2'>
                      <p className='font-bold text-xl'>Mins</p>
                      <p className='text-5xl font-bold'>{mins || "00"}</p>
                    </div>
                    <div className='bg-light w-100 text-center pb-2'>
                      <p className='font-bold text-xl'>Secs</p>
                      <p className='text-5xl font-bold'>{secs || "00"}</p>
                    </div>
                  </div>
                  <div className='px-4 pt-4 flex justify-between items-end'>
                    <div className='w-[20%] h-[10px] rounded-full bg-light items-center pl-3'>
                      <div className='w-[50%] rounded-full h-[80%] bg-green' />
                    </div>
                    <Button size="xs" className="md:px-10 font-bold border-0 hover:opacity-60 text-center rounded-full bg-gradient-to-br from-red to-dark_red text-white">
                      Read More
                    </Button>
                  </div>
                </div>
              </Bounce>
            </div>

            <div className='col-md-6'>
              <Bounce right>
                <div className='border sm:border border-green rounded-3xl min-h-[300px] py-4 bg-candidates relative'>
                  <div className='px-4 float-right text-end'>
                    <p className='font-medium'>Why vote for the</p>
                    <p className='text-xl font-bold'>Progressives</p>
                  </div>
                  <div className='px-4 pt-4 flex justify-between items-end w-full absolute bottom-5'>
                    <div className='w-[20%] h-[10px] rounded-full bg-light items-center pl-3'>
                      <div className='w-[50%] rounded-full h-[100%] bg-green' />
                    </div>
                    <Button size="xs" className="md:px-10 font-bold border-0 hover:opacity-60 text-center rounded-full bg-gradient-to-br from-red to-dark_red text-white">
                      Read More
                    </Button>
                  </div>
                </div>
              </Bounce>
            </div>
          </div>
        </div>

        <div className='w-full min-h-[300px] bg-gradient-to-br from-[#2EA7CE] to-[#51C2E7] py-3'>
          <Fade>
            <p className='text-red text-2xl font-bold text-center'>Voters Statistical Analysis </p>
          </Fade>
          <div className='container-sm'>
            <div className='row py-5 space-y-5 md:space-y-0'>
              <div className='col-md-6'>
                <Fade bottom>
                  <div className='text-center'>
                    <p className='text-5xl font-medium py-3'>7,211,097</p>
                    <p className='text-4xl'>Registered Voters </p>
                    <p className='text-2xl'>in Lagos West</p>
                    <div className='w-[30%] h-[10px] mt-5 mx-auto rounded-full bg-[#B2E8FA] items-center'>
                      <div className='w-[50%] rounded-full h-[100%] bg-[#2EA7CE]' />
                    </div>
                  </div>
                </Fade>
              </div>
              <div className='col-md-6'>
                <Fade bottom>
                  <div className='w-full min-h-[200px] p-3 bg-[#51C2E7]'>
                    <p className='text-white text-2xl font-bold'>Electoral Offences</p>
                    <p className='text-lg'>The total death toll in Syria rose to 1,073. News agency SANA reports 593 across government-controlled areas and the &quot;White Helmets&quot; group, </p>
                    <p className='flex clear-both text-red float-right italic font-medium cursor-pointer'>Read more <FiArrowUpRight /></p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full py-3'>
          <Fade>
            <p className='text-red text-2xl font-bold text-center uppercase'>Latest News</p>
          </Fade>
          <div className='container-sm '>
            <div className='row py-5 px-3 px-md-0 md:px-0'>
              <div className='col-md-4'>
                <Fade bottom>
                  <div className=''>
                    <p className='text-xl font-bold py-2 border-b-2 border-green'>Election Update</p>
                    <p className='text-md'>The total death toll in Syria rose to 1,073. News agency SANA reports 593 across government-controlled areas and the &quot;White Helmets&quot; group, officially known as the Syria Civil Defense, reported 480 deaths in opposition-controlled areas. The total death toll in Syria rose to 1,073. News agency SANA reports 593 across government-controlled areas and the &quot;White Helmets&quot; group, officially known as the Syria Civil Defense, reported 480 deaths in opposition-controlled areas.</p>
                    <p className='text-base font-medium my-2'>7th February, 2023</p>
                    <p className='flex clear-both text-[#51C2E7] float-right italic font-medium cursor-pointer'>Read more <FiArrowUpRight /></p>
                  </div>
                </Fade>
              </div>
              <div className='col-md-4'>
                <Fade bottom>
                  <div className=''>
                    <p className='text-xl font-bold py-2 border-b-2 border-green'>The Polling Units</p>
                    <p className='text-md'>The total death toll in Syria rose to 1,073. News agency SANA reports 593 across government-controlled areas and the &quot;White Helmets&quot; group, officially known as the Syria Civil Defense, reported 480 deaths in opposition-controlled areas. The total death toll in Syria rose to 1,073. News agency SANA reports 593 across government-controlled areas and the &quot;White Helmets&quot; group, officially known as the Syria Civil Defense, reported 480 deaths in opposition-controlled areas.</p>
                    <p className='text-base font-medium my-2'>7th February, 2023</p>
                    <p className='flex clear-both text-[#51C2E7] float-right italic font-medium cursor-pointer'>Read more <FiArrowUpRight /></p>
                  </div>
                </Fade>
              </div>
              <div className='col-md-4'>
                <Fade bottom>
                  <div className=''>
                    <p className='text-xl font-bold py-2 border-b-2 border-green'>Candidates</p>
                    <p className='text-md'>The total death toll in Syria rose to 1,073. News agency SANA reports 593 across government-controlled areas and the &quot;White Helmets&quot; group, officially known as the Syria Civil Defense, reported 480 deaths in opposition-controlled areas. The total death toll in Syria rose to 1,073. News agency SANA reports 593 across government-controlled areas and the &quot;White Helmets&quot; group, officially known as the Syria Civil Defense, reported 480 deaths in opposition-controlled areas.</p>
                    <p className='text-base font-medium my-2'>7th February, 2023</p>
                    <p className='flex clear-both text-[#51C2E7] float-right italic font-medium cursor-pointer'>Read more <FiArrowUpRight /></p>
                  </div>
                </Fade>
              </div>
            </div>

            <div className='md:px-16'>
              <Fade bottom>
                <div className='bg-[#51C2E7] w-full p-3'>
                  <div className='row space-y-5 md:space-y-0'>
                    <div className='col-md-6'>
                      <div className='flex justify-between space-x-3'>
                        <p className='font-extrabold'>Tweets</p>
                        <p className=''>The total death toll in Syria rose to 1,073. News agency SANA reports 593 across government-controlled areas and the</p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='flex justify-between space-x-3'>
                        <p className='font-extrabold'>Tweets</p>
                        <p className=''>The total death toll in Syria rose to 1,073. News agency SANA reports 593 across government-controlled areas and the</p>
                      </div>
                    </div>
                  </div>
                </div>    
              </Fade>
            </div>
          </div>
        </div>

        <div className='w-100 py-3'>
          <Fade bottom>
            <p className='px-5 font-bold text-xl md:text-3xl text-center'>APC Lagos West 1 ICT Directorate Committee</p>
          </Fade>
          <div className='w-full p-3 p-md-auto'>
            <div className='row space-y-5 md:space-y-0 py-10'>
              {[1,2,3,4].map((val)=>(
                <div key={val} className='col-md-3'>
                  <Bounce bottom>
                    <div className='w-full min-h-[300px] shadow-xl bg-[#19A43E] rounded-tr-3xl' />
                  </Bounce>
                </div>
              ))}
            </div>
          </div>
          
          <Bounce bottom>
            <div className='w-full relative pt-10'>
              <div className='w-full md:absolute bottom-20 z-10 justify-center mx-auto flex space-x-2'>
                <p className='text-xl font-bold text-red italic'>Vote</p>
                <Image alt='vote' src={vote} className="img-fluid" />
              </div>
              <div className='container-sm relative min-h-[300px]'>
                <div className='container-sm absolute left-0 right-0 bottom-0 bg-[#51C2E7]'>
                  <div className='px-5 py-3'>
                    <p className='font-bold text-base md:text-xl'>Re-Elect </p>
                    <p className='font-extrabold text-xl md:text-3xl'>Babajide Olusola Sanwo-Olu</p>
                  </div>
                </div>
                <div className='md:absolute md:right-0 md:bottom-0 md:flex md:justify-end'>
                  <Image alt='vote' src={sanwolu} className="img-fluid" />
                </div>
              </div>
            </div>
          </Bounce>
        </div>
      </div>
    </div>
  )
}

export default HomePage