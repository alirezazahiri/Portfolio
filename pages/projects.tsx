import type { NextPage } from "next";

// next deps 
import Head from "next/head"

// component
import Projects from "@/components/Projects";

const Page: NextPage = () => {
    return <div>
        <Head>
            <title>Projects | Alireza Zahiri</title>
            <meta name="description" content="Projects, Alireza Zahiri" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Projects />
    </div>

}

export default Page