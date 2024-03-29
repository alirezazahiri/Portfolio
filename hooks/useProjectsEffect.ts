import { useEffect, useState } from "react";
import { getRepoDetails } from "services/repo-request";
import { RepoDetailsType, ProjectItem } from "@/types/common";
import { PROJECTS_SLICE } from "@/constants/common.constants";

const useProjectsEffect = (
  projects: ProjectItem[],
  isLoading: boolean,
  fetchMore: any,
  error: string
) => {
  const [items_, setItems_] = useState<(ProjectItem & RepoDetailsType)[]>([]);
  const [loading, setLoading] = useState(isLoading);
  const [hasNext, setHasNext] = useState(true);

  const clickHandler = async () => {
    if (projects.length % PROJECTS_SLICE === 0) {
      setLoading(true);
      const { data } = await fetchMore({
        variables: {
          after: projects.length ? projects[projects.length - 1].id : null,
        },
      });
      if (data.projects.length == 0) {
        setLoading(false);
        setHasNext(false);
      }
    } else setHasNext(false);
  };

  useEffect(() => {
    if (projects.length % PROJECTS_SLICE) setHasNext(false);
    if (projects.length) {
      setLoading(true);
      (async () => {
        /**
         * @returns the mapped list with the data given from API
         */
        const promises = [...projects].map(async (project) => {
          return (async () => {
            const { data } = await getRepoDetails(project.repoName);
            return { ...data, ...project };
          })(); // map the data
        });

        const result = await Promise.all(promises);

        setItems_(result);
        setLoading(false);
      })(); // set the data to state
    }
  }, [projects.length]);

  return { items: items_, loading, hasNext, error, clickHandler }; // return the new data
};

export default useProjectsEffect;
