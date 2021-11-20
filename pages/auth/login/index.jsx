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

export async function getServerSideProps(context) {
  const dataCookie = await getDataCookie(context);
  if (dataCookie.token) {
    return {
      redirect: {
        destination: "/main/home",
        permanent: false,
      },
    };
  }
  return { props: {} };
}

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/login", form)
      .then((res) => {
        console.log(res);
        Cookie.set("id", res.data.data.id);
        Cookie.set("token", res.data.data.token);
        if (res.data.data.pin === null) {
          router.push(`/auth/createPin`);
        } else {
          router.push("/main/home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(form);
  };

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <Layout title="Login">
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
              img={mail}
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              onChange={handleChangeText}
            />
            <input
              img={lock}
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChangeText}
            />
            <div className="forgot__page">
              <Link href="/auth/forgotPassword">Forgot password?</Link>
            </div>
            <div className="form__button">
              <button className="btn btn-primary mt-3">Login</button>
            </div>
            <div className="register__page">
              <p>
                Don’t have an account? Let’s{" "}
                <Link href="/auth/register">Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
