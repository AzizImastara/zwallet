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

export default function Register() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const registerData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    axios
      .post("auth/register", registerData)
      .then((res) => {
        alert("Success Register Data, Check Your Email !");
        router.push("/auth/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout title="Register">
      <div className="row">
        <div className="col-lg-7 col-sm-0 d-none d-md-inline-block">
          <LayoutAuth />
        </div>
        <div className="col-lg-5 col-sm-12 d-flex justify-content-center layout__login--form">
          <h2>
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </h2>
          <p>
            Transfering money is eassier than ever, you can access Zwallet
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </p>
          <form onSubmit={handleSubmit}>
            <input
              img={lock}
              type="text"
              name="firstName"
              placeholder="Enter your firstname"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              img={lock}
              type="text"
              name="lastName"
              placeholder="Enter your lastname"
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              img={mail}
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              img={lock}
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="form__button">
              <button className="btn btn-primary mt-3">Sign Up</button>
            </div>
            <div className="register__page">
              <p>
                Already have an account? Let’s{" "}
                <Link href="/auth/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
