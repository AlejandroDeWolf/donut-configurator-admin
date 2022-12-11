import React, { useState, useEffect } from "react";

import { Donuts, Sidebar } from "../components";

const Dashboard = () => {
  // check if user is logged in
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/";
  } else {
    console.log("logged in");
  }

  // fetch donut data from api
  const [donuts, setDonuts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonuts = async () => {
      const response = await fetch(
        "https://adorable-red-sundress.cyclic.app/donuts"
      );
      const data = await response.json();
      setDonuts(data);
      setLoading(false);
    };
    fetchDonuts();
  }, []);

  return (
    <div className="container__dashboard">
      <Sidebar />
      <div className="dashboard section__padding">
        <div className="dashboard__content">
          <div className="dashboard__content__title">
            <h2>Dashboard</h2>
          </div>
          <Donuts donuts={donuts} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
