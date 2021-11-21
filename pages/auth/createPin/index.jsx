import React, { useState } from "react";
import axios from "utils/axios";
import router, { useRouter } from "next/router";
import Cookie from "js-cookie";

import Layout from "components/Layout";
import LayoutAuth from "components/LayoutAuth";
import SuccessPin from "components/module/SuccessPin";

const inputStyle = {
  width: "30px",
};

export default function CreatePin() {
  const [pin, setPin] = useState({});
  const [success, setSuccess] = useState(false);

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
    const id = Cookie.get("id");

    axios
      .patch(`/user/pin/${id}`, { pin: allPin })
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout title="Create Pin">
      <div className="row">
        <div className="col-lg-7 col-sm-0 d-none d-md-inline-block">
          <LayoutAuth />
        </div>
        <div className="col-lg-5 col-sm-12 d-flex justify-content-center layout__login--form">
          {success ? (
            <SuccessPin />
          ) : (
            <div>
              <h2>
                Secure Your Account, Your Wallet, and Your Data With 6 Digits
                PIN That You Created Yourself.
              </h2>
              <p>
                Create 6 digits pin to secure all your money and your data in
                Zwallet app. Keep it secret and don’t tell anyone about your
                Zwallet account password and the PIN.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mt-3">
                  <div className="row">
                    <div className="col-2">
                      <input
                        style={inputStyle}
                        maxLength="1"
                        onChange={(event) => addPin(event)}
                        name="1"
                        id="pin-1"
                      />
                    </div>
                    <div className="col-2">
                      <input
                        style={inputStyle}
                        maxLength="1"
                        onChange={(event) => addPin(event)}
                        name="2"
                        id="pin-2"
                      />
                    </div>
                    <div className="col-2">
                      <input
                        style={inputStyle}
                        maxLength="1"
                        onChange={(event) => addPin(event)}
                        name="3"
                        id="pin-3"
                      />
                    </div>
                    <div className="col-2">
                      <input
                        style={inputStyle}
                        maxLength="1"
                        onChange={(event) => addPin(event)}
                        name="4"
                        id="pin-4"
                      />
                    </div>
                    <div className="col-2">
                      <input
                        style={inputStyle}
                        maxLength="1"
                        onChange={(event) => addPin(event)}
                        name="5"
                        id="pin-5"
                      />
                    </div>
                    <div className="col-2">
                      <input
                        style={inputStyle}
                        maxLength="1"
                        onChange={(event) => addPin(event)}
                        name="6"
                        id="pin-6"
                      />
                    </div>
                    <div className="form__button ">
                      <button className="btn btn-primary mt-3 " type="submit">
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
