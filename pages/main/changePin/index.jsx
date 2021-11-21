import React, { useState, useEffect } from "react";
import Header from "components/module/Header";
import Layout from "components/Layout";
import Sidebar from "components/module/Sidebar";
import Footer from "components/module/Footer";
import axios from "utils/axios";

import Image from "next/image";
import call from "assets/img/icon/call.svg";

export default function ChangePin(props) {
  const [pin, setPin] = useState({});
  // const [success, setSuccess] = useState(false);

  const addPin = (event) => {
    if (event.target.value) {
      const nextSibling = document.getElementById(
        `pin-${parseInt(event.target.name, 10) + 1}`
      );

      if (nextSibling !== null) {
        nextSibling.focus();
      }
    }

    setPin({ ...pin, [`pin${event.target.name}`]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allPin = parseInt(
      pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6
    );
    console.log(allPin);
    // const id = Cookie.get("id");

    // axios
    //   .patch(`/user/pin/${id}`, { pin: allPin })
    //   .then((res) => {
    //     console.log(res);
    //     if (res.data.status === 200) setSuccess(true);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  return (
    <Layout title="Change Pin">
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
                  <h6>Change Pin</h6>
                  <p>
                    Enter your current 6 digits Zwallet PIN below to <br />
                    continue to the next steps.
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mt-3">
                    <div className="row pin__flex">
                      <div className="col-2 pin__change">
                        <input
                          maxLength="1"
                          onChange={(event) => addPin(event)}
                          name="1"
                          id="pin-1"
                        />
                      </div>
                      <div className="col-2 pin__change">
                        <input
                          maxLength="1"
                          onChange={(event) => addPin(event)}
                          name="2"
                          id="pin-2"
                        />
                      </div>
                      <div className="col-2 pin__change">
                        <input
                          maxLength="1"
                          onChange={(event) => addPin(event)}
                          name="3"
                          id="pin-3"
                        />
                      </div>
                      <div className="col-2 pin__change">
                        <input
                          maxLength="1"
                          onChange={(event) => addPin(event)}
                          name="4"
                          id="pin-4"
                        />
                      </div>
                      <div className="col-2 pin__change">
                        <input
                          maxLength="1"
                          onChange={(event) => addPin(event)}
                          name="5"
                          id="pin-5"
                        />
                      </div>
                      <div className="col-2 pin__change">
                        <input
                          maxLength="1"
                          onChange={(event) => addPin(event)}
                          name="6"
                          id="pin-6"
                        />
                      </div>
                      <div className="form__button">
                        <button className="btn btn-primary mt-3 " type="submit">
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
}
