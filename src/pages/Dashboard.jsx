import React from "react";

import { Sidebar } from "../components";

const Dashboard = () => {
  // check if user is logged in
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/";
  } else {
    console.log("logged in");
  }

  return (
    <>
      <Sidebar />
      <div className="dashboard">
        <div className="dashboard__content">
          <div className="dashboard__content__title">
            <h2>Dashboard</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
