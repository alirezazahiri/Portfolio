import type { NextPage } from "next";

// next deps
import Head from "next/head";

// component
import Certificates from "@/components/Certificates";
import { useQuery } from "@apollo/client";
import { GET_CERTIFICATES } from "@/gql/queries";
import { TPageProps } from "@/types/common";
import SEO from "@/components/common/SEO";

const Page: NextPage<TPageProps> = ({ meta }) => {
  const { loading, data, error } = useQuery(GET_CERTIFICATES);

  const { certificates = [] } = { certificates: [], ...data };

  return (
    <>
      <SEO meta={meta} />
      <Certificates
        isLoading={loading}
        certificates={certificates}
        error={error}
      />
    </>
  );
};

export function getStaticProps() {
  return {
    props: {
      meta: {
        title: "Certificates | Alireza Zahiri",
        desc: "here are the certificates I earned as a result of a skill test or a course i've finished",
        keywords:
          "javascript, typescript, next, react, portfolio, علیرضا ظهیری, پورتفولیو, رابط کاربری, فرانت اند",
        author: "Alireza Zahiri, علیرضا ظهیری",
      },
    },
    revalidate: 60 * 60,
  };
};

export default Page;
