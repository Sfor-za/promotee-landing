import React from 'react'
import Navbar from '@/components/navbar'
import Features from '@/components/features'
import Footer from '@/components/footer'
import Head from 'next/head'

export default function Faq() {
  return (
    <>
      <Head>
        <title>Promotee</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-200 dark:bg-gray-800">
       <Navbar/>
        <Features/>
        <Footer/>
      </main>
    </>
  )
}
