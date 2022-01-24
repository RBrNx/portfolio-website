const wrapAnchors = (html: string) => {
  if (typeof window === 'undefined') return null;

  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(html, 'text/html');
  const anchors = htmlDoc.getElementsByTagName('a');

  // eslint-disable-next-line array-callback-return
  Array.from(anchors).map(anchor => {
    const wrapper = htmlDoc.createElement('span');
    wrapper.classList.add('fancyLink');

    if (anchor.parentNode) {
      anchor.parentNode.insertBefore(wrapper, anchor);
      wrapper.appendChild(anchor);
    }
  });

  return htmlDoc.body.innerHTML;
};

export { wrapAnchors };
