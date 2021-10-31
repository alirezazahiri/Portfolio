import type { NextPage } from "next";

// next deps 
import Head from "next/head"

// component
import Certificates from '../components/Certificates';

const Page: NextPage = () => {
    return <div>
        <Head>
            <title>Certificates | Alireza Zahiri</title>
            <meta name="description" content="Certificates, Alireza Zahiri" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Certificates />
    </div>

}

export default Page