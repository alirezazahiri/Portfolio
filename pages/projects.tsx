import type { NextPage } from "next";

// next deps
import Head from "next/head";

// component
import Projects from "@/components/Projects";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "@/gql/queries";

const Page: NextPage = () => {
  const { loading, data, error, fetchMore } = useQuery(GET_PROJECTS);
  const { projects = [] } = { projects: [], ...data };
  return (
    <div>
      <Head>
        <title>Projects | Alireza Zahiri</title>
        <meta name="description" content="Projects, Alireza Zahiri" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Projects fetchMore={fetchMore} isLoading={loading} projects={projects} error={error} />
    </div>
  );
};

export default Page;
