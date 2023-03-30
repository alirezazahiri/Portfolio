import { ApolloProvider } from "@apollo/client";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/layout/Layout";
import { client } from "@/utils/apollo.client";
import "react-toastify/dist/ReactToastify.css";

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
