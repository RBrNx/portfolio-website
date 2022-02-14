import React, { createContext, useContext } from 'react';

const PAGE_INDEXES: { [path: string]: number } = {
  '/portfolio': 0,
  '/about': 1,
  '/blog': 2,
  '/CV': 3,
};

const LEFT_ANIM = {
  opacity: 0,
  x: '-2em',
};

const ENTER_ANIM = {
  opacity: 1,
  x: 0,
};

const RIGHT_ANIM = {
  opacity: 0,
  x: '2em',
};

const getPageIndex = (pathname: string) => {
  const pageIndex = PAGE_INDEXES[pathname];

  return typeof pageIndex === 'number' ? pageIndex : -1;
};

const PageTransitionContext = createContext({ enter: LEFT_ANIM, animate: ENTER_ANIM, exit: RIGHT_ANIM });

const PageTransitionProvider = ({
  children,
  prevRoute,
  currRoute,
}: {
  children: React.ReactNode;
  prevRoute: any;
  currRoute: any;
}) => {
  const transition = useProviderTransition(currRoute, prevRoute);

  return <PageTransitionContext.Provider value={transition}>{children}</PageTransitionContext.Provider>;
};

const useProviderTransition = (nextRoute: Location, prevRoute: Location) => {
  const prevPageIndex = getPageIndex(prevRoute?.pathname);
  const nextPageIndex = getPageIndex(nextRoute.pathname);

  if (!prevRoute) {
    return {
      enter: LEFT_ANIM,
      animate: ENTER_ANIM,
      exit: RIGHT_ANIM,
    };
  }

  return {
    enter: nextPageIndex > prevPageIndex ? RIGHT_ANIM : LEFT_ANIM,
    animate: ENTER_ANIM,
    exit: nextPageIndex < prevPageIndex ? RIGHT_ANIM : LEFT_ANIM,
  };
};

const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (context === undefined) {
    throw new Error('usePageTransition must be used within a PageTransitionContext');
  }

  return context;
};

export { PageTransitionProvider, usePageTransition };
