import React, { useState, useEffect } from "react";
import Header from "components/module/Header";
import Layout from "components/Layout";
import Sidebar from "components/module/Sidebar";
import Footer from "components/module/Footer";
import axios from "utils/axios";

import Image from "next/image";
import samuel from "assets/img/samuel.png";
import pencil from "assets/img/icon/pencil-mini.svg";

export default function PersonalInfo(props) {
  return (
    <Layout title="Personal Info">
      <Header />
      <div className="hero__bg">
        <div className="container">
          <div className="row">
            <div className="col-3 my-4">
              <Sidebar />
            </div>
            <div className="col-9 my-4">
              <div className="content__bg">
                <div className="personal__info">
                  <h6>Personal Information</h6>
                  <p>
                    We got your personal information from the sign up proccess.
                    If you want to make changes on your information, contact our
                    support.
                  </p>
                  <div className="personal__detail">
                    <p>First Name</p>
                    <h6>Robert</h6>
                  </div>
                  <div className="personal__detail">
                    <p>Last Name</p>
                    <h6>Chandler</h6>
                  </div>
                  <div className="personal__detail">
                    <p>Verified E-mail</p>
                    <h6>pewdiepie1@gmail.com</h6>
                  </div>
                  <div className="personal__detail">
                    <p>Phone Number</p>
                    <h6>+62 813-9387-7946</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
}
