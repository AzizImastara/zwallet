import React, { useState, useEffect } from "react";
import Header from "components/module/Header";
import Layout from "components/Layout";
import Sidebar from "components/module/Sidebar";
import Footer from "components/module/Footer";
import axios from "utils/axios";
import { getDataCookie } from "middleware/authorizationPage";

import Image from "next/image";

import samuel from "assets/img/samuel.png";

export default function History(props) {
  // Client Side Rendering
  // const [data, setData] = useState(props.data);
  // // useEffect(() => {
  // //   getDataUser();
  // // }, []);
  // const getDataUser = () => {
  //   axios
  //     .get("/user?page=1&limit=2&search=&sort=")
  //     .then((res) => {
  //       setData(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //     });
  // };
  // ==========================================================

  // Server Side Rendering
  // console.log(props);

  return (
    <Layout title="History">
      <Header />
      <div className="hero__bg">
        <div className="container">
          <div className="row">
            <div className="col-3 my-4">
              <Sidebar />
            </div>
            <div className="col-9 my-4">
              <div className="content__bg">
                <div className="history">
                  <div className="history__transaction d-flex justify-content-between">
                    <h5>History Transaction</h5>
                    <button className="btn btn-light">
                      -- Select Filter --
                    </button>
                  </div>
                  <div className="profile__transaction">
                    <div className="profile__user">
                      <Image src={samuel} alt="" />
                      <div className="profile__info">
                        <h6>Samuel Suhi</h6>
                        <p>Accept</p>
                      </div>
                    </div>
                    <div className="profile__money">
                      <h6>+50.000</h6>
                    </div>
                  </div>
                  <div className="profile__transaction">
                    <div className="profile__user">
                      <Image src={samuel} alt="" />
                      <div className="profile__info">
                        <h6>Samuel Suhi</h6>
                        <p>Accept</p>
                      </div>
                    </div>
                    <div className="profile__money">
                      <h6>+50.000</h6>
                    </div>
                  </div>
                  <div className="profile__transaction">
                    <div className="profile__user">
                      <Image src={samuel} alt="" />
                      <div className="profile__info">
                        <h6>Samuel Suhi</h6>
                        <p>Accept</p>
                      </div>
                    </div>
                    <div className="profile__money">
                      <h6>+50.000</h6>
                    </div>
                  </div>
                  <div className="profile__transaction">
                    <div className="profile__user">
                      <Image src={samuel} alt="" />
                      <div className="profile__info">
                        <h6>Samuel Suhi</h6>
                        <p>Accept</p>
                      </div>
                    </div>
                    <div className="profile__money">
                      <h6>+50.000</h6>
                    </div>
                  </div>
                  <div className="profile__transaction">
                    <div className="profile__user">
                      <Image src={samuel} alt="" />
                      <div className="profile__info">
                        <h6>Samuel Suhi</h6>
                        <p>Accept</p>
                      </div>
                    </div>
                    <div className="profile__money">
                      <h6>+50.000</h6>
                    </div>
                  </div>
                  <div className="profile__transaction">
                    <div className="profile__user">
                      <Image src={samuel} alt="" />
                      <div className="profile__info">
                        <h6>Samuel Suhi</h6>
                        <p>Accept</p>
                      </div>
                    </div>
                    <div className="profile__money">
                      <h6>+50.000</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {/* {props.data.map((item) => (
        <div key={item.id}>
          <h3>{item.firstName}</h3>
        </div>
      ))} */}
    </Layout>
  );
}
