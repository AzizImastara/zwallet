import React, { useState, useEffect, useRef } from "react";
import Header from "components/module/Header";
import Layout from "components/Layout";
import Sidebar from "components/module/Sidebar";
import Footer from "components/module/Footer";
import axios from "utils/axios";
import Cookie from "js-cookie";
import Cookies from "js-cookie";

import Image from "next/image";
import pencil from "assets/img/icon/pencil-mini.svg";
import arrow from "assets/img/icon/arrow-left.svg";
import { useRouter } from "next/router";

export default function EditProfile(props) {
  const [data, setData] = useState({});
  const router = useRouter();
  const target = useRef(null);

  const id = Cookie.get("id");

  const getDataUser = () => {
    axios
      .get(`/user/profile/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const keluar = () => {
    Cookies.remove("id");
    Cookies.remove("token");
    router.push("/auth/login");
  };

  const ChangePassword = (e) => {
    e.preventDefault();
    router.push("/main/changePassword");
  };

  useEffect(() => {
    getDataUser();
  }, []);

  const personal = (e) => {
    e.preventDefault();
    router.push("/main/personalInfo");
  };

  const pin = (e) => {
    e.preventDefault();
    router.push("/main/changePin");
  };

  const onChangeFile = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    axios
      .patch(`/user/image/${id}`, formData)
      .then((res) => {
        if (res.status === 200) {
          getDataUser();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout title="Edit Profile">
      <Header />
      <div className="hero__bg">
        <div className="container">
          <div className="row">
            <div className="col-3 my-4">
              <Sidebar />
            </div>
            <div className="col-9 my-4">
              <div className="content__bg">
                <div className="edit__profile">
                  <img
                    src={
                      data.image
                        ? `${process.env.URL_BACKEND_LOCAL}/uploads/${data?.image}`
                        : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                    }
                    alt="profile"
                  />
                  <div className="edit__input my-3">
                    <Image src={pencil} />
                    <h6 onClick={() => target.current.click()}>Edit</h6>
                    <input
                      style={{ display: "none" }}
                      type="file"
                      ref={target}
                      name="image"
                      onChange={onChangeFile}
                    ></input>
                  </div>
                  <h2>{data.firstName + " " + data.lastName}</h2>
                  <h4>{data.noTelp}</h4>
                </div>
                <div className="edit__button">
                  <button className="my-2">Personal Information</button>
                  <Image src={arrow} alt="" onClick={personal} />
                </div>
                <div className="edit__button">
                  <button className="my-2">Change Password</button>
                  <Image src={arrow} alt="" onClick={ChangePassword} />
                </div>
                <div className="edit__button">
                  <button className="my-2">Change PIN</button>
                  <Image src={arrow} alt="" onClick={pin} />
                </div>
                <div className="edit__button">
                  <button className="my-2">Logout</button>
                  <Image src={arrow} alt="" onClick={keluar} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
}
