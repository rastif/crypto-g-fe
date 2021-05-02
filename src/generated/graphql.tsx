import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Asset = {
  __typename?: 'Asset';
  asset_id: Scalars['String'];
  name: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type HistoricalRate = {
  __typename?: 'HistoricalRate';
  time_period_start: Scalars['String'];
  time_period_end: Scalars['String'];
  time_open: Scalars['String'];
  time_close: Scalars['String'];
  price_open: Scalars['Float'];
  price_close: Scalars['Float'];
  price_high: Scalars['Float'];
  price_low: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  assets: Array<Asset>;
  rate: Rate;
  historicalRates: Array<HistoricalRate>;
  popularRates: Array<Rate>;
};


export type QueryRateArgs = {
  asset_id_base: Scalars['String'];
  asset_id_quote: Scalars['String'];
};


export type QueryHistoricalRatesArgs = {
  asset_id_base: Scalars['String'];
  asset_id_quote: Scalars['String'];
  period_id: Scalars['String'];
  time_start: Scalars['String'];
  time_end?: Maybe<Scalars['String']>;
};

export type Rate = {
  __typename?: 'Rate';
  asset_id_base: Scalars['String'];
  rate: Scalars['Float'];
};


export type HistoricalRatesQueryVariables = Exact<{
  asset_id_base: Scalars['String'];
  asset_id_quote: Scalars['String'];
  period_id: Scalars['String'];
  time_start: Scalars['String'];
  time_end?: Maybe<Scalars['String']>;
}>;


export type HistoricalRatesQuery = (
  { __typename?: 'Query' }
  & { historicalRates: Array<(
    { __typename?: 'HistoricalRate' }
    & Pick<HistoricalRate, 'time_period_start' | 'price_close' | 'price_high' | 'price_low'>
  )> }
);

export type AssetsQueryVariables = Exact<{ [key: string]: never; }>;


export type AssetsQuery = (
  { __typename?: 'Query' }
  & { assets: Array<(
    { __typename?: 'Asset' }
    & Pick<Asset, 'asset_id' | 'name'>
  )> }
);

export type PopularRatesQueryVariables = Exact<{ [key: string]: never; }>;


export type PopularRatesQuery = (
  { __typename?: 'Query' }
  & { popularRates: Array<(
    { __typename?: 'Rate' }
    & Pick<Rate, 'asset_id_base' | 'rate'>
  )> }
);


export const HistoricalRatesDocument = gql`
    query HistoricalRates($asset_id_base: String!, $asset_id_quote: String!, $period_id: String!, $time_start: String!, $time_end: String) {
  historicalRates(
    asset_id_base: $asset_id_base
    asset_id_quote: $asset_id_quote
    period_id: $period_id
    time_start: $time_start
    time_end: $time_end
  ) {
    time_period_start
    price_close
    price_high
    price_low
  }
}
    `;

/**
 * __useHistoricalRatesQuery__
 *
 * To run a query within a React component, call `useHistoricalRatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useHistoricalRatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHistoricalRatesQuery({
 *   variables: {
 *      asset_id_base: // value for 'asset_id_base'
 *      asset_id_quote: // value for 'asset_id_quote'
 *      period_id: // value for 'period_id'
 *      time_start: // value for 'time_start'
 *      time_end: // value for 'time_end'
 *   },
 * });
 */
export function useHistoricalRatesQuery(baseOptions: Apollo.QueryHookOptions<HistoricalRatesQuery, HistoricalRatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HistoricalRatesQuery, HistoricalRatesQueryVariables>(HistoricalRatesDocument, options);
      }
export function useHistoricalRatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HistoricalRatesQuery, HistoricalRatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HistoricalRatesQuery, HistoricalRatesQueryVariables>(HistoricalRatesDocument, options);
        }
export type HistoricalRatesQueryHookResult = ReturnType<typeof useHistoricalRatesQuery>;
export type HistoricalRatesLazyQueryHookResult = ReturnType<typeof useHistoricalRatesLazyQuery>;
export type HistoricalRatesQueryResult = Apollo.QueryResult<HistoricalRatesQuery, HistoricalRatesQueryVariables>;
export const AssetsDocument = gql`
    query Assets {
  assets {
    asset_id
    name
  }
}
    `;

/**
 * __useAssetsQuery__
 *
 * To run a query within a React component, call `useAssetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAssetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAssetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAssetsQuery(baseOptions?: Apollo.QueryHookOptions<AssetsQuery, AssetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AssetsQuery, AssetsQueryVariables>(AssetsDocument, options);
      }
export function useAssetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AssetsQuery, AssetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AssetsQuery, AssetsQueryVariables>(AssetsDocument, options);
        }
export type AssetsQueryHookResult = ReturnType<typeof useAssetsQuery>;
export type AssetsLazyQueryHookResult = ReturnType<typeof useAssetsLazyQuery>;
export type AssetsQueryResult = Apollo.QueryResult<AssetsQuery, AssetsQueryVariables>;
export const PopularRatesDocument = gql`
    query PopularRates {
  popularRates {
    asset_id_base
    rate
  }
}
    `;

/**
 * __usePopularRatesQuery__
 *
 * To run a query within a React component, call `usePopularRatesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePopularRatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePopularRatesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePopularRatesQuery(baseOptions?: Apollo.QueryHookOptions<PopularRatesQuery, PopularRatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PopularRatesQuery, PopularRatesQueryVariables>(PopularRatesDocument, options);
      }
export function usePopularRatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PopularRatesQuery, PopularRatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PopularRatesQuery, PopularRatesQueryVariables>(PopularRatesDocument, options);
        }
export type PopularRatesQueryHookResult = ReturnType<typeof usePopularRatesQuery>;
export type PopularRatesLazyQueryHookResult = ReturnType<typeof usePopularRatesLazyQuery>;
export type PopularRatesQueryResult = Apollo.QueryResult<PopularRatesQuery, PopularRatesQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    