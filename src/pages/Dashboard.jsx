import React from "react";

const Dashboard = () => {
  // check if user is logged in
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/";
  } else {
    console.log("logged in");
  }

  return <div>Dashboard</div>;
};

export default Dashboard;
