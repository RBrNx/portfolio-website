/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
// You can delete this file if you're not using it

import React from 'react';
import ChildRouter from './ChildRouter';

const wrapPageElement = ({ props }, { routes }) => React.createElement(ChildRouter, { ...props, routes });

const shouldUpdateScroll = () => false;

export { wrapPageElement, shouldUpdateScroll };
