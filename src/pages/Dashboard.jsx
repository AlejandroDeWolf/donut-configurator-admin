import React, { useState, useEffect } from "react";

import { Donuts, Pagination, Sidebar } from "../components";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [donutsPerPage] = useState(8);

  useEffect(() => {
    const fetchDonuts = async () => {
      const response = await fetch(
        "https://adorable-red-sundress.cyclic.app/donuts"
      );
      const data = await response.json();
      setDonuts(data.reverse());
      setLoading(false);
    };
    fetchDonuts();
  }, []);

  // get current donuts
  const indexOfLastDonut = currentPage * donutsPerPage;
  const indexOfFirstDonut = indexOfLastDonut - donutsPerPage;
  const currentDonuts = donuts.slice(indexOfFirstDonut, indexOfLastDonut);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container__dashboard">
      <Sidebar />
      <div className="dashboard section__padding">
        <div className="dashboard__content">
          <div className="dashboard__content__title">
            <h2>Dashboard</h2>
          </div>
          <Donuts donuts={currentDonuts} loading={loading} />
          <Pagination donutsPerPage={donutsPerPage} totalDonuts={donuts.length} paginate={paginate} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
