import { gql } from "@apollo/client";

export const GET_CERTIFICATES = gql`
  {
    certificates {
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
