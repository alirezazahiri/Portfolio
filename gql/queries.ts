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
    skills(orderBy: progress_DESC, first: 9, after: $after) {
      name
      progress
      id
      gotBadge
    }
  }
`;

export const GET_PROFILE = gql`
  query {
    profile(where: { id: "cl66aj52prtna0cn7w27wma2e" }) {
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
    about(where: { id: "cl66c2menwvy60bn72bsijbme" }) {
      id
      text {
        text
      }
    }
  }
`;
