import client from '../../lib/graphql/apollo';
import type {
        ApolloQueryResult, ObservableQuery, WatchQueryOptions, MutationOptions
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

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBooleanFilter>;
};

export type CodeMeg = {
  __typename?: 'CodeMeg';
  message: Scalars['String']['output'];
  statusCode: Scalars['Int']['output'];
};

export type CreateUserProfileInput = {
  catchphrase?: InputMaybe<Scalars['String']['input']>;
  introduction?: InputMaybe<Scalars['String']['input']>;
  shopMst?: InputMaybe<ShopMstCreateNestedOneWithoutUserProfilesInput>;
  user: UserCreateNestedOneWithoutUserProfileInput;
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
  createUser: Token;
  createUserProfile: UserProfile;
  createUserSns: UserSns;
  signIn: Token;
  signOut: CodeMeg;
  updateUserProfile: UserProfile;
  updateUserSns: UserSns;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUserProfileArgs = {
  data: CreateUserProfileInput;
};


export type MutationCreateUserSnsArgs = {
  data: UserSnsCreateInput;
};


export type MutationSignInArgs = {
  data: SignInUserArgs;
};


export type MutationUpdateUserProfileArgs = {
  data: UpdateUserProfileInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateUserSnsArgs = {
  data: UpdateUserSnsInput;
  id: Scalars['Int']['input'];
};

export type NestedBooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBooleanFilter>;
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
  currentUser?: Maybe<User>;
  dummyUser?: Maybe<User>;
  isUserLoggedIn: Scalars['Boolean']['output'];
  shopMsts?: Maybe<Array<Maybe<ShopMst>>>;
  siteUpdate?: Maybe<SiteUpdates>;
  siteUpdates?: Maybe<Array<Maybe<SiteUpdates>>>;
  user?: Maybe<User>;
  userProfile?: Maybe<UserProfile>;
  userProfiles?: Maybe<Array<UserProfile>>;
  userSns?: Maybe<UserSns>;
  userSnsList?: Maybe<Array<UserSns>>;
};


export type QueryDummyUserArgs = {
  id: Scalars['Int']['input'];
};


export type QueryShopMstsArgs = {
  cursor?: InputMaybe<ShopMstWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ShopMstScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ShopMstOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ShopMstWhereInput>;
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


export type QueryUserProfileArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserSnsArgs = {
  id: Scalars['Int']['input'];
};

export type ShopMst = {
  __typename?: 'ShopMst';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isDeleted: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ShopMstCreateNestedOneWithoutUserProfilesInput = {
  connect?: InputMaybe<ShopMstWhereUniqueInput>;
};

export type ShopMstOrderByWithRelationInput = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isDeleted?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum ShopMstScalarFieldEnum {
  Code = 'code',
  CreatedAt = 'createdAt',
  Id = 'id',
  IsDeleted = 'isDeleted',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type ShopMstUpdateOneWithoutUserProfilesInput = {
  code?: InputMaybe<Scalars['String']['input']>;
};

export type ShopMstWhereInput = {
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  isDeleted?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ShopMstWhereUniqueInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
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

export type UpdateUserProfileInput = {
  catchphrase?: InputMaybe<Scalars['String']['input']>;
  introduction?: InputMaybe<Scalars['String']['input']>;
  shopMst?: InputMaybe<ShopMstUpdateOneWithoutUserProfilesInput>;
};

export type UpdateUserSnsInput = {
  facebook?: InputMaybe<Scalars['String']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  x?: InputMaybe<Scalars['String']['input']>;
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
  userProfile?: Maybe<UserProfile>;
  userSns?: Maybe<UserSns>;
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateNestedOneWithoutUserProfileInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutUserSnsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  catchphrase?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  introduction?: Maybe<Scalars['String']['output']>;
  shopMst?: Maybe<ShopMst>;
  shopMstCode?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type UserSns = {
  __typename?: 'UserSns';
  createdAt: Scalars['String']['output'];
  facebook?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  instagram?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
  userId: Scalars['Int']['output'];
  x?: Maybe<Scalars['String']['output']>;
};

export type UserSnsCreateInput = {
  facebook?: InputMaybe<Scalars['String']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  user: UserCreateNestedOneWithoutUserSnsInput;
  x?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type ShopMstsQueryVariables = Exact<{ [key: string]: never; }>;


export type ShopMstsQuery = { __typename?: 'Query', shopMsts?: Array<{ __typename?: 'ShopMst', code: string, name: string } | null> | null };

export type AllSiteUpdatesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSiteUpdatesQuery = { __typename?: 'Query', siteUpdates?: Array<{ __typename?: 'SiteUpdates', id: number, title: string, content: string, publishedAt: any, updatedAt: any } | null> | null };

export type GetSiteUpdateQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetSiteUpdateQuery = { __typename?: 'Query', siteUpdate?: { __typename?: 'SiteUpdates', id: number, title: string, content: string, publishedAt: any, updatedAt: any } | null };

export type GetUserProfileQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetUserProfileQuery = { __typename?: 'Query', userProfile?: { __typename?: 'UserProfile', id: number, userId: number, shopMstCode?: string | null, catchphrase?: string | null, introduction?: string | null, createdAt: string, updatedAt: string } | null };

export type GetUserProfileListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserProfileListQuery = { __typename?: 'Query', userProfiles?: Array<{ __typename?: 'UserProfile', id: number, userId: number, shopMstCode?: string | null, catchphrase?: string | null, introduction?: string | null, createdAt: string, updatedAt: string }> | null };

export type CreateUserProfileMutationVariables = Exact<{
  data: CreateUserProfileInput;
}>;


export type CreateUserProfileMutation = { __typename?: 'Mutation', createUserProfile: { __typename?: 'UserProfile', id: number, userId: number, shopMstCode?: string | null, catchphrase?: string | null, introduction?: string | null, createdAt: string, updatedAt: string } };

export type UpdateUserProfileMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: UpdateUserProfileInput;
}>;


export type UpdateUserProfileMutation = { __typename?: 'Mutation', updateUserProfile: { __typename?: 'UserProfile', id: number, userId: number, shopMstCode?: string | null, catchphrase?: string | null, introduction?: string | null, createdAt: string, updatedAt: string } };

export type GetUserSnsQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetUserSnsQuery = { __typename?: 'Query', userSns?: { __typename?: 'UserSns', id: number, userId: number, createdAt: string, updatedAt: string, x?: string | null, facebook?: string | null, instagram?: string | null } | null };

export type GetUserSnsListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserSnsListQuery = { __typename?: 'Query', userSnsList?: Array<{ __typename?: 'UserSns', id: number, userId: number, createdAt: string, updatedAt: string, x?: string | null, facebook?: string | null, instagram?: string | null }> | null };

export type CreateUserSnsMutationVariables = Exact<{
  data: UserSnsCreateInput;
}>;


export type CreateUserSnsMutation = { __typename?: 'Mutation', createUserSns: { __typename?: 'UserSns', id: number, userId: number, createdAt: string, updatedAt: string, x?: string | null, facebook?: string | null, instagram?: string | null } };

export type UpdateUserSnsMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: UpdateUserSnsInput;
}>;


export type UpdateUserSnsMutation = { __typename?: 'Mutation', updateUserSns: { __typename?: 'UserSns', id: number, userId: number, createdAt: string, updatedAt: string, x?: string | null, facebook?: string | null, instagram?: string | null } };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', currentUser?: { __typename?: 'User', id: number, name: string, email: string, userSns?: { __typename?: 'UserSns', id: number, x?: string | null, facebook?: string | null, instagram?: string | null } | null, userProfile?: { __typename?: 'UserProfile', shopMstCode?: string | null, catchphrase?: string | null, introduction?: string | null } | null } | null };


export const ShopMstsDoc = gql`
    query ShopMsts {
  shopMsts(orderBy: [{code: asc}]) {
    code
    name
  }
}
    `;
export const AllSiteUpdatesDoc = gql`
    query AllSiteUpdates {
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
export const GetUserProfileDoc = gql`
    query GetUserProfile($id: Int!) {
  userProfile(id: $id) {
    id
    userId
    shopMstCode
    catchphrase
    introduction
    createdAt
    updatedAt
  }
}
    `;
export const GetUserProfileListDoc = gql`
    query GetUserProfileList {
  userProfiles {
    id
    userId
    shopMstCode
    catchphrase
    introduction
    createdAt
    updatedAt
  }
}
    `;
export const CreateUserProfileDoc = gql`
    mutation CreateUserProfile($data: CreateUserProfileInput!) {
  createUserProfile(data: $data) {
    id
    userId
    shopMstCode
    catchphrase
    introduction
    createdAt
    updatedAt
  }
}
    `;
export const UpdateUserProfileDoc = gql`
    mutation UpdateUserProfile($id: Int!, $data: UpdateUserProfileInput!) {
  updateUserProfile(id: $id, data: $data) {
    id
    userId
    shopMstCode
    catchphrase
    introduction
    createdAt
    updatedAt
  }
}
    `;
export const GetUserSnsDoc = gql`
    query GetUserSns($id: Int!) {
  userSns(id: $id) {
    id
    userId
    createdAt
    updatedAt
    x
    facebook
    instagram
  }
}
    `;
export const GetUserSnsListDoc = gql`
    query GetUserSnsList {
  userSnsList {
    id
    userId
    createdAt
    updatedAt
    x
    facebook
    instagram
  }
}
    `;
export const CreateUserSnsDoc = gql`
    mutation CreateUserSns($data: UserSnsCreateInput!) {
  createUserSns(data: $data) {
    id
    userId
    createdAt
    updatedAt
    x
    facebook
    instagram
  }
}
    `;
export const UpdateUserSnsDoc = gql`
    mutation UpdateUserSns($id: Int!, $data: UpdateUserSnsInput!) {
  updateUserSns(id: $id, data: $data) {
    id
    userId
    createdAt
    updatedAt
    x
    facebook
    instagram
  }
}
    `;
export const GetCurrentUserDoc = gql`
    query GetCurrentUser {
  currentUser {
    id
    name
    email
    userSns {
      id
      x
      facebook
      instagram
    }
    userProfile {
      shopMstCode
      catchphrase
      introduction
    }
  }
}
    `;
export const ShopMsts = (
            options: Omit<
              WatchQueryOptions<ShopMstsQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<ShopMstsQuery> & {
              query: ObservableQuery<
                ShopMstsQuery,
                ShopMstsQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: ShopMstsDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<ShopMstsQuery> & {
                query: ObservableQuery<
                  ShopMstsQuery,
                  ShopMstsQueryVariables
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
        
export const AllSiteUpdates = (
            options: Omit<
              WatchQueryOptions<AllSiteUpdatesQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<AllSiteUpdatesQuery> & {
              query: ObservableQuery<
                AllSiteUpdatesQuery,
                AllSiteUpdatesQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: AllSiteUpdatesDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<AllSiteUpdatesQuery> & {
                query: ObservableQuery<
                  AllSiteUpdatesQuery,
                  AllSiteUpdatesQueryVariables
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
        
export const GetUserProfile = (
            options: Omit<
              WatchQueryOptions<GetUserProfileQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<GetUserProfileQuery> & {
              query: ObservableQuery<
                GetUserProfileQuery,
                GetUserProfileQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: GetUserProfileDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<GetUserProfileQuery> & {
                query: ObservableQuery<
                  GetUserProfileQuery,
                  GetUserProfileQueryVariables
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
        
export const GetUserProfileList = (
            options: Omit<
              WatchQueryOptions<GetUserProfileListQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<GetUserProfileListQuery> & {
              query: ObservableQuery<
                GetUserProfileListQuery,
                GetUserProfileListQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: GetUserProfileListDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<GetUserProfileListQuery> & {
                query: ObservableQuery<
                  GetUserProfileListQuery,
                  GetUserProfileListQueryVariables
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
        
export const CreateUserProfile = (
            options: Omit<
              MutationOptions<any, CreateUserProfileMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<CreateUserProfileMutation, CreateUserProfileMutationVariables>({
              mutation: CreateUserProfileDoc,
              ...options,
            });
            return m;
          }
export const UpdateUserProfile = (
            options: Omit<
              MutationOptions<any, UpdateUserProfileMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>({
              mutation: UpdateUserProfileDoc,
              ...options,
            });
            return m;
          }
export const GetUserSns = (
            options: Omit<
              WatchQueryOptions<GetUserSnsQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<GetUserSnsQuery> & {
              query: ObservableQuery<
                GetUserSnsQuery,
                GetUserSnsQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: GetUserSnsDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<GetUserSnsQuery> & {
                query: ObservableQuery<
                  GetUserSnsQuery,
                  GetUserSnsQueryVariables
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
        
export const GetUserSnsList = (
            options: Omit<
              WatchQueryOptions<GetUserSnsListQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<GetUserSnsListQuery> & {
              query: ObservableQuery<
                GetUserSnsListQuery,
                GetUserSnsListQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: GetUserSnsListDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<GetUserSnsListQuery> & {
                query: ObservableQuery<
                  GetUserSnsListQuery,
                  GetUserSnsListQueryVariables
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
        
export const CreateUserSns = (
            options: Omit<
              MutationOptions<any, CreateUserSnsMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<CreateUserSnsMutation, CreateUserSnsMutationVariables>({
              mutation: CreateUserSnsDoc,
              ...options,
            });
            return m;
          }
export const UpdateUserSns = (
            options: Omit<
              MutationOptions<any, UpdateUserSnsMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<UpdateUserSnsMutation, UpdateUserSnsMutationVariables>({
              mutation: UpdateUserSnsDoc,
              ...options,
            });
            return m;
          }
export const GetCurrentUser = (
            options: Omit<
              WatchQueryOptions<GetCurrentUserQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<GetCurrentUserQuery> & {
              query: ObservableQuery<
                GetCurrentUserQuery,
                GetCurrentUserQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: GetCurrentUserDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<GetCurrentUserQuery> & {
                query: ObservableQuery<
                  GetCurrentUserQuery,
                  GetCurrentUserQueryVariables
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
        