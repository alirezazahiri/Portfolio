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

export function getStaticProps() {
  return {
    props: {
      meta: {
        title: "Contact Me | Alireza Zahiri",
        desc: "here are some links to my social media accounts, where you can message me directly.",
        keywords:
          "javascript, typescript, next, react, portfolio, علیرضا ظهیری, پورتفولیو, رابط کاربری, فرانت اند",
        author: "Alireza Zahiri, علیرضا ظهیری",
      },
    },
    revalidate: 60 * 60,
  };
};

export default Page;
