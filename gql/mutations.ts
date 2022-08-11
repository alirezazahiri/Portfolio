import { gql } from "@apollo/client";

export const CREATE_MESSAGE = gql`
    mutation sendMessage(
    $name: String!
    $email: String
    $text: String!
  ) {
    createMessage(
      data: {
        name: $name
        email: $email
        text: $text
      }
    ) {
      id
    }
  }
`;
