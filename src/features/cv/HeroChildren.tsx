import React from 'react';
import Particles from 'react-tsparticles';
import styled from 'styled-components';
import { ISourceOptions } from 'tsparticles';
import { GraphCms_Asset } from '../../../graphql-types';
import Button from '../../library/components/Button';
import particlesConfig from '../../library/particles.json';

interface HeroChildrenProps {
  cvAssets: GraphCms_Asset[];
}

const HeroChildren = ({ cvAssets }: HeroChildrenProps) => {
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
      <ParticleBackground id='tsparticles' options={particlesConfig as ISourceOptions} />
      <ButtonContainer>
        <StyledButton onClick={() => downloadFile(pdf)}>Download as PDF</StyledButton>
        <StyledButton onClick={() => downloadFile(docx)}>Download as docx</StyledButton>
      </ButtonContainer>
    </>
  );
};

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

export default HeroChildren;
