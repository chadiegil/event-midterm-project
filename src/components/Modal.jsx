import React from "react";
import { useState, useEffect } from "react";
import "./ModalStyle.css";

function Modal() {
  const [openModal, setOpenModal] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <>
      {matches && (
        <div className="modal-container">
          {!openModal && (
            <button className="btn-open" onClick={() => setOpenModal(true)}>
              click me!
            </button>
          )}
          {openModal && (
            <div className="modal-container-inner">
              <button
                className="btn-closed"
                onClick={() => setOpenModal(false)}
              >
                X
              </button>
              <div className="content">
                <div className="title">Event Driven Programming</div>
                <div className="body">Programming is fun, keep learning</div>
                <div className="footer">code by: Chadie Gil S. Augis</div>
              </div>
            </div>
          )}
        </div>
      )}
      {!matches && (
        <h3>
          <div className="modal-container-small">
            {!openModal && (
              <button className="btn-open" onClick={() => setOpenModal(true)}>
                click me!
              </button>
            )}
            {openModal && (
              <div className="modal-container-inner-small">
                <button
                  className="btn-closed"
                  onClick={() => setOpenModal(false)}
                >
                  X
                </button>
                <div className="content">
                  <div className="title">Event Driven Programming</div>
                  <div className="body">Programming is fun, keep learning</div>
                  <div className="footer">code by: Chadie Gil S. Augis</div>
                </div>
              </div>
            )}
          </div>
        </h3>
      )}
    </>
  );
}
export default Modal;
