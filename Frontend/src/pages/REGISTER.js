import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./REGISTER.css";

const REGISTER = () => {
  const navigate = useNavigate();

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLoginClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onTeamClick = useCallback(() => {
    navigate("/team");
  }, [navigate]);

  const onEventsClick = useCallback(() => {
    navigate("/volunteer-login");
  }, [navigate]);

  return (
    <div className="register">
      <div className="register-child" />
      <button className="home2" onClick={onHomeClick}>
        <div className="home3">HOME</div>
      </button>
      <img className="goodwill-icon-11" alt="" src="/goodwillicon-1@2x.png" />
      <button className="login" onClick={onLoginClick}>
        <div className="home3">LOGIN</div>
      </button>
      <button className="team2" onClick={onTeamClick}>
        <div className="home3">TEAM</div>
      </button>
      <button className="events1" onClick={onEventsClick}>
        <div className="home3">EVENTS</div>
      </button>
      <div className="register-item" />
      <img className="image-3-icon" alt="" src="/image-3@2x.png" />
      <h1 className="registration-completed-success">
        {" "}
        Registration completed Successfully
      </h1>
      <h3 className="reg-id">
        <div className="registration-id-xxxxxxxxx0923">
          Registration id: XXXXXXXXX0923
        </div>
      </h3>
    </div>
  );
};

export default REGISTER;
