import type { NextPage } from "next";

// component
import Certificates from "@/components/Certificates";
import { GET_CERTIFICATES } from "@/gql/queries";
import { TPageProps } from "@/types/common";
import SEO from "@/components/common/SEO";
import { VARS } from "@/constants/seoVariables";
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
  
  return {
    props: {
      meta: {
        title: "Certificates | Alireza Zahiri",
        description:
          "Here are the certificates I earned as a result of a skill test or a course I've finished",
        ...VARS,
      },
      data,
    }
  };
}

export default Page;
