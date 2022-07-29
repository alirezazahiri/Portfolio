import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/layout/Layout";

const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/cl64zbv668lze01t306uq3fb9/master",
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

function MyApp({ Component, pageProps }: AppProps) {
  const TempComponent = Component as any;
  return (
      <ApolloProvider client={client}>
        <Layout>
          <TempComponent {...pageProps} />
        </Layout>
      </ApolloProvider>
  );
}

export default MyApp;
