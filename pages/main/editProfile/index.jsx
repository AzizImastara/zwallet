import React, { useState, useEffect, useRef } from "react";
import Header from "components/module/Header";
import Layout from "components/Layout";
import Sidebar from "components/module/Sidebar";
import Footer from "components/module/Footer";
import axios from "utils/axios";
import Cookie from "js-cookie";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

import Image from "next/image";
import pencil from "assets/img/icon/pencil-mini.svg";
import arrow from "assets/img/icon/arrow-left.svg";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile, updateImage, deleteImage } from "stores/action/user";

export default function EditProfile(props) {
  const router = useRouter();
  const target = useRef(null);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const id = Cookie.get("id");

  const keluar = () => {
    Cookies.remove("id");
    Cookies.remove("token");
    router.push("/auth/login");
  };

  const ChangePassword = (e) => {
    e.preventDefault();
    router.push("/main/changePassword");
  };

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
        console.log(res, "res");
        Swal.fire({
          position: "top-center",
          width: 200,
          icon: "success",
          title: res.data.msg,
          showConfirmButton: false,
          timer: 2000,
        });
        dispatch(getUserProfile(user.data.id));
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

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then(async (res) => {
        if (res.isConfirmed) {
          await dispatch(deleteImage(user.data.id));
          Swal.fire("Deleted!", "Success delete image", "success");
          dispatch(getUserProfile(user.data.id));
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <Layout title="Edit Profile">
      <Header />
      <div className="hero__bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 my-4">
              <Sidebar />
            </div>
            <div className="col-lg-9 col-md-12 my-4">
              <div className="content__bg">
                <div className="edit__profile">
                  <img
                    src={
                      user.data.image
                        ? `${process.env.URL_BACKEND_LOCAL}/uploads/${user.data?.image}`
                        : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                    }
                    alt="profile"
                  />
                  <div className="edit__input my-3">
                    {/* <Image src={pencil} /> */}
                    <h6 onClick={() => target.current.click()}>Edit Image</h6>
                    <input
                      style={{ display: "none" }}
                      type="file"
                      ref={target}
                      name="image"
                      onChange={onChangeFile}
                    ></input>
                    <h6 onClick={handleDelete}>Delete Image</h6>
                  </div>
                  <h2>{user.data.firstName + " " + user.data.lastName}</h2>
                  <h4>{user.data.noTelp}</h4>
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
                  <button className="my-2" onClick={keluar}>
                    Logout
                  </button>
                  {/* <Image src={arrow} alt="" onClick={keluar} /> */}
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
