import React, { useRef } from "react";
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

  const status = useRef();

  const handleStatus = () => {
    console.log(status.current.value);
    fetch(`https://adorable-red-sundress.cyclic.app/donuts/${modalData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: status.current.value,
      }),
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
                <p>{modalData.quantity}</p>
              </div>
            </div>

            <div className="modal__content__data__email">
              <span>E-mail:</span>
              <p>{modalData.email}</p>
            </div>

            <div className="modal__content__data__status">
              <div className="modal__content__data__status__current">
                <span>Status:</span>
                <p>{modalData.status}</p>
              </div>

              <div className="modal__content__data__status__edit">
                <div className="modal__content__data__status__edit__title">
                  <span>Wijzig status:</span>
                </div>
                <div className="modal__content__data__status__edit__select">
                  <select id="status" onChange={handleStatus} ref={status}>
                    <option value={modalData.status}>{modalData.status}</option>
                    <option value="Nieuw">Nieuw</option>
                    <option value="In behandeling">In behandeling</option>
                    <option value="Geleverd">Geleverd</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="modal__content__data__extra">
              <span>Extra:</span>
              <p>{modalData.remarks}</p>
            </div>
          </div>
        </div>

        <div className="modal__buttons">
          <button
            onClick={handleDelete}
            className="btn btn--secondary modal__buttons__button"
          >
            Verwijder donut
          </button>
          <a
            href={donutUrl}
            target="_blank"
            rel="noreferrer"
            className="btn modal__buttons__button modal__buttons__button--link"
          >
            Bekijk donut
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default DonutModal;
