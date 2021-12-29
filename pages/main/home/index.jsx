import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "components/module/Header";
import Layout from "components/Layout";
import Sidebar from "components/module/Sidebar";
import Footer from "components/module/Footer";
import Chart from "components/Chart";
import axios from "utils/axios";
import { getDataCookie } from "middleware/authorizationPage";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "stores/action/user";

import Image from "next/image";
import Cookie from "js-cookie";

// Server Side Rendering
export async function getServerSideProps(context) {
  const dataCookie = await getDataCookie(context);
  if (!dataCookie.token) {
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
  const dispatch = useDispatch();
  const [historyData, setHistoryData] = useState([]);
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.user);
  console.log(user);

  const router = useRouter();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const receiver = (e) => {
    e.preventDefault();
    router.push("/main/searchReceiver");
  };

  const History = () => {
    axios
      .get(`/transaction/history?page=1&limit=2&filter=MONTH`)
      .then((res) => {
        setHistoryData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    History();
  }, []);

  return (
    <Layout title="Home">
      <Header />
      <div className="hero__bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 my-4">
              <Sidebar />
            </div>
            <div className="col-lg-9 col-md-12 my-4 ">
              <div className="content__bg">
                <div className="topup">
                  <div className="topup__balance">
                    <h5>Balance</h5>
                    <h2>Rp{user.data.balance}</h2>
                    <h6>{user.data.noTelp}</h6>
                  </div>
                  <div className="topup__transfer">
                    <button onClick={receiver} className="btn">
                      Transfer
                    </button>
                    <button onClick={handleShow} className="btn">
                      Top Up
                    </button>
                  </div>
                </div>
                <div className="row home__info">
                  <div className="col-lg-7 col-md-12">
                    <div className="chart">
                      <Chart />
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12">
                    <div className="history">
                      <div className="history__transaction d-flex justify-content-between">
                        <h5>History Transaction</h5>
                        <Link href="/main/history">See all</Link>
                      </div>

                      {historyData?.map((el, index) => {
                        return (
                          <div className="profile__transaction" key={index}>
                            <div className="profile__user">
                              <img
                                src={
                                  el.image
                                    ? `${process.env.URL_BACKEND_LOCAL}/uploads/${el?.image}`
                                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                                }
                                alt="profile"
                              />
                              <div className="profile__info">
                                <h6>{el.firstName}</h6>
                                <p>{el.status}</p>
                              </div>
                            </div>
                            <div className="profile__money">
                              {el.type === "send" ? (
                                <div
                                  className="align-self-center nunito-700"
                                  style={{ color: "#FF5B37" }}
                                >
                                  -{el.amount}
                                </div>
                              ) : el.type === "topup" ? (
                                <div
                                  className="align-self-center nunito-700"
                                  style={{ color: "#FF5B37" }}
                                >
                                  +{el.amount}
                                </div>
                              ) : (
                                <div
                                  className="align-self-center nunito-700"
                                  style={{ color: "#1EC15F" }}
                                >
                                  +{el.amount}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Topup</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Enter the amount of money, and click submit</p>
              <input type="text" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary">Submit</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </Layout>
  );
}
