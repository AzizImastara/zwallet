import React, { useState, useEffect } from "react";
import Header from "components/module/Header";
import Layout from "components/Layout";
import Sidebar from "components/module/Sidebar";
import Footer from "components/module/Footer";
import axios from "utils/axios";
import Cookie from "js-cookie";

import Image from "next/image";

export default function PersonalInfo(props) {
  const [data, setData] = useState({});

  const id = Cookie.get("id");

  const getDataUser = () => {
    axios
      .get(`/user/profile/${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getDataUser();
  }, []);

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
                    We got your personal information from the sign <br /> up
                    proccess. If you want to make changes on <br /> your
                    information, contact our support.
                  </p>
                  <div className="personal__detail">
                    <p>First Name</p>
                    <h6>{data.firstName}</h6>
                  </div>
                  <div className="personal__detail">
                    <p>Last Name</p>
                    <h6>{data.lastName}</h6>
                  </div>
                  <div className="personal__detail">
                    <p>Verified E-mail</p>
                    <h6>{data.email}</h6>
                  </div>
                  <div className="personal__detail">
                    <p>Phone Number</p>
                    <h6>{data.noTelp}</h6>
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
