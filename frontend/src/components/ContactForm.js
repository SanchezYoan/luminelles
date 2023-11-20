import React from "react";
import { useRef } from "react";
import { init } from "@emailjs/browser";
import emailjs from "@emailjs/browser";
init(process.env.ID);

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_j2zhfsf",
        "qlp8t0l",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          // console.log(result.text);
          form.current.reset();
          formMess.innerHTML = "<p className='success'>Message envoyé !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },

        (error) => {
          // console.log(error.text);
          formMess.innerHTML =
            "<p className='success'>Une erreur c'est produite, veuillez réesayer</p>";
        }
      );
  };

  return (
    <div className="form-container">
      <h2>Contactez-moi</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Nom / Entreprise</label>
        <input
          type="text"
          name="from_name"
          required
          autoComplete="off"
          id="nom"
        />
        <label>Email</label>
        <input type="email" name="email" required autoComplete="off" />
        <label>Message</label>
        <textarea name="message" id="mess" />
        <input type="submit" value="Envoyer" className="button" />
      </form>
      <div className="form-message"></div>
    </div>
  );
};

export default Contact;
