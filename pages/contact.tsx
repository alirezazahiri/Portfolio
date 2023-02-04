import type { NextPage } from "next";

// next deps
import Head from "next/head";

// component
import Contact from "@/components/Contact";
import { useQuery } from "@apollo/client";
import { GET_CONTACTS } from "@/gql/queries";
import SEO from "@/components/common/SEO";
import { TPageProps } from "@/types/common";
import { VARS } from "@/constants/seoVariables";

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

export function getStaticProps() {
  return {
    props: {
      meta: {
        title: "Contact Me | Alireza Zahiri",
        description: "Here are some links to my social media accounts, where you can message me directly.",
        ...VARS,
      },
    },
    revalidate: 60 * 60,
  };
}

export default Page;
