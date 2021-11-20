import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Cookie from "js-cookie";

import zwallet from "assets/img/zwalletBlue.png";
import profile from "assets/img/profile.png";
import bell from "assets/img/icon/bell.svg";
import axios from "utils/axios";

export default function Header(props) {
  const [data, setData] = useState({});

  const id = Cookie.get("id");

  const getDataUser = () => {
    axios
      .get(`/user/profile/${id}`)
      .then((res) => {
        // console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getDataUser();
  }, []);

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
                src={`http://localhost:3001/uploads/${data.image}`}
                alt="profile"
              />
              <div className="user__info">
                <h5>{data.firstName + data.lastName}</h5>
                <p>{data.noTelp}</p>
              </div>
              <Image src={bell} alt="bell" />
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
