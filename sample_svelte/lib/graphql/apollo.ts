import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';

// HTTPリンクの設定
const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
  headers: {
    'Apollo-Require-Preflight': 'true',
  },
});

// 認証トークンをリクエストヘッダーに追加するためのミドルウェア
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('authToken');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

// Apollo Clientのインスタンスを作成
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;