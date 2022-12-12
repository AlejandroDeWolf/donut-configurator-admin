import React from "react";

import Modal from "@mui/material/Modal";

const DonutModal = ({ modalData, open, handleClose }) => {
  const donutUrl = `https://donutello.netlify.app/donut.html?id=${modalData._id}`;

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal">
        <div className="modal__content">
          <div className="modal__content__header">
            <h2>Bedrijf: {modalData.company}</h2>
            <p>Datum: {modalData.date}</p>
            <p>Extra: {modalData.remarks}</p>

            <a href={donutUrl} target="_blank" rel="noreferrer" className="btn">
              Bekijk donut
            </a>

            <button onClick={handleClose} className="btn btn__form">
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DonutModal;
