import React from "react";
import Navigation from "../components/Navigation";
import ContactForm from "../components/ContactForm";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";

const Contact = () => {
  return (
    <main>
      <div className="contact">
        <Navigation />
        {/* <Logo /> */}
        <ContactForm />
        <div className="contact-infos">
          <div className="adress">
            <div className="content">
              <h4>adresse</h4>
              <p>1 avenue Lepic</p>
              <p>34070 Montpellier</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="0781951036" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("téléphone copié")}
                >
                  07 81 95 10 36
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard text="yoan30470@hotmail.fr" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("email copié")}
                >
                  yoan30470@hotmail.fr
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Sanchez Yoan - 2023</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
