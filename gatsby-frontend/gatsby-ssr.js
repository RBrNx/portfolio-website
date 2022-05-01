import React from 'react';
import '@fontsource/roboto';
import '@fontsource/fjalla-one';
import RootLayout from './src/layouts/Root';

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => <RootLayout>{element}</RootLayout>;
