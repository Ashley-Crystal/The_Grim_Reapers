import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TEAM.css";

const TEAM = () => {
  const navigate = useNavigate();

  const onLoginClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onEventClick = useCallback(() => {
    navigate("/volunteer-login");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="team16">
      <div className="team-child" />
      <button className="login9" onClick={onLoginClick}>
        <div className="login10">LOGIN</div>
      </button>
      <div className="team17">
        <div className="team18">TEAM</div>
      </div>
      <button className="event7" onClick={onEventClick}>
        <div className="login10">EVENTS</div>
      </button>
      <button className="home16" onClick={onHomeClick}>
        <div className="login10">HOME</div>
      </button>
      <img className="goodwill-icon-18" alt="" src="/goodwillicon-1@2x.png" />
      <img className="about-image-1-icon" alt="" src="/aboutimage-1@2x.png" />
      <h2 className="donate-volunteer-empower">Donate. Volunteer. Empower.</h2>
      <div className="team-item" />
      <div className="team-inner" />
      <textarea className="rectangle-textarea" />
      <h3 className="our-team">OUR TEAM</h3>
      <img className="team-child1" alt="" src="/ellipse-1@2x.png" />
      <h4 className="pranjal-sarkar">PRANJAL SARKAR</h4>
      <h4 className="shrayan-mandal">SHRAYAN MANDAL</h4>
      <div className="msit">MSIT</div>
      <div className="rcciit">RCCIIT</div>
      <img className="team-child2" alt="" src="/ellipse-2@2x.png" />
      <div className="team-child3" />
      <img className="team-child4" alt="" src="/ellipse-21@2x.png" />
      <h4 className="adrita-chakrabarti"> ADRITA CHAKRABARTI</h4>
      <div className="rcciit1">RCCIIT</div>
      <footer className="team-child5" />
      <div className="copyright-20236">Copyright @ 2023</div>
    </div>
  );
};

export default TEAM;
