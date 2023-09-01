import type { NextPage } from "next";

// next deps
import Head from "next/head";

// component
import Home from "@/components/Home";
import { GET_PROFILE } from "@/gql/queries";
import SEO from "@/components/common/SEO";
import { TPageProps } from "@/types/common";
import { client } from "@/utils/apollo.client";

const Page: NextPage<TPageProps> = ({ meta, data }) => {
  // const { loading, data, error } = useQuery(GET_PROFILE);
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
      <Home isLoading={false} profile={profile} error={false} />
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_PROFILE });

  return {
    props: {
      meta: {
        title: "Portfolio | Alireza Zahiri",
        description:
          "Hi, My name is Alireza Zahiri, and I am an enthusiastic web developer with proficiency in client-side web application development and a fundamental knowledge of server-side concepts.",
        pagename: "صفحه اصلی",
      },
      data,
    },
  };
}

export default Page;
