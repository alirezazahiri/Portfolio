import type { NextPage } from "next";

// next deps
import Head from "next/head";

// component
import Certificates from "@/components/Certificates";
import { useQuery } from "@apollo/client";
import { GET_CERTIFICATES } from "@/gql/queries";
import { TPageProps } from "@/types/common";
import SEO from "@/components/common/SEO";
import { VARS } from "@/constants/seoVariables";

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
        description: "Here are the certificates I earned as a result of a skill test or a course I've finished",
        ...VARS,
      },
    },
    revalidate: 60 * 60,
  };
}

export default Page;
