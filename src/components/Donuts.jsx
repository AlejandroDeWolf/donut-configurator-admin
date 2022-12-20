import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import DonutModal from "./UI/DonutModal";

const Donuts = ({ donuts }) => {
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
          <Fade>
            <div
              className="dashboard__content__donuts__donut"
              key={donut._id}
              onClick={() => {
                handleOpen();
                setModalData(donut);
              }}
            >
              <div className="dashboard__content__donuts__donut__content">
                <div className="dashboard__content__donuts__donut__content__image">
                  <img src={donut.snapshot} alt="donut" />
                </div>
                <div className="dashboard__content__donuts__donut__content__info">
                  <h3>{donut.company}</h3>
                  <p>{donut.date}</p>
                </div>
                {donut.status === "Nieuw" && (
                  <div className="dashboard__content__donuts__donut__content__status status__new"></div>
                )}
                {donut.status === "In behandeling" && (
                  <div className="dashboard__content__donuts__donut__content__status status__progress"></div>
                )}
                {donut.status === "Geleverd" && (
                  <div className="dashboard__content__donuts__donut__content__status status__done"></div>
                )}
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </>
  );
};

export default Donuts;
