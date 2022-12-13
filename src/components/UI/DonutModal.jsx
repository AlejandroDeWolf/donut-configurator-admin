import React from "react";

import Modal from "@mui/material/Modal";

const DonutModal = ({ modalData, open, handleClose }) => {
  const donutUrl = `https://donuttello.netlify.app/donut.html?id=${modalData._id}`;

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal">
        <div className="modal__content">
          <div className="modal__content__header">
            <h2>{modalData.company}</h2>
            <div className="modal__content__image">
              <img src={modalData.snapshot} alt="" />
            </div>
          </div>
          <div className="modal__content__data">
            <div className="modal__content__data__date modal__content__data--flex">
              <span>Datum:</span>
              <p>{modalData.date}</p>
            </div>
            <div className="modal__content__data__quantity modal__content__data--flex">
              <span>Aantal:</span>
              <p>100</p>
            </div>
            <div className="modal__content__data__quantity modal__content__data--flex--long">
              <span>E-mail:</span>
              <p>dewolf.alejandro@gmail.com</p>
            </div>
            <div className="modal__content__data__remarks modal__content__data--flex--long">
              <span>Extra:</span>
              <p>{modalData.remarks}</p>
            </div>
          </div>
        </div>

        <div className="modal__buttons">
          <button onClick={handleClose} className="btn btn--secondary">
            Close
          </button>
          <a href={donutUrl} target="_blank" rel="noreferrer" className="btn">
            Bekijk donut
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default DonutModal;
