import React from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import styled from 'styled-components';

interface SocialShareProps {
  url: string;
  title: string;
  description: string;
  headerImageUrl: string;
}

const SocialShare = ({ url, title, description, headerImageUrl }: SocialShareProps) => (
  <Container>
    <EmailShareButton url={url} subject={title} body={description}>
      <EmailIcon size={36} round />
    </EmailShareButton>
    <FacebookShareButton url={url} quote={description}>
      <FacebookIcon size={36} round />
    </FacebookShareButton>
    <TwitterShareButton url={url} title={title}>
      <TwitterIcon size={36} round />
    </TwitterShareButton>
    <LinkedinShareButton url={url} title={title} summary={description} source='www.redbarongames.co.uk'>
      <LinkedinIcon size={36} round />
    </LinkedinShareButton>
    <PinterestShareButton url={url} media={headerImageUrl} description={description}>
      <PinterestIcon size={36} round />
    </PinterestShareButton>
    <RedditShareButton url={url} title={title}>
      <RedditIcon size={36} round />
    </RedditShareButton>
    <WhatsappShareButton url={url} title={title}>
      <WhatsappIcon size={36} round />
    </WhatsappShareButton>
    <TelegramShareButton url={url} title={title}>
      <TelegramIcon size={36} round />
    </TelegramShareButton>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export default SocialShare;
