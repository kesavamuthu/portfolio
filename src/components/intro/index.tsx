import React, { ReactElement, useEffect } from 'react';
import Button from '../customButton';
import './style.scss';
/* @ts-ignore */
import GLightbox from 'glightbox';
import '../../../node_modules/glightbox/dist/css/glightbox.min.css';

interface Props {
    
}

function Intro({}: Props): ReactElement {
    useEffect(() => {
        const lightbox = GLightbox({
            'href': 'https://www.youtube.com/watch?v=f02mOEt11OQ',
            'type': 'video',
            'source': 'youtube', //vimeo, youtube or local
            'width': 900,
            'autoplayVideos':true,
      });
        
    }, []);
    
    return (
        <section id="home" className="intro-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 intro">
            <h1 className="display-2">
              <span className="display-2--intro">Hey!, I'm Gokulkumar </span>
              <span className="display-2--description lh-base">
                this is my first portfolio in resposive layout with sass and
                bootstrap
              </span>
            </h1>
            <Button text="Get in touch" icon={<i className="fas fa-arrow-right" />}/>

          </div>
          <div className="col-md-6 intro text-end">
            <div className="video-box">
              <img
                src="images/intro section.svg"
                alt="video illustration"
                className="img-fluid"/>
              <a href="#" className="glightbox position-absolute top-50 start-50 translate-middle">
                <span>
                  <i className="fas fa-play-circle"></i>
                </span>
                <span className="border-animation border-animation--border-1"></span>
                <span className="border-animation border-animation--border-2"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <svg viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,224L14.1,186.7C28.2,149,56,75,85,80C112.9,85,141,171,169,218.7C197.6,267,226,277,254,245.3C282.4,213,311,139,339,138.7C367.1,139,395,213,424,224C451.8,235,480,181,508,154.7C536.5,128,565,128,593,122.7C621.2,117,649,107,678,122.7C705.9,139,734,181,762,197.3C790.6,213,819,203,847,170.7C875.3,139,904,85,932,90.7C960,96,988,160,1016,181.3C1044.7,203,1073,181,1101,181.3C1129.4,181,1158,203,1186,208C1214.1,213,1242,203,1271,202.7C1298.8,203,1327,213,1355,197.3C1383.5,181,1412,139,1426,117.3L1440,96L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z">
        </path>
      </svg>
    </section>

    )
}

export default Intro;
