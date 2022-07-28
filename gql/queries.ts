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
