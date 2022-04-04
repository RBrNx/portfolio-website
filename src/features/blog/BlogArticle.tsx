import { lighten } from 'polished';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import ProfilePicture from '../../images/ConorWatson.png';
import HeroHeader from '../../library/components/HeroHeader';

interface BlogArticleProps {
  title: string;
  description: string;
  headerImageUrl: string;
  content: string;
  publishedAt: Date;
}

const calculateReadingTime = (content: string) => {
  const wordCount = content ? content.split(' ').length : 0;
  const avgWordsPerMinute = 225;

  return Math.ceil(wordCount / avgWordsPerMinute);
};

const BlogArticle = ({ title, description, headerImageUrl, content, publishedAt }: BlogArticleProps) => {
  const readingTime = calculateReadingTime(content);

  const blogTitle = useCallback(
    () => (
      <TitleContainer>
        <h2>{title}</h2>
      </TitleContainer>
    ),
    [],
  );

  const blogSubtitle = useCallback(
    () => (
      <SubtitleContainer>
        <span>{description}</span>
      </SubtitleContainer>
    ),
    [],
  );

  return (
    <Container>
      <HeroHeader image={headerImageUrl} title={blogTitle} subtitle={blogSubtitle} />
      <ArticleContainer>
        <MetadataContainer>
          <BlogMetadata>
            <img src={ProfilePicture} alt='Profile' />
            <AuthorInfo>
              <Name>Conor Watson</Name>
              <span>
                {publishedAt.toDateString()} · {readingTime} min read
              </span>
            </AuthorInfo>
          </BlogMetadata>
        </MetadataContainer>
        <BlogContent dangerouslySetInnerHTML={{ __html: content }} />
      </ArticleContainer>
    </Container>
  );
};

const Container = styled.div`
  background: ${props => lighten(0.05, props.theme.background)};
  width: 100%;
`;

const TitleContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 225px;

  h2 {
    font-size: 42px;
    margin: 0;
  }
`;

const SubtitleContainer = styled.div`
  font-size: 20px;
  color: ${props => props.theme.heading};
  font-style: italic;
  position: relative;
  text-align: center;
`;

const ArticleContainer = styled.div`
  padding-left: 25px;
  padding-right: 25px;
`;

const MetadataContainer = styled.div`
  background-color: ${props => lighten(0.1, props.theme.background)};
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  margin-top: 15px;
`;

const BlogMetadata = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;

  img {
    max-height: 75px;
    max-width: 75px;
    border-radius: 50%;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 25px;
  flex: 1;
  color: ${props => props.theme.heading};
`;

const Name = styled.span`
  margin-bottom: 10px;
  font-size: 18px;
`;

const BlogContent = styled.div`
  line-height: 1.4em;
  color: ${props => props.theme.body};
  font-size: 18px;

  h1 {
    margin-top: 100px;
    font-size: 42px;
    color: ${props => props.theme.heading};
    line-height: normal;
  }

  h2 {
    margin-top: 50px;
    font-size: 30px;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 90%;

    & + em {
      display: block;
      text-align: center;
      margin-top: 10px;
      margin-bottom: 5px;
    }
  }
`;

export default BlogArticle;
