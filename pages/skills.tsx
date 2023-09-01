import type { NextPage } from "next";

// component
import Skills from "@/components/Skills";
import { useQuery } from "@apollo/client";
import { GET_SKILLS } from "@/gql/queries";
import { TPageProps } from "@/types/common";
import SEO from "@/components/common/SEO";
import { client } from "@/utils/apollo.client";

const Page: NextPage<TPageProps> = ({ meta }) => {
  const { loading, data, error, fetchMore } = useQuery(GET_SKILLS, {
    variables: {
      after: null,
    },
  });
  const { skills = [] } = { skills: [], ...data };

  return (
    <>
      <SEO meta={meta} />
      <Skills
        isLoading={loading}
        skills={skills}
        error={error}
        fetchMore={fetchMore}
      />
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_SKILLS });
  const seoDescription = data.skills
    .map(({ name }: { name: string }) => name)
    .join(", ");
  return {
    props: {
      meta: {
        title: "My Skills | Alireza Zahiri",
        description:
          "List of my skills sorted by the level of my proficiency in each one. " +
          seoDescription,
        pagename: "مهارت ها",
      },
    },
  };
}

export default Page;
