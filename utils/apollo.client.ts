import { InMemoryCache, ApolloClient } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.NEXT_APP_HYGRAPH_URI,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          skills: {
            keyArgs: false,
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
          projects: {
            keyArgs: false,
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
});
