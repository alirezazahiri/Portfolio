import { ProjectItem } from "@/constants/ProjectItems";
import { RepoDetailsType } from "@/types/common";
import { useEffect, useState } from "react";
import { getRepoDetails } from "services/repo-request";

const useProjectsEffect = (items: ProjectItem[]) => {
  const [items_, setItems_] = useState<(ProjectItem & RepoDetailsType)[]>([]);

  useEffect(() => {
    (async () => {
      /**
       * @returns the mapped list with the data given from API
       */
      const promises = items.map(async (item) => {
        return (async () => {
          const { data } = await getRepoDetails(item.repoName);
          return { ...data, ...item };
        })(); // map the data
      });

      const result = await Promise.all(promises);

      setItems_(result);
    })(); // set the data to state
  }, []);

  return [items_]; // return the new data
};

export default useProjectsEffect;
