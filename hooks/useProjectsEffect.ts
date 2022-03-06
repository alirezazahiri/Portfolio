import { ProjectItem } from "@/constants/ProjectItems";
import { RepoDetailsType } from "next-env";
import { useEffect, useState } from "react";
import { getRepoDetails } from "services/repo-request";

const useProjectsEffect = (items: ProjectItem[]) => {
  const [items_, setItems_] = useState<
    (ProjectItem & RepoDetailsType)[]
  >([]);

  useEffect(() => {
    const setDetails = async () => {
      const promises = items.map(async (item) => {
        const newItem: ProjectItem & RepoDetailsType = {
          ...item,
          stars: 0,
          topics: [],
          homepage: "",
          description: ""
        };

        const getDetails = async () => {
          const { data } = await getRepoDetails(item.repoName);
          newItem.stars = data.stars;
          newItem.topics = data.topics;
          newItem.homepage = data.homepage;
          newItem.description = data.description;

          return newItem;
        };

        return getDetails();
      });

      const result = await Promise.all(promises);

      setItems_(result);
    };

    setDetails();
  }, []);

  return [items_];
};

export default useProjectsEffect;
