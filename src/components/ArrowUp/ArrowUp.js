import React, { useState, useEffect } from 'react';
import StyledArrowUp from './ArrowUp.styled'; // Ensure this path matches your file structure
import { ReactComponent as ArrowUpIcon } from '../../icons/ArrowUp.svg'; // Ensure this path matches your file structure

const ArrowUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const headerHeight = 100; // This value might need to be adjusted based on your header's actual height
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
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <StyledArrowUp onClick={scrollToTop}>
        <ArrowUpIcon />
      </StyledArrowUp>
    )
  );
};

export default ArrowUp;
