import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Cookie from "js-cookie";

import zwallet from "assets/img/zwalletBlue.png";
import bell from "assets/img/icon/bell.svg";
import axios from "utils/axios";
import { useSelector, useDispatch } from "react-redux";

export default function Header(props) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <Navbar>
      <div className="container">
        <Navbar.Brand>
          <Image src={zwallet} alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div className="user">
              <img
                src={
                  user.data.image
                    ? `${process.env.URL_BACKEND_LOCAL}/uploads/${user.data?.image}`
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                }
                alt="profile"
              />
              <div className="user__info">
                <h5>{user.data.firstName + " " + user.data.lastName}</h5>
                <p>{user.data.noTelp}</p>
              </div>
              <Image src={bell} alt="bell" />
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
