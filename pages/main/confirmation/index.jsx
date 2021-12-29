import React, { useState, useEffect } from "react";
import router, { useRouter } from "next/router";
import Link from "next/link";
import Header from "components/module/Header";
import Layout from "components/Layout";
import Sidebar from "components/module/Sidebar";
import Footer from "components/module/Footer";
import Success from "components/Success";
import Failed from "components/Failed";
import axios from "utils/axios";
import Swal from "sweetalert2";

import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "stores/action/user";

export default function Confirmation(props) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const newDate = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    axios
      .get(`/user/pin?pin=${allPin}`, { pin: allPin })
      .then((res) => {
        if (res.status === 200 && res.statusText === "OK") {
          axios
            .post(`/transaction/transfer`, {
              receiverId: router.query.receiverId,
              amount: router.query.amount,
              notes: router.query.notes,
            })
            .then((res) => {
              dispatch(getUserProfile(res.data.data.senderId));
              // console.log(res.data.data.senderId);
              Swal.fire({
                position: "top-center",
                width: 200,
                icon: "success",
                title: res.data.msg,
                showConfirmButton: false,
                timer: 2000,
              });
              setSuccess(true);
              handleClose();
            })
            .catch((err) => {
              console.log(err.response);
            });
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          position: "top-center",
          width: 200,
          icon: "error",
          title: err.response.data.msg,
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  const getDataUser = () => {
    axios
      .get(`/user/profile/${router.query.receiverId}`)
      .then((res) => {
        // console.log(res.data.data, "sadk");
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <Layout title="Confirmation">
      <div className="hero__bg">
        <Header />
        <div className="container">
          {success ? (
            <Success newDate={newDate} />
          ) : (
            <div className="row">
              <div className="col-lg-3 col-md-12 my-4">
                <Sidebar />
              </div>
              <div className="col-lg-9 col-md-12 my-4">
                <div className="content__bg">
                  <div className="amount">
                    <h6>Transfer To</h6>
                  </div>
                  <div className="profile__transaction">
                    <div className="profile__user">
                      <img
                        src={
                          data.image
                            ? `${process.env.URL_BACKEND_LOCAL}/uploads/${data?.image}`
                            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                        }
                        alt="profile"
                      />
                      <div className="profile__info">
                        <h6>{data.firstName + " " + data.lastName}</h6>
                        <p>{data.noTelp}</p>
                      </div>
                    </div>
                  </div>
                  <div className="amount">
                    <h6>Details</h6>
                  </div>
                  <div className="amount__details">
                    <p>Amount</p>
                    <h6>Rp{router.query.amount}</h6>
                  </div>
                  <div className="amount__details">
                    <p>Balance</p>
                    <h6>Rp{user.data.balance - router.query.amount}</h6>
                  </div>
                  <div className="amount__details">
                    <p>Date & Time</p>
                    <h6>{newDate}</h6>
                  </div>
                  <div className="amount__details">
                    <p>Notes</p>
                    <h6>{router.query.notes}</h6>
                  </div>
                  <div className="amount__button">
                    <button onClick={handleShow} className="btn btn-primary">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
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
