import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { css } from 'styled-components';
import CVTitle from '../features/cv/Title';
import { CvAssetsQuery, GraphCms_Asset } from '../../graphql-types';
import DefaultLayout from '../layouts/Default';
import HeroChildren from '../features/cv/HeroChildren';

const CVPage = ({ data }: PageProps<CvAssetsQuery>) => {
  const { nodes: cvAssets } = data?.allGraphCmsAsset || {};
  const MemoizedHeroChildren = React.useCallback(() => <HeroChildren cvAssets={cvAssets as GraphCms_Asset[]} />, []);

  return <DefaultLayout heroTitle={CVTitle} heroChildren={MemoizedHeroChildren} heroStyle={heroStyle} />;
};

const heroStyle = css`
  justify-content: center;
`;

export const query = graphql`
  query CVAssets {
    allGraphCmsAsset(filter: { fileName: { glob: "CV-Conor-Watson.*" } }) {
      nodes {
        url
        id
        fileName
      }
    }
  }
`;

export default CVPage;
