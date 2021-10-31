import type { NextPage } from "next";

// next deps 
import Head from "next/head"

// component
import About from '../components/About';

const Page: NextPage = () => {
    return <div>
        <Head>
            <title>About Me | Alireza Zahiri</title>
            <meta name="description" content="About, Alireza Zahiri" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <About />
    </div>
}

export default Page