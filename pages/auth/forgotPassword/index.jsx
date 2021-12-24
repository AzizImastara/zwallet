import React, { useState } from "react";
import axios from "utils/axios";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import Link from "next/link";

import Layout from "components/Layout";
import LayoutAuth from "components/LayoutAuth";

export default function ForgotPassword() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [linkDirect, setLinkDirect] = useState("");

  return (
    <Layout title="Forgot Password">
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
            To reset your password, you must type your e-mail and we will send a
            link to your email and you will be directed to the reset password
            screens.
          </p>
          <form>
            <input
              type="email"
              className="login__mail"
              name="email"
              placeholder="Enter your e-mail"
            />
            <div className="form__button">
              <button className="btn btn-primary mt-3">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
