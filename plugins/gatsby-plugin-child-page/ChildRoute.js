/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

const withoutPrefix = path => {
  // eslint-disable-next-line no-undef
  const prefix = typeof __BASE_PATH__ !== `undefined` ? __BASE_PATH__ : __PATH_PREFIX__;

  return path?.slice(prefix ? prefix.length : 0);
};

// If the route is a modal, we want to render the previous/parent page in the background
// else (for now) render the page content as normal
const buildPageElement = (isModal, prevProps, props) => {
  const pageElementProps = isModal ? prevProps : props;
  const { component, page } = pageElementProps.pageResources;

  return React.createElement(component, { ...pageElementProps, key: page.path });
};

const buildModalElement = (isModal, lastModalProps, pageResources, props) => {
  if (!isModal && !lastModalProps) return null;

  // isModal = rendering the current page as a modal (create an element with the page contents)
  // !isModal = not rendering as a modal, but we may be in the process of animating  the old
  // modal content to close, so render the last modal content we have cached
  const { component } = isModal ? pageResources : lastModalProps.pageResources;
  const modalElementProps = isModal ? props : lastModalProps;
  const { path } = isModal ? pageResources.page : lastModalProps.pageResources.page;
  return React.createElement(component, { ...modalElementProps, key: path });
};

const ChildRoute = props => {
  const { pageResources, location } = props;
  const [prevProps, setPrevProps] = useState(null);
  // const [lastModalProps, setLastModalProps] = useState(null);
  const [currentProps, setCurrentProps] = useState(null);

  // useEffect(() => {
  if (location.pathname !== currentProps?.location?.pathname) {
    const oldProps = currentProps;
    const oldPageWasModal = !!currentProps?.location.state?.modal;

    // console.log('Pathname changed', { oldProps, oldPageWasModal, props });

    setCurrentProps(props);
    setPrevProps(oldProps);

    // if (oldPageWasModal) setLastModalProps(oldProps);
    // else setPrevProps(oldProps);

    return null;
  }
  // }, [location.pathname, componentProps, pathname, props]);

  const isModal = location.state?.modal;
  const prevPath = withoutPrefix(prevProps?.location.pathname);

  // the page is the previous path if this is a modal, otherwise it's the current path
  const pageElement = buildPageElement(isModal, prevProps, props);
  const modalElement = buildModalElement(isModal, null, pageResources, props);
  // console.log('render', { prevProps, isModal, modalElement });

  return (
    <>
      {pageElement}
      {modalElement}
    </>
  );
};

export default ChildRoute;
