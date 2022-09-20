import type { NextPage } from "next";

// next deps
import Head from "next/head";

// component
import Skills from "@/components/Skills";
import { useQuery } from "@apollo/client";
import { GET_SKILLS } from "@/gql/queries";
import { TPageProps } from "@/types/common";
import SEO from "@/components/common/SEO";

const Page: NextPage<TPageProps> = ({ meta }) => {
  const { loading, data, error, fetchMore } = useQuery(GET_SKILLS, {
    variables: {
      after: null,
    },
  });
  const { skills = [] } = { skills: [], ...data };

  return (
    <>
      <SEO meta={meta} />
      <Skills
        isLoading={loading}
        skills={skills}
        error={error}
        fetchMore={fetchMore}
      />
    </>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      meta: {
        title: "My Skills | Alireza Zahiri",
        desc: "here are some of my skills listed, and there are some projects available with all of them on my github page, hope you find it helpful!",
      },
    },
  };
};

export default Page;
