import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router";

export default function SignInModal() {
  const { modalState, toggleModals, signIn } = useContext(UserContext);

  const [validation, setValidation] = useState("");

  const navigate = useNavigate();

  const inputs = useRef([]);

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await signIn(inputs.current[0].value, inputs.current[1].value);
      //   formRef.current.reset();
      setValidation("");
      toggleModals("close");
      navigate("/private/private-home");
    } catch (err) {
      console.dir(err);
      setValidation("Oops, the email and/or password is incorrect");
    }
  };

  const closeModal = () => {
    setValidation("");
    toggleModals("close");
  };

  return (
    <>
      {modalState.signInModal && (
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
            style={{ minWidth: "400px", marginTop: "100px" }}
          >
            <div className="modal-dialog bg-white">
              <div className="modal-content">
                <div className="header-connexion">
                  <div className="modal-button">
                    <button
                      onClick={() => toggleModals("close")}
                      className="btn-close"
                    ></button>
                  </div>
                  <div className="modal-header">
                    <h5 className="modal-title mb-3">Connexion</h5>
                  </div>
                </div>
                <div className="modal-body">
                  <form
                    className="sign-in-form"
                    onSubmit={handleForm}
                    ref={formRef}
                  >
                    <div className="mb-3">
                      <label className="form-label" htmlFor="signInEmail">
                        Adresse Email
                      </label>
                      <input
                        ref={addInputs}
                        name="email"
                        required
                        type="email"
                        className="form-control"
                        id="signInEmail"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="SignInPwd">
                        Mot de passe
                      </label>
                      <input
                        ref={addInputs}
                        name="pwd"
                        required
                        type="password"
                        className="form-control"
                        id="signInPwd"
                      />
                    </div>
                    <div className="mb-3">
                      {/* <label className="form-label" htmlFor="repeatPwd">
                        Repeat Password
                      </label>
                      <input
                        ref={addInputs}
                        name="pwd"
                        required
                        type="password"
                        className="form-control"
                        id="repeatPwd"
                      /> */}
                      <p className="text-danger mt-1">{validation}</p>
                    </div>

                    <button className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
