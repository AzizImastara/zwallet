import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "components/module/Header";
import Layout from "components/Layout";
import Sidebar from "components/module/Sidebar";
import Footer from "components/module/Footer";
import axios from "utils/axios";
import { getDataCookie } from "middleware/authorizationPage";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "stores/action/user";

import Image from "next/image";

import pencil from "assets/img/icon/pencil.svg";

export default function InputAmount(props) {
  const router = useRouter();
  const [data, setData] = useState([]);
  // console.log(data);
  const user = useSelector((state) => state.user);
  console.log(user);

  const [dataTransfer, setDataTransfer] = useState({
    receiverId: "",
    amount: 0,
    notes: "",
  });

  // console.log(dataTransfer, "string");

  const handleChangeText = (e) => {
    setDataTransfer({ ...dataTransfer, [e.target.name]: e.target.value });
  };

  const confirmation = () => {
    if (dataTransfer.amount > user.data.balance) {
      return alert("Not enough amount");
    } else if (!dataTransfer.amount) {
      return alert("Please fill your amount");
    }
    router.push({ pathname: "/main/confirmation", query: dataTransfer });
  };

  const getDataUser = () => {
    axios
      .get(`/user/profile/${router.query.id}`)
      .then((res) => {
        // console.log(res.data.data, "sadk");
        setData(res.data.data);
        setDataTransfer({ ...dataTransfer, receiverId: res.data.data.id });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getDataUser();
  }, []);
  return (
    <Layout title="Input Amount">
      <div className="hero__bg">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 my-4">
              <Sidebar />
            </div>
            <div className="col-lg-9 col-md-12 my-4">
              <div className="content__bg">
                <div className="amount">
                  <h6>Transfer Money</h6>
                </div>
                <div className="profile__transaction">
                  <div className="profile__user">
                    <img
                      src={
                        data.image
                          ? `${process.env.URL_BACKEND_LOCAL}/uploads/${data?.image}`
                          : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                      }
                      alt="profile"
                    />
                    <div className="profile__info">
                      <h6>
                        {data.firstName} {data.lastName}
                      </h6>
                      <p>{data.noTelp}</p>
                    </div>
                  </div>
                </div>
                <div className="amount__text">
                  <p>
                    Type the amount you want to transfer and then press continue{" "}
                    <br />
                    to the next steps.
                  </p>
                </div>
                <div className="amount__transfer">
                  <div className="amount__transfer--input">
                    <input
                      type="number"
                      placeholder="0.00"
                      name="amount"
                      onChange={handleChangeText}
                    />
                  </div>
                  <h6>Rp{user.data.balance} Available</h6>
                  <div className="amount__input">
                    <Image src={pencil} alt="pencil" />
                    <input
                      type="text"
                      placeholder="add some notes"
                      name="notes"
                      onChange={handleChangeText}
                    />
                  </div>
                </div>
                <div className="amount__button">
                  <button className="btn btn-primary" onClick={confirmation}>
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        {/* {props.data.map((item) => (
        <div key={item.id}>
          <h3>{item.firstName}</h3>
        </div>
      ))} */}
      </div>
    </Layout>
  );
}
