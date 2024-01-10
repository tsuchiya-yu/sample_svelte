import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { getToken } from '$lib/tokenStorage';
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

// Uploadリンクの設定
const uploadLink = createUploadLink({
  uri: 'http://localhost:3000/graphql', // GraphQLサーバーのエンドポイント
});

// 認証トークンをリクエストヘッダーに追加するためのミドルウェア
const authLink = setContext((_, { headers }) => {
  const token = getToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

// Apollo Clientのインスタンスを作成
const client = new ApolloClient({
  link: authLink.concat(uploadLink), // authLinkとuploadLinkを結合
  cache: new InMemoryCache(),
});

export default client;