import React from "react";
import Header from "components/module/Header";
import Layout from "components/Layout";

export default function Profile() {
  return (
    <Layout title="Profile">
      <Header />
      <h1>Page Profile</h1>
      <h3>Link Backend : {process.env.URL_BACKEND}</h3>
      <button className="btn btn-primary">Click Me !</button>
    </Layout>
  );
}
