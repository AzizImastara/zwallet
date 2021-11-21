import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "components/module/Header";
import Layout from "components/Layout";
import Sidebar from "components/module/Sidebar";
import Footer from "components/module/Footer";
import axios from "utils/axios";
import Cookie from "js-cookie";
import Swal from "sweetalert2";

export default function ChangePassword(props) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const changePassword = {
      oldPassword: oldPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };
    const id = Cookie.get("id");

    axios
      .patch(`/user/password/${id}`, changePassword)
      .then((res) => {
        Swal.fire({
          position: "top-end",
          width: 200,
          icon: "success",
          title: res.data.msg,
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "top-end",
          width: 200,
          icon: "error",
          title: err.response.data.msg,
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  return (
    <Layout title="Change Password">
      <Header />
      <div className="hero__bg">
        <div className="container">
          <div className="row">
            <div className="col-3 my-4">
              <Sidebar />
            </div>
            <div className="col-9 my-4">
              <div className="content__bg">
                <div className="personal__info">
                  <h6>Change Password</h6>
                  <p>
                    You must enter your current password and then type your new
                    password twice.
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="password__input">
                    <input
                      type="password"
                      placeholder="Current password"
                      name="oldPassword"
                      onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="New password"
                      name="newPassword"
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Input new password"
                      name="confirmPassword"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button className="btn btn-light" type="submit">
                      Change Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
}
