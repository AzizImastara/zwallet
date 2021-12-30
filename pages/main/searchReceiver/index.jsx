import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "components/module/Header";
import Layout from "components/Layout";
import Sidebar from "components/module/Sidebar";
import Footer from "components/module/Footer";
import Search from "components/Search";
import axios from "utils/axios";
import Pagination from "react-paginate";

export default function SearchReceiver(props) {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const getDataUser = (search) => {
    axios
      .get(
        `/user?page=${page}&limit=${limit}&search=${
          search ? search : ""
        }&sort=firstName ASC`
      )
      .then((res) => {
        setData(res.data.data);
        setPageInfo(res.data.pagination);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const searchUser = (e) => {
    getDataUser(e.target.value);
  };

  useEffect(() => {
    getDataUser();
  }, [page, limit]);

  const inputAmount = (id) => {
    router.push({ pathname: "/main/inputAmount", query: { id: id } });
    // console.log(id);
  };

  return (
    <Layout title="Search Receiver">
      <div className="hero__bg">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 my-4">
              <Sidebar />
            </div>
            <div className="col-lg-9 col-md-12 my-4">
              <div className="content__bg">
                <div className="receiver">
                  <h6>Search Receiver</h6>
                </div>
                <Search handleChange={searchUser} />
                {data?.map((el, index) => {
                  return (
                    <div
                      className="profile__transaction"
                      key={index}
                      onClick={() => inputAmount(el.id)}
                    >
                      <div className="profile__user">
                        <img
                          src={
                            el.image
                              ? `${process.env.URL_BACKEND_LOCAL}/uploads/${el?.image}`
                              : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                          }
                          alt="profile"
                        />
                        <div className="profile__info">
                          <h6>{el.firstName + " " + el.lastName}</h6>
                          <p>{el.status}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <Pagination
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  breakLabel={"..."}
                  pageCount={pageInfo.totalPage}
                  onPageChange={(e) => setPage(e.selected + 1)}
                  containerClassName={"pagination"}
                  disabledClassName={"pagination_disabled"}
                  activeClassName={"pagination__active"}
                />
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
