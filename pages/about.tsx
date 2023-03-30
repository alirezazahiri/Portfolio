import type { NextPage } from "next";

// component
import About from "@/components/About";
import { GET_ABOUT } from "@/gql/queries";
import { TPageProps } from "@/types/common";
import SEO from "@/components/common/SEO";
import { VARS } from "@/constants/seoVariables";
import { client } from "@/utils/apollo.client";

const Page: NextPage<TPageProps> = ({ meta, data }) => {
  const { about = {} } = { about: {}, ...data };

  return (
    <>
      <SEO meta={meta} />
      <About isLoading={false} content={about.text} error={false} />
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_ABOUT,
  });

  return {
    props: {
      meta: {
        title: "About Me | Alireza Zahiri",
        description: data.about.text.text,
        ...VARS,
      },
      data,
    },
  };
}

export default Page;
