import React, { useState, useEffect } from "react";
import Header from "components/module/Header";
import Layout from "components/Layout";
import Sidebar from "components/module/Sidebar";
import Footer from "components/module/Footer";
import axios from "utils/axios";

import Image from "next/image";
import samuel from "assets/img/samuel.png";
import pencil from "assets/img/icon/pencil-mini.svg";

export default function EditProfile(props) {
  return (
    <Layout title="Edit Profile">
      <Header />
      <div className="hero__bg">
        <div className="container">
          <div className="row">
            <div className="col-3 my-4">
              <Sidebar />
            </div>
            <div className="col-9 my-4">
              <div className="content__bg">
                <div className="edit__profile">
                  <Image src={samuel} />
                  <div className="edit__input my-3">
                    <Image src={pencil} />
                    <h6>Edit</h6>
                  </div>
                  <h2>Robert Chandler</h2>
                  <h4>+62 813-9387-7946</h4>
                </div>
                <div className="edit__button">
                  <button className="btn btn-light my-2">
                    Personal Information
                  </button>
                  <button className="btn btn-light my-2">
                    Change Password
                  </button>
                  <button className="btn btn-light my-2">Change PIN</button>
                  <button className="btn btn-light my-2">Logout</button>
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
