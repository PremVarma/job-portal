import React from 'react'
import './styles.css'
import logo from '../images/l1-logo.png'
import heroOne from '../images/l7-hero-image.png'
import heroTwo from '../images/l7-mobile.png'
import heroThree from '../images/l7-content2-image-1.png'
import heroFour from '../images/l7-content2-image-1.png'
import heroFive from '../images/l7-content2-image-1.png'
import heroSix from '../images/l7-content2-image-1.png'
import heroSeven from '../images/l7-mobile-2.png'
import video from '../images/video-bg.png'
import videoPlay from '../images/video-play-img.png'
import appStore from '../images/app-store.png'
import playStore from '../images/google-play.png'
import footer from '../images/l1-logo.png'

function Home() {
  return (
    <div className="landing-7 position-relative">
      <header className="site-header bg--conflower-blue sticky-header">
        <div className="container-fluid pr-lg--30 pl-lg--30">
          <nav className="navbar site-navbar offcanvas-active navbar-expand-lg navbar-light">
            <div className="brand-logo">
              <a href="#">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className="collapse navbar-collapse" id="mobile-menu">
              <div className="navbar-nav ml-lg-auto mr--10">
                <ul className="navbar-nav main-menu">
                  <li className="nav-item">
                    <a className="nav-link" href="/jobs" role="button" aria-expanded="false">
                      Demos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/jobs" role="button" aria-expanded="false">
                      Pages
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/jobs" role="button" aria-expanded="false">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-btns ml-auto ml-lg-0">
              <a className="btn btn--primary btn-header hvr-bounce-to-left goto" href="#cta">
                Get this app
              </a>
            </div>
            <button
              className="navbar-toggler btn-close-off-canvas"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-menu"
              aria-controls="mobile-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="icon icon-close fas fa-times"></i>
              <i class="icon icon-burger fas fa-bars"></i>
            </button>
          </nav>
        </div>
      </header>
      <div className="hero-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-xl-4 col-md-5 col-sm-6 mb--30 mb-md--0">
              <div className="hero-image">
                <img src={heroOne} alt="" />
              </div>
            </div>
            <div className="col-lg-7 col-xl-6 col-md-7 offset-xl-1">
              <div className="hero-content ">
                <h1 className="title">
                  Travel the world & <br className="d-none d-lg-block" /> meet new friends.
                </h1>
                <p>
                  Create custom landing pages with Omega that convert more visitors than any
                  website. With lots of unique blocks, you can easily build a page without coding.
                </p>
                <form action="#" className="mt--35">
                  <div className="hero-form">
                    <div className="input-group">
                      <input type="text" placeholder="Email address" />
                      <i className="icon icon-email-84"></i>
                    </div>
                    <button type="submit" className="btn--primary hvr-bounce-to-left">
                      I want to join
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="review-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb--30">
              <div className="single-review">
                <div className="review-star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <p>
                  “OMG! I cannot believe that I have got a brand new landing page after getting
                  Omega. It was super easy to edit and publish. Everyone should try it!”
                </p>
                <span className="user-name">Jonathan Taylor</span>
              </div>
            </div>
            <div className="col-md-6 mb--30">
              <div className="single-review">
                <div className="review-star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                </div>
                <p>
                  “You made it so simple. My new site is so much faster and easier to work with than
                  my old site. I just choose the page, make the change and click save.”
                </p>
                <span className="user-name">Lizzie Rodgers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 mb--30 mb--md-0 order-lg-2">
              <div className="content-image">
                <img src={heroTwo} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-9 order-lg-1">
              <div className="content-text">
                <h2 className="title">
                  Fits everything on <br className="d-none d-sm-block d-md-none d-xl-block" /> all
                  your devices.
                </h2>
                <p>
                  Create custom landing pages with Omega that converts more visitors than any
                  website. With lots of unique blocks, you can easily build a page without coding.
                </p>
                <div className="content-widget">
                  <div className="single-widget">
                    <h3 className="w-title">Find your trip partner</h3>
                    <p>
                      With lots of unique blocks, you can easily build a page without coding. Build
                      your next landing page quickly.
                    </p>
                  </div>
                  <div className="single-widget">
                    <h3 className="w-title">Plan trip with easy steps</h3>
                    <p>
                      With lots of unique blocks, you can easily build a page without coding. Build
                      your next landing page quickly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-section-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb--30 mb--md-0">
              <div className="content-image-2 content-image-group">
                <div className="single-image">
                  <img src={heroThree} alt="" />
                  <img src={heroFour} alt="" />
                </div>
                <div className="single-image">
                  <img src={heroFive} alt="" />
                  <img src={heroSix} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-9 ">
              <div className="content-text">
                <h2 className="title">
                  See the world & <br className="d-none d-sm-block d-md-none d-xl-block" />
                  spend less always.
                </h2>
                <p>
                  Create custom landing pages with Omega that converts more visitors than any
                  website. With lots of unique blocks, you can easily build a page without coding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb--30 mb--md-0 order-lg-2">
              <div className="content-image-3">
                <img src={heroSeven} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-9 order-lg-1">
              <div className="content-text">
                <h2 className="title">
                  Improving your <br className="d-none d-sm-block d-md-none d-xl-block" />
                  travel experience.
                </h2>
                <p>
                  Create custom landing pages with Omega that converts more visitors than any
                  website. With lots of unique blocks, you can easily build a page without coding.
                </p>
                <div className="content-btn pt--30">
                  <a href="#cta" className="btn--primary goto   ">
                    Get this app
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="video-area video-img-overlay">
        <img src={video} alt="" className="video-image" />
        <a href="#" className="play-button" data-fancybox>
          <img src={videoPlay} alt="" />
        </a>
      </div>

      <div className="cta-section" id="cta">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="cta-content ">
                <h2>Get the app now</h2>
                <p>
                  Create custom landing pages with Omega that converts{' '}
                  <br className="d-none d-md-block" /> more visitors than any website.
                </p>
                <div className="cta-btns">
                  <a href="#" className="apple-store">
                    <img src={appStore} alt="" />
                  </a>
                  <a href="#" className="google-play">
                    <img src={playStore} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <div className="container">
          <div className="footer-top">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6 mb--30 text-lg-left text-center">
                <div className=" d-lg-flex">
                  <div className="footer-logo mr-lg-4 mb-4 mb-lg-0">
                    <img src={footer} alt="" />
                  </div>
                  <p className="copyright-text">&copy; 2020 UXTheme, All Rights Reserved</p>
                </div>
              </div>
              <div className="col-lg-6 text-center mb--30 ml-auto">
                <ul className="footer-list list-inline">
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms and Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Home }
