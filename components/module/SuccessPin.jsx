import React, { useState } from "react";
import axios from "utils/axios";
import { useRouter } from "next/router";
import Link from "next/link";

import success from "assets/img/icon/success.svg";

import Image from "next/image";

export default function SuccessPin() {
  const router = useRouter();
  const onRequestClose = (e) => {
    e.preventDefault();
    router.push("/main/home");
  };

  return (
    <div className="layout__login--form">
      <Image src={success} alt="" />
      <h2>Your PIN Was Successfully Created</h2>
      <p>
        Your PIN was successfully created and you can now access all the
        features in Zwallet. Login to your new account and start exploring!
      </p>
      <form>
        <div className="form__button">
          <button className="btn btn-primary mt-3" onClick={onRequestClose}>
            Login Now
          </button>
        </div>
      </form>
    </div>
  );
}
