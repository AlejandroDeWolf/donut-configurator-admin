import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Donuts, Pagination, Sidebar } from "../components";
import { Oval } from "react-loader-spinner";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/";
  } else {
    console.log("logged in");
  }

  const [donuts, setDonuts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [donutsPerPage] = useState(10);

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

  const indexOfLastDonut = currentPage * donutsPerPage;
  const indexOfFirstDonut = indexOfLastDonut - donutsPerPage;
  const currentDonuts = donuts.slice(indexOfFirstDonut, indexOfLastDonut);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container__dashboard">
      <Sidebar />
      <div className="dashboard section__padding">
        <div className="dashboard__content">
          {loading && (
            <div className="dashboard__content__loader">
              <Oval
                height={80}
                width={80}
                color="#e72c70"
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#f5659a"
                strokeWidth={18}
                strokeWidthSecondary={18}
              />
            </div>
          )}
          <Donuts donuts={currentDonuts} loading={loading} />
          <Fade>
            <Pagination
              donutsPerPage={donutsPerPage}
              totalDonuts={donuts.length}
              paginate={paginate}
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
