import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "components/module/Header";
import Layout from "components/Layout";
import Sidebar from "components/module/Sidebar";
import Footer from "components/module/Footer";
import axios from "utils/axios";

import Image from "next/image";
import samuel from "assets/img/samuel.png";

import { Modal, Button } from "react-bootstrap";

export default function Confirmation(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [pin, setPin] = useState({});

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
    <Layout title="Confirmation">
      <div className="hero__bg">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-3 my-4">
              <Sidebar />
            </div>
            <div className="col-9 my-4">
              <div className="content__bg">
                <div className="amount">
                  <h6>Transfer To</h6>
                </div>
                <div className="profile__transaction">
                  <div className="profile__user">
                    <Image src={samuel} alt="" />
                    <div className="profile__info">
                      <h6>Samuel Suhi</h6>
                      <p>+62 813-8492-9994</p>
                    </div>
                  </div>
                </div>
                <div className="amount">
                  <h6>Details</h6>
                </div>
                <div className="amount__details">
                  <p>Amount</p>
                  <h6>Rp100.000</h6>
                </div>
                <div className="amount__details">
                  <p>Balance</p>
                  <h6>Rp20.000</h6>
                </div>
                <div className="amount__details">
                  <p>Date & Time</p>
                  <h6>May 11, 2020 - 12.20</h6>
                </div>
                <div className="amount__details">
                  <p>Notes</p>
                  <h6>For buying some socks</h6>
                </div>
                <div className="amount__button">
                  <button onClick={handleShow} className="btn btn-primary">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter PIN to Transfer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Enter your 6 digits PIN for confirmation to continue transferring
            money.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mt-3">
              <div className="row">
                <div className="col-2 pin__style">
                  <input
                    maxLength="1"
                    onChange={(event) => addPin(event)}
                    name="1"
                    id="pin-1"
                  />
                </div>
                <div className="col-2 pin__style">
                  <input
                    maxLength="1"
                    onChange={(event) => addPin(event)}
                    name="2"
                    id="pin-2"
                  />
                </div>
                <div className="col-2 pin__style">
                  <input
                    maxLength="1"
                    onChange={(event) => addPin(event)}
                    name="3"
                    id="pin-3"
                  />
                </div>
                <div className="col-2 pin__style">
                  <input
                    maxLength="1"
                    onChange={(event) => addPin(event)}
                    name="4"
                    id="pin-4"
                  />
                </div>
                <div className="col-2 pin__style">
                  <input
                    maxLength="1"
                    onChange={(event) => addPin(event)}
                    name="5"
                    id="pin-5"
                  />
                </div>
                <div className="col-2 pin__style">
                  <input
                    maxLength="1"
                    onChange={(event) => addPin(event)}
                    name="6"
                    id="pin-6"
                  />
                </div>
                <Modal.Footer>
                  <Button variant="primary" type="submit">
                    Continue
                  </Button>
                </Modal.Footer>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </Layout>
  );
}
