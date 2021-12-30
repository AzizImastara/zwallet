import React, { useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { Modal, Button } from "react-bootstrap";

import grid from "assets/img/icon/grid.svg";
import plus from "assets/img/icon/plus.svg";
import arrow from "assets/img/icon/arrow-up.svg";
import user from "assets/img/icon/user.svg";
import logout from "assets/img/icon/log-out.svg";
import axios from "utils/axios";

export default function Sidebar() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [errTopup, setErrorTopop] = useState({
    show: false,
    msg: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState("");

  const handleTextTopup = (e) => {
    setData(e.target.value);
  };

  const handleSubmitTopup = () => {
    if (data < 10000) {
      setErrorTopop({
        show: true,
        msg: `Minimal Rp.10000 to top up`,
      });

      setTimeout(() => {
        setErrorTopop({
          show: false,
          msg: ``,
        });
      }, 3000);
    } else {
      axios
        .post(`/transaction/top-up`, { amount: data })
        .then((res) => {
          console.log(res, "topup");
          window.open(
            res.data.data.redirectUrl,
            "_blank",
            "noreferrer noopenner"
          );
          handleClose();
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  const keluar = () => {
    Cookies.remove("id");
    Cookies.remove("token");
    router.push("/auth/login");
  };

  const home = (e) => {
    e.preventDefault();
    router.push("/main/home");
  };

  const receiver = (e) => {
    e.preventDefault();
    router.push("/main/searchReceiver");
  };

  const edit = (e) => {
    e.preventDefault();
    router.push("/main/editProfile");
  };

  return (
    <>
      <div className="side">
        <div className="side__top">
          <div className="sidebar">
            <Image src={grid} alt="grid" />
            <h4 onClick={home}>Dashboard</h4>
          </div>
          <div className="sidebar">
            <Image src={arrow} alt="arrow" />
            <h4 onClick={receiver}>Transfer</h4>
          </div>
          <div className="sidebar">
            <Image src={plus} alt="plus" />
            <h4 onClick={handleShow}>Top Up</h4>
          </div>
          <div className="sidebar">
            <Image src={user} alt="user" />
            <h4 onClick={edit}>Profile</h4>
          </div>
        </div>
        <div className="side__bottom">
          <div className="sidebar">
            <Image src={logout} alt="logout" />
            <h4 onClick={keluar}>Log Out</h4>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Topup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Enter the amount of money, and click submit</p>
          <input
            type="number"
            placeholder="0.00"
            name="amount"
            onChange={handleTextTopup}
          />
          {errTopup.show && (
            <p
              style={{
                color: "#ff5b37",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              {errTopup.msg}
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" name="submit" onClick={handleSubmitTopup}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
