import type { NextPage } from "next";

// next deps
import Head from "next/head";

// component
import Contact from "@/components/Contact";
import { useQuery } from "@apollo/client";
import { GET_CONTACTS } from "@/gql/queries";
import SEO from "@/components/common/SEO";
import { TPageProps } from "@/types/common";

const Page: NextPage<TPageProps> = ({ meta }) => {
  const { loading, data, error } = useQuery(GET_CONTACTS);
  const { contacts = [] } = { contacts: [], ...data };

  return (
    <>
      <SEO meta={meta} />
      <Contact isLoading={loading} contacts={contacts} error={error} />
    </>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      meta: {
        title: "Contact Me | Alireza Zahiri",
        desc: "here are some links to my social media accounts, where you can message me directly.",
      },
    },
  };
};

export default Page;
