import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router";

export default function SignUpModal() {
  const { modalState, toggleModals, signUp } = useContext(UserContext);

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
    if (
      (inputs.current[1].value.length || inputs.current[2].value.length) < 6
    ) {
      setValidation("6 characters min");
      return;
    } else if (inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Password do not match");
      return;
    }

    try {
      await signUp(inputs.current[0].value, inputs.current[1].value);

      formRef.current.reset();

      setValidation("");
      toggleModals("close");

      navigate("/private/private-home");
    } catch (err) {
      console.dir(err);
      if (err.code === "auth/invalid-email") {
        setValidation("Email format invalid");
      }

      if (err.code === "auth/email-already-use") {
        setValidation("Email already used");
      }
    }
  };

  const closeModal = () => {
    setValidation("");
    toggleModals("close");
  };

  return (
    <>
      {modalState.signUpModal && (
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
                    <h5 className="modal-title mb-3">Inscription</h5>
                  </div>
                </div>
                <div className="modal-body">
                  <form
                    className="sign-in-form"
                    onSubmit={handleForm}
                    ref={formRef}
                  >
                    <div className="mb-3">
                      <label className="form-label" htmlFor="signUpEmail">
                        Email Adress
                      </label>
                      <input
                        ref={addInputs}
                        name="email"
                        required
                        type="email"
                        className="form-control"
                        id="signUpEmail"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="repeatUpPwd">
                        Password
                      </label>
                      <input
                        ref={addInputs}
                        name="pwd"
                        required
                        type="password"
                        className="form-control"
                        id="signUpPwd"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="repeatPwd">
                        Repeat Password
                      </label>
                      <input
                        ref={addInputs}
                        name="pwd"
                        required
                        type="password"
                        className="form-control"
                        id="repeatPwd"
                      />
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
