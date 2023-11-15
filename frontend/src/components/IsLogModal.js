import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router";

export default function IsLogModal() {
  const { toggleModals } = useContext(UserContext);

  const navigate = useNavigate();

  const formRef = useRef();

  const closeModal = () => {
    toggleModals("close");
  };

  return (
    <>
      <div className="position-fixed top-0 vw-100 vh-100">
        <div
          className="w-100 h-100 bg-dark bg-opacity-75 "
          onClick={() => {
            closeModal();
          }}
        >
          {" "}
        </div>
        <div
          className="position-absolute top-50 start-50 translate-middle"
          style={{ minWidth: "400px", marginTop: "140px" }}
        >
          <div className="modal-dialog bg-white">
            <div className="modal-content" style={{ padding: "10px" }}>
              <div className="header-connexion">
                <div className="modal-button">
                  <div
                    className="btn-c"
                    id="btnCLose"
                    onClick={() => closeModal()}
                  >
                    <i class="fa-solid fa-circle-xmark"></i>
                  </div>
                </div>
                <div className="modal-header">
                  <i class="fa-regular fa-user"></i>
                  <h5 className="modal-title mb-3">Pseudo</h5>
                </div>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <ul>
                    <li>Mon compte</li>
                    <li>Mes évènements</li>
                    <li>Mon Profil</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
