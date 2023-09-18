import type { NextPage } from "next";

// component
import Certificates from "@/components/Certificates";
import { GET_CERTIFICATES } from "@/gql/queries";
import { TPageProps } from "@/types/common";
import SEO from "@/components/common/SEO";

import { client } from "@/utils/apollo.client";

const Page: NextPage<TPageProps> = ({ meta, data }) => {
  const { certificates = [] } = { certificates: [], ...data };

  return (
    <>
      <SEO meta={meta} />
      <Certificates
        isLoading={false}
        certificates={certificates}
        error={false}
      />
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_CERTIFICATES,
  });
  const seoDescription = data.certificates
    .map(
      (certificate: { name: string; companyName: string }) =>
        `${certificate.name} ${certificate.companyName}`
    )
    .join(", ");
  return {
    props: {
      meta: {
        title: "Certificates | Alireza Zahiri",
        description: "Certificates page. " + seoDescription,
        pagename: "گواهی ها",
      },
      data,
    },
    revalidate: 60 * 60 * 24 * 7, // each week 
  };
}

export default Page;
