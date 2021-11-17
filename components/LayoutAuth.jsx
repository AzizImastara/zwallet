import React from "react";
import Image from "next/image";

import zwallet from "assets/img/Zwallet.png";
import jumbotron from "assets/img/jumbotron.png";

export default function LayoutAuth() {
  return (
    <>
      <div className="layout__login">
        <Image src={zwallet} alt="logo" />
        <div className="overlay d-flex justify-content-center">
          <Image src={jumbotron} />
        </div>

        <h2>App that Covering Banking Needs.</h2>
        <p>
          Zwallet is an application that focussing in banking needs for all
          users in the world. Always updated and always following world trends.
          5000+ users registered in Zwallet everyday with worldwide users
          coverage.
        </p>
      </div>
    </>
  );
}
