import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LOGIN.css";

const LOGIN = () => {
  const navigate = useNavigate();

  const onTeamClick = useCallback(() => {
    navigate("/team");
  }, [navigate]);

  const onEventClick = useCallback(() => {
    navigate("/volunteer-login");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLoginButtonClick = useCallback(() => {
    navigate("/volunteer-login");
  }, [navigate]);

  const onSignupClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className="login5">
      <div className="login-child" />
      <div className="login-item" />
      <div className="login6">
        <div className="login7">LOGIN</div>
      </div>
      <button className="team14" onClick={onTeamClick}>
        <div className="team15">TEAM</div>
      </button>
      <button className="event6" onClick={onEventClick}>
        <div className="team15">EVENTS</div>
      </button>
      <button className="home14" onClick={onHomeClick}>
        <div className="team15">HOME</div>
      </button>
      <img className="goodwill-icon-17" alt="" src="/goodwillicon-1@2x.png" />
      <img className="login-inner" alt="" src="/rectangle-7@2x.png" />
      <input className="email1" type="text" placeholder="EMAIL" />
      <input className="password1" type="text" placeholder="PASSWORD" />
      <button className="login-button" onClick={onLoginButtonClick}>
        <div className="login-button-child" />
        <div className="log-in"> LOG IN</div>
      </button>
      <button className="signup1" onClick={onSignupClick}>
        <div className="dont-have-an">DONT HAVE AN ACCOUNT? SIGN UP</div>
      </button>
      <div className="login-child1" />
      <img className="login-child2" alt="" src="/rectangle-28.svg" />
      <div className="login8">LOGIN</div>
      <div className="listbox-component1">
        <select className="listbox-main1" />
        <div className="clip-list1">
          <div className="dropdown-list1">
            <textarea className="item-11" placeholder="Businessman" />
            <input className="item-21" type="text" placeholder="Employee" />
            <textarea className="item-11" placeholder="Freelancer" />
            <textarea className="item-11" placeholder="Retired" />
          </div>
        </div>
      </div>
      <footer className="login-child3" />
      <div className="copyright-20235">Copyright @ 2023</div>
    </div>
  );
};

export default LOGIN;
