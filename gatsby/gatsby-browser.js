// This will allow a plugin to wrap the page element//
// making our own little plugin that anytime Gatsby renders out a page, it will wrap that in something

import React from 'react';
import Layout from './src/components/Layout';
import { OrderProvider } from './src/components/OrderContext';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

// if you want data to stay from page to page, you have to wrap the root element - makes the data persist
export function wrapRootElement({ element }) {
  return <OrderProvider>{element}</OrderProvider>;
}
