import type { NextPage } from "next";

// next deps
import Head from "next/head";

// component
import Skills from "@/components/Skills";
import { useQuery } from "@apollo/client";
import { GET_SKILLS } from "gql/queries";

const Page: NextPage = () => {
  const { loading, data, error } = useQuery(GET_SKILLS);
  const { skills = [] } = { skills: [], ...data };

  return (
    <div>
      <Head>
        <title>My Skills | Alireza Zahiri</title>
        <meta name="description" content="Skills, Alireza Zahiri" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Skills isLoading={loading} skills={skills} error={error} />
    </div>
  );
};

export default Page;
