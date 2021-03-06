import { ApolloProvider } from '@apollo/client';
import { DefaultSeo } from 'next-seo';
import App from 'next/app';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { subgraphClient } from '../clients/subgraph';
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  GLOBAL_OG_BANNER,
  PROD_LINK,
  TWITTER_HANDLE,
} from '../constants';
import { AppProvider } from '../contexts/app';
import { BlockchainEffect } from '../effects/BlockchainEffect';
import { EagerConnectEffect } from '../effects/EagerConnectEffect';
import { TokensEffect } from '../effects/TokensEffect';
import { TransactionsEffect } from '../effects/TransactionsEffect';
import { ThemedGlobalStyle } from '../theme';

export default class PobApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    const { err } = this.props as any;
    const modifiedPageProps = { ...pageProps, err };
    return (
      <React.Fragment>
        <DefaultSeo
          title={DEFAULT_TITLE}
          description={DEFAULT_DESCRIPTION}
          openGraph={{
            type: 'website',
            locale: 'en_US',
            url: PROD_LINK,
            title: DEFAULT_TITLE,
            description: DEFAULT_DESCRIPTION,
            site_name: 'ABF',
            images: [
              {
                url: GLOBAL_OG_BANNER,
                alt: 'ABF',
              },
            ],
          }}
          twitter={{
            handle: TWITTER_HANDLE,
            site: TWITTER_HANDLE,
            cardType: 'summary_large_image',
          }}
          additionalMetaTags={[
            {
              name: 'twitter:image',
              content: GLOBAL_OG_BANNER,
            },
            {
              name: 'twitter:url',
              content: PROD_LINK,
            },
          ]}
        />
        <ThemedGlobalStyle />
        <AppProvider>
          <ApolloProvider client={subgraphClient}>
            {/** Effects are any tasks that strictly only makes state changes to stores */}
            <BlockchainEffect />
            <EagerConnectEffect />
            <TokensEffect />
            <TransactionsEffect />
            {/** Modals */}
            {/** Fixed Components */}
            <Toaster position="bottom-right" />
            {/** Component */}
            <Component {...modifiedPageProps} />
          </ApolloProvider>
        </AppProvider>
      </React.Fragment>
    );
  }
}
