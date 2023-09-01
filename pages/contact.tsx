import type { NextPage } from "next";

// component
import Contact from "@/components/Contact";
import { GET_CONTACTS } from "@/gql/queries";
import SEO from "@/components/common/SEO";
import { TPageProps } from "@/types/common";
import { client } from "@/utils/apollo.client";

const Page: NextPage<TPageProps> = ({ meta, data }) => {
  const { contacts = [] } = { contacts: [], ...data };

  return (
    <>
      <SEO meta={meta} />
      <Contact isLoading={false} contacts={contacts} error={false} />
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_CONTACTS,
  });
  const seoDescription = data.contacts
    .map((contact: { iconKey: string }) => `${contact.iconKey}`)
    .join(", ");
  return {
    props: {
      meta: {
        title: "Contact Me | Alireza Zahiri",
        description:
          "Contact Me page. Some links to my social media accounts, where you can message me directly. " +
          seoDescription,
        pagename: "ارتباط ,تماس",
      },
      data,
    },
  };
}

export default Page;
