import React, { useState, useEffect } from "react";
import Header from "components/module/Header";
import Layout from "components/Layout";
import Sidebar from "components/module/Sidebar";
import Footer from "components/module/Footer";
import axios from "utils/axios";

import Image from "next/image";
import samuel from "assets/img/samuel.png";

export default function History(props) {
  const [transaction, setTransaction] = useState([]);

  const HistoryTransaction = () => {
    axios
      .get(`transaction/history?page=1&limit=10&filter=MONTH`)
      .then((res) => {
        setTransaction(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    HistoryTransaction();
  }, []);

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
                  {transaction?.map((el, index) => {
                    return (
                      <div className="profile__transaction" key={index}>
                        <div className="profile__user">
                          <img
                            src={
                              el.image
                                ? `http://localhost:3001/uploads/${el?.image}`
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
                          <h6>{el.amount}</h6>
                        </div>
                      </div>
                    );
                  })}
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
