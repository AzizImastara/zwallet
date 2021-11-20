import React, { useState } from "react";
import { useRouter } from "next/router";

import failed from "assets/img/icon/failed.svg";

import Image from "next/image";
import samuel from "assets/img/samuel.png";

export default function Failed() {
  const router = useRouter();

  return (
    <>
      <div className="status">
        <Image src={failed} alt="failed" />
        <h2>Transfer Failed</h2>
        <p>
          We can’t transfer your money at the moment, we recommend you to check
          your internet connection and try again.
        </p>
      </div>

      <div className="status__content">
        <div className="status__info">
          <p>Amount</p>
          <h6>Rp100.000</h6>
        </div>
        <div className="status__info">
          <p>Balance Left</p>
          <h6>Rp20.000</h6>
        </div>
        <div className="status__info">
          <p>Date & Time</p>
          <h6>May 11, 2020 - 12.20</h6>
        </div>
        <div className="status__info">
          <p>Notes</p>
          <h6>For buying some socks</h6>
        </div>

        <div className="status__transfer">
          <h5>Transfer to</h5>
          <div className="profile__transaction">
            <div className="profile__user">
              <Image src={samuel} alt="" />
              <div className="profile__info">
                <h6>Samuel Suhi</h6>
                <p>+62 813-8492-9994</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form>
        <div className="status__button">
          <button className="btn btn-primary mt-3">Try Again</button>
        </div>
      </form>
    </>
  );
}
