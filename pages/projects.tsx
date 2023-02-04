import type { NextPage } from "next";

// component
import Projects from "@/components/Projects";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "@/gql/queries";
import SEO from "@/components/common/SEO";
import { TPageProps } from "@/types/common";
import { VARS } from "@/constants/seoVariables";

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

export function getStaticProps() {
  return {
    props: {
      meta: {
        title: "My Projects | Alireza Zahiri",
        description: "Here are some of the projects which I like the most. Feel free to see the deployments and their source code.",
        ...VARS,
      },
    },
    revalidate: 60 * 60,
  };
}

export default Page;
