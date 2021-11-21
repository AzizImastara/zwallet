import React, { useState, useEffect } from "react";
import Header from "components/module/Header";
import Layout from "components/Layout";
import Sidebar from "components/module/Sidebar";
import Footer from "components/module/Footer";
import axios from "utils/axios";

import Image from "next/image";
import trash from "assets/img/icon/trash.svg";

export default function ManagePhoneNumber(props) {
  return (
    <Layout title="Manage Phone Number">
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
                  <h6>Manage Phone Number</h6>
                  <p>
                    You can only delete the phone number and then <br /> you
                    must add another phone number.
                  </p>
                </div>
                <div className="manage__phone">
                  <div className="manage__info">
                    <p>Primary</p>
                    <h6>+62 813 9387 7946</h6>
                  </div>
                  <Image src={trash} />
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
