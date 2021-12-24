import React from "react";
import Header from "components/module/Header";
import Layout from "components/Layout";
import Navbar from "react-bootstrap/Navbar";

import jumbotron1 from "assets/img/Group 49.png";
import jumbotron2 from "assets/img/Group 54.png";
import sosmed from "assets/img/sosmed.png";
import gplay from "assets/img/icon/gplay.svg";
import appstore from "assets/img/icon/appstore.svg";
import group1 from "assets/img/icon/Group 10.svg";
import group2 from "assets/img/icon/Group 11.svg";
import group3 from "assets/img/icon/Group 12.svg";
import people from "assets/img/1.png";
import zwallet from "assets/img/zwalletBlue.png";

import Image from "next/image";

export default function LandingPage() {
  return (
    <Layout title="Landing Page">
      {/* <Header /> */}
      <Navbar>
        <div className="container">
          <Navbar.Brand>
            <Image src={zwallet} alt="brand" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <div className="landing__header">
                <button>Login</button>
                <button>Sign Up</button>
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 hero__image">
            <Image src={jumbotron1} alt="" />
          </div>
          <div className="col-lg-6 col-md-12 hero__content">
            <div className="hero__title">
              <h1>
                Awesome App For Saving <span> Time. </span>
              </h1>
            </div>
            <h6>
              We bring you a mobile app for banking problems that oftenly
              wasting much of your times.
            </h6>
            <button className="btn btn-primary my-3">Try it Free</button>
            <div className="available">
              <p>Available on</p>
              <Image src={gplay} alt="" />
              <Image src={appstore} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="sosmed__bg">
        <div className="container">
          <div className="sosmed">
            <Image src={sosmed} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="hero__about">
          <div className="about">
            <h1>
              <span>About</span> the Application.
            </h1>
          </div>
          <p>
            We have some great features from the application and it’s totally
            free <br /> to use by all users around the world.
          </p>
          <div className="row">
            <div className="col-lg-4 col-md-7 about__desc">
              <Image src={group1} />
              <h6>24/7 Support</h6>
              <p>
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </p>
            </div>
            <div className="col-lg-4 col-md-7 about__desc">
              <Image src={group2} />
              <h6>Data Privacy</h6>
              <p>
                We make sure your data is safe in our database and we will
                encrypt any data you submitted to us.
              </p>
            </div>
            <div className="col-lg-4 col-md-7 about__desc">
              <Image src={group3} />
              <h6>Easy Download</h6>
              <p>
                Zwallet is 100% totally free to use it’s now available on Google
                Play Store and App Store.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron2__bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 hero__image2">
              <Image src={jumbotron2} alt="" />
            </div>
            <div className="col-lg-6 col-md-12 hero__content2">
              <div className="hero__title">
                <h1>
                  All The <span>Great</span> Zwallet Features.
                </h1>
              </div>
              <div className="hero__coloum">
                <div className="hero__coloum--number">
                  <p>1.</p>
                  <h6>Small Fee</h6>
                </div>
                <h5>
                  We only charge 5% of every success transaction done in Zwallet
                  app.
                </h5>
              </div>
              <div className="hero__coloum">
                <div className="hero__coloum--number">
                  <p>2.</p>
                  <h6>Data Secured</h6>
                </div>
                <h5>
                  All your data is secured properly in our system and it’s
                  encrypted.
                </h5>
              </div>
              <div className="hero__coloum">
                <div className="hero__coloum--number">
                  <p>3.</p>
                  <h6>User Friendly</h6>
                </div>
                <h5>
                  Zwallet come up with modern and sleek design and not
                  complicated.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="hero__saying">
          <div className="hero__saying--title">
            <h1>
              What Users are <span>Saying.</span>
            </h1>
          </div>
          <p>
            We have some great features from the application and it’s totally
            free <br /> to use by all users around the world.
          </p>
          <div className="hero__saying--bg">
            <div className="hero__saying--content">
              <Image src={people} />
              <h4>Alex Hansinburg</h4>
              <p>Designer</p>
              <p>
                “This is the most outstanding app that I’ve ever try in my live,
                this app is such an amazing masterpiece and it’s suitable for
                you who is bussy with their bussiness and must transfer money to
                another person aut there. Just try this app and see the power!”
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bg">
        <div className="container">
          <div className="footer">
            <h4>Zwallet</h4>
            <p>
              Simplify financial needs and saving <br /> much time in banking
              needs with <br /> one single app.
            </p>
          </div>
          <div className="footer__desc">
            <p>2020 Zwallet. All right reserved.</p>
            <div className="footer__desc--detail">
              <h6>+62 5637 8882 9901</h6>
              <h6>contact@zwallet.com</h6>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
