import type { NextPage } from "next";

// component
import About from "@/components/About";
import { GET_ABOUT } from "@/gql/queries";
import { TPageProps } from "@/types/common";
import SEO from "@/components/common/SEO";
import { client } from "@/utils/apollo.client";
import { htmlToString } from "@/utils/htmlToString";

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
  const seoDescription = htmlToString(data.about.text.text);
  return {
    props: {
      meta: {
        title: "About Me | Alireza Zahiri",
        description: seoDescription,
        pagename: "درباره"
      },
      data,
    },
  };
}

export default Page;
