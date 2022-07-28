import type { NextPage } from "next";

// next deps
import Head from "next/head";

// component
import Certificates from "@/components/Certificates";
import { useQuery } from "@apollo/client";
import { GET_CERTIFICATES } from "gql/queries";

const Page: NextPage = () => {
  const { loading, data, error } = useQuery(GET_CERTIFICATES);
  
  const { certificates=[] } = { certificates: [], ...data };

  return (
    <div>
      <Head>
        <title>Certificates | Alireza Zahiri</title>
        <meta name="description" content="Certificates, Alireza Zahiri" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Certificates
        isLoading={loading}
        certificates={certificates}
        error={error}
      />
    </div>
  );
};

export default Page;
