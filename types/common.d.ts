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

export type ContactItem = {
  id?: string;
  iconKey: string;
  link: string;
  description: string;
  color: string;
  type?: "mail" | null;
  isLoading?: boolean
};

export type SkillItem = {
  id: string;
  name: string;
  progress: number;
  gotBadge: boolean;
}
