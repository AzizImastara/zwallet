import React, { useState } from "react";
import axios from "utils/axios";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import { getDataCookie } from "middleware/authorizationPage";
import Link from "next/link";

import mail from "assets/img/icon/mail.svg";
import lock from "assets/img/icon/lock.svg";

import Layout from "components/Layout";
import LayoutAuth from "components/LayoutAuth";

export default function CreateNewPassword() {
  return (
    <Layout title="Create New Password">
      <div className="row">
        <div className="col-lg-7 col-sm-0 d-none d-md-inline-block">
          <LayoutAuth />
        </div>
        <div className="col-lg-5 col-sm-12 d-flex justify-content-center layout__login--form">
          <h2>
            Did You Forgot Your Password? Don’t Worry, You Can Reset Your
            Password In a Minutes.
          </h2>
          <p>
            Now you can create a new password for your Zwallet account. Type
            your password twice so we can confirm your new passsword.
          </p>
          <form>
            <input
              className="login__lock"
              type="password"
              name="password"
              placeholder="Create new password"
              // onChange={handleChangeText}
            />
            <input
              className="login__lock"
              type="password"
              name="password"
              placeholder="Create new password"
              // onChange={handleChangeText}
            />
            <div className="form__button">
              <button className="btn btn-primary mt-3">Reset Password</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
