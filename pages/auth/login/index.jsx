import React, { useState } from "react";
import axios from "utils/axios";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import { getDataCookie } from "middleware/authorizationPage";
import Link from "next/link";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { login } from "stores/action/auth";
import { getUserProfile } from "stores/action/user";

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
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  // console.log(auth, "auth");
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(form))
      .then((res) => {
        console.log(res.action.payload.data.msg);
        dispatch(getUserProfile(res.action.payload.data.data.id));
        Swal.fire({
          position: "top-center",
          width: 200,
          icon: "success",
          title: res.action.payload.data.msg,
          showConfirmButton: false,
          timer: 2000,
        });
        if (res.action.payload.data.data.pin) {
          Cookie.set("token", res.action.payload.data.data.token);
          Cookie.set("id", res.action.payload.data.data.id);
          router.push("/main/home");
        } else {
          Cookie.set("token", res.action.payload.data.data.token);
          Cookie.set("id", res.action.payload.data.data.id);
          router.push("/auth/createPin");
        }
      })
      .catch((err) => {
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
              type="email"
              name="email"
              className="login__mail"
              placeholder="Enter your e-mail"
              onChange={handleChangeText}
            />
            <input
              type="password"
              name="password"
              className="login__lock"
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
