import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/layout/Layout";
import "react-toastify/dist/ReactToastify.css";
import ResumeLayout from "@/layout/ResumeLayout";

const client = new ApolloClient({
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

function MyApp({ Component, pageProps }: AppProps) {
  const TempComponent = Component as any;
  return (
    <ApolloProvider client={client}>
      {pageProps.resume ? (
        <TempComponent {...pageProps} />
      ) : (
        <Layout>
          <TempComponent {...pageProps} />
        </Layout>
      )}
    </ApolloProvider>
  );
}

export default MyApp;
