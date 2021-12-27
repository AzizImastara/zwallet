import React, { useState, useEffect } from "react";
import Header from "components/module/Header";
import Layout from "components/Layout";
import Sidebar from "components/module/Sidebar";
import Footer from "components/module/Footer";
import axios from "utils/axios";
import Cookie from "js-cookie";
import Link from "next/link";
import { Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile, updateProfile } from "stores/action/user";

export default function PersonalInfo(props) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = useSelector((state) => state.user);
  // console.log(user, "sue");
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [noTelp, setNoTelp] = useState(user.data.noTelp);

  const handleTextNoTelp = (e) => {
    setNoTelp(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(updateProfile(user.data.id, { noTelp: noTelp }))
      .then((res) => {
        console.log(res, "res");
        handleClose();
        dispatch(getUserProfile(user.data.id));
        Swal.fire({
          position: "top-center",
          width: 200,
          icon: "success",
          title: "Success update phone number",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((err) => {
        console.log(err.response);
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

  return (
    <Layout title="Personal Info">
      <Header />
      <div className="hero__bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 my-4">
              <Sidebar />
            </div>
            <div className="col-lg-9 col-md-12 my-4">
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
                    <h6>{user.data.firstName}</h6>
                  </div>
                  <div className="personal__detail">
                    <p>Last Name</p>
                    <h6>{user.data.lastName}</h6>
                  </div>
                  <div className="personal__detail">
                    <p>Verified E-mail</p>
                    <h6>{user.data.email}</h6>
                  </div>
                  <div className="personal__detail">
                    <div className="manage__telp">
                      <div className="manage__telp--data">
                        <p>Phone Number</p>
                        <h6>{user.data.noTelp}</h6>
                      </div>
                      <a onClick={handleShow}>Manage</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Topup</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Edit phone number?</p>
            <input
              type="number"
              name="noTelp"
              onChange={handleTextNoTelp}
              placeholder="Input Phone Number..."
              value={noTelp}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
        <Footer />
      </div>
    </Layout>
  );
}
