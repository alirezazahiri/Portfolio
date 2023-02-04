import type { NextPage } from "next";

// next deps
import Head from "next/head";

// component
import Home from "@/components/Home";
import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "@/gql/queries";
import SEO from "@/components/common/SEO";
import { TPageProps } from "@/types/common";
import { VARS } from "@/constants/seoVariables";

const Page: NextPage<TPageProps> = ({ meta }) => {
  const { loading, data, error } = useQuery(GET_PROFILE);
  const { profile = {} } = { profile: [], ...data };

  return (
    <>
      <SEO meta={meta} />
      <Head>
        <meta name="viewport" content="width=device-width" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <link
          rel="canonical"
          href="https://github.com/alirezazahiri"
          key="canonical"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home isLoading={loading} profile={profile} error={error} />
    </>
  );
};

export function getStaticProps() {
  return {
    props: {
      meta: {
        title: "Portfolio | Alireza Zahiri",
        description: "Hey there, welcome to my portfolio, where I share my projects and all the essential information about who I am and what I do.",
        ...VARS
      },
    },
    revalidate: 60 * 60,
  };
};

export default Page;
