import React from "react";
import ContactForm from "../components/ContactForm";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";

const Contact = () => {
  return (
    <main>
      <div className="contact">
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
              <CopyToClipboard text="0661324529" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("téléphone copié")}
                >
                  06.61.32.45.29
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard text="lumin.elles@yahoo.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("email copié")}
                >
                  lumin.elles@yahoo.com
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
