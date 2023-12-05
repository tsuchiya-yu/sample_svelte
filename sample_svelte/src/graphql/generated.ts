import client from '../../lib/graphql/apollo';
import type {
        ApolloQueryResult, ObservableQuery, WatchQueryOptions
      } from "@apollo/client";
import { readable } from "svelte/store";
import type { Readable } from "svelte/store";
import gql from "graphql-tag"
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type CodeMeg = {
  __typename?: 'CodeMeg';
  message: Scalars['String']['output'];
  statusCode: Scalars['Int']['output'];
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  signIn: Token;
  signOut: CodeMeg;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationSignInArgs = {
  data: SignInUserArgs;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  dummyUser?: Maybe<User>;
  siteUpdate?: Maybe<SiteUpdates>;
  siteUpdates?: Maybe<Array<Maybe<SiteUpdates>>>;
  user?: Maybe<User>;
};


export type QueryDummyUserArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySiteUpdateArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySiteUpdatesArgs = {
  cursor?: InputMaybe<SiteUpdatesWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<SiteUpdatesScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<SiteUpdatesOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SiteUpdatesWhereInput>;
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type SignInUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SiteUpdates = {
  __typename?: 'SiteUpdates';
  content: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  publishedAt: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SiteUpdatesOrderByWithRelationInput = {
  content?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  publishedAt?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum SiteUpdatesScalarFieldEnum {
  Content = 'content',
  Id = 'id',
  PublishedAt = 'publishedAt',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type SiteUpdatesWhereInput = {
  content?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  publishedAt?: InputMaybe<DateTimeFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SiteUpdatesWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Token = {
  __typename?: 'Token';
  token: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type All_SiteUpdatesQueryVariables = Exact<{ [key: string]: never; }>;


export type All_SiteUpdatesQuery = { __typename?: 'Query', siteUpdates?: Array<{ __typename?: 'SiteUpdates', id: number, title: string, content: string, publishedAt: any, updatedAt: any } | null> | null };

export type GetSiteUpdateQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetSiteUpdateQuery = { __typename?: 'Query', siteUpdate?: { __typename?: 'SiteUpdates', id: number, title: string, content: string, publishedAt: any, updatedAt: any } | null };


export const All_SiteUpdatesDoc = gql`
    query all_siteUpdates {
  siteUpdates(
    orderBy: [{title: desc}]
    where: {publishedAt: {gte: "2022-01-01T00:00:00.000Z"}}
    take: 5
  ) {
    id
    title
    content
    publishedAt
    updatedAt
  }
}
    `;
export const GetSiteUpdateDoc = gql`
    query GetSiteUpdate($id: Int!) {
  siteUpdate(id: $id) {
    id
    title
    content
    publishedAt
    updatedAt
  }
}
    `;
  export const all_siteUpdates = (
            options: Omit<
              WatchQueryOptions<All_SiteUpdatesQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<All_SiteUpdatesQuery> & {
              query: ObservableQuery<
                All_SiteUpdatesQuery,
                All_SiteUpdatesQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: All_SiteUpdatesDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<All_SiteUpdatesQuery> & {
                query: ObservableQuery<
                  All_SiteUpdatesQuery,
                  All_SiteUpdatesQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const GetSiteUpdate = (
            options: Omit<
              WatchQueryOptions<GetSiteUpdateQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<GetSiteUpdateQuery> & {
              query: ObservableQuery<
                GetSiteUpdateQuery,
                GetSiteUpdateQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: GetSiteUpdateDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<GetSiteUpdateQuery> & {
                query: ObservableQuery<
                  GetSiteUpdateQuery,
                  GetSiteUpdateQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        