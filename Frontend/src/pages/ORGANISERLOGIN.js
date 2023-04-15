import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ORGANISERLOGIN.css";

const ORGANISERLOGIN = () => {
  const navigate = useNavigate();

  const onLogoutClick = useCallback(() => {
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

  const onForumClick = useCallback(() => {
    navigate("/create-forum");
  }, [navigate]);

  const onOrganiseClick = useCallback(() => {
    navigate("/organise-an-event");
  }, [navigate]);

  return (
    <div className="organiser-login">
      <div className="organiser-login-child" />
      <button className="logout8" onClick={onLogoutClick}>
        <div className="logout9">LOGOUT</div>
      </button>
      <button className="team10" onClick={onTeamClick}>
        <div className="logout9">TEAM</div>
      </button>
      <button className="event4" onClick={onEventClick}>
        <div className="logout9">EVENTS</div>
      </button>
      <button className="home10" onClick={onHomeClick}>
        <div className="logout9">HOME</div>
      </button>
      <img className="goodwill-icon-15" alt="" src="/goodwillicon-1@2x.png" />
      <button className="forum3" onClick={onForumClick}>
        <div className="forum-item" />
        <div className="create-forum1">CREATE FORUM</div>
      </button>
      <button className="organise" onClick={onOrganiseClick}>
        <div className="organise-an-event1">ORGANISE AN EVENT</div>
      </button>
      <h1 className="hello-organiser">HELLO ORGANISER !</h1>
      <footer className="organiser-login-item" />
      <div className="copyright-20233">Copyright @ 2023</div>
    </div>
  );
};

export default ORGANISERLOGIN;
