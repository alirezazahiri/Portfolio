import { RepoDetailsType } from "../next-env";
const requestOptions = {
  method: "GET",
};

const REPO_URI = "https://api.github.com/repos/alirezazahiri";

export const getRepoDetails = async (repoName: string) => {
  const response: {
    data: RepoDetailsType;
    error: string;
  } = {
    data: { stars: 0, topics: [], homepage: "", description: "" },
    error: "",
  };

  await fetch(`${REPO_URI}/${repoName}`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      response.data = {
        stars: data["stargazers_count"],
        topics: data["topics"],
        homepage: data["homepage"],
        description: data["description"],
      };
    })
    .catch((error) => {
      response.error = error;
    });

  return response;
};
