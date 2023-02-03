import type { NextPage } from "next";

// next deps
import Head from "next/head";

// component
import Home from "@/components/Home";
import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "@/gql/queries";
import SEO from "@/components/common/SEO";
import { TPageProps } from "@/types/common";

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
        desc: "hey there, welcome to my portfolio, where i share my projects and all the essential information about who i am and what i do",
        keywords:
          "javascript, typescript, next, react, portfolio, علیرضا ظهیری, پورتفولیو, رابط کاربری, فرانت اند",
        author: "Alireza Zahiri, علیرضا ظهیری",
      },
    },
    revalidate: 60 * 60,
  };
};

export default Page;
