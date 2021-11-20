import React from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

import grid from "assets/img/icon/grid.svg";
import plus from "assets/img/icon/plus.svg";
import arrow from "assets/img/icon/arrow-up.svg";
import user from "assets/img/icon/user.svg";
import logout from "assets/img/icon/log-out.svg";



export default function Sidebar() {

  const router = useRouter();

  const keluar = () => {
    Cookies.remove("id")
    Cookies.remove("token")
    router.push("/auth/login")
  }
  return (
    <>
      <div className="side">
        <div className="side__top">
          <div className="sidebar">
            <Image src={grid} alt="grid" />
            <h4>Dashboard</h4>
          </div>
          <div className="sidebar">
            <Image src={arrow} alt="arrow" />
            <h4>Transfer</h4>
          </div>
          <div className="sidebar">
            <Image src={plus} alt="plus" />
            <h4>Top Up</h4>
          </div>
          <div className="sidebar">
            <Image src={user} alt="user" />
            <h4>Profile</h4>
          </div>
        </div>
        <div className="side__bottom">
          <div className="sidebar">
            <Image src={logout} alt="logout" />
            <h4 onClick={keluar}>Log Out</h4>
          </div>
        </div>
      </div>
    </>
  );
}
