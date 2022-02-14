import React from 'react';
import styled from 'styled-components';
import { graphql, PageProps } from 'gatsby';
import Particles from 'react-tsparticles';
import { ISourceOptions } from 'tsparticles';
import { motion } from 'framer-motion';
import CVTitle from '../features/cv/Title';
import { CvAssetsQuery, GraphCms_Asset } from '../../graphql-types';
import Button from '../library/components/Button';
import Navbar from '../features/navigation/Navbar';
import HeroHeader from '../library/components/HeroHeader';
import Footer from '../library/components/Footer';
import particlesConfig from '../library/particles.json';
import { usePageTransition } from '../library/context/PageTransition';

const CVPage = ({ data }: PageProps<CvAssetsQuery>) => {
  const { nodes: cvAssets } = data?.allGraphCmsAsset || {};
  const { enter, animate, exit } = usePageTransition();

  const [docx, pdf] = cvAssets.sort((a, b) => a.fileName.localeCompare(b.fileName));

  const downloadFile = (file: GraphCms_Asset) => {
    const { url, fileName } = file;

    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.click();
  };

  return (
    <>
      <Navbar />
      <motion.main
        initial={enter}
        animate={animate}
        exit={exit}
        transition={{
          type: 'spring',
          mass: 0.35,
          stiffness: 75,
          duration: 0.3,
        }}
      >
        <StyledHeroHeader title={CVTitle} hideHeaderScrollButton>
          <ParticleBackground id='tsparticles' options={particlesConfig as ISourceOptions} />
          <ButtonContainer>
            <StyledButton onClick={() => downloadFile(pdf as GraphCms_Asset)}>Download as PDF</StyledButton>
            <StyledButton onClick={() => downloadFile(docx as GraphCms_Asset)}>Download as docx</StyledButton>
          </ButtonContainer>
        </StyledHeroHeader>
      </motion.main>
      <Footer />
    </>
  );
};

const StyledHeroHeader = styled(HeroHeader)`
  justify-content: center;
`;

const ParticleBackground = styled(Particles)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

const StyledButton = styled(Button)`
  margin-bottom: 40px;
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
