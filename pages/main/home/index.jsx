import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "components/module/Header";
import Layout from "components/Layout";
import Sidebar from "components/module/Sidebar";
import Footer from "components/module/Footer";
import axios from "utils/axios";
import { getDataCookie } from "middleware/authorizationPage";

import Image from "next/image";

import samuel from "assets/img/samuel.png";

// Server Side Rendering
export async function getServerSideProps(context) {
  const dataCookie = await getDataCookie(context);
  if (!dataCookie.isLogin) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  const response = await axios
    .get("/user?page=1&limit=2&search=&sort=", {
      headers: {
        Authorization: `Bearer ${dataCookie.token}`,
      },
    })
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      return [];
    });
  return {
    props: { data: response },
  };
}

export default function Home(props) {
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
    <Layout title="Home">
      <Header />
      <div className="hero__bg">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Sidebar />
            </div>
            <div className="col-9">
              <div className="content__bg">
                <div className="topup">
                  <div className="topup__balance">
                    <h5>Balance</h5>
                    <h2>Rp120.000</h2>
                    <h6>+62 813-9387-7946</h6>
                  </div>
                  <div className="topup__transfer">
                    <button className="btn">Transfer</button>
                    <button className="btn">Top Up</button>
                  </div>
                </div>
                <div className="row home__info">
                  <div className="col-7">
                    <div className="chart d-flex justify-content-center">
                      <h1>CHART</h1>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="history">
                      <div className="history__transaction d-flex justify-content-between">
                        <h5>History Transaction</h5>
                        <Link href="/main/history">See all</Link>
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
          </div>
          <Footer />
        </div>
        {/* {props.data.map((item) => (
        <div key={item.id}>
          <h3>{item.firstName}</h3>
        </div>
      ))} */}
      </div>
    </Layout>
  );
}
