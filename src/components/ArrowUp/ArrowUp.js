import React, { useState, useEffect } from 'react';
import StyledArrowUp from './ArrowUp.styled';
import { ReactComponent as ArrowUpIcon } from '../../icons/ArrowUp.svg';

const ArrowUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const headerHeight = 100;
    const toggleVisibility = () => {
      if (window.pageYOffset > headerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    isVisible && (
      <StyledArrowUp onClick={scrollToTop}>
        <ArrowUpIcon className="arrow-up-icon" />
      </StyledArrowUp>
    )
  );
};

export default ArrowUp;
