import type { NextPage } from "next";

// component
import Projects from "@/components/Projects";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "@/gql/queries";
import SEO from "@/components/common/SEO";
import { TPageProps } from "@/types/common";
import { client } from "@/utils/apollo.client";

const Page: NextPage<TPageProps> = ({ meta }) => {
  const { loading, data, error, fetchMore } = useQuery(GET_PROJECTS);
  const { projects = [] } = { projects: [], ...data };

  return (
    <>
      <SEO meta={meta} />
      <Projects
        fetchMore={fetchMore}
        isLoading={loading}
        projects={projects}
        error={error}
      />
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_PROJECTS });
  const seoDescription = data.projects
    .map(
      ({ title, repoName }: { title: string; repoName: string }) =>
        `${title} https://github.com/alirezazahiri/${repoName}`
    )
    .join(", ");
  return {
    props: {
      meta: {
        title: "My Projects | Alireza Zahiri",
        description:
          "Here are some of the projects which I like most. Feel free to see the deployments and their source code. " +
          seoDescription,
        pagename: "پروژه ها",
      },
    },
  };
}

export default Page;
