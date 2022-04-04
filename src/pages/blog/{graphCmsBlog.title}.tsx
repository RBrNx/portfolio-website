import React, { useState, useCallback, useEffect, useRef } from 'react';
import { graphql, navigate, PageProps } from 'gatsby';
import CardModal from '../../library/components/CardModal';
import { wrapAnchors } from '../../library/utils/DOMParser';
import { BlogPostQuery } from '../../../graphql-types';
import BlogCard from '../../features/blog/BlogCard';
import BlogArticle from '../../features/blog/BlogArticle';

interface NavigationState {
  initialModalStyle: {
    height: string;
    width: string;
    left: string;
    top: string;
  };
}

const BlogPost = ({ data, location }: PageProps<BlogPostQuery, null, NavigationState>) => {
  const { initialModalStyle } = location?.state || {
    initialModalStyle: {
      height: '0px',
      width: '0px',
      left: '25%',
      top: '100%',
      transform: 'translateX(-50%)',
    },
  };
  const {
    id = '',
    title = '',
    description = '',
    headerImage = { url: '' },
    type = '',
    categories = [],
    content = { html: '' },
    publishedAt,
  } = data.graphCmsBlog || {};
  const origBlogPost = useRef<HTMLElement | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const contentHTML = wrapAnchors(content!.html);

  useEffect(() => {
    setModalVisible(true);
    origBlogPost.current = document.getElementById(id);
    if (origBlogPost.current) origBlogPost.current.style.opacity = '0';
  }, []);

  const onModalClose = () => {
    setModalVisible(false);
  };

  const onFlipFinish = ({ isFlipped }: { isFlipped: Boolean }) => {
    if (!isFlipped) {
      if (origBlogPost.current) origBlogPost.current.style.opacity = '1';
      navigate('/blog');
    }
  };
  const CardFrontComponent = useCallback(
    () => (
      <BlogCard
        id={id}
        title={title}
        description={description}
        headerImageUrl={headerImage.url}
        type={type}
        categories={categories}
      />
    ),
    [],
  );

  const CardBackComponent = useCallback(
    () => (
      <BlogArticle
        title={title}
        description={description}
        headerImageUrl={headerImage.url}
        content={contentHTML}
        publishedAt={new Date(publishedAt)}
      />
    ),
    [],
  );

  return (
    <CardModal
      show={modalVisible}
      onClose={onModalClose}
      onFlipFinish={onFlipFinish}
      cardFront={CardFrontComponent}
      cardBack={CardBackComponent}
      style={initialModalStyle}
    />
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPost($id: String!) {
    graphCmsBlog(id: { eq: $id }) {
      id
      title
      description
      headerImage {
        id
        url
      }
      type
      categories
      content {
        html
      }
      publishedAt
    }
  }
`;
