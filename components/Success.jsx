import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import success from "assets/img/icon/success.svg";

import Image from "next/image";
import samuel from "assets/img/samuel.png";
import { useSelector, useDispatch } from "react-redux";

export default function Success({ newDate }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const backToHome = (e) => {
    e.preventDefault();
    router.push("/main/home");
  };

  useEffect(() => {
    console.log(router.query, "succes query");
  }, []);

  return (
    <>
      <div className="status__bg">
        <div className="status">
          <Image src={success} alt="success" />
          <h2>Transfer Success</h2>
        </div>

        <div className="status__content">
          <div className="status__info">
            <p>Amount</p>
            <h6>Rp{router.query.amount}</h6>
          </div>
          <div className="status__info">
            <p>Balance Left</p>
            <h6>Rp{user.data.balance}</h6>
          </div>
          <div className="status__info">
            <p>Date & Time</p>
            <h6>{newDate}</h6>
          </div>
          <div className="status__info">
            <p>Notes</p>
            <h6>{router.query.notes}</h6>
          </div>
        </div>

        <form>
          <div className="status__button">
            {/* <button className="btn btn-light mt-3">Download PDF</button> */}
            <button className="btn btn-primary mt-3" onClick={backToHome}>
              Back to Home
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
