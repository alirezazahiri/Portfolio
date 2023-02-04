import type { NextPage } from "next";

// component
import About from "@/components/About";
import { useQuery } from "@apollo/client";
import { GET_ABOUT } from "@/gql/queries";
import { TPageProps } from "@/types/common";
import SEO from "@/components/common/SEO";
import { VARS } from "@/constants/seoVariables";

const Page: NextPage<TPageProps> = ({ meta }) => {
  const { loading, data, error } = useQuery(GET_ABOUT);
  const { about = {} } = { about: {}, ...data };
  return (
    <>
      <SEO meta={meta} />
      <About isLoading={loading} content={about.text} error={error} />
    </>
  );
};

export function getStaticProps() {
  return {
    props: {
      meta: {
        title: "About Me | Alireza Zahiri",
        description: "Hi, my name is Alireza, and I'm a front-end developer.",
        ...VARS,
      },
    },
    revalidate: 60 * 60,
  };
}

export default Page;
