import type { NextPage } from "next";

// component
import Message from "@/components/Message";
import { TPageProps } from "@/types/common";
import SEO from "@/components/common/SEO";

const Page: NextPage<TPageProps> = ({ meta }) => {
  return (
    <>
      <SEO meta={meta} />
      <Message />
    </>
  );
};

export function getStaticProps() {
  return {
    props: {
      meta: {
        title: "Message Me | Alireza Zahiri",
        description:
          "Send your messages to me, so we can keep in touch, and mention your email for further communications.",
        pagename: "ارسال پیام",
      },
    },
  };
}

export default Page;
