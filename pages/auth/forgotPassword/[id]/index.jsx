import React, { useState } from "react";
import axios from "utils/axios";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import { getDataCookie } from "middleware/authorizationPage";
import Link from "next/link";
import Swal from "sweetalert2";

import Layout from "components/Layout";
import LayoutAuth from "components/LayoutAuth";

export default function CreateNewPassword() {
  const router = useRouter();
  const [form, setForm] = useState({ newPassword: "", confirmPassword: "" });

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch("/auth/reset-password", {
        keysChangePassword: router.query.id,
        ...form,
      })
      .then((res) => {
        console.log(res, "resssisis");
        Swal.fire({
          position: "top-center",
          width: 200,
          icon: "success",
          title: res.data.msg,
          showConfirmButton: false,
          timer: 2000,
        });
        router.push("/auth/login");
      })
      .catch((err) => {
        console.log(err.response);
        Swal.fire({
          position: "top-center",
          width: 200,
          icon: "error",
          title: err.response.data.msg,
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };
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
          <form onSubmit={handleSubmit}>
            <input
              className="login__lock"
              type="password"
              name="newPassword"
              placeholder="Create new password"
              onChange={handleChangeText}
            />
            <input
              className="login__lock"
              type="password"
              name="confirmPassword"
              placeholder="Confirm new password"
              onChange={handleChangeText}
            />
            <div className="form__button">
              <button className="btn btn-primary mt-3" type="submit">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
