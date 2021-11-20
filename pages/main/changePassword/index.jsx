import React, { useState, useEffect } from "react";
import Header from "components/module/Header";
import Layout from "components/Layout";
import Sidebar from "components/module/Sidebar";
import Footer from "components/module/Footer";
import axios from "utils/axios";

import Image from "next/image";
import samuel from "assets/img/samuel.png";
import pencil from "assets/img/icon/pencil-mini.svg";

export default function ChangePassword(props) {
  return (
    <Layout title="Change Password">
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
                  <h6>Change Password</h6>
                  <p>
                    You must enter your current password and then type your new
                    password twice.
                  </p>
                </div>
                <div className="password__input">
                  <input type="password" placeholder="Current password" />
                  <input type="password" placeholder="New password" />
                  <input type="password" placeholder="Input new password" />
                  <button className="btn btn-light">Change Password</button>
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
