import "styles/App.css";
import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import Layout from "components/Layout";
import client from "utils/apollo/apollo-client";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>
  );
};

export default MyApp;
