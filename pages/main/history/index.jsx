import React, { useState, useEffect } from "react";
import Header from "components/module/Header";
import Layout from "components/Layout";
import Sidebar from "components/module/Sidebar";
import Footer from "components/module/Footer";
import axios from "utils/axios";
import Pagination from "react-paginate";

export default function History(props) {
  const [transaction, setTransaction] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [filter, setFilter] = useState("WEEK");

  const HistoryTransaction = () => {
    axios
      .get(`transaction/history?page=${page}&limit=${limit}&filter=${filter}`)
      .then((res) => {
        setTransaction(res.data.data);
        setPageInfo(res.data.pagination);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    HistoryTransaction();
    console.log(transaction);
  }, [page, limit, filter]);

  return (
    <Layout title="History">
      <Header />
      <div className="hero__bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 my-4">
              <Sidebar />
            </div>
            <div className="col-lg-9 col-md-12 my-4">
              <div className="content__bg">
                <div className="history">
                  <div className="history__view d-flex justify-content-between">
                    <h5>History Transaction</h5>
                    <select
                      className="btn btn-light"
                      onChange={(e) => setFilter(e.target.value)}
                    >
                      <option hidden>-- Select Filter --</option>
                      <option value={"WEEK"}>Week</option>
                      <option value={"MONTH"}>Month</option>
                      <option value={"YEAR"}>Year</option>
                    </select>
                  </div>
                  {transaction?.map((el, index) => {
                    return (
                      <div className="profile__transaction" key={index}>
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
                            <h6>
                              {el.firstName} {el.lastName}
                            </h6>
                            <p>
                              {el.status} - {el.type}
                            </p>
                          </div>
                        </div>
                        <div className="profile__money">
                          {el.type === "send" ? (
                            <div
                              className="align-self-center nunito-700"
                              style={{ color: "#FF5B37" }}
                            >
                              -{el.amount}
                            </div>
                          ) : el.type === "topup" ? (
                            <div
                              className="align-self-center nunito-700"
                              style={{ color: "#FF5B37" }}
                            >
                              +{el.amount}
                            </div>
                          ) : (
                            <div
                              className="align-self-center nunito-700"
                              style={{ color: "#1EC15F" }}
                            >
                              +{el.amount}
                            </div>
                          )}
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
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
}
