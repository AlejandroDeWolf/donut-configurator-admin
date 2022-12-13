import React, { useState } from "react";

import DonutModal from "./UI/DonutModal";

const Donuts = ({ donuts, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  return (
    <>
      <DonutModal
        open={open}
        handleClose={handleClose}
        modalData={modalData}
        className="modal__container"
      />
      <div className="dashboard__content__donuts">
        {donuts.map((donut) => (
          <div
            className="dashboard__content__donuts__donut"
            key={donut._id}
            onClick={() => {
              handleOpen();
              setModalData(donut);
            }}
          >
            <div className="dashboard__content__donuts__donut__image">
              <img src={donut.snapshot} alt="donut" />
            </div>
            <div className="dashboard__content__donuts__donut__info">
              <h3>{donut.company}</h3>
              <p>{donut.date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Donuts;
