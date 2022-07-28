export type RepoDetailsType = {
  homepage: string;
  description: string;
  stars: number;
  topics: string[];
};

export type CertificateItem = {
  id?: string;
  language: string;
  languageImage: string;
  date: string;
  company: string;
  image: string;
  feed: string;
  isLoading?: boolean;
};
