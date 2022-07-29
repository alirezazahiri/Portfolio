import type { NextPage } from "next";

// next deps
import Head from "next/head";

// component
import Skills from "@/components/Skills";
import { useQuery } from "@apollo/client";
import { GET_SKILLS } from "gql/queries";

const Page: NextPage = () => {
  const { loading, data, error, fetchMore } = useQuery(GET_SKILLS, {
    variables: {
      after: null,
    },
  });
  const { skills = [] } = { skills: [], ...data };

  return (
    <div>
      <Head>
        <title>My Skills | Alireza Zahiri</title>
        <meta name="description" content="Skills, Alireza Zahiri" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Skills isLoading={loading} skills={skills} error={error} fetchMore={fetchMore} />
    </div>
  );
};

export default Page;
