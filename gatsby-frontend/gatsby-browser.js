import React from 'react';
import '@fontsource/roboto';
import '@fontsource/fjalla-one';
import { AnimatePresence } from 'framer-motion';
import RootLayout from './src/layouts/Root';
import { PageTransitionProvider } from './src/library/context/PageTransition';

let prevRoute = null;
let currRoute = null;

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => <RootLayout>{element}</RootLayout>;

export const wrapPageElement = ({ element }) => (
  <PageTransitionProvider currRoute={currRoute} prevRoute={prevRoute}>
    <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
  </PageTransitionProvider>
);

export const onPreRouteUpdate = ({ location, prevLocation }) => {
  // Gatsby currently has a bug where location and prevLocation have switched values
  // https://github.com/gatsbyjs/gatsby/issues/34298

  if (prevLocation) {
    prevRoute = location;
    currRoute = prevLocation;
  } else {
    currRoute = location;
  }
};
