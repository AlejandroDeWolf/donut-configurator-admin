import React, { useRef } from "react";
import Modal from "@mui/material/Modal";
import { RiCheckFill } from "react-icons/ri";

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

  // value of selected option with useRef
  const status = useRef();

  // get value from select
  const handleSelect = (e) => {
    status.current = e.target.value;
    console.log(status.current);
  };

  // post currently selected status to database
  const handleStatus = () => {
    fetch(`https://adorable-red-sundress.cyclic.app/donuts/${modalData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: status.current,
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
                <div className="modal__content__data__status__current">
                  <span>Wijzig status:</span>
                  <select id="status" onChange={handleSelect} ref={status}>
                    <option value="Nieuw">Nieuw</option>
                    <option value="In behandeling">In behandeling</option>
                    <option value="Geleverd">Geleverd</option>
                  </select>
                </div>
                <div className="modal__content__data__status__confirm">
                  <button
                    className="modal__content__data__status__confirm__btn"
                    onClick={handleStatus}
                  >
                    <RiCheckFill className="modal__content__data__status__confirm__btn__icon" />
                  </button>
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
