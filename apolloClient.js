import { ApolloClient, InMemoryCache } from "@apollo/client";
const key = process.env.cms_endpoint;

const client = new ApolloClient({
  uri: key,
  cache: new InMemoryCache(),
});

export default client;
