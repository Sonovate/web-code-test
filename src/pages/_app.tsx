import { useCallback } from 'react';
import type { AppProps } from 'next/app';
import { setContext } from '@apollo/client/link/context';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

let apolloClient: ApolloClient<any>;

function MyApp({ Component, pageProps }: AppProps) {
  const createApolloClient = useCallback(() => {
    const httpLink = createHttpLink({
      uri: 'https://graphql.contentful.com/content/v1/spaces/jgxvzzx7ps77',
    });

    const authLink = setContext((_, { headers }) => ({
      headers: {
        ...headers,
        authorization: 'Bearer AEf7QMYxPL9rGzq0iYw8vNWzbRvGEhLrtPXHYWYYE_I',
      }
    }));

    const apolloClient = new ApolloClient({
      cache: new InMemoryCache(),
      link: authLink.concat(httpLink),
      ssrMode: typeof window === 'undefined',
    });

    return apolloClient;
  }, []);

  let client = apolloClient ?? createApolloClient();

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp
