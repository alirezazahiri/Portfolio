import type { NextPage } from "next";

// next deps
import Head from "next/head";

// component
import Contact from "@/components/Contact";
import { useQuery } from "@apollo/client";
import { GET_CONTACTS } from "gql/queries";

const Page: NextPage = () => {
  const { loading, data, error } = useQuery(GET_CONTACTS);
  const { contacts = [] } = { contacts: [], ...data };

  return (
    <div>
      <Head>
        <title>Contact Me | Alireza Zahiri</title>
        <meta name="description" content="Contact, Alireza Zahiri" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Contact isLoading={loading} contacts={contacts} error={error} />
    </div>
  );
};

export default Page;
