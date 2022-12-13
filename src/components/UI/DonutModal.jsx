import React from "react";

import Modal from "@mui/material/Modal";

const DonutModal = ({ modalData, open, handleClose }) => {
  const donutUrl = `https://donuttello.netlify.app/donut.html?id=${modalData._id}`;

  const handleDelete = () => {
    fetch(`https://adorable-red-sundress.cyclic.app/donuts/${modalData._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  };

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

            <div className="modal__content__data__order">
              <div className="modal__content__data__order__date">
                <span>Datum:</span>
                <p>{modalData.date}</p>
              </div>
              <div className="modal__content__data__order__quantity">
                <span>Aantal:</span>
                <p>100</p>
              </div>
            </div>

            <div className="modal__content__data__client">
              <div className="modal__content__data__client__email">
                <span>E-mail:</span>
                <p>dewolf.alejandro@gmail.com</p>
              </div>
              <div className="modal__content__data__client__extra">
                <span>Extra:</span>
                <p>{modalData.remarks}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="modal__buttons">
          <button onClick={handleDelete} className="btn btn--secondary modal__buttons__button">
            Verwijder donut
          </button>
          <a href={donutUrl} target="_blank" rel="noreferrer" className="btn modal__buttons__button modal__buttons__button--link">
            Bekijk donut
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default DonutModal;
