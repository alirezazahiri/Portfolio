import type { NextPage } from "next";

// next deps
import Head from "next/head";

// component
import Home from "@/components/Home";
import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "@/gql/queries";

const Page: NextPage = () => {
  const { loading, data, error } = useQuery(GET_PROFILE);
  const { profile = {} } = { profile: [], ...data };

  return (
    <div>
      <Head>
        <title>Alireza Zahiri</title>
        <meta name="description" content="Portfolio, Alireza Zahiri" />
        <meta name="viewport" content="width=device-width"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home isLoading={loading} profile={profile} error={error} />
    </div>
  );
};

export default Page;
