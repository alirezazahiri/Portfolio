import type { NextPage } from "next";

// next deps
import Head from "next/head";

// component
import Projects from "@/components/Projects";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "@/gql/queries";
import SEO from "@/components/common/SEO";
import { TPageProps } from "@/types/common";

const Page: NextPage<TPageProps> = ({ meta }) => {
  const { loading, data, error, fetchMore } = useQuery(GET_PROJECTS);
  const { projects = [] } = { projects: [], ...data };

  return (
    <>
      <SEO meta={meta} />
      <Projects
        fetchMore={fetchMore}
        isLoading={loading}
        projects={projects}
        error={error}
      />
    </>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      meta: {
        title: "My Projects | Alireza Zahiri",
        desc: "here are some of my projects which I like them the most, feel free to see the deployments and their source code.",
      },
    },
  };
};

export default Page;
