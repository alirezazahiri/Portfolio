import interests from "@/constants/Interests";
import { ApolloError } from "@apollo/client";

interface IHeaderProps {
  name: string;
  field: string;
  birthdate: string;
  email: string;
  phoneNumber: string;
  location: string;
  linkedin: string;
  profileImage: {
    url: string;
  };
}
interface IFooterProps {
  caption: string;
}
interface IResume {
  isLoading: boolean;
  error?: ApolloError;
  booksAndCourses: { id: string; title: string }[];
  softSkills: { id: string; title: string }[];
  educations: {
    id: string;
    level: string;
    location: string;
    time: string;
    collegeName: string;
    description: string;
  }[];
  technicalSkills: {
    id: string;
    topic: string;
    description: string;
    mention: string;
  }[];
  interests: {
    id: string;
    name: "youtube" | "music" | "games" | "coding" | "default";
  }[];
  recentExperiences: {
    id: string;
    jobTitle: string;
    jobCompany: string;
    time: string;
    location: string;
    description: string;
  }[];
  storyBook: { id: string; text: string };
  profile: IHeaderProps & IFooterProps;
}

interface IResumeLayoutProps extends IHeaderProps, IFooterProps {
  children: JSX.Element;
}

interface IRecentExperiences {
  items: {
    id: string;
    jobTitle: string;
    jobCompany: string;
    time: string;
    location: string;
    description: string;
  }[];
}

interface IStoryBook {
  text: string;
}

interface IEducation {
  items: {
    id: string;
    collegeName: string;
    level: string;
    time: string;
    location: string;
    description: string;
  }[];
}

interface ITechnicalSkills {
  items: {
    id: string;
    topic: string;
    description: string;
    mention: string;
  }[];
}

interface IBooksAndCourses {
  items: { id: string; title: string }[];
}

interface ISoftSkills {
  items: { id: string; title: string }[];
}

interface IInterests {
  items: { id: string; name: keyof typeof interests }[];
}

export type TResume = IResume;
export type THeaderProps = IHeaderProps;
export type TFooterProps = IFooterProps;
export type TResumeLayoutProps = IResumeLayoutProps;
export type TRecentExperiences = IRecentExperiences;
export type TStoryBook = IStoryBook;
export type TEducation = IEducation;
export type TTechnicalSkills = ITechnicalSkills;
export type TBooksAndCourses = IBooksAndCourses;
export type TSoftSkills = ISoftSkills;
export type TInterests = IInterests;
