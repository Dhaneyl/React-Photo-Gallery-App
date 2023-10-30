import React, { useState, useEffect } from 'react';
import "../styles/ScrollToTopButton.css";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

 
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
    //   className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
    className='scroll-to-top'
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      Scroll to Top
    </button>
  );
}

export default ScrollToTopButton;
