import type { NextPage } from "next";

// next deps
import Head from "next/head";

// component
import About from "@/components/About";
import { useQuery } from "@apollo/client";
import { GET_ABOUT } from "@/gql/queries";
import { TPageProps } from "@/types/common";
import SEO from "@/components/common/SEO";

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

export const getServerSideProps = () => {
  return {
    props: {
      meta: {
        title: "About Me | Alireza Zahiri",
        desc: "this is about how i started my journey as a programmer and how it is going.",
      },
    },
  };
};

export default Page;
