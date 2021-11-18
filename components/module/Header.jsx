import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";

import zwallet from "assets/img/zwalletBlue.png";
import profile from "assets/img/profile.png";
import bell from "assets/img/icon/bell.svg";

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    console.log("logout");
    router.push("/auth/login");
  };

  return (
    <>
      <Navbar>
        <div className="container">
          <Navbar.Brand>
            <Image src={zwallet} alt="brand" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <div className="user">
                <Image src={profile} alt="profile" />
                <div className="user__info">
                  <h5>Robert Chandler</h5>
                  <p>+62 8139 3877 7946</p>
                </div>
                <Image src={bell} alt="bell" />
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}
