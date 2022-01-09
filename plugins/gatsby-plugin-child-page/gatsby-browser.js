/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
// You can delete this file if you're not using it

import React from 'react';
import ChildRoute from './ChildRoute';

const wrapPageElement = ({ props }) => React.createElement(ChildRoute, props);

const shouldUpdateScroll = () => false;

export { wrapPageElement, shouldUpdateScroll };
