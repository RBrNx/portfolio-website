// eslint-disable-next-line no-undef
const PageRenderer = require(__COMPONENT_BASE_PATH__).default;

const buildPageElement = (match, prevProps, props) => {
  const usePageRenderer = match && !prevProps;
  const pageElementProps = match && prevProps && props ? prevProps : props;
  const { component, page } = pageElementProps.pageResources;

  if (usePageRenderer) {
    return React.createElement(PageRenderer, { match, key: match.route.path });
  }

  return React.createElement(component, { ...pageElementProps, key: page.path });
};

const buildModalElement = (match, pageResources, props) => {
  if (!match) return null;

  const { component } = pageResources;
  const { path } = pageResources.page;
  return React.createElement(component, { ...props, key: path });
};

export { buildPageElement, buildModalElement };
