import Head from 'next/head'
import { Inter } from '@next/font/google'
import HomePage from './home'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <div className='w-full'>
        <HomePage />
      </div>
      <Footer />
    </>
  )
}
