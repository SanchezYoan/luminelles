import React from "react";

const SocialNetwork = () => {
  const anim = () => {
    const icons = document.querySelectorAll(".social-network a");

    icons.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        console.log("hear");
        link.style.transform = `translate(${e.offsetX - 20}px, ${
          e.offsetY - 13
        }px)`;
      });
      link.addEventListener("mouseleave", (e) => {
        // link.style.transition = "0.3s";
        link.style.transform = "";
      });
    });
  };
  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://www.facebook.com/profile.php?id=100092550161383"
          taget="_blank"
          rel="nooper noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fa-brands fa-facebook"></i>
          </li>
        </a>
        <a
          href="https://www.instagram.com/lumin_elles/"
          taget="_blank"
          rel="nooper noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fa-brands fa-instagram"></i>
          </li>
        </a>
        <a
          href="lumin.elles@yahoo.com"
          taget="_blank"
          rel="nooper noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fa-brands fa-yahoo"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;
