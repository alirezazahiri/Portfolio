import type { NextPage } from "next";

// next deps 
import Head from "next/head"

// component
import Contact from '@/components/Contact';

const Page: NextPage = () => {
    return <div>
        <Head>
            <title>Contact Me | Alireza Zahiri</title>
            <meta name="description" content="Contact, Alireza Zahiri" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Contact />
    </div>
}

export default Page