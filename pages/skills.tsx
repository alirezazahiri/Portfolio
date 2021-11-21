import type { NextPage } from 'next'

// next deps 
import Head from 'next/head'

// component
import Skills from "@/components/Skills";

const Page: NextPage = () => {
    return <div>
        <Head>
            <title>My Skills | Alireza Zahiri</title>
            <meta name="description" content="Skills, Alireza Zahiri" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Skills />
    </div>
}

export default Page