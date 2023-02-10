import Image from 'next/image'
import React from 'react'
import { Fade, Bounce } from 'react-reveal'
import adebulu from 'images/adebulu.png'
import vote_count from 'images/vote_count.png'
import lagos from 'images/lagos.png'
import vote from 'images/vote.png'
import candidate_2 from 'images/candidate_2.png'
import Header from '@/components/header'
import Footer from '@/components/footer'

function Progressive() {
  return (
    <>
      <Header />
      <div className='w-full pt-28'>
        <div className='container-sm '>
          <div className='w-full md:flex justify-between'>
            <Fade left>
              <div>
                <p className='text-xl font-bold'>2023 Election Result</p>
                <span className='p-1 text-2xl font-bold text-white bg-green'>Presidential </span>
              </div>
            </Fade>
            <Fade right>
              <div>
                <Image alt='candidate' src={adebulu} className="img-fluid" />
              </div>
            </Fade>
          </div>
          <Fade bottom>
            <div className='container-sm md:p-20 pb-3'>
              <Image alt='vote' src={vote_count} className="w-full md:w-[75%] mx-auto img-fluid" />
            </div>
          </Fade>
          
          <div className='row'>
            <div className='col-12'>
              <Fade>
                <p className='text-xl md:text-4xl font-bold py-3'>Better Representatives</p>
              </Fade>
            </div>
            <div className='col-md-6'>
              <Bounce left>
                <div className=''>
                  <p>
                    Laws regulate all aspects of our lives. The electoral process is no exception. The Constitution of the Federal Republic of Nigeria, 1999 as amended, the Electoral Act 2010, as amended and the Independent National Electoral Commission (INEC) Rules and Regulations constitute the legal framework which regulates our electoral process. Provisions of these deal with the right to associate, vote, form Political Parties etc. Others include registration of voters, Election Day procedures, dispute resolution, etc.
                    Breaches or violations of some of these provisions often attract penalties, which on conviction may be a fine, a term of imprisonment, or both. Any conduct – action or inaction which is prohibited by the Constitution or the Electoral Act and a breach of which attracts punishment, is called an electoral offence. Electoral offences may be committed by INEC or Security Officials, Political Parties and their officials, Candidates, Observers, Journalists/Media Houses or the general public.
                    Listed in this leaflet are some of the electoral offences prescribed by Nigerian Law as at 31st January, 2017. Anyone in breach of any of these provisions is liable to
                  </p>
                </div>
              </Bounce>
            </div>
            <div className='col-md-6'>
              <Bounce right>
                <div className=''>
                  <p>
                    Laws regulate all aspects of our lives. The electoral process is no exception. The Constitution of the Federal Republic of Nigeria, 1999 as amended, the Electoral Act 2010, as amended and the Independent National Electoral Commission (INEC) Rules and Regulations constitute the legal framework which regulates our electoral process. Provisions of these deal with the right to associate, vote, form Political Parties etc. Others include registration of voters, Election Day procedures, dispute resolution, etc.
                    Breaches or violations of some of these provisions often attract penalties, which on conviction may be a fine, a term of imprisonment, or both. Any conduct – action or inaction which is prohibited by the Constitution or the Electoral Act and a breach of which attracts punishment, is called an electoral offence. Electoral offences may be committed by INEC or Security Officials, Political Parties and their officials, Candidates, Observers, Journalists/Media Houses or the general public.
                    Listed in this leaflet are some of the electoral offences prescribed by Nigerian Law as at 31st January, 2017. Anyone in breach of any of these provisions is liable to
                  </p>
                </div>
              </Bounce>
            </div>
          </div>
        </div>

        <div className='w-full'>
          <Fade big>
            <Image alt='lagos west' src={lagos} className="img-fluid" />
          </Fade>
        </div>

        <div className='container-sm'>
          <div className='row'>
            <div className='col-12'>
              <Fade>
                <p className='text-xl md:text-4xl font-bold py-3'>Better Representatives</p>
              </Fade>
            </div>
            <div className='col-md-6'>
              <Bounce left>
                <div className=''>
                  <p>
                    Laws regulate all aspects of our lives. The electoral process is no exception. The Constitution of the Federal Republic of Nigeria, 1999 as amended, the Electoral Act 2010, as amended and the Independent National Electoral Commission (INEC) Rules and Regulations constitute the legal framework which regulates our electoral process. Provisions of these deal with the right to associate, vote, form Political Parties etc. Others include registration of voters, Election Day procedures, dispute resolution, etc.
                    Breaches or violations of some of these provisions often attract penalties, which on conviction may be a fine, a term of imprisonment, or both. Any conduct – action or inaction which is prohibited by the Constitution or the Electoral Act and a breach of which attracts punishment, is called an electoral offence. Electoral offences may be committed by INEC or Security Officials, Political Parties and their officials, Candidates, Observers, Journalists/Media Houses or the general public.
                    Listed in this leaflet are some of the electoral offences prescribed by Nigerian Law as at 31st January, 2017. Anyone in breach of any of these provisions is liable to is called an electoral offence. Electoral offences may be committed by INEC or Security Officials, Political Parties and their officials, Candidates, Observers, Journalists/Media Houses or the general public.
                    Listed in this leaflet are some of the electoral offences prescribed by Nigerian Law as at 31st January, 2017. Anyone in breach of any of these provisions is liable to is called an electoral offence. Electoral offences may be committed by INEC or Security Officials, Political Parties 
                  </p>
                </div>
              </Bounce>
            </div>
            <div className='col-md-6'>
              <Bounce right>
                <div className=''>
                  <p>
                    is called an electoral offence. Electoral offences may be committed by INEC or Security Officials, Political Parties and their officials, Candidates, Observers, Journalists/Media Houses or the general public.
                    Listed in this leaflet are some of the electoral offences prescribed by Nigerian Law as at 31st January, 2017. Anyone in breach of any of these provisions is liable tois called an electoral offence. Electoral offences may be committed by INEC or Security Officials, Political Parties and their officials, Candidates, Observers, Journalists/Media Houses or the general public.
                    Listed in this leaflet are some of the electoral offences prescribed by Nigerian Law as at 31st January, 2017. Anyone in breach of any of these provisions is liable toConstitution or the Electoral Act and a breach of which attracts punishment, is called an electoral offence. Electoral offences may be committed by INEC or Security Officials, Political Parties and their officials, Candidates, Observers, Journalists/Media Houses or the general public.
                    Listed in this leaflet are some of the electoral offences prescribed by Nigerian Law as at 31st January, 2017. Anyone in breach of any of these provisions is liable to being arrested and charged to court and prosecuted by INEC after investigation by the relevant Security Agencies. Constitution or the Electoral Act and a breach of which attracts punishment, is called an electoral offence. 
                  </p>
                </div>
              </Bounce>
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
                  <Image alt='vote' src={candidate_2} className="img-fluid" />
                </div>
              </div>
            </div>
          </Bounce>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Progressive