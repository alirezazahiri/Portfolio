import { PROJECTS_SLICE, SKILLS_SLICE } from "@/constants/common.constants";
import { gql } from "@apollo/client";

export const GET_CERTIFICATES = gql`
  {
    certificates(orderBy: date_ASC) {
      id
      name
      date
      companyName
      certificateUrl
      companyImage {
        url
      }
      skillImage {
        url
      }
    }
  }
`;

export const GET_CONTACTS = gql`
  query {
    contacts {
      color
      description
      id
      link
      iconKey
      type
    }
  }
`;

export const GET_SKILLS = gql`
  query getSkills($after: String) {
    skills(orderBy: progress_DESC, first: ${SKILLS_SLICE}, after: $after) {
      name
      progress
      id
      gotBadge
    }
  }
`;

export const GET_PROFILE = gql`
  query {
    profile(where: { id: "${process.env.NEXT_APP_PROFILE_ID}" }) {
      emojie
      statusText
      profileImage {
        url
      }
    }
  }
`;

export const GET_ABOUT = gql`
  query {
    about(where: { id: "${process.env.NEXT_APP_ABOUT_ID}" }) {
      id
      text {
        text
      }
    }
  }
`;

export const GET_PROJECTS = gql`
  query getProjects($after: String) {
    projects(first: ${PROJECTS_SLICE}, after: $after) {
      id
      title
      repoName
      image {
        url
      }
    }
  }
`;

export const GET_CV = gql`
  query {
    resume(where: { id: "${process.env.NEXT_APP_CV_ID}" }) {
      cv {
        url
      }
    }
  }
`;


export const GET_CV_DETAILS = gql`
query {
  booksAndCourses {
    title
    id
  }
  softSkills {
    title
    id
  }
  educations {
    id
    level
    location
    time
    collegeName
    description
  }
  technicalSkills {
    id
    topic
    description
    mention
  }
  interests {
    id
    name
  }
  recentExperiences {
    id
    jobTitle
    jobCompany
    time
    location
    description
  }
  storyBook(where: {id: "${process.env.NEXT_APP_CV_STORYBOOK_ID}"}) {
    id
    text
  }
  profile(where: {id: "${process.env.NEXT_APP_PROFILE_ID}"}) {
    id
    birthdate
    email
    field
    name
    location
    linkedin
    phoneNumber
    caption 
    profileImage {
      url
    }
  }
}

`