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

export default function Sidebar() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [topUp, setTopUp] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <input type="text" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
