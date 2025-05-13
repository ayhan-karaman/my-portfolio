/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { BsArrowUpShort } from "react-icons/bs";
import '../styles/scrollTop.css'


const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Scroll'da butonun görünürlüğünü kontrol et
    const toggleScrollTop = () => {
      setIsVisible(window.scrollY > 100);
    };
  
    // Scroll ve load event'lerini ayarla
    useEffect(() => {
      window.addEventListener('scroll', toggleScrollTop);
      window.addEventListener('load', toggleScrollTop);
      return () => {
        window.removeEventListener('scroll', toggleScrollTop);
        window.removeEventListener('load', toggleScrollTop);
      };
    }, []);
  
    // Yukarı kaydır
    const scrollToTop = (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    return (
        <>

            <a
                href="#"
                className={`scroll-top ${isVisible ? 'active' : ''}  d-flex align-items-center justify-content-center`}
                onClick={scrollToTop}
            >
                <BsArrowUpShort className='icon'/>
            </a>
        </>
    )
}

export default ScrollTop