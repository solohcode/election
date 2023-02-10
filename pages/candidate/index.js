import Image from 'next/image'
import React from 'react'
import { Fade, Bounce } from 'react-reveal'
import candidates from 'images/candidates.png'
import adebulu from 'images/adebulu.png'
import vote from 'images/vote.png'
import vote_count from 'images/vote_count.png'

function Candidates() {

  const ListContext = ({title, description}) => (
    <div className='w-full'>
      <p className='font-bold text-lg'>{title ? `${title}:` : ""}</p>
      <p>{description || ""}</p>
    </div>
  )

  const steps = [
    {
      id: 1,
      title: "INTRODUCTION",
      description: "Every Nigerian has the right to live in any part of the country. An important part of voter registration is that an eligible person is advised to register at the centre nearest to his or her residence. This is to make it easy for the voter to access the polling unit and vote on Election Day."
    },
    {
      id: 2,
      title: "Eligibility for Transfer",
      description: "A person who has relocated to another place, outside the unit in which he/she registered cannot vote in his/her new location unless he/she transfers his/her registration."
    },
    {
      id: 3,
      title: "Procedure for Transfer",
      description: ""
    },
    {
      id: 4,
      title: "Step 1",
      description: "The person who intends to transfer his/her registration will apply to INEC’s Resident Electoral Commissioner of the state where he/she is currently residing through his/her Electoral Officer (EO). Note: The application should contain the current address and phone number of the applicant as these will assist in allocating the polling unit nearest to him/her as well as for contact purposes respectively."
    },
    {
      id: 5,
      title: "Step 2",
      description: "The applicant shall attach a photocopy of his/her Permanent Voter’s Card (PVC) to the application and submit at the nearest registration centre nearest to him/her. Note: The applicant must apply to the Resident Electoral Commissioner in good time, well before 60 days to the election. "
    },
    {
      id: 6,
      title: "",
      description: "No transfer can be entertained or granted less than 60 days to the election."
    },
    {
      id: 7,
      title: "Step 3",
      description: "If satisfied that the applicant is currently resident in the area, the Resident Electoral Commissioner shall approve the application and direct that the applicant’s details be transferred to his/her new location. Note: The Commission may require evidence such as Utility Bill for confirmation of your residency."
    },
    {
      id: 8,
      title: "Step 4",
      description: "The applicant will be assigned to the nearest polling unit to his/her new residences. Note: The applicant’s registration and particulars will then be deleted from the register of voters in the previous location."
    },
    {
      id: 9,
      title: "Step 5",
      description: "The applicant would be issued with a new Permanent Voter’s Card at the registration centre where he/she submitted his/her application or at any other designated centre by the Commission and the previous one will be retrieved. Note: When the PVCs are ready, the Commission will make a public announcement to that effect for collection. The applicant should pick up the new PVC in person as collection by proxy is not allowed."
    },
  ]
  return (
    <div className='w-full pt-28 space-y-10'>
      <Fade big>
        <div className='w-full'>
          <Image alt='candidates' src={candidates} className="w-full img-fluid h-[85vh] mx-auto" />
        </div>
      </Fade>

      <div className='container-sm space-y-10'>
        <Fade bottom>
          <div className='text-center'>
            <p className='text-xl md:text-4xl font-bold'>Election Offences And Penalties</p>
          </div>
        </Fade>
        <div className='row'>
          <div className='col-md-6'>
            <Bounce left>
              <div>
                <p>
                  Laws regulate all aspects of our lives. The electoral process is no exception. The Constitution of the Federal Republic of Nigeria, 1999 as amended, the Electoral Act 2010, as amended and the Independent National Electoral Commission (INEC) Rules and Regulations constitute the legal framework which regulates our electoral process. Provisions of these deal with the right to associate, vote, form Political Parties etc. Others include registration of voters, Election Day procedures, dispute resolution, etc.
                  Breaches or violations of some of these provisions often attract penalties, which on conviction may be a fine, a term of imprisonment, or both. Any conduct – action or inaction which is prohibited by the Constitution or the Electoral Act and a breach of which attracts punishment, is called an electoral offence. Electoral offences may be committed by INEC or Security Officials, Political Parties and their officials, Candidates, Observers, Journalists/Media Houses or the general public.
                  Listed in this leaflet are some of the electoral offences prescribed by Nigerian Law as at 31st January, 2017. Anyone in breach of any of these provisions is liable to being arrested and charged to court and prosecuted by INEC after investigation by the relevant Security Agencies. Constitution or the Electoral Act and a breach of which attracts punishment, is called an electoral offence. Electoral offences may be committed by INEC or Security Officials, Political Parties and their officials, Candidates, Observers, Journalists/Media Houses or the general public.
                  Listed in this leaflet are some of the electoral offences prescribed by Nigerian Law as at 31st January, 2017. Anyone in breach of any of these provisions is liable to being arrested and charged to court and prosecuted by INEC after investigation by the relevant Security Agencies.
                </p>
              </div>
            </Bounce>
          </div>
          <div className='col-md-6'>
            <Bounce right>
              <div className='space-y-5'>
                <p>
                  Constitution or the Electoral Act and a breach of which attracts punishment, is called an electoral offence. Electoral offences may be committed by INEC or Security Officials, Political Parties and their officials, Candidates, Observers, Journalists/Media Houses or the general public.
                  Listed in this leaflet are some of the electoral offences prescribed by Nigerian Law as at 31st January, 2017. Anyone in breach of any of these provisions is liable to being arrested and charged to court and prosecuted by INEC after investigation by the relevant Security Agencies. Constitution or the Electoral Act and a breach of which attracts punishment, is called an electoral offence. Electoral offences may be committed by INEC or Security Officials, Political Parties and their officials, Candidates, Observers, Journalists/Media Houses or the general public.
                </p>
                <p className='md:text-2xl font-bold'>Electoral offences prescribed by Nigerian Law as at 31st January, 2017. </p>
                <p>Anyone in breach of any of these provisions is liable to being arrested and charged to court and prosecuted by INEC after investigation by the relevant Security Agencies. Constitution or the Electoral Act and a breach of which attracts punishment, is called an electoral offence. Electoral offences may be committed by INEC or Security Officials, Political Parties and their officials, Candidates, Observers, Journalists/Media Houses or the general public.</p>
              </div>
            </Bounce>
          </div>
        </div>

        <Bounce bottom>
          <div className='w-full relative py-10 px-md-5'>
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
                <Image alt='vote' src={adebulu} className="img-fluid" />
              </div>
            </div>
          </div>
        </Bounce>

        <Fade bottom>
          <div className='text-center'>
            <p className='text-xl md:text-4xl font-bold'>Guide For Transfer Of Registered Voters</p>
          </div>
        </Fade>

        <div className='row'>
          <div className='col-md-6'>
            {steps.slice(0, 5).map((val)=>(
              <Bounce bottom key={val.id}>
                <ListContext title={val.title} description={val.description} />
              </Bounce>
            ))}
          </div>
          <div className='col-md-6'>
            {steps.slice(5, steps.length).map((val)=>(
              <Bounce bottom key={val.id}>
                <ListContext title={val.title} description={val.description} />
              </Bounce>
            ))}
          </div>
        </div>

        <Fade bottom>
          <div className='container-sm md:p-20 pb-3'>
            <Image alt='vote' src={vote_count} className="img-fluid" />
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Candidates