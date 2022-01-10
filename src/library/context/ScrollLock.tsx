import React, { createContext, useCallback, useContext, useLayoutEffect, useRef, useState } from 'react';

const isiOS =
  ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) ||
  // iPad on iOS 13 detection
  (navigator.userAgent.includes('Mac') && 'ontouchend' in document);

const ScrollLockContext = createContext({ isScrollLocked: false, lockScroll: () => {}, unlockScroll: () => {} });

const ScrollLockProvider = ({ children }: { children: React.ReactNode }) => {
  const scrollLock = useProviderScrollLock();

  return <ScrollLockContext.Provider value={scrollLock}>{children}</ScrollLockContext.Provider>;
};

const useProviderScrollLock = () => {
  const scrollOffset = useRef(0);
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  const lockScroll = useCallback(() => {
    document.body.dataset.scrollLock = 'true';
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = 'var(--scrollbar-compensation)';

    if (isiOS) {
      scrollOffset.current = window.pageYOffset;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollOffset.current}px`;
      document.body.style.width = '100%';
    }

    setIsScrollLocked(true);
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';

    if (isiOS) {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollOffset.current);
    }

    setIsScrollLocked(false);
    delete document.body.dataset.scrollLock;
  }, []);

  useLayoutEffect(() => {
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
    document.body.style.setProperty('--scrollbar-compensation', `${scrollBarCompensation}px`);
  }, []);

  return {
    lockScroll,
    unlockScroll,
    isScrollLocked,
  };
};

const useScrollLock = () => {
  const context = useContext(ScrollLockContext);
  if (context === undefined) {
    throw new Error('useScrollLock must be used within a ScrollLockProvider');
  }
  return context;
};

export { ScrollLockProvider, useScrollLock };
