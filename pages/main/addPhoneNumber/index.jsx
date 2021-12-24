import React, { useState, useEffect } from "react";
import Header from "components/module/Header";
import Layout from "components/Layout";
import Sidebar from "components/module/Sidebar";
import Footer from "components/module/Footer";
import axios from "utils/axios";

import Image from "next/image";
import call from "assets/img/icon/call.svg";

export default function AddPhoneNumber(props) {
  return (
    <Layout title="Add Phone Number">
      <Header />
      <div className="hero__bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 my-4">
              <Sidebar />
            </div>
            <div className="col-lg-9 col-md-12 my-4">
              <div className="content__bg">
                <div className="personal__info">
                  <h6>Add Phone Number</h6>
                  <p>
                    Add at least one phone number for the transfer <br /> ID so
                    you can start transfering your money to <br /> another user.
                  </p>
                </div>
                <div className="phone">
                  <div className="phone__input">
                    <Image src={call} alt="" />
                    <input
                      type="number"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="phone__button">
                    <button className="btn btn-light">Add Phone Number</button>
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
