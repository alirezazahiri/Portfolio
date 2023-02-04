import type { NextPage } from "next";

// next deps
import Head from "next/head";

// component
import Skills from "@/components/Skills";
import { useQuery } from "@apollo/client";
import { GET_SKILLS } from "@/gql/queries";
import { TPageProps } from "@/types/common";
import SEO from "@/components/common/SEO";
import { VARS } from "@/constants/seoVariables";

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

export function getStaticProps() {
  return {
    props: {
      meta: {
        title: "My Skills | Alireza Zahiri",
        description: "Here are some of my skills listed, and there are some projects available with all of them on my GitHub page; I hope you find it helpful!",
        ...VARS,
      },
    },
    revalidate: 60 * 60,
  };
}

export default Page;
