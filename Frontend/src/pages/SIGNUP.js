import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SIGNUP.css";

const SIGNUP = () => {
  const navigate = useNavigate();

  const onLoginClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onTeamClick = useCallback(() => {
    navigate("/team");
  }, [navigate]);

  const onEventClick = useCallback(() => {
    navigate("/volunteer-login");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignupButtonClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onLogin1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="signup">
      <div className="signup-child" />
      <div className="signup-item" />
      <div className="signup-inner" />
      <button className="login2" onClick={onLoginClick}>
        <div className="login3">LOGIN</div>
      </button>
      <button className="team12" onClick={onTeamClick}>
        <div className="login3">TEAM</div>
      </button>
      <button className="event5" onClick={onEventClick}>
        <div className="login3">EVENTS</div>
      </button>
      <button className="home12" onClick={onHomeClick}>
        <div className="login3">HOME</div>
      </button>
      <img className="goodwill-icon-16" alt="" src="/goodwillicon-1@2x.png" />
      <img className="signup-child1" alt="" src="/rectangle-11@2x.png" />
      <input className="name" type="text" placeholder="NAME" />
      <input className="password" type="text" placeholder="PASSWORD" />
      <input className="email" type="text" placeholder="EMAIL" autoFocus />
      <button className="signup-button" onClick={onSignupButtonClick}>
        <div className="signup-button-child" />
        <div className="sign-up">
          <p className="sign-up1"> SIGN UP</p>
        </div>
      </button>
      <button className="login4" onClick={onLogin1Click}>
        <div className="already-have-an">ALREADY HAVE AN ACCOUNT? LOG IN</div>
      </button>
      <div className="sign-up2">SIGN-UP</div>
      <footer className="signup-child2" />
      <div className="copyright-20234">Copyright @ 2023</div>
      <div className="listbox-component">
        <select className="listbox-main" />
        <div className="clip-list">
          <div className="dropdown-list">
            <input className="item-1" type="text" placeholder="Businessman" />
            <input className="item-1" type="text" placeholder="Employee" />
            <input className="item-1" type="text" placeholder="Freelancer" />
            <input className="item-1" type="text" placeholder="Retired" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIGNUP;
