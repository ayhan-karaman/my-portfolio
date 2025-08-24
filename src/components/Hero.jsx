import React, { useEffect, useRef } from 'react'
import BgImage from '../assets/images/hero.jpeg'
import { BsTwitterX, BsFacebook, BsInstagram, BsSkype, BsLinkedin, BsGithub } from "react-icons/bs";
import { TbWorldCode } from "react-icons/tb";
import '../styles/hero.css'
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const element = typedRef.current;

    if (element) {
      const dataAttr = element.getAttribute('data-typed-items');
      if (dataAttr) {
        const typedStrings = dataAttr.split(',').map(s => s.trim());

        const typed = new Typed(element, {
          strings: typedStrings,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
        });

        return () => typed.destroy();
      }
    }
  }, []);


  return (
    <section id="hero" className="hero section light-background">

      <img src={BgImage} alt="" />

      <div className="container" data-aos="zoom-out">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2>Ayhan Karaman</h2>
            <p>Ben <span className="typed" ref={typedRef} data-typed-items="C#, .Net Core, Javascript, Nodejs, Geliştiricisi, Serbest Çalışan">Geliştirici</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
            <div className="social-links">
              {/*
                  <a href=""><i> <BsTwitterX /></i></a>
                  <a href=""><i><BsFacebook /></i></a>
                  <a href=""><i> <BsInstagram /></i></a>
                  <a href=""><i> <BsSkype /></i></a> 
                  <a href=""><i><BsLinkedin /></i></a>
              */}
              <a target='_blank' href="https://github.com/ayhan-karaman"><i><BsGithub /></i></a>
               <a href="https://ayhan-karaman.dev"><i><TbWorldCode /></i></a>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero