import React from "react";
import logoImg from "../../images/logo.svg";
import landingImg from "../../images/landing.svg";
import studyIcon from "../../images/icons/study.svg";
import giveClassesIcon from "../../images/icons/give-classes.svg"
import connectionIcon from "../../images/icons/purple-heart.svg"
import "./styles.css";

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img
          src={landingImg}
          alt="Online study platform"
          className="hero-image"
        />

        <div className="buttons-container">
            <a href="" className="study">
                <img src={studyIcon} alt="Study" />
                Estudar
            </a>

            <a href="#" className="give-classes">
                <img src={giveClassesIcon} alt="Give classes" />
                Dar aulas
            </a>
        </div>

        <span className="total-connections">
            Total de N conexões já realizadas <img src={connectionIcon} alt="Purple heart" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
