import type { NextPage } from 'next'

// next deps 
import Head from 'next/head'

// component
import Home from "@/components/Home"

const Page: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alireza Zahiri</title>
        <meta name="description" content="Portfolio, Alireza Zahiri" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  )
}

export default Page
