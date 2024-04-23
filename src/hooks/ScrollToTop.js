import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top when the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};

export default ScrollToTop;